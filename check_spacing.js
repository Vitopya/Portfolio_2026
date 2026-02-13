const fs = require('fs');

function rgbaToHex(color) {
  if (!color) return null;
  const r = Math.round((color.r || 0) * 255);
  const g = Math.round((color.g || 0) * 255);
  const b = Math.round((color.b || 0) * 255);
  return '#' + [r,g,b].map(v=>v.toString(16).padStart(2,'0')).join('').toUpperCase();
}

// Get full layout info on key sections
const root = JSON.parse(fs.readFileSync('d:/Documents/2026_portfolio_joseph-deffayet/figma_homepage_root.json'));
const homepageNode = root.nodes['1271:822'].document;

console.log('=== HOMEPAGE CONTAINER ===');
console.log('Size: 1280x4192');
console.log('Background:', rgbaToHex(homepageNode.backgroundColor));

const contentPage = homepageNode.children[0];
console.log('\n=== CONTENT PAGE GLOBAL ===');
console.log('Name:', contentPage.name);
console.log('Size:', contentPage.absoluteBoundingBox.width + 'x' + Math.round(contentPage.absoluteBoundingBox.height));
console.log('Layout: VERTICAL, gap:', contentPage.itemSpacing, 'align:', contentPage.counterAxisAlignItems);
console.log('Padding:', contentPage.paddingTop+'T', contentPage.paddingRight+'R', contentPage.paddingBottom+'B', contentPage.paddingLeft+'L');

// Hero detailed padding
const hero = JSON.parse(fs.readFileSync('d:/Documents/2026_portfolio_joseph-deffayet/figma_hero.json'));
const heroNode = hero.nodes['1283:846'].document;
console.log('\n=== HERO RAW ===');
console.log('Size:', heroNode.absoluteBoundingBox.width + 'x' + heroNode.absoluteBoundingBox.height);
console.log('Padding:', heroNode.paddingTop+'T', heroNode.paddingRight+'R', heroNode.paddingBottom+'B', heroNode.paddingLeft+'L');
console.log('itemSpacing:', heroNode.itemSpacing);
console.log('fills:', JSON.stringify(heroNode.fills));
console.log('primaryAxisAlignItems:', heroNode.primaryAxisAlignItems);
console.log('counterAxisAlignItems:', heroNode.counterAxisAlignItems);

// Hero background
const heroFills = heroNode.fills || [];
heroFills.forEach(f => {
  if (f.type === 'SOLID') console.log('Hero fill:', rgbaToHex(f.color));
});

// Check section positions to determine page vertical spacing
const contentChildren = contentPage.children;
console.log('\n=== SECTION Y POSITIONS ===');
contentChildren.forEach(c => {
  const bb = c.absoluteBoundingBox;
  console.log(c.name, '| y:', Math.round(bb.y), 'h:', Math.round(bb.height), 'bottom:', Math.round(bb.y + bb.height));
});

// Check the hero content padding
const heroContent = heroNode.children[0];
console.log('\n=== HERO CONTENT FRAME ===');
console.log('Name:', heroContent.name, 'Size:', heroContent.absoluteBoundingBox.width+'x'+Math.round(heroContent.absoluteBoundingBox.height));
console.log('Padding:', heroContent.paddingTop+'T', heroContent.paddingRight+'R', heroContent.paddingBottom+'B', heroContent.paddingLeft+'L');
console.log('Gap:', heroContent.itemSpacing);
