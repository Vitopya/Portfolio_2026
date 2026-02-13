const fs = require('fs');

function rgbaToHex(color) {
  if (!color) return null;
  const r = Math.round((color.r || 0) * 255);
  const g = Math.round((color.g || 0) * 255);
  const b = Math.round((color.b || 0) * 255);
  return '#' + [r,g,b].map(v=>v.toString(16).padStart(2,'0')).join('').toUpperCase();
}

// Check if the headline has styled text runs (mixed styles per line)
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
if (heading) {
  console.log('=== HERO HEADING FULL DATA ===');
  console.log('characters:', heading.characters);
  console.log('style:', JSON.stringify(heading.style, null, 2));
  console.log('styleOverrideTable:', JSON.stringify(heading.styleOverrideTable, null, 2));
  console.log('characterStyleOverrides:', JSON.stringify(heading.characterStyleOverrides));
}

// Hero stats - numbers styling
const heroData = JSON.parse(fs.readFileSync('d:/Documents/2026_portfolio_joseph-deffayet/figma_extracted.json'));
const dataSection = heroData.HERO.children[0].children[1]; // Data frame
console.log('\n=== HERO STATS FRAME ===');
console.log('Size:', JSON.stringify(dataSection.size));
console.log('Layout:', JSON.stringify(dataSection.layout));

dataSection.children.forEach(child => {
  console.log('  Frame:', child.name, JSON.stringify(child.size), child.layout ? 'gap:'+child.layout.itemSpacing : '');
  if (child.children) {
    child.children.forEach(subChild => {
      if (subChild.textStyle) {
        console.log('    TEXT:', subChild.textStyle.content, '| fs:', subChild.textStyle.fontSize, '| fw:', subChild.textStyle.fontWeight, '| ff:', subChild.textStyle.fontFamily, '| color:', subChild.textStyle.fills ? subChild.textStyle.fills[0].color : 'none');
      } else if (subChild.children) {
        subChild.children.forEach(t => {
          if (t.textStyle) {
            console.log('    TEXT:', t.textStyle.content, '| fs:', t.textStyle.fontSize, '| fw:', t.textStyle.fontWeight, '| color:', t.textStyle.fills ? t.textStyle.fills[0].color : 'none');
          }
        });
      }
    });
  }
});
