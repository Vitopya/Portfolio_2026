const fs = require('fs');

function rgbaToHex(color) {
  if (!color) return null;
  const r = Math.round((color.r || 0) * 255);
  const g = Math.round((color.g || 0) * 255);
  const b = Math.round((color.b || 0) * 255);
  return '#' + [r,g,b].map(v=>v.toString(16).padStart(2,'0')).join('').toUpperCase();
}

// About section complete text styles
const about = JSON.parse(fs.readFileSync('d:/Documents/2026_portfolio_joseph-deffayet/figma_about.json'));
const aNode = about.nodes['1360:2541'].document;

function printNode(node, indent) {
  const i = '  '.repeat(indent);
  const fills = node.fills ? node.fills.filter(f=>f.visible!==false).map(f=>f.type==='SOLID'?rgbaToHex(f.color):f.type).join(',') : '';
  const size = node.absoluteBoundingBox ? Math.round(node.absoluteBoundingBox.width)+'x'+Math.round(node.absoluteBoundingBox.height) : '';
  const layout = node.layoutMode ? ' '+node.layoutMode+' gap:'+(node.itemSpacing||0)+' pad:'+(node.paddingTop||0)+'/'+(node.paddingRight||0)+'/'+(node.paddingBottom||0)+'/'+(node.paddingLeft||0) : '';
  const radius = node.cornerRadius ? ' r:'+node.cornerRadius : '';
  const stroke = node.strokes && node.strokes.length ? ' border:'+node.strokes.map(s=>rgbaToHex(s.color)+' '+node.strokeWeight+'px').join(',') : '';
  const text = node.type==='TEXT' ? ' "'+node.characters.substring(0,50)+'" fs:'+node.style.fontSize+' fw:'+node.style.fontWeight+' ff:'+node.style.fontFamily : '';
  console.log(i+node.name+' ['+node.type+'] '+size+layout+' fill:'+fills+radius+stroke+text);
  if (indent < 5 && node.children) node.children.forEach(c=>printNode(c, indent+1));
}
printNode(aNode, 0);

// Check about section image size
console.log('\n=== ABOUT IMAGE DIMENSIONS ===');
function findRect(node, depth) {
  if (depth > 8) return;
  if (node.type === 'RECTANGLE' && node.fills && node.fills.some(f=>f.type==='IMAGE')) {
    const bb = node.absoluteBoundingBox;
    console.log(node.name, Math.round(bb.width)+'x'+Math.round(bb.height), 'r:', node.cornerRadius);
  }
  if (node.children) node.children.forEach(c=>findRect(c, depth+1));
}
findRect(aNode, 0);

// Check references logos
const refs = JSON.parse(fs.readFileSync('d:/Documents/2026_portfolio_joseph-deffayet/figma_references.json'));
const rNode = refs.nodes['1372:2925'].document;
console.log('\n=== REFERENCES SECTION ===');
console.log('Size:', Math.round(rNode.absoluteBoundingBox.width)+'x'+Math.round(rNode.absoluteBoundingBox.height));
console.log('Fills:', rNode.fills ? rNode.fills.filter(f=>f.visible!==false).map(f=>rgbaToHex(f.color)).join(',') : 'none');
console.log('Padding:', rNode.paddingTop+'T', rNode.paddingRight+'R', rNode.paddingBottom+'B', rNode.paddingLeft+'L');
console.log('Layout:', rNode.layoutMode, 'gap:', rNode.itemSpacing);
