const mongoose = require('mongoose');

const quizResultSchema = new mongoose.Schema({
    quizId: { type: mongoose.Schema.Types.ObjectId, ref: 'Quiz', required: true },
    userId: { type: String, required: true }, // Assuming userId is a string, you can change it according to your auth setup
    userAnswers: [{ type: String, required: true }], // Array of user's answers
    score: { type: Number, required: true }, // User's score
    totalQuestions: { type: Number, required: true }
});

const QuizResult = mongoose.model('QuizResult', quizResultSchema);

module.exports = QuizResult;
