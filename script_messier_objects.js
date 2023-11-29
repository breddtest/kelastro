// Get DOM elements
const questionText = document.getElementById("question-text");
const messierNumber = document.getElementById("messier-number");
const answerInput = document.getElementById("answer-input");
const submitButton = document.getElementById("submit-button");
const showAnswerButton = document.getElementById("show-answer-button");
const image = document.querySelector("img");
const questionNumber = document.getElementById("question-number");

document.getElementById("retryButton").addEventListener("click", function () {
    shuffleArray(quizData);
    location.reload();
});

// Define your questions, answers, and image URLs
const quizData = [
    { "number": "M1", "answer": "Taurus" },
    { "number": "M2", "answer": "Aquarius" },
    { "number": "M3", "answer": "Canes Venatici" },
    { "number": "M4", "answer": "Scorpius" },
    { "number": "M5", "answer": "Serpens" },
    { "number": "M6", "answer": "Scorpius" },
    { "number": "M7", "answer": "Scorpius" },
    { "number": "M8", "answer": "Sagittarius" },
    { "number": "M9", "answer": "Ophiuchus" },
    { "number": "M10", "answer": "Ophiuchus" },
    { "number": "M11", "answer": "Scutum" },
    { "number": "M12", "answer": "Ophiuchus" },
    { "number": "M13", "answer": "Hercules" },
    { "number": "M14", "answer": "Ophiuchus" },
    { "number": "M15", "answer": "Pegasus" },
    { "number": "M16", "answer": "Serpens" },
    { "number": "M17", "answer": "Sagittarius" },
    { "number": "M18", "answer": "Sagittarius" },
    { "number": "M19", "answer": "Ophiuchus" },
    { "number": "M20", "answer": "Sagittarius" },
    { "number": "M21", "answer": "Sagittarius" },
    { "number": "M22", "answer": "Sagittarius" },
    { "number": "M23", "answer": "Sagittarius" },
    { "number": "M24", "answer": "Sagittarius" },
    { "number": "M25", "answer": "Sagittarius" },
    { "number": "M26", "answer": "Scutum" },
    { "number": "M27", "answer": "Vulpecula" },
    { "number": "M28", "answer": "Sagittarius" },
    { "number": "M29", "answer": "Cygnus" }, 
    { "number": "M30", "answer": "Capricornus" }, 
    { "number": "M31", "answer": "Andromeda" }, 
    { "number": "M32", "answer": "Andromeda" }, 
    { "number": "M33", "answer": "Triangulum" }, 
    { "number": "M34", "answer": "Perseus" }, 
    { "number": "M35", "answer": "Gemini" }, 
    { "number": "M36", "answer": "Auriga" }, 
    { "number": "M37", "answer": "Auriga" }, 
    { "number": "M38", "answer": "Auriga" }, 
    { "number": "M39", "answer": "Cygnus" }, 
    { "number": "M40", "answer": "Ursa Major" }, 
    { "number": "M41", "answer": "Canis Major" }, 
    { "number": "M42", "answer": "Orion" }, 
    { "number": "M43", "answer": "Orion" }, 
    { "number": "M44", "answer": "Cancer" }, 
    { "number": "M45", "answer": "Taurus" }, 
    { "number": "M46", "answer": "Puppis" }, 
    { "number": "M47", "answer": "Puppis" }, 
    { "number": "M48", "answer": "Hydra" }, 
    { "number": "M49", "answer": "Virgo" }, 
    { "number": "M50", "answer": "Monoceros" }, 
    { "number": "M51", "answer": "Canes Venatici" }, 
    { "number": "M52", "answer": "Cassiopeia" }, 
    { "number": "M53", "answer": "Coma Berenices" }, 
    { "number": "M54", "answer": "Sagittarius" }, 
    { "number": "M55", "answer": "Sagittarius" }, 
    { "number": "M56", "answer": "Lyra" }, 
    { "number": "M57", "answer": "Lyra" }, 
    { "number": "M58", "answer": "Virgo" }, 
    { "number": "M59", "answer": "Virgo" }, 
    { "number": "M60", "answer": "Virgo" }, 
    { "number": "M61", "answer": "Virgo" }, 
    { "number": "M62", "answer": "Ophiuchus" }, 
    { "number": "M63", "answer": "Canes Venatici" }, 
    { "number": "M64", "answer": "Coma Berenices" }, 
    { "number": "M65", "answer": "Leo" }, 
    { "number": "M66", "answer": "Leo" }, 
    { "number": "M67", "answer": "Cancer" }, 
    { "number": "M68", "answer": "Hydra" }, 
    { "number": "M69", "answer": "Sagittarius" }, 
    { "number": "M70", "answer": "Sagittarius" }, 
    { "number": "M71", "answer": "Sagitta" }, 
    { "number": "M72", "answer": "Aquarius" }, 
    { "number": "M73", "answer": "Aquarius" }, 
    { "number": "M74", "answer": "Pisces" }, 
    { "number": "M75", "answer": "Sagittarius" }, 
    { "number": "M76", "answer": "Perseus" }, 
    { "number": "M77", "answer": "Cetus" }, 
    { "number": "M78", "answer": "Orion" }, 
    { "number": "M79", "answer": "Lepus" }, 
    { "number": "M80", "answer": "Scorpius" }, 
    { "number": "M81", "answer": "Ursa Major" }, 
    { "number": "M82", "answer": "Ursa Major" }, 
    { "number": "M83", "answer": "Hydra" }, 
    { "number": "M84", "answer": "Virgo" }, 
    { "number": "M85", "answer": "Coma Berenices" }, 
    { "number": "M86", "answer": "Virgo" }, 
    { "number": "M87", "answer": "Virgo" }, 
    { "number": "M88", "answer": "Coma Berenices" }, 
    { "number": "M89", "answer": "Virgo" }, 
    { "number": "M90", "answer": "Virgo" }, 
    { "number": "M91", "answer": "Coma Berenices" }, 
    { "number": "M92", "answer": "Hercules" }, 
    { "number": "M93", "answer": "Puppis" }, 
    { "number": "M94", "answer": "Canes Venatici" }, 
    { "number": "M95", "answer": "Leo" }, 
    { "number": "M96", "answer": "Leo" }, 
    { "number": "M97", "answer": "Ursa Major" }, 
    { "number": "M98", "answer": "Coma Berenices" }, 
    { "number": "M99", "answer": "Coma Berenices" }, 
    { "number": "M100", "answer": "Coma Berenices" }, 
    { "number": "M101", "answer": "Ursa Major" }, 
    { "number": "M102", "answer": "Draco" }, 
    { "number": "M103", "answer": "Cassiopeia" }, 
    { "number": "M104", "answer": "Virgo" }, 
    { "number": "M105", "answer": "Leo" }, 
    { "number": "M106", "answer": "Canes Venatici" }, 
    { "number": "M107", "answer": "Ophiuchus" }, 
    { "number": "M108", "answer": "Ursa Major" }, 
    { "number": "M109", "answer": "Ursa Major" }, 
    { "number": "M110", "answer": "Andromeda" }
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
    messierNumber.textContent = quizData[currentQuestionIndex].number;
    questionText.style.color = 'black';
    questionText.textContent = "Where is the location of the messier object?";
    questionNumber.textContent = "Question #" + (currentQuestionIndex + 1);
}

// Function to check the user's answer
function checkAnswer() {
    const userAnswer = answerInput.value.trim().toLowerCase();
    const correctAnswer = quizData[currentQuestionIndex].answer.toLowerCase();

    if (userAnswer === correctAnswer) {
        questionText.style.color = 'green';
        questionText.textContent = "Correct! Moving to the next question...";
        answerInput.value = "";
        currentQuestionIndex++;

        if (currentQuestionIndex < quizData.length) {
            setTimeout(displayQuestion, 1500); // Delay before displaying the next question
        } else {
            questionText.style.color = 'black';
            questionText.textContent = "Quiz completed!";
            submitButton.disabled = true;
        }
    } else {
        questionText.style.color = 'red';
        questionText.textContent = "Incorrect. Try again.";
    }
}

function showAnswer() {
    const correctAnswer = quizData[currentQuestionIndex].answer;
    questionText.textContent = `The correct answer is: ${correctAnswer}`;
}

// Add keypress event listener to the input field
answerInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        checkAnswer();
    }
});

// Add click event listeners to the buttons
submitButton.addEventListener("click", checkAnswer);
showAnswerButton.addEventListener("click", showAnswer);

// Display the first question and image
displayQuestion();
