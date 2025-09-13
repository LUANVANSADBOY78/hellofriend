// 08-json-db.js
const fs = require('fs');
const dbFile = 'students.json';

// init
if (!fs.existsSync(dbFile)) {
    fs.writeFileSync(dbFile, JSON.stringify([], null, 2), 'utf8');
}

function load() {
    return JSON.parse(fs.readFileSync(dbFile, 'utf8'));
}

function save(data) {
    fs.writeFileSync(dbFile, JSON.stringify(data, null, 2), 'utf8');
}

// thêm 1 học sinh
const students = load();
students.push({ id: students.length + 1, name: "Nguyễn Văn Luân", class: "ST23C" });
save(students);

console.log('Đã thêm học sinh. Dữ liệu hiện tại:');
console.log(load());