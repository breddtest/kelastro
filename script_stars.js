// Get DOM elements
const questionText = document.getElementById("question-text");
const answerInput = document.getElementById("answer-input");
const submitButton = document.getElementById("submit-button");
const showAnswerButton = document.getElementById("show-answer-button");
const image = document.querySelector("img");
const questionNumber = document.getElementById("question-number");

document.getElementById("retryButton").addEventListener("click", function() {
    shuffleArray(quizData);
    location.reload();
});

// Define your questions, answers, and image URLs
const quizData = [
    {
        answer: "alnilam",
        imageURL: "images_kelastro/orion1.png"
    },
    {
        answer: "alnitak",
        imageURL: "images_kelastro/orion2.png"
    },
    {
        answer: "mintaka",
        imageURL: "images_kelastro/orion3.png"
    }
];

let currentQuestionIndex = 0;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Function to display the current question and image
function displayQuestion() {
    shuffleArray(quizData);
    questionText.textContent = "What is the common name of the star shown above?";
    questionText.style.color = 'black';
    image.src = quizData[currentQuestionIndex].imageURL;
    questionNumber.textContent = "Question #" + (currentQuestionIndex + 1);
}

// Function to check the user's answer
function checkAnswer() {
    const userAnswer = answerInput.value.trim().toLowerCase();
    const correctAnswer = quizData[currentQuestionIndex].answer.toLowerCase();

    if (userAnswer === correctAnswer) {
        questionText.textContent = "Correct! Moving to the next question...";
        questionText.style.color = 'green';
        answerInput.value = "";
        currentQuestionIndex++;

        if (currentQuestionIndex < quizData.length) {
            setTimeout(displayQuestion, 1500); // Delay before displaying the next question
        } else {
            questionText.textContent = "Quiz completed!";
            questionText.style.color = 'black';
            submitButton.disabled = true;
        }
    } else {
        questionText.textContent = "Incorrect. Try again.";
        questionText.style.color = 'red';
    }
}

function showAnswer() {
    const correctAnswer = quizData[currentQuestionIndex].answer;
    questionText.style.color = 'black';
    questionText.textContent = `The correct answer is: ${correctAnswer}`;
}

// Add keypress event listener to the input field
answerInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        checkAnswer();
    }
});

// Add click event listeners to the buttons
submitButton.addEventListener("click", checkAnswer);
showAnswerButton.addEventListener("click", showAnswer);

// Display the first question and image
displayQuestion();
