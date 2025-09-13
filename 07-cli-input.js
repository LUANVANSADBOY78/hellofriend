// 07-cli-input.js
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Bạn tên gì? ', (name) => {
    rl.question('Bạn bao nhiêu tuổi? ', (age) => {
        console.log(`Xin chào ${name}, bạn ${age} tuổi.`);
        rl.close();
    });
});