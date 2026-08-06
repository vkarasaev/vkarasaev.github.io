import GithubSlugger from 'github-slugger';

const tocMarker = /^\s*<!--\s*toc\s*-->\s*$/;

function nodeText(node) {
  if (node.type === 'text' || node.type === 'inlineCode') return node.value;
  if (!Array.isArray(node.children)) return '';
  return node.children.map(nodeText).join('');
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function normalizeHeading(value) {
  return value
    .normalize('NFKC')
    .replace(/[«»„“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

export default function remarkArticleToc() {
  return (tree, file) => {
    const toc = file.data?.astro?.frontmatter?.toc;
    const markerIndex = tree.children.findIndex((node) => node.type === 'html' && tocMarker.test(node.value));

    if (!Array.isArray(toc) || toc.length === 0) {
      if (markerIndex !== -1) file.fail('Найден маркер <!-- toc -->, но список toc во фронтматере пуст.');
      return;
    }

    if (markerIndex === -1) file.fail('Для статьи задан список toc, но в тексте нет маркера <!-- toc -->.');

    const slugger = new GithubSlugger();
    const headings = [];

    for (const node of tree.children) {
      if (node.type !== 'heading') continue;
      const heading = nodeText(node);
      const slug = slugger.slug(heading);
      if (node.depth === 2) headings.push({ heading, slug });
    }

    const items = toc.map((entry) => {
      const expected = normalizeHeading(entry.heading);
      const found = headings.find((item) => normalizeHeading(item.heading) === expected);
      if (!found) file.fail(`Раздел из оглавления не найден: ${entry.heading}`);
      return { ...found, label: entry.label || entry.heading };
    });

    const links = items
      .map(({ slug, label }) => `      <li><a href="#${escapeHtml(slug)}">${escapeHtml(label)}</a></li>`)
      .join('\n');

    tree.children[markerIndex] = {
      type: 'html',
      value: `<details class="article-toc">
  <summary><span>Содержание статьи</span><span class="article-toc-count">${items.length} разделов</span></summary>
  <nav aria-label="Содержание статьи">
    <ol>
${links}
    </ol>
  </nav>
</details>`,
    };
  };
}
