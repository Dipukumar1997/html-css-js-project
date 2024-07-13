// Variables
const apiUrl = 'https://opentdb.com/api.php?amount=5&type=multiple';
let currentQuestionIndex = 0;
let questions = [];

// DOM Elements
const questionElement = document.getElementById('question');
const answersElement = document.getElementById('answers');
const nextButton = document.getElementById('next-btn');

// Fetch questions from API
async function fetchQuestions() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        questions = data.results;
        showQuestion();
    } catch (error) {
        console.error('Error fetching questions:', error);
    }
}

// Display current question and answers
function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    // Clear previous answers
    answersElement.innerHTML = '';

    // Combine correct answer with incorrect answers
    const allAnswers = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer];

    // Shuffle answers
    allAnswers.sort(() => Math.random() - 0.5);

    // Display each answer as a list item
    allAnswers.forEach(answer => {
        const answerItem = document.createElement('li');
        answerItem.textContent = answer;
        answerItem.addEventListener('click', () => selectAnswer(answer));
        answersElement.appendChild(answerItem);
    });
}

// Handle click on an answer
function selectAnswer(selectedAnswer) {
    const currentQuestion = questions[currentQuestionIndex];
    const correctAnswer = currentQuestion.correct_answer;

    if (selectedAnswer === correctAnswer) {
        // Handle correct answer
        alert('Correct!');
    } else {
        // Handle wrong answer
        alert(`Wrong! Correct answer is: ${correctAnswer}`);
    }

    // Move to the next question or end quiz
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        alert('Quiz completed!');
        currentQuestionIndex = 0; // Reset quiz
        fetchQuestions(); // Fetch new questions for a new round
    }
}

// Event listener for next question button
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        alert('Quiz completed!');
        currentQuestionIndex = 0; // Reset quiz
        fetchQuestions(); // Fetch new questions for a new round
    }
});

// Initial fetch of questions
fetchQuestions();
