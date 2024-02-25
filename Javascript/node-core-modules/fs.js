// const fs = require('fs');
const fs = require('fs/promises');

// Write to a file

// Callback Version
// fs.writeFile('file1.txt', 'Hello World', (err) => {
//     if (err) throw err;
//     console.log('File created');
// });

// Promise Version
// fs.writeFile('file2.txt', 'Hello World')
//     .then(() => console.log('File created'))
//     .catch((err) => console.log(err));

// Sync Version
// fs.writeFileSync('file3.txt', 'Hello World');
// console.log('File created');

// Async/Await Version
async function createFile(fileName, content) {
    try {
        await fs.writeFile(fileName, content);
    } catch (err) {
        console.log(err);
    }
}
// createFile('file4.txt', 'Hello World');

// Read From a File
async function readFile(fileName) {
    try {
        const data = await fs.readFile(fileName, 'utf-8');
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}
// readFile('file4.txt');

// Delete a File
async function deleteFile(fileName) {
    try {
        await fs.unlink(fileName);
    } catch (err) {
        console.log(err);
    }
}
// deleteFile('file4.txt');

// Rename a File
async function renameFile(oldName, newName) {
    try {
        await fs.rename(oldName, newName);
    } catch (error) {
        console.log(error);
    }   
}
// renameFile('file1.txt', 'sample.txt');

// Create a Folder
async function createFolder(folderName) {
    try {
        await fs.mkdir(folderName);
    } catch (error) {
        console.log(error);
    }
}
createFolder('folder1');