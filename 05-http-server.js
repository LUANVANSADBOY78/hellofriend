// 05-http-server.js
const http = require('http');

const info = {
    name: "Nguyễn Văn Luân",
    age: 20,
    class: "ST23C",
    school: "Đại học Đông Á"
};

const html = `
<!doctype html>
<html>
  <head><meta charset="utf-8"><title>Giới thiệu</title></head>
  <body>
    <h1>Giới thiệu bản thân</h1>
    <ul>
      <li>Tên: ${info.name}</li>
      <li>Tuổi: ${info.age}</li>
      <li>Lớp: ${info.class}</li>
      <li>Trường: ${info.school}</li>
    </ul>
  </body>
</html>`;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(html);
});

server.listen(3000, () => {
    console.log('Server chạy tại http://localhost:3000');
});