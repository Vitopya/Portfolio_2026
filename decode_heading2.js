const fs = require('fs');

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
const chars = heading.characters;
const overrides = heading.characterStyleOverrides;

console.log('Characters (', chars.length, '):');
for (let i = 0; i < chars.length; i++) {
  console.log(i, '"'+chars[i]+'"', 'style:', i < overrides.length ? overrides[i] : 'default(0)');
}

// Note: the heading appears to break across two lines
// "Product Designer" - line 1  
// "& Strategist" - line 2
// Let's check the actual text
console.log('\nFull text repr:', JSON.stringify(chars));
console.log('Override indices that are non-zero:', overrides.map((v,i)=>[i,chars[i],v]).filter(x=>x[2]!==0));
