const express = require('express');
const app = express();
const mysql = require('mysql');
const PORT = process.env.PORT || 5000;

const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'todo_app'
});

db.connect((err) => {
    if(err) throw err;
    console.log('DB connected...');
});

// get all todos
app.get('/', (req, res) => {
    const stmt = `SELECT * FROM todos`;
    db.query(stmt, (err, result) => {
        if(err) throw err;
        res.status(200).json(result);
    })
})

// get a specific todo 
app.get('/:id', (req, res) => {
    const stmt = `SELECT * FROM todos WHERE id = ?`;
    db.query(stmt, req.params.id, (err, result) => {
        if(err) throw err;
        res.status(200).json(result);
    })
})

// create a new todo
app.post('/:title', (req, res) => {
    const stmt = `INSERT INTO todos (title) VALUES(?)`;
    db.query(stmt, req.params.title, (err, result) => {
        if(err) throw err;
        res.status(200).json({success: true});
    })
})

// delete a todo
app.delete('/:id', (req, res) => {
    const stmt = `DELETE FROM todos WHERE id = ?`;
    db.query(stmt, req.params.id, (err, result) => {
        if(err) throw err;
        res.status(200).json({success: true})
    })
})

// update a todo
app.put('/:id/:title', (req, res) => {
    const stmt = `UPDATE todos SET title = ? WHERE id = ?`;
    db.query(stmt, [req.params.title, req.params.id], (err, result) => {
        if(err) throw err;
        res.status(200).json({success: true})
    })
})

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}...`);
})