const fs = require('fs');

function rgbaToHex(color) {
  if (!color) return null;
  const r = Math.round((color.r || 0) * 255);
  const g = Math.round((color.g || 0) * 255);
  const b = Math.round((color.b || 0) * 255);
  return '#' + [r,g,b].map(v=>v.toString(16).padStart(2,'0')).join('').toUpperCase();
}

const bottom = JSON.parse(fs.readFileSync('d:/Documents/2026_portfolio_joseph-deffayet/figma_bottom.json'));
const bNode = bottom.nodes['1388:1951'].document;
const footer = bNode.children[1];

console.log('=== FOOTER RAW ===');
console.log('Name:', footer.name);
console.log('paddingTop:', footer.paddingTop);
console.log('paddingRight:', footer.paddingRight);
console.log('paddingBottom:', footer.paddingBottom);
console.log('paddingLeft:', footer.paddingLeft);
console.log('itemSpacing:', footer.itemSpacing);
console.log('counterAxisAlignItems:', footer.counterAxisAlignItems);
console.log('primaryAxisAlignItems:', footer.primaryAxisAlignItems);

// Get inner padding of logo+nav frame
const logoNavFrame = footer.children[1];
console.log('\n=== LOGO+NAV FRAME ===');
console.log('Name:', logoNavFrame.name);
console.log('Size:', Math.round(logoNavFrame.absoluteBoundingBox.width)+'x'+Math.round(logoNavFrame.absoluteBoundingBox.height));
console.log('paddingTop:', logoNavFrame.paddingTop, 'paddingRight:', logoNavFrame.paddingRight, 'paddingBottom:', logoNavFrame.paddingBottom, 'paddingLeft:', logoNavFrame.paddingLeft);
console.log('primaryAxisAlignItems:', logoNavFrame.primaryAxisAlignItems, '(SPACE_BETWEEN)');
console.log('counterAxisAlignItems:', logoNavFrame.counterAxisAlignItems);
console.log('Y position:', Math.round(logoNavFrame.absoluteBoundingBox.y));

// Check section separator line
const line1 = footer.children[0];
console.log('\n=== FOOTER TOP LINE ===');
console.log('Name:', line1.name, 'Type:', line1.type);
console.log('Strokes:', line1.strokes ? line1.strokes.map(s=>rgbaToHex(s.color)+' '+footer.strokeWeight+'px').join(',') : 'none');
console.log('strokeWeight:', line1.strokeWeight);

// Check navbar raw
const navbar = JSON.parse(fs.readFileSync('d:/Documents/2026_portfolio_joseph-deffayet/figma_navbar.json'));
const nNode = navbar.nodes['1271:1008'].document;
console.log('\n=== NAVBAR RAW ===');
console.log('Size:', Math.round(nNode.absoluteBoundingBox.width)+'x'+Math.round(nNode.absoluteBoundingBox.height));
console.log('paddingTop:', nNode.paddingTop, 'paddingRight:', nNode.paddingRight, 'paddingBottom:', nNode.paddingBottom, 'paddingLeft:', nNode.paddingLeft);
console.log('itemSpacing:', nNode.itemSpacing);
const nFills = nNode.fills ? nNode.fills.filter(f=>f.visible!==false).map(f=>rgbaToHex(f.color)).join(',') : 'none';
console.log('Fill:', nFills);
console.log('primaryAxisAlignItems:', nNode.primaryAxisAlignItems);
console.log('counterAxisAlignItems:', nNode.counterAxisAlignItems);

// About section raw
const about = JSON.parse(fs.readFileSync('d:/Documents/2026_portfolio_joseph-deffayet/figma_about.json'));
const aNode = about.nodes['1360:2541'].document;
console.log('\n=== ABOUT SECTION RAW ===');
console.log('Size:', Math.round(aNode.absoluteBoundingBox.width)+'x'+Math.round(aNode.absoluteBoundingBox.height));
console.log('paddingTop:', aNode.paddingTop, 'paddingRight:', aNode.paddingRight, 'paddingBottom:', aNode.paddingBottom, 'paddingLeft:', aNode.paddingLeft);
console.log('itemSpacing:', aNode.itemSpacing);
const aFills = aNode.fills ? aNode.fills.filter(f=>f.visible!==false).map(f=>rgbaToHex(f.color)).join(',') : 'none';
console.log('Fill:', aFills || 'transparent (inherits page bg #F9F4EF)');

// References section raw
const refs = JSON.parse(fs.readFileSync('d:/Documents/2026_portfolio_joseph-deffayet/figma_references.json'));
const rNode = refs.nodes['1372:2925'].document;
console.log('\n=== REFERENCES SECTION RAW ===');
console.log('Size:', Math.round(rNode.absoluteBoundingBox.width)+'x'+Math.round(rNode.absoluteBoundingBox.height));
console.log('paddingTop:', rNode.paddingTop, 'paddingRight:', rNode.paddingRight, 'paddingBottom:', rNode.paddingBottom, 'paddingLeft:', rNode.paddingLeft);
console.log('itemSpacing:', rNode.itemSpacing);
const rFills = rNode.fills ? rNode.fills.filter(f=>f.visible!==false).map(f=>rgbaToHex(f.color)).join(',') : 'none';
console.log('Fill:', rFills || 'transparent (inherits page bg #F9F4EF)');
