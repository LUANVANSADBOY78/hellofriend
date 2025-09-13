// 02-file-io.js
const fs = require('fs');
const filename = 'data.txt';

fs.writeFileSync(filename, 'Xin chào Node.js! Đây là file data.txt', 'utf8');

const content = fs.readFileSync(filename, 'utf8');
console.log('Đọc từ file:', content);