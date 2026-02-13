const fs = require('fs');

function rgbaToHex(color) {
  if (!color) return null;
  const r = Math.round((color.r || 0) * 255);
  const g = Math.round((color.g || 0) * 255);
  const b = Math.round((color.b || 0) * 255);
  return '#' + [r,g,b].map(v=>v.toString(16).padStart(2,'0')).join('').toUpperCase();
}

// Find first project card in detail
const projects = JSON.parse(fs.readFileSync('d:/Documents/2026_portfolio_joseph-deffayet/figma_projects.json'));
const pNode = projects.nodes['1360:2513'].document;

function findNode(node, name, depth) {
  if (depth > 10) return null;
  if (node.name === name) return node;
  if (node.children) {
    for (const c of node.children) {
      const found = findNode(c, name, depth+1);
      if (found) return found;
    }
  }
  return null;
}

function printRaw(node, indent) {
  const i = '  '.repeat(indent);
  const fills = node.fills ? node.fills.filter(f=>f.visible!==false).map(f=>f.type==='SOLID'?rgbaToHex(f.color):f.type).join(',') : '';
  const size = node.absoluteBoundingBox ? Math.round(node.absoluteBoundingBox.width)+'x'+Math.round(node.absoluteBoundingBox.height) : '';
  const layout = node.layoutMode ? ' '+node.layoutMode+' gap:'+(node.itemSpacing||0)+' pad:'+[node.paddingTop||0,node.paddingRight||0,node.paddingBottom||0,node.paddingLeft||0].join('/') : '';
  const text = node.type==='TEXT' ? ' "'+node.characters.substring(0,40)+'" '+JSON.stringify(node.style||{}).substring(0,80) : '';
  const radius = node.cornerRadius ? ' r:'+node.cornerRadius : '';
  const stroke = node.strokes && node.strokes.length ? ' stroke:'+node.strokes.map(s=>rgbaToHex(s.color)+' '+node.strokeWeight+'px').join(',') : '';
  console.log(i+node.name+' ['+node.type+'] '+size+layout+' fill:'+fills+radius+stroke+text);
  if (indent < 5 && node.children) node.children.forEach(c=>printRaw(c, indent+1));
}

// Find the Desktop/Mozaic
const mozaic = findNode(pNode, 'Desktop/Mozaic', 0);
if (mozaic) {
  console.log('=== FIRST PROJECT CARD DETAIL ===');
  const firstCard = mozaic.children[0];
  printRaw(firstCard, 0);
}

// Also get the tag/label chips on cards
console.log('\n=== ARTICLE CARD TEXT STYLES ===');
const articles = JSON.parse(fs.readFileSync('d:/Documents/2026_portfolio_joseph-deffayet/figma_articles.json'));
const aNode = articles.nodes['1360:2858'].document;

function findTexts(node, depth) {
  if (depth > 10) return;
  if (node.type === 'TEXT') {
    const s = node.style || {};
    const fills = node.fills ? node.fills.filter(f=>f.visible!==false) : [];
    const color = fills[0] ? rgbaToHex(fills[0].color) : 'none';
    console.log('"' + (node.characters||'').substring(0,50) + '" | ' + s.fontSize + 'px w' + s.fontWeight + ' ' + s.fontFamily + ' | ' + color);
  }
  if (node.children) node.children.forEach(c => findTexts(c, depth+1));
}
findTexts(aNode, 0);
