const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect("mongodb+srv://hashenka602:j2ssjXClAeACQt9N@cluster0.5argm.mongodb.net/towyDatabase?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
    console.log('Mongoose connected');
})
.catch((e) => {
    console.error('Failed to connect', e);
});

// Define the schema
const logInSchema = new mongoose.Schema({
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

const LogInCollection = mongoose.model('user', logInSchema);

module.exports = LogInCollection;
