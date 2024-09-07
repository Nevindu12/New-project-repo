const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const hbs = require("hbs");
const cors = require('cors');
const autoIncrement = require('mongoose-sequence')(mongoose);

// Create an express app
const app = express();

app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb+srv://hashenka602:j2ssjXClAeACQt9N@cluster0.5argm.mongodb.net/towyDatabase?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log('Mongoose connected');
    })
    .catch((e) => {
        console.error('Failed to connect', e);
    });

const tempelatePath = path.join(__dirname, '../tempelates');
app.use(express.json());
app.set("view engine", "hbs");
app.set("views", tempelatePath);
app.use(express.urlencoded({ extended: false }));

// Define the schema with auto-incremented `id`
const logInSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone_number: {
        type: String,
        required: true
    }
});

// Apply auto-increment to the `id` field
logInSchema.plugin(autoIncrement, { inc_field: 'id' });

// Create the model for the collection
const LogInCollection = mongoose.model('user', logInSchema);

app.get('/', (req, res) => {
    res.render('login');
});

app.get('/signup', (req, res) => {
    res.render('signup');
});

app.get('/home', (req, res) => {
    res.render('home');
});

app.post('/signup', async (req, res) => {
    try {
        const existingUser = await LogInCollection.findOne({ username: req.body.username });

        if (existingUser) {
            res.send("User details already exist");
        } else {
            const data = new LogInCollection({
                name: req.body.name,
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                phone_number: req.body.phone_number
            });

            await data.save();
            res.status(201).render("home", { naming: req.body.name });
        }
    } catch (e) {
        res.send("Error occurred: " + e.message);
    }
});

app.post('/login', async (req, res) => {
    try {
        const check = await LogInCollection.findOne({ username: req.body.username });

        if (check && check.password === req.body.password) {
            res.status(201).json({ naming: check.name });
        } else {
            res.send("Incorrect username or password");
        }
    } catch (e) {
        res.send("Error occurred: " + e.message);
    }
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
