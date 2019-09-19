const url = require('url');

const myUrl = new URL('https://littleword.netlify.com');

console.log(`${myUrl.href} <== myUrl.href\n\n`);

console.log(`${myUrl.toString()} <== myUrl.toString()\n\n`);

console.log(`${myUrl.host} <== myUrl.host\n\n`);

console.log(`${myUrl.hostname} <== myUrl.pathname\n\n`);

console.log(`${myUrl.pathname} <== myUrl.pathname\n\n`);

myUrl.searchParams.append('abc', '123');
console.log(`${myUrl.searchParams} <== myUrl.searchParams\n\n`);





