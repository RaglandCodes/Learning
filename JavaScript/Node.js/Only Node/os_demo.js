const os = require('os');

console.log(`${os.platform } <== os.platform \n\n`);


console.log(`${os.arch()} <== os.arch\n\n`);

console.log(`${JSON.stringify(os.cpus())} <== os.cpus()\n\n`);

console.log(`${os.freemem()} <== os.freemem()\n\n`);

console.log(`${os.totalmem()} <== os.totalmem()\n\n`);

console.log(`${os.homedir()} <== os.homedir()\n\n`);

console.log(`${os.uptime()} <== os.uptime()\n\n`);



