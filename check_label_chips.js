const fs = require('fs');

function rgbaToHex(color) {
  if (!color) return null;
  const r = Math.round((color.r || 0) * 255);
  const g = Math.round((color.g || 0) * 255);
  const b = Math.round((color.b || 0) * 255);
  return '#' + [r,g,b].map(v=>v.toString(16).padStart(2,'0')).join('').toUpperCase();
}

// Get article card thumbnail size and label colors
const articles = JSON.parse(fs.readFileSync('d:/Documents/2026_portfolio_joseph-deffayet/figma_articles.json'));
const aNode = articles.nodes['1360:2858'].document;

function findFirstCard(node, depth) {
  if (depth > 6) return null;
  if (node.name === 'Desktop/Card/Project' && node.type === 'INSTANCE') return node;
  if (node.children) {
    for (const c of node.children) {
      const f = findFirstCard(c, depth+1);
      if (f) return f;
    }
  }
  return null;
}

const card = findFirstCard(aNode, 0);
if (card) {
  console.log('Article card size:', card.absoluteBoundingBox.width+'x'+card.absoluteBoundingBox.height);
  console.log('padding:', card.paddingTop+'/'+card.paddingRight+'/'+card.paddingBottom+'/'+card.paddingLeft);
  
  // Find Frame 100 (tags)
  function findByName(node, name, depth) {
    if (depth > 8) return null;
    if (node.name === name) return node;
    if (node.children) {
      for (const c of node.children) {
        const f = findByName(c, name, depth+1);
        if (f) return f;
      }
    }
    return null;
  }
  
  const frame100 = findByName(card, 'Frame 100', 0);
  if (frame100 && frame100.children) {
    console.log('\nLabel chips:');
    frame100.children.forEach(label => {
      const fills = label.fills ? label.fills.filter(f=>f.visible!==false).map(f=>rgbaToHex(f.color)).join(',') : 'none';
      const stroke = label.strokes && label.strokes.length ? label.strokes.map(s=>rgbaToHex(s.color)).join(',') : 'none';
      console.log(' ', label.name, '| bg:', fills, '| border:', stroke, '| r:', label.cornerRadius);
    });
  }
}

// Also check the bottom CTA heading details
const bottom = JSON.parse(fs.readFileSync('d:/Documents/2026_portfolio_joseph-deffayet/figma_bottom.json'));
const bNode = bottom.nodes['1388:1951'].document;

function findTexts(node, depth) {
  if (depth > 8) return;
  if (node.type === 'TEXT') {
    const s = node.style || {};
    const fills = node.fills ? node.fills.filter(f=>f.visible!==false) : [];
    const color = fills[0] ? rgbaToHex(fills[0].color) : 'none';
    const lh = s.lineHeightUnit === 'PIXELS' ? s.lineHeightPx+'px' : (s.lineHeightUnit==='PERCENT' ? s.lineHeightPercentFontSize+'%' : 'AUTO');
    console.log('"' + (node.characters||'').substring(0,60) + '" | ' + s.fontSize + 'px w' + s.fontWeight + ' lh:'+lh+' | ' + color);
  }
  if (node.children) node.children.forEach(c => findTexts(c, depth+1));
}
console.log('\n=== BOTTOM CTA ALL TEXTS ===');
findTexts(bNode, 0);
