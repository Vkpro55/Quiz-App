// controllers/quizController.js
const Quiz = require('../models/Quiz');
const QuizResult = require('../models/QuizResult');

// Render create quiz form
exports.createQuizForm = (req, res) => {
    res.render('create-quiz');
};

// Handle quiz creation
exports.createQuiz = async (req, res) => {
    const quizData = req.body;

    try {
        const quiz = new Quiz(quizData);
        await quiz.save();
        res.redirect('/dashboard');
    } catch (err) {
        console.error('Error creating quiz:', err);
        return res.status(500).send('Error creating quiz');
    }
};

// Fetch available quizzes
exports.getQuizzes = async (req, res) => {
    try {
        const quizzes = await Quiz.find({}, '_id quizTitle quizDescription');
        res.render('quizzes', { quizzes });
    } catch (error) {
        console.error('Error fetching quizzes:', error);
        res.status(500).send('Server error');
    }
};

// Fetch quiz details
exports.quizDetails = async (req, res) => {
    try {
        const quiz = await Quiz.findById(req.params.id);
        if (!quiz) {
            return res.status(404).send('Quiz not found');
        }
        res.render('quizDetails', { quiz });
    } catch (error) {
        console.error('Error fetching quiz details:', error);
        res.status(500).send('Server error');
    }
};

// Handle taking a quiz
exports.takeQuiz = async (req, res) => {
    try {
        const quiz = await Quiz.findById(req.params.id);
        if (!quiz) {
            return res.status(404).send('Quiz not found');
        }
        res.render('takeQuiz', { quiz });
    } catch (error) {
        console.error('Error fetching quiz:', error);
        res.status(500).send('Server error');
    }
};

// Handle quiz submission
exports.submitQuiz = async (req, res) => {
    try {
        const quiz = await Quiz.findById(req.params.id);
        if (!quiz) {
            return res.status(404).send('Quiz not found');
        }

        const userAnswers = req.body.answers;
        let score = 0;

        quiz.questions.forEach((question, index) => {
            if (userAnswers[index] === question.correctAnswer) {
                score++;
            }
        });

        const result = new QuizResult({
            quizId: quiz._id,
            userId: 'user123', // Replace with actual user ID if you have user authentication
            userAnswers,
            score,
            totalQuestions: quiz.questions.length
        });
        await result.save();

        res.redirect('/dashboard');
    } catch (error) {
        console.error('Error submitting quiz:', error);
        res.status(500).send('Server error');
    }
};

// View quiz results
exports.viewResults = async (req, res) => {
    try {
        const results = await QuizResult.find({ userId: 'user123' }).populate('quizId');
        res.render('viewResults', { results });
    } catch (error) {
        console.error('Error fetching results:', error);
        res.status(500).send('Server error');
    }
};
