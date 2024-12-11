// Lista de verbos en inglés
const verbs = [
    { word: 'run', correct: 'fastest' },
    { word: 'speak', correct: 'loudest' },
    { word: 'eat', correct: 'healthiest' },
    { word: 'study', correct: 'hardest' },
    { word: 'sleep', correct: 'longest' },
    { word: 'work', correct: 'hardest' },
    { word: 'dance', correct: 'best' },
    { word: 'drive', correct: 'fastest' },
    { word: 'jump', correct: 'highest' },
    { word: 'sing', correct: 'best' }
];

// Preguntas de opción múltiple (en inglés) con superlativos
const textQuestions = [
    {
        question: "¿Cuál es la oración correcta?", // Cambio aquí al español
        optionA: "This is the most interesting book of all.",
        optionB: "This is the most interesting book than all.",
        correct: "This is the most interesting book of all."
    },
    {
        question: "¿Cuál es la oración correcta?", // Cambio aquí al español
        optionA: "She is the most taller in her class.",
        optionB: "She is the tallest in her class.",
        correct: "She is the tallest in her class."
    },
    {
        question: "¿Cuál es la oración correcta?", // Cambio aquí al español
        optionA: "They are the most friendliest.",
        optionB: "They are the friendliest.",
        correct: "They are the friendliest."
    },
    {
        question: "¿Cuál es la oración correcta?", // Cambio aquí al español
        optionA: "He runs the most faster than me.",
        optionB: "He runs the fastest than me.",
        correct: "He runs the fastest than me."
    },
    {
        question: "¿Cuál es la oración correcta?", // Cambio aquí al español
        optionA: "She works the hardest than me.",
        optionB: "She works the most hardest than me.",
        correct: "She works the hardest than me."
    }
];

let currentQuestionIndex = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;
const totalQuestions = verbs.length + textQuestions.length;

// Función para mostrar las preguntas
function generateQuestions() {
    const questionsContainer = document.querySelector('.questions-container');
    questionsContainer.innerHTML = '';

    if (currentQuestionIndex < verbs.length) {
        const currentVerb = verbs[currentQuestionIndex];
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question-container');
        questionDiv.innerHTML = `
            <p>Escribe el superlativo de: ${currentVerb.word}</p>
            <input type="text" class="input-box" id="answer${currentQuestionIndex}" />
        `;
        questionsContainer.appendChild(questionDiv);
    } else if (currentQuestionIndex < totalQuestions) {
        const currentTextQuestion = textQuestions[currentQuestionIndex - verbs.length];
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerHTML = `
            <p>${currentTextQuestion.question}</p>
            <div>
                <button onclick="checkAnswer('${currentTextQuestion.optionA}')">${currentTextQuestion.optionA}</button>
                <button onclick="checkAnswer('${currentTextQuestion.optionB}')">${currentTextQuestion.optionB}</button>
            </div>
        `;
        questionsContainer.appendChild(questionDiv);
    }
}

// Función para pasar a la siguiente pregunta
function nextQuestion() {
    const currentInput = document.querySelector(`#answer${currentQuestionIndex}`);
    if (currentInput && currentInput.value.toLowerCase().trim() === verbs[currentQuestionIndex].correct) {
        correctAnswers++;
    } else {
        incorrectAnswers++;
    }

    // Muestra la siguiente pregunta
    currentQuestionIndex++;
    if (currentQuestionIndex < totalQuestions) {
        generateQuestions();
    } else {
        showResults();
    }
}

// Función para mostrar los resultados
function showResults() {
    const correct = document.getElementById('correct-answers');
    const incorrect = document.getElementById('incorrect-answers');
    const percentage = document.getElementById('percentage');

    const incorrectAnswers = totalQuestions - correctAnswers;

    correct.innerText = `Respuestas correctas: ${correctAnswers}`;
    incorrect.innerText = `Respuestas incorrectas: ${incorrectAnswers}`;
    percentage.innerText = `Porcentaje: ${(correctAnswers / totalQuestions * 100).toFixed(2)}%`;

    document.querySelector('.result').style.display = 'block';
    document.querySelector('.submit-btn').style.display = 'none'; // Ocultar el botón de siguiente pregunta
    document.querySelector('.restart-btn').style.display = 'block'; // Mostrar el botón de reiniciar
}

// Función para reiniciar el quiz
function restartQuiz() {
    window.location.href = 'index.html'; // Redirige a la página de inicio
}

// Función para verificar las respuestas de las preguntas de opción múltiple
function checkAnswer(selectedAnswer) {
    const currentTextQuestion = textQuestions[currentQuestionIndex - verbs.length];
    if (selectedAnswer === currentTextQuestion.correct) {
        correctAnswers++;
    } else {
        incorrectAnswers++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < totalQuestions) {
        generateQuestions();
    } else {
        showResults();
    }
}

// Iniciar las preguntas
generateQuestions();

// Este script crea círculos de colores dinámicamente en el fondo
document.addEventListener("DOMContentLoaded", function () {
    const numCircles = 300; // Número de círculos a crear
    const body = document.body;

    // Crear círculos en el fondo
    for (let i = 0; i < numCircles; i++) {
        let circle = document.createElement("div");
        circle.classList.add("circle");

        // Crear círculos de diferentes tamaños
        let size = Math.random() * 125 + 40; // Tamaño aleatorio entre 40px y 165px
        circle.style.width = size + "px";
        circle.style.height = size + "px";

        // Asignar colores aleatorios (en tonos oscuros)
        circle.style.backgroundColor = `hsl(${Math.random() * 360}, 0%, 0%)`;

        // Colocar los círculos en posiciones aleatorias dentro del cuerpo
        let x = Math.random() * window.innerWidth; // Posición aleatoria en el eje X
        let y = Math.random() * window.innerHeight; // Posición aleatoria en el eje Y
        circle.style.position = "absolute";
        circle.style.top = `${y}px`;
        circle.style.left = `${x}px`;

        // Agregar el círculo al documento
        body.appendChild(circle);

        // Animación de movimiento aleatorio de los círculos
        let randomDuration = Math.random() * 15 + 5; // Duración aleatoria entre 5s y 20s
        let randomDirectionX = Math.random() > 0.5 ? 1 : -1; // Dirección aleatoria para el movimiento en X
        let randomDirectionY = Math.random() > 0.5 ? 1 : -1; // Dirección aleatoria para el movimiento en Y
        let randomMoveType = Math.floor(Math.random() * 3); // Tipo de movimiento aleatorio (0: diagonal, 1: arriba-abajo, 2: izquierda-derecha)

        // Generar las animaciones para el movimiento de los círculos
        let keyframes;
        if (randomMoveType === 0) {
            // Movimiento diagonal
            keyframes = `
                0% { transform: translate(0, 0); }
                25% { transform: translate(${randomDirectionX * 100}vw, ${randomDirectionY * 100}vh); }
                50% { transform: translate(${randomDirectionX * 200}vw, ${randomDirectionY * 200}vh); }
                75% { transform: translate(${randomDirectionX * 300}vw, ${randomDirectionY * 300}vh); }
                100% { transform: translate(0, 0); }
            `;
        } else if (randomMoveType === 1) {
            // Movimiento de arriba a abajo
            keyframes = `
                0% { transform: translate(0, 0); }
                50% { transform: translate(0, 100vh); }
                100% { transform: translate(0, 0); }
            `;
        } else {
            // Movimiento de izquierda a derecha
            keyframes = `
                0% { transform: translate(0, 0); }
                50% { transform: translate(100vw, 0); }
                100% { transform: translate(0, 0); }
            `;
        }

        // Establecer la animación
        const style = document.createElement("style");
        style.innerHTML = `
            @keyframes moveCircles${i} {
                ${keyframes}
            }
        `;
        document.head.appendChild(style);

        // Aplicar la animación al círculo
        circle.style.animation = `moveCircles${i} ${randomDuration}s linear infinite`;
    }
});
