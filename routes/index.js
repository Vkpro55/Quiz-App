// routes/index.js
const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');
const {
    createQuizForm,
    createQuiz,
    getQuizzes,
    quizDetails,
    takeQuiz,
    submitQuiz,
    viewResults
} = require('../controllers/quizController');

// Authentication routes
router.post('/api/auth/register', register);
router.post('/api/auth/login', login);

// Quiz routes
router.get('/create-quiz', createQuizForm);
router.post('/create-quiz', createQuiz);
router.get('/get-quizzes', getQuizzes);
router.get('/quiz-details/:id', quizDetails);
router.get('/take-quiz/:id', takeQuiz);
router.post('/submit-quiz/:id', submitQuiz);
router.get('/view-results', viewResults);

// Render landing, registration, and login pages
router.get('/', (req, res) => res.render('index'));
router.get('/register', (req, res) => res.render('register'));
router.get('/login', (req, res) => res.render('login'));
router.get('/dashboard', (req, res) => res.render('dashboard'));

module.exports = router;
