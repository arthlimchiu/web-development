const path = require('path');

const myFilePath = 'subfolder/anotherfolder/index.js';

// subfolder/anotherfolder/index.js -> index.js
const base1 = path.basename(myFilePath);

// Removes extension
// subfolder/anotherfolder/index.js -> index
const base2 = path.basename(myFilePath, '.js');

// Get extension name
// subfolder/anotherfolder/index.js -> .js
const ext = path.extname(myFilePath);

// Get directory
// subfolder/anotherfolder/index.js -> subfolder/anotherfolder
const dir = path.dirname(myFilePath);

// Joining file paths
// subfolder\anotherfolder\index.js
const myPath = path.join('subfolder', 'anotherfolder', 'index.js');

// Resolve gives that absolute path
// D:\Projects\web-development\Javascript\node-core-modules\subfolder\anotherfolder\index.js
const myPath2 = path.resolve('subfolder', 'anotherfolder', 'index.js');

// __dirname
// D:\Projects\web-development\Javascript\node-core-modules
console.log(__dirname);

// __filename
// D:\Projects\web-development\Javascript\node-core-modules\path.js
console.log(__filename);


console.log(myPath);
console.log(myPath2);
console.log(dir);
console.log(ext);
console.log(base2);