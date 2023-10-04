// Get DOM elements
const questionText = document.getElementById("question-text");
const answerInput = document.getElementById("answer-input");
const submitButton = document.getElementById("submit-button");
const showAnswerButton = document.getElementById("show-answer-button");
const image = document.querySelector("img");
const questionNumber = document.getElementById("question-number");

// Define your questions, answers, and image URLs
const quizData = [
    {
        answer: "orion",
        imageURL: "images_kelastro/orion.png"
    },
    {
        answer: "answer2",
        imageURL: "image2.png"
    },
    {
        answer: "answer3",
        imageURL: "image3.png"
    }
];

let currentQuestionIndex = 0;

// Function to display the current question and image
function displayQuestion() {
    questionText.textContent = "What is the name of the constellation shown above?";
    image.src = quizData[currentQuestionIndex].imageURL;
    questionNumber.textContent = "Question #" + (currentQuestionIndex + 1);
}

// Function to check the user's answer
function checkAnswer() {
    const userAnswer = answerInput.value.trim().toLowerCase();
    const correctAnswer = quizData[currentQuestionIndex].answer.toLowerCase();

    if (userAnswer === correctAnswer) {
        questionText.textContent = "Correct! Moving to the next question...";
        answerInput.value = "";
        currentQuestionIndex++;

        if (currentQuestionIndex < quizData.length) {
            setTimeout(displayQuestion, 1500); // Delay before displaying the next question
        } else {
            questionText.textContent = "Quiz completed!";
            submitButton.disabled = true;
        }
    } else {
        questionText.textContent = "Incorrect. Try again.";
    }
}

function showAnswer() {
    const correctAnswer = quizData[currentQuestionIndex].answer;
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