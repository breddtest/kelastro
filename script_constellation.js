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
    {"answer": "andromeda", "imageURL": "images_kelastro/andromeda.png"},
    {"answer": "antlia", "imageURL": "images_kelastro/antlia.png"},
    {"answer": "apus", "imageURL": "images_kelastro/apus.png"},
    {"answer": "aquarius", "imageURL": "images_kelastro/aquarius.png"},
    {"answer": "aquila", "imageURL": "images_kelastro/aquila.png"},
    {"answer": "ara", "imageURL": "images_kelastro/ara.png"},
    {"answer": "aries", "imageURL": "images_kelastro/aries.png"},
    {"answer": "auriga", "imageURL": "images_kelastro/auriga.png"},
    {"answer": "boötes", "imageURL": "images_kelastro/bootes.png"},
    {"answer": "caelum", "imageURL": "images_kelastro/caelum.png"},
    {"answer": "camelopardalis", "imageURL": "images_kelastro/camelopardalis.png"},
    {"answer": "cancer", "imageURL": "images_kelastro/cancer.png"},
    {"answer": "canes venatici", "imageURL": "images_kelastro/canesvenatici.png"},
    {"answer": "canis major", "imageURL": "images_kelastro/canismajor.png"},
    {"answer": "canis minor", "imageURL": "images_kelastro/canismajor.png"},
    {"answer": "capricornus", "imageURL": "images_kelastro/capricornus.png"},
    {"answer": "carina", "imageURL": "images_kelastro/carina.png"},
    {"answer": "cassiopeia", "imageURL": "images_kelastro/cassiopeia.png"},
    {"answer": "centaurus", "imageURL": "images_kelastro/centaurus.png"},
    {"answer": "cepheus", "imageURL": "images_kelastro/cepheus.png"},
    {"answer": "cetus", "imageURL": "images_kelastro/cetus.png"},
    {"answer": "chamaeleon", "imageURL": "images_kelastro/chamaeleon.png"},
    {"answer": "circinus", "imageURL": "images_kelastro/circinus.png"},
    {"answer": "columba", "imageURL": "images_kelastro/columba.png"},
    {"answer": "coma berenices", "imageURL": "images_kelastro/comaberenices.png"},
    {"answer": "corona australis", "imageURL": "images_kelastro/coronaaustralis.png"},
    {"answer": "corona borealis", "imageURL": "images_kelastro/coronaborealis.png"},
    {"answer": "corvus", "imageURL": "images_kelastro/corvus.png"},
    {"answer": "crater", "imageURL": "images_kelastro/crater.png"},
    {"answer": "crux", "imageURL": "images_kelastro/crux.png"},
    {"answer": "cygnus", "imageURL": "images_kelastro/cygnus.png"},
    {"answer": "delphinus", "imageURL": "images_kelastro/delphinus.png"},
    {"answer": "dorado", "imageURL": "images_kelastro/dorado.png"},
    {"answer": "draco", "imageURL": "images_kelastro/draco.png"},
    {"answer": "equuleus", "imageURL": "images_kelastro/equuleus.png"},
    {"answer": "eridanus", "imageURL": "images_kelastro/eridanus.png"},
    {"answer": "fornax", "imageURL": "images_kelastro/fornax.png"},
    {"answer": "gemini", "imageURL": "images_kelastro/gemini.png"},
    {"answer": "grus", "imageURL": "images_kelastro/grus.png"},
    {"answer": "hercules", "imageURL": "images_kelastro/hercules.png"},
    {"answer": "horologium", "imageURL": "images_kelastro/horologium.png"},
    {"answer": "hydra", "imageURL": "images_kelastro/hydra.png"},
    {"answer": "hydrus", "imageURL": "images_kelastro/hydrus.png"},
    {"answer": "indus", "imageURL": "images_kelastro/indus.png"},
    {"answer": "lacerta", "imageURL": "images_kelastro/lacerta.png"},
    {"answer": "leo", "imageURL": "images_kelastro/leo.png"},
    {"answer": "leo minor", "imageURL": "images_kelastro/leominor.png"},
    {"answer": "lepus", "imageURL": "images_kelastro/lepus.png"},
    {"answer": "libra", "imageURL": "images_kelastro/libra.png"},
    {"answer": "lupus", "imageURL": "images_kelastro/lupus.png"},
    {"answer": "lynx", "imageURL": "images_kelastro/lynx.png"},
    {"answer": "lyra", "imageURL": "images_kelastro/lyra.png"},
    {"answer": "mensa", "imageURL": "images_kelastro/mensa.png"},
    {"answer": "microscopium", "imageURL": "images_kelastro/microscopium.png"},
    {"answer": "monoceros", "imageURL": "images_kelastro/monoceros.png"},
    {"answer": "musca", "imageURL": "images_kelastro/musca.png"},
    {"answer": "norma", "imageURL": "images_kelastro/norma.png"},
    {"answer": "octans", "imageURL": "images_kelastro/octans.png"},
    {"answer": "ophiuchus", "imageURL": "images_kelastro/ophiuchus.png"},
    {"answer": "orion", "imageURL": "images_kelastro/orion.png"},
    {"answer": "pavo", "imageURL": "images_kelastro/pavo.png"},
    {"answer": "pegasus", "imageURL": "images_kelastro/pegasus.png"},
    {"answer": "perseus", "imageURL": "images_kelastro/perseus.png"},
    {"answer": "phoenix", "imageURL": "images_kelastro/phoenix.png"},
    {"answer": "pictor", "imageURL": "images_kelastro/pictor.png"},
    {"answer": "pisces", "imageURL": "images_kelastro/pisces.png"},
    {"answer": "piscis austrinus", "imageURL": "images_kelastro/piscisaustrinus.png"},
    {"answer": "puppis", "imageURL": "images_kelastro/puppis.png"},
    {"answer": "pyxis", "imageURL": "images_kelastro/pyxis.png"},
    {"answer": "reticulum", "imageURL": "images_kelastro/reticulum.png"},
    {"answer": "sagitta", "imageURL": "images_kelastro/sagitta.png"},
    {"answer": "sagittarius", "imageURL": "images_kelastro/sagittarius.png"},
    {"answer": "scorpius", "imageURL": "images_kelastro/scorpius.png"},
    {"answer": "sculptor", "imageURL": "images_kelastro/sculptor.png"},
    {"answer": "scutum", "imageURL": "images_kelastro/scutum.png"},
    {"answer": "serpens", "imageURL": "images_kelastro/serpens.png"},
    {"answer": "sextans", "imageURL": "images_kelastro/sextans.png"},
    {"answer": "taurus", "imageURL": "images_kelastro/taurus.png"},
    {"answer": "telescopium", "imageURL": "images_kelastro/telescopium.png"},
    {"answer": "triangulum", "imageURL": "images_kelastro/triangulum.png"},
    {"answer": "triangulum australe", "imageURL": "images_kelastro/triangulumaustrale.png"},
    {"answer": "tucana", "imageURL": "images_kelastro/tucana.png"},
    {"answer": "ursa major", "imageURL": "images_kelastro/ursamajor.png"},
    {"answer": "ursa minor", "imageURL": "images_kelastro/ursaminor.png"},
    {"answer": "vela", "imageURL": "images_kelastro/vela.png"},
    {"answer": "virgo", "imageURL": "images_kelastro/virgo.png"},
    {"answer": "volans", "imageURL": "images_kelastro/volans.png"},
    {"answer": "vulpecula", "imageURL": "images_kelastro/vulpecula.png"}
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
    questionText.textContent = "What is the name of the constellation shown above?";
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
