const path = require('path');

console.log(`${__filename} <== __filename\n`);

console.log(`${path.basename(__filename)} <== path.basename(__filename)\n`);

console.log(`${path.dirname(__filename)} <== path.dirname(__filename)\n`);

console.log(`${path.extname(__filename)} <== path.extname(__filename)\n`);

console.log(`${path.parse(__filename).base} <== path.parse(__filename).base\n`);

console.log(`${path.join(__dirname, "test", "hello.html")} <== path.join(__dirname, "test", "hello.html"\n`);







