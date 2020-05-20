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
    const stmt = `SELECT title FROM todos`;
    db.query(stmt, (err, result) => {
        if(err) throw err;
        res.status(200).send(result);
    })
})

// get a specific todo 
app.get('/:id', (req, res) => {
    const stmt = `SELECT title FROM todos WHERE id = ?`;
    db.query(stmt, req.params.id, (err, result) => {
        if(err) throw err;
        res.status(200).send(result);
    })
})

// create a new todo
app.post('/', (req, res) => {
    
})

// delete a todo


// update a todo


app.listen(PORT, () => {
    console.log(`Server running on ${PORT}...`);
})