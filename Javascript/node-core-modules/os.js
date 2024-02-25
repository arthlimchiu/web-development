const os = require('os');

// Returns a String identifying CPU's architecture
console.log(os.arch());

// Returns a String identifying the operating system
console.log(os.platform());

// Returns an Array of objects of logical CPUs
console.log(os.cpus());

// Returns the amount of free memory in bytes
console.log(os.freemem());
console.log(os.totalmem());

// Returns home directory
console.log(os.homedir());

console.log(os.uptime());

console.log(os.hostname());