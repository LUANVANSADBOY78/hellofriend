// 06-express-crud.js
const express = require('express');
const bodyParser = require('body-parser'); // nếu muốn
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let students = [
    { id: 1, name: "Nguyễn Văn A", class: "ST23A" },
    { id: 2, name: "Trần Thị B", class: "ST23B" }
];

// GET all
app.get('/students', (req, res) => res.json(students));

// GET one
app.get('/students/:id', (req, res) => {
    const s = students.find(x => x.id === +req.params.id);
    if (!s) return res.status(404).json({ error: 'Không tìm thấy' });
    res.json(s);
});

// CREATE
app.post('/students', (req, res) => {
    const { name, class: lop } = req.body;
    const id = students.length ? students[students.length - 1].id + 1 : 1;
    const student = { id, name, class: lop };
    students.push(student);
    res.status(201).json(student);
});

// UPDATE
app.put('/students/:id', (req, res) => {
    const id = +req.params.id;
    const idx = students.findIndex(x => x.id === id);
    if (idx === -1) return res.status(404).json({ error: 'Không tìm thấy' });
    students[idx] = {...students[idx], ...req.body };
    res.json(students[idx]);
});

// DELETE
app.delete('/students/:id', (req, res) => {
    const id = +req.params.id;
    students = students.filter(x => x.id !== id);
    res.json({ success: true });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Express chạy tại http://localhost:${PORT}`));