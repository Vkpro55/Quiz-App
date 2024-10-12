const mongoose = require('mongoose');

// Define the question schema
const questionSchema = new mongoose.Schema({
    questionText: { type: String, required: true }, // Use 'questionText' to match your data
    options: {
        A: { type: String, required: true },
        B: { type: String, required: true },
        C: { type: String, required: true },
        D: { type: String, required: true }
    },
    correctAnswer: { type: String, required: true }
});


// Define the quiz schema
const quizSchema = new mongoose.Schema({
    quizTitle: { type: String, required: true }, // New field for quiz title
    quizDescription: { type: String, required: true }, // New field for description
    questions: [questionSchema] // Array of questions
});

// Create the Quiz model
const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz; // Export the model
