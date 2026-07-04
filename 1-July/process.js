const os = require('os');

console.log("__dirname gives the directory of the current file:");
console.log(__dirname);
console.log("__filename gives the full path of the current file:");
console.log(__filename);

console.log("Process ID:", process.pid);
console.log("Node Version:", process.version);
console.log("Platform:", process.platform);
console.log("Current Working Directory:", process.cwd());

console.log("Total RAM:", (os.totalmem() / (1024 ** 3)).toFixed(2), "GB");
 

const cpus = os.cpus();
console.log("Number of CPU Cores:", cpus.length);
console.log("CPU Model:", cpus[0].model);
console.log("CPU Speed (MHz):", cpus[0].speed);