const fs = require('fs');

function rgbaToHex(color) {
  if (!color) return null;
  const r = Math.round((color.r || 0) * 255);
  const g = Math.round((color.g || 0) * 255);
  const b = Math.round((color.b || 0) * 255);
  return '#' + [r,g,b].map(v=>v.toString(16).padStart(2,'0')).join('').toUpperCase();
}

const root = JSON.parse(fs.readFileSync('d:/Documents/2026_portfolio_joseph-deffayet/figma_homepage_root.json'));
const bg = root.nodes['1271:822'].document.backgroundColor;
console.log('Page background:', rgbaToHex(bg));

// Check project card inner text nodes by fetching raw data
const projects = JSON.parse(fs.readFileSync('d:/Documents/2026_portfolio_joseph-deffayet/figma_projects.json'));
const pNode = projects.nodes['1360:2513'].document;

function findTexts(node, depth) {
  if (depth > 8) return;
  if (node.type === 'TEXT') {
    const s = node.style || {};
    const fills = node.fills ? node.fills.filter(f=>f.visible !== false) : [];
    const color = fills[0] ? rgbaToHex(fills[0].color) : 'none';
    console.log('TEXT "' + (node.characters||'').substring(0,50) + '" | ' + s.fontSize + 'px w' + s.fontWeight + ' ' + s.fontFamily + ' | ' + color);
  }
  if (node.children) node.children.forEach(c => findTexts(c, depth+1));
}
console.log('\n=== ALL TEXT IN PROJECTS SECTION ===');
findTexts(pNode, 0);
