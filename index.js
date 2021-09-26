const express = require('express');
const cors = require('cors');
const pool = require('./db');
const path = require('path');

const app = express();
const port = process.env.NODE_ENV || 3001;

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/dist//client/')))
}

// middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'client/dist//client/')));

console.log(path.join(__dirname, 'client/dist//client/'));


// Routes

// Create users
app.post('/user', async (req, res) => {
    try {
        const { name } = req.body;
        const newUser = await pool.query("INSERT INTO users (name) VALUES($1) RETURNING *", [name]);
        res.send(newUser.rows[0]);

    } catch (error) {
        console.log(error.message);
    }
})


// get all users

app.get("/users", async (req, res) => {
    try {
        const allUsers = await pool.query("SELECT * FROM users ORDER BY id ASC");
        res.json(allUsers.rows);
    } catch (err) {
        console.error(err.message);
    }
});

// get a user

app.get("/user/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const user = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
        res.send(user.rows[0]);

    } catch (err) {
        console.error(err.message);
    }
});

// update a user

//update a todo

app.put("/user/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        const updateUser = await pool.query(
            "UPDATE users SET name = $1 WHERE id = $2",
            [name, id]
        );

        res.send("User was updated!");
    } catch (err) {
        console.error(err.message);
    }
});


// delete a user

app.delete("/user/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteUser = await pool.query("DELETE FROM users WHERE id = $1", [id]);
        res.send("User was deleted!");
    } catch (err) {
        console.log(err.message);
    }
});


app.listen(port, () => {
    console.log(`server in listening on ${port}`);
})