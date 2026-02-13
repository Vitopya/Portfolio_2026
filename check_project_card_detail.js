const fs = require('fs');

function rgbaToHex(color) {
  if (!color) return null;
  const r = Math.round((color.r || 0) * 255);
  const g = Math.round((color.g || 0) * 255);
  const b = Math.round((color.b || 0) * 255);
  return '#' + [r,g,b].map(v=>v.toString(16).padStart(2,'0')).join('').toUpperCase();
}

// Get the full project card structure with all details
const projects = JSON.parse(fs.readFileSync('d:/Documents/2026_portfolio_joseph-deffayet/figma_projects.json'));
const pNode = projects.nodes['1360:2513'].document;

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

const card = findNode(pNode, 'Desktop/Card/Project', 0);
if (card) {
  console.log('=== PROJECT CARD FULL DETAIL ===');
  console.log('Size:', Math.round(card.absoluteBoundingBox.width)+'x'+Math.round(card.absoluteBoundingBox.height));
  console.log('Layout:', card.layoutMode, 'gap:', card.itemSpacing);
  console.log('Padding:', card.paddingTop+'T', card.paddingRight+'R', card.paddingBottom+'B', card.paddingLeft+'L');
  const cardFill = card.fills.filter(f=>f.visible!==false);
  console.log('Fill:', cardFill.map(f=>rgbaToHex(f.color)).join(','));
  console.log('Border:', card.strokes.map(s=>rgbaToHex(s.color)+' '+card.strokeWeight+'px '+card.strokeAlign).join(','));
  console.log('CornerRadius:', card.cornerRadius);
  
  const frame104 = card.children[0]; // image + tags
  const frame103 = card.children[1]; // text + button
  
  console.log('\n--- Frame 104 (Image+Tags) ---');
  console.log('Size:', Math.round(frame104.absoluteBoundingBox.width)+'x'+Math.round(frame104.absoluteBoundingBox.height));
  console.log('Gap:', frame104.itemSpacing);
  
  const imgRect = frame104.children[0];
  console.log('Image rect:', Math.round(imgRect.absoluteBoundingBox.width)+'x'+Math.round(imgRect.absoluteBoundingBox.height), 'r:', imgRect.cornerRadius);
  
  const frame101 = frame104.children[1]; // tags row
  console.log('Tags row size:', Math.round(frame101.absoluteBoundingBox.width)+'x'+Math.round(frame101.absoluteBoundingBox.height));
  console.log('Tags row justifyContent:', frame101.primaryAxisAlignItems);
  
  const frame100 = frame101.children[0]; // skill tags
  console.log('Skill tags size:', Math.round(frame100.absoluteBoundingBox.width)+'x'+Math.round(frame100.absoluteBoundingBox.height), 'gap:', frame100.itemSpacing);
  frame100.children.forEach(label => {
    const bg = label.fills ? label.fills.filter(f=>f.visible!==false).map(f=>rgbaToHex(f.color)).join(',') : 'none';
    const text = label.children ? label.children.find(c=>c.type==='TEXT') : null;
    const textContent = text ? text.characters : '';
    const textStyle = text ? text.style || {} : {};
    console.log('  Tag "'+textContent+'" bg:'+bg+' r:'+label.cornerRadius+' fs:'+textStyle.fontSize+' fw:'+textStyle.fontWeight);
  });
  
  // position label (right side)
  const posLabel = frame101.children[1];
  if (posLabel) {
    const bg = posLabel.fills ? posLabel.fills.filter(f=>f.visible!==false).map(f=>rgbaToHex(f.color)).join(',') : 'none';
    const border = posLabel.strokes && posLabel.strokes.length ? posLabel.strokes.map(s=>rgbaToHex(s.color)+' '+posLabel.strokeWeight+'px').join(',') : 'none';
    const text = posLabel.children ? posLabel.children.find(c=>c.type==='TEXT') : null;
    console.log('  Position label "'+( text ? text.characters : '')+'" bg:'+bg+' border:'+border+' r:'+posLabel.cornerRadius);
  }
  
  console.log('\n--- Frame 103 (Text+Button) ---');
  const frame102 = frame103.children[0];
  console.log('Text frame gap:', frame102.itemSpacing);
  frame102.children.forEach(t => {
    if (t.type === 'TEXT') {
      const fills = t.fills ? t.fills.filter(f=>f.visible!==false).map(f=>rgbaToHex(f.color)).join(',') : 'none';
      const lh = t.style.lineHeightUnit === 'PIXELS' ? t.style.lineHeightPx+'px' : 'AUTO';
      console.log('  "'+t.characters.substring(0,40)+'" fs:'+t.style.fontSize+' fw:'+t.style.fontWeight+' ff:'+t.style.fontFamily+' lh:'+lh+' color:'+fills);
    }
  });
}
