const fs = require('fs');

// Helper: RGBA to HEX
function rgbaToHex(color) {
  if (!color) return null;
  const r = Math.round((color.r || 0) * 255);
  const g = Math.round((color.g || 0) * 255);
  const b = Math.round((color.b || 0) * 255);
  const a = color.a !== undefined ? color.a : 1;
  const hex = '#' + [r, g, b].map(v => v.toString(16).padStart(2, '0')).join('').toUpperCase();
  return a < 1 ? `${hex} / opacity: ${Math.round(a * 100)}%` : hex;
}

function getFills(node) {
  if (!node.fills || node.fills.length === 0) return null;
  return node.fills.filter(f => f.visible !== false).map(f => {
    if (f.type === 'SOLID') return { type: 'SOLID', color: rgbaToHex(f.color), opacity: f.opacity };
    if (f.type === 'GRADIENT_LINEAR') return { type: 'GRADIENT_LINEAR', stops: f.gradientStops ? f.gradientStops.map(s => ({ color: rgbaToHex(s.color), position: s.position })) : [] };
    if (f.type === 'IMAGE') return { type: 'IMAGE', scaleMode: f.scaleMode };
    return { type: f.type };
  });
}

function getPadding(node) {
  return {
    top: node.paddingTop || 0,
    right: node.paddingRight || 0,
    bottom: node.paddingBottom || 0,
    left: node.paddingLeft || 0
  };
}

function getLayout(node) {
  if (!node.layoutMode) return null;
  return {
    layoutMode: node.layoutMode,
    primaryAxisAlignItems: node.primaryAxisAlignItems,
    counterAxisAlignItems: node.counterAxisAlignItems,
    itemSpacing: node.itemSpacing || 0,
    padding: getPadding(node),
    primaryAxisSizingMode: node.primaryAxisSizingMode,
    counterAxisSizingMode: node.counterAxisSizingMode,
    layoutWrap: node.layoutWrap
  };
}

function getSize(node) {
  return {
    width: node.absoluteBoundingBox ? Math.round(node.absoluteBoundingBox.width) : null,
    height: node.absoluteBoundingBox ? Math.round(node.absoluteBoundingBox.height) : null
  };
}

function getStrokes(node) {
  if (!node.strokes || node.strokes.length === 0) return null;
  return {
    color: node.strokes.map(s => rgbaToHex(s.color)),
    weight: node.strokeWeight,
    align: node.strokeAlign
  };
}

function getEffects(node) {
  if (!node.effects || node.effects.length === 0) return null;
  return node.effects.map(e => ({
    type: e.type,
    color: e.color ? rgbaToHex(e.color) : null,
    offsetX: e.offset ? e.offset.x : null,
    offsetY: e.offset ? e.offset.y : null,
    radius: e.radius,
    spread: e.spread,
    visible: e.visible
  }));
}

function getTextStyle(node) {
  if (node.type !== 'TEXT') return null;
  const s = node.style || {};
  return {
    content: node.characters ? node.characters.substring(0, 120) : '',
    fontFamily: s.fontFamily,
    fontStyle: s.fontStyle,
    fontSize: s.fontSize,
    fontWeight: s.fontWeight,
    lineHeight: s.lineHeightUnit === 'PIXELS' ? `${s.lineHeightPx}px` : s.lineHeightUnit === 'PERCENT' ? `${s.lineHeightPercentFontSize}%` : 'AUTO',
    letterSpacing: s.letterSpacing,
    textAlignHorizontal: s.textAlignHorizontal,
    textAlignVertical: s.textAlignVertical,
    textDecoration: s.textDecoration,
    textTransform: s.textCase,
    fills: getFills(node),
    size: getSize(node)
  };
}

function extractNode(node, depth) {
  if (depth > 5) return { name: node.name, type: node.type, id: node.id, truncated: true };
  const result = {
    id: node.id,
    name: node.name,
    type: node.type,
    size: getSize(node),
    cornerRadius: node.cornerRadius || node.rectangleCornerRadii || null,
    fills: getFills(node),
    strokes: getStrokes(node),
    effects: getEffects(node),
    opacity: node.opacity !== undefined && node.opacity !== 1 ? node.opacity : undefined,
    layout: getLayout(node),
    textStyle: getTextStyle(node),
    clipsContent: node.clipsContent
  };
  if (node.children && node.children.length > 0) {
    result.children = node.children.map(c => extractNode(c, depth + 1));
  }
  return result;
}

const files = [
  { file: 'figma_navbar.json', key: '1271:1008', label: 'NAVBAR' },
  { file: 'figma_hero.json', key: '1283:846', label: 'HERO' },
  { file: 'figma_projects.json', key: '1360:2513', label: 'FEATURED_WORK' },
  { file: 'figma_about.json', key: '1360:2541', label: 'ABOUT' },
  { file: 'figma_articles.json', key: '1360:2858', label: 'FEATURED_WRITING' },
  { file: 'figma_references.json', key: '1372:2925', label: 'REFERENCES' },
  { file: 'figma_bottom.json', key: '1388:1951', label: 'BOTTOM_CTA_FOOTER' },
  { file: 'figma_cta_button.json', key: '1356:2375', label: 'CTA_BUTTON' },
];

const results = {};
for (const { file, key, label } of files) {
  try {
    const data = JSON.parse(fs.readFileSync(`d:/Documents/2026_portfolio_joseph-deffayet/${file}`));
    const node = data.nodes[key];
    if (node && node.document) {
      results[label] = extractNode(node.document, 0);
    } else {
      results[label] = { error: 'Node not found', availableKeys: Object.keys(data.nodes) };
    }
  } catch(e) {
    results[label] = { error: e.message };
  }
}

fs.writeFileSync('d:/Documents/2026_portfolio_joseph-deffayet/figma_extracted.json', JSON.stringify(results, null, 2));
console.log('Extraction complete. Sections:', Object.keys(results).join(', '));
