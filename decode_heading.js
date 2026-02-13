const fs = require('fs');

function rgbaToHex(color) {
  if (!color) return null;
  const r = Math.round((color.r || 0) * 255);
  const g = Math.round((color.g || 0) * 255);
  const b = Math.round((color.b || 0) * 255);
  return '#' + [r,g,b].map(v=>v.toString(16).padStart(2,'0')).join('').toUpperCase();
}

const hero = JSON.parse(fs.readFileSync('d:/Documents/2026_portfolio_joseph-deffayet/figma_hero.json'));
const heroNode = hero.nodes['1283:846'].document;

function findNode(node, name, depth) {
  if (depth > 10) return null;
  if (node.name === name) return node;
  if (node.children) {
    for (const c of node.children) {
      const f = findNode(c, name, depth+1);
      if (f) return f;
    }
  }
  return null;
}

const heading = findNode(heroNode, 'Product Designer & Strategist', 0);

// Decode character style overrides
const chars = heading.characters;
const overrides = heading.characterStyleOverrides;
const overrideTable = heading.styleOverrideTable;

console.log('=== HEADING CHARACTER STYLE DECODE ===');
console.log('Full text:', chars);
console.log('Total chars:', chars.length);
console.log('Override array length:', overrides.length);

// Find runs
let currentStyle = 0;
let runStart = 0;
const runs = [];
for (let i = 0; i <= overrides.length; i++) {
  const style = i < overrides.length ? overrides[i] : -1;
  if (style !== currentStyle) {
    runs.push({ text: chars.substring(runStart, i), styleId: currentStyle });
    currentStyle = style;
    runStart = i;
  }
}

runs.forEach(run => {
  const styleData = run.styleId === 0 ? heading.style : (overrideTable[run.styleId] || {});
  const fs = styleData.fontSize;
  const fw = styleData.fontWeight;
  const lh = styleData.lineHeightPx;
  const fills = styleData.fills ? styleData.fills.map(f=>rgbaToHex(f.color)).join(',') : (run.styleId===0 ? '#020826 (default)' : 'inherited');
  console.log('\nRun: "' + run.text + '"');
  console.log('  fontSize:', fs, '| fontWeight:', fw, '| lineHeight:', lh+'px');
  console.log('  color:', fills);
  if (styleData.inheritTextStyleId) console.log('  inherits from style:', styleData.inheritTextStyleId);
});

// Full style for the override
console.log('\n=== OVERRIDE STYLE 49 COLOR ===');
const style49 = overrideTable['49'];
const color49 = style49.fills[0].color;
console.log('Color hex:', rgbaToHex(color49));
console.log('rgba:', color49);
