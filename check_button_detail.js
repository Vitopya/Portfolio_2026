const fs = require('fs');

function rgbaToHex(color) {
  if (!color) return null;
  const r = Math.round((color.r || 0) * 255);
  const g = Math.round((color.g || 0) * 255);
  const b = Math.round((color.b || 0) * 255);
  return '#' + [r,g,b].map(v=>v.toString(16).padStart(2,'0')).join('').toUpperCase();
}

// Get section paddings from raw files
const projects = JSON.parse(fs.readFileSync('d:/Documents/2026_portfolio_joseph-deffayet/figma_projects.json'));
const pNode = projects.nodes['1360:2513'].document;
console.log('=== FEATURED WORK SECTION ===');
console.log('Size:', Math.round(pNode.absoluteBoundingBox.width)+'x'+Math.round(pNode.absoluteBoundingBox.height));
console.log('Layout:', pNode.layoutMode, 'gap:', pNode.itemSpacing);
console.log('Padding:', pNode.paddingTop+'T', pNode.paddingRight+'R', pNode.paddingBottom+'B', pNode.paddingLeft+'L');
const pFills = pNode.fills ? pNode.fills.filter(f=>f.visible!==false).map(f=>rgbaToHex(f.color)).join(',') : 'none';
console.log('Fill:', pFills);

// Section between sections gap comes from Content-page-global: 80px
// But sections also have their own internal padding

// Check Featured Writing section raw
const articles = JSON.parse(fs.readFileSync('d:/Documents/2026_portfolio_joseph-deffayet/figma_articles.json'));
const aNode = articles.nodes['1360:2858'].document;
console.log('\n=== FEATURED WRITING SECTION ===');
console.log('Size:', Math.round(aNode.absoluteBoundingBox.width)+'x'+Math.round(aNode.absoluteBoundingBox.height));
console.log('Layout:', aNode.layoutMode, 'gap:', aNode.itemSpacing);
console.log('Padding:', aNode.paddingTop+'T', aNode.paddingRight+'R', aNode.paddingBottom+'B', aNode.paddingLeft+'L');
const aFills = aNode.fills ? aNode.fills.filter(f=>f.visible!==false).map(f=>rgbaToHex(f.color)).join(',') : 'none';
console.log('Fill:', aFills);

// Check article card label chips in detail
function findFirstCard(node, depth) {
  if (depth > 8) return null;
  if (node.name === 'Desktop/Card/Project' && node.type === 'INSTANCE') return node;
  if (node.children) for (const c of node.children) { const f = findFirstCard(c, depth+1); if (f) return f; }
  return null;
}

const artCard = findFirstCard(aNode, 0);
if (artCard) {
  console.log('\n=== ARTICLE CARD INNER ===');
  console.log('Size:', Math.round(artCard.absoluteBoundingBox.width)+'x'+Math.round(artCard.absoluteBoundingBox.height));
  
  // Get image size
  function findImg(node, d) {
    if (d>6) return null;
    if (node.type==='RECTANGLE' && node.fills && node.fills.some(f=>f.type==='IMAGE')) return node;
    if (node.children) for(const c of node.children){const f=findImg(c,d+1);if(f)return f;}
    return null;
  }
  const img = findImg(artCard, 0);
  if (img) console.log('Thumbnail image:', Math.round(img.absoluteBoundingBox.width)+'x'+Math.round(img.absoluteBoundingBox.height), 'r:', img.cornerRadius);
}

// Check bottom CTA section paddings
const bottom = JSON.parse(fs.readFileSync('d:/Documents/2026_portfolio_joseph-deffayet/figma_bottom.json'));
const bNode = bottom.nodes['1388:1951'].document;
console.log('\n=== BOTTOM SECTION ===');
console.log('Size:', Math.round(bNode.absoluteBoundingBox.width)+'x'+Math.round(bNode.absoluteBoundingBox.height));
console.log('Layout:', bNode.layoutMode, 'gap:', bNode.itemSpacing);
console.log('Padding:', bNode.paddingTop+'T', bNode.paddingRight+'R', bNode.paddingBottom+'B', bNode.paddingLeft+'L');

// CTA working need
const ctaSection = bNode.children[0];
console.log('\n=== CTA "WORKING NEED" SECTION ===');
console.log('Size:', Math.round(ctaSection.absoluteBoundingBox.width)+'x'+Math.round(ctaSection.absoluteBoundingBox.height));
const ctaFill = ctaSection.fills ? ctaSection.fills.filter(f=>f.visible!==false).map(f=>rgbaToHex(f.color)).join(',') : 'none';
console.log('Fill:', ctaFill);
console.log('Padding:', ctaSection.paddingTop+'T', ctaSection.paddingRight+'R', ctaSection.paddingBottom+'B', ctaSection.paddingLeft+'L');
console.log('Layout:', ctaSection.layoutMode, 'gap:', ctaSection.itemSpacing);
console.log('counterAxisAlignItems:', ctaSection.counterAxisAlignItems);
console.log('primaryAxisAlignItems:', ctaSection.primaryAxisAlignItems);

// Footer
const footer = bNode.children[1];
console.log('\n=== FOOTER ===');
console.log('Size:', Math.round(footer.absoluteBoundingBox.width)+'x'+Math.round(footer.absoluteBoundingBox.height));
const footerFill = footer.fills ? footer.fills.filter(f=>f.visible!==false).map(f=>rgbaToHex(f.color)).join(',') : 'none';
console.log('Fill:', footerFill);
console.log('Padding:', footer.paddingTop+'T', footer.paddingRight+'R', footer.paddingBottom+'B', footer.paddingLeft+'L');
console.log('Layout:', footer.layoutMode, 'gap:', footer.itemSpacing);
