// --- CONFIGURACIÓN Y DATOS ---

// Modos de Juego: 'MULTIPLE', 'BOOLEAN', 'ORDER'
const questions = [
    {
        id: 1,
        type: 'MULTIPLE',
        question: "¿Cuál es la altura oficial del Pico Duarte?",
        options: ["3,087 msnm", "3,175 msnm", "2,950 msnm", "2,560 msnm"],
        answer: "3,087 msnm"
    },
    {
        id: 2,
        type: 'MULTIPLE',
        question: "¿Cuál es la longitud total de la ruta La Ciénaga - Pico Duarte?",
        options: ["18 Km", "23 Km", "28 Km", "15 Km"],
        answer: "23 Km"
    },
    {
        id: 3,
        type: 'MULTIPLE',
        question: "¿Cuál es el límite de peso permitido por bulto para los mulos?",
        options: ["25 libras", "20 libras", "15 libras", "10 libras"],
        answer: "15 libras"
    },
    {
        id: 4,
        type: 'BOOLEAN',
        question: "¿Está permitido llevar bebidas alcohólicas al parque?",
        answer: false
    },
    {
        id: 5,
        type: 'MULTIPLE',
        question: "¿A qué altura se encuentra la caseta de La Compartición?",
        options: ["2,450 msnm", "2,650 msnm", "2,200 msnm", "2,800 msnm"],
        answer: "2,450 msnm"
    },
    {
        id: 6,
        type: 'MULTIPLE',
        question: "¿Qué río se forma en la confluencia de Los Guano y Tablones?",
        options: ["Río Yaque del Sur", "Río Bao", "Río Yaque del Norte", "Río Mao"],
        answer: "Río Yaque del Norte"
    },
    {
        id: 7,
        type: 'MULTIPLE',
        question: "¿Cuál es el nombre del manantial que da origen al río Yaque del Sur?",
        options: ["La Fuente", "Agüita Fría", "Los Tablones", "Valle de Tetero"],
        answer: "Agüita Fría"
    },
    {
        id: 8,
        type: 'ORDER',
        question: "Ordena por altura (de menor a mayor):",
        items: ["Los Tablones (1,270)", "Agüita Fría (2,650)", "Pico Duarte (3,087)"],
        answer: ["Los Tablones (1,270)", "Agüita Fría (2,650)", "Pico Duarte (3,087)"]
    },
    {
        id: 9,
        type: 'MULTIPLE',
        question: "¿Cuántos kilómetros hay desde La Ciénaga hasta Los Tablones?",
        options: ["2 Km", "4 Km", "6 Km", "8 Km"],
        answer: "4 Km"
    },
    {
        id: 10,
        type: 'BOOLEAN',
        question: "¿Debes llevar tu propio Sleeping Bag?",
        answer: true
    },
    {
        id: 11,
        type: 'MULTIPLE',
        question: "¿Cuál es la edad mínima recomendada para subir?",
        options: ["12 años", "18 años", "14 años", "10 años"],
        answer: "14 años"
    },
    {
        id: 12,
        type: 'MULTIPLE',
        question: "¿En qué lugar se encuentra la estación meteorológica?",
        options: ["La Compartición", "Valle de Lilís", "Agüita Fría", "La Pelona"],
        answer: "Valle de Lilís"
    },
    {
        id: 13,
        type: 'MULTIPLE',
        question: "¿A qué altura está el Valle de Lilís?",
        options: ["2,450 msnm", "2,950 msnm", "3,000 msnm", "2,650 msnm"],
        answer: "2,950 msnm"
    },
    {
        id: 14,
        type: 'BOOLEAN',
        question: "¿Se permite botar basura si es orgánica?",
        answer: false
    },
    {
        id: 15,
        type: 'MULTIPLE',
        question: "¿Qué distancia hay entre Agüita Fría y La Compartición?",
        options: ["2 Km", "4 Km", "6 Km", "5 Km"],
        answer: "4 Km"
    },
    {
        id: 16,
        type: 'MULTIPLE',
        question: "¿Cómo se llama el balneario mencionado para el día de descanso?",
        options: ["El Salto", "La Ballena", "Mata Grande", "Los Chorros"],
        answer: "La Ballena"
    },
    {
        id: 17,
        type: 'BOOLEAN',
        question: "¿Hay cajeros automáticos dentro del parque?",
        answer: false
    },
    {
        id: 18,
        type: 'MULTIPLE',
        question: "¿Cuál es el punto más alto del camino antes de llegar al Pico?",
        options: ["Agüita Fría", "Valle de Lilís", "La Compartición", "La Laguna"],
        answer: "Agüita Fría"
    },
    {
        id: 19,
        type: 'MULTIPLE',
        question: "¿Qué tipo de jabón se recomienda usar?",
        options: ["Antibacterial", "Perfumado", "Biodegradable", "En polvo"],
        answer: "Biodegradable"
    },
    {
        id: 20,
        type: 'MULTIPLE',
        question: "¿Cuántos días dura la excursión típica descrita en el itinerario?",
        options: ["3 días", "4 días", "5 días", "2 días"],
        answer: "5 días"
    },
    {
        id: 21,
        type: 'MULTIPLE',
        question: "¿Qué distancia hay entre El Cruce y Agüita Fría?",
        options: ["1 Km", "3 Km", "5 Km", "2.5 Km"],
        answer: "3 Km"
    },
    {
        id: 22,
        type: 'BOOLEAN',
        question: "¿Se permite llevar armas de fuego por seguridad?",
        answer: false
    },
    {
        id: 23,
        type: 'MULTIPLE',
        question: "¿Qué dos miradores se encuentran en la cuesta de Los Tablones?",
        options: [
            "Pico La Cotorra y La Laguna", 
            "El Mogote y La Peña", 
            "Valle Nuevo y La Cotorra", 
            "La Laguna y El Cielo"
        ],
        answer: "Pico La Cotorra y La Laguna"
    },
    {
        id: 24,
        type: 'MULTIPLE',
        question: "¿A qué altura está el mirador La Laguna?",
        options: ["1,500 msnm", "1,980 msnm", "2,100 msnm", "1,800 msnm"],
        answer: "1,980 msnm"
    },
    {
        id: 25,
        type: 'MULTIPLE',
        question: "Según el menú, ¿qué comida típica se sirve la primera cena?",
        options: ["Mangu", "Sancocho", "Locrio de Pollo", "Asopao"],
        answer: "Sancocho"
    },
    {
        id: 26,
        type: 'MULTIPLE',
        question: "¿Qué artículo es obligatorio para iluminar el camino de noche?",
        options: ["Velas", "Celular", "Linterna o Foco", "Fuego"],
        answer: "Linterna o Foco"
    },
    {
        id: 27,
        type: 'MULTIPLE',
        question: "¿A qué distancia está La Pelona del cruce según el letrero?",
        options: ["1.0 Km", "2.5 Km", "1.7 Km", "0.5 Km"],
        answer: "1.7 Km"
    },
    {
        id: 28,
        type: 'MULTIPLE',
        question: "¿Cuál es el lema sobre las huellas en el parque?",
        options: [
            "Deja solo tus recuerdos", 
            "Lo único que el visitante deja son las huellas de sus botas", 
            "Cuida el medio ambiente", 
            "No dejes basura, solo huellas"
        ],
        answer: "Lo único que el visitante deja son las huellas de sus botas"
    },
    {
        id: 29,
        type: 'BOOLEAN',
        question: "¿Debes estrenar tus botas el mismo día de la excursión?",
        answer: false
    },
    {
        id: 30,
        type: 'MULTIPLE',
        question: "¿Cuál es el punto de inicio oficial de la caminata (msnm)?",
        options: ["Jarabacoa", "La Ciénaga a 1,100 msnm", "Manabao", "Constanza"],
        answer: "La Ciénaga a 1,100 msnm"
    }
];

// --- ESTADO DEL JUEGO ---

let currentQuestionIndex = 0;
let score = 0;
let currentOrderingState = [];

// Elementos del DOM
const app = document.getElementById('app');
const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const resultScreen = document.getElementById('result-screen');
const feedbackOverlay = document.getElementById('feedback-overlay');

// Elementos de Juego
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const orderingControls = document.getElementById('ordering-controls');
const orderingSlots = document.getElementById('ordering-slots');
const orderingPool = document.getElementById('ordering-pool');
const modeBadge = document.getElementById('mode-badge');
const progressBar = document.getElementById('progress-bar');
const questionCounter = document.getElementById('question-counter');
const scoreDisplay = document.getElementById('score-display');

// Botones Principales
document.getElementById('btn-start').addEventListener('click', startGame);
document.getElementById('btn-restart').addEventListener('click', startGame);
document.getElementById('btn-next-question').addEventListener('click', nextQuestion);
document.getElementById('btn-confirm-order').addEventListener('click', checkOrderAnswer);

// --- FUNCIONES CORE ---

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    showScreen(gameScreen);
    updateStats();
    loadQuestion();
}

function showScreen(screen) {
    [startScreen, gameScreen, resultScreen].forEach(s => {
        s.classList.remove('active');
        s.classList.add('hidden');
    });
    screen.classList.remove('hidden');
    // Pequeño delay para permitir que el DOM renderice antes de la transición CSS
    setTimeout(() => {
        screen.classList.add('active');
    }, 50);
}

function updateStats() {
    scoreDisplay.textContent = `Puntos: ${score}`;
    questionCounter.textContent = `${currentQuestionIndex + 1}/${questions.length}`;
    const progress = ((currentQuestionIndex) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
}

function loadQuestion() {
    const q = questions[currentQuestionIndex];
    questionText.textContent = q.question;
    optionsContainer.innerHTML = '';
    orderingControls.classList.add('hidden');
    optionsContainer.classList.remove('hidden');

    // Configurar Badge
    if (q.type === 'MULTIPLE') {
        modeBadge.textContent = "Desafío de Altura";
        modeBadge.style.backgroundColor = "var(--color-primary)";
        renderMultipleChoice(q);
    } else if (q.type === 'BOOLEAN') {
        modeBadge.textContent = "Verdad en la Montaña";
        modeBadge.style.backgroundColor = "var(--color-accent-dark)";
        renderBoolean(q);
    } else if (q.type === 'ORDER') {
        modeBadge.textContent = "Ruta Lógica";
        modeBadge.style.backgroundColor = "#2980b9";
        optionsContainer.classList.add('hidden'); // Ocultar contenedor estándar
        orderingControls.classList.remove('hidden');
        renderOrdering(q);
    }
}

// --- RENDERIZADO POR MODO ---

function renderMultipleChoice(q) {
    // Mezclar opciones
    const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);
    
    shuffledOptions.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'btn btn-option';
        btn.textContent = opt;
        btn.onclick = () => checkStandardAnswer(opt, q.answer);
        optionsContainer.appendChild(btn);
    });
}

function renderBoolean(q) {
    const opts = [
        { text: "Verdadero", val: true },
        { text: "Falso", val: false }
    ];
    
    opts.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'btn btn-option';
        btn.textContent = opt.text;
        btn.onclick = () => checkStandardAnswer(opt.val, q.answer);
        optionsContainer.appendChild(btn);
    });
}

function renderOrdering(q) {
    currentOrderingState = [];
    orderingSlots.innerHTML = '';
    orderingPool.innerHTML = '';
    
    // Mezclar items
    const shuffledItems = [...q.items].sort(() => Math.random() - 0.5);

    shuffledItems.forEach(item => {
        const div = document.createElement('div');
        div.className = 'order-item';
        div.textContent = item;
        div.onclick = function() {
            moveItem(this, item);
        };
        orderingPool.appendChild(div);
    });
}

// --- LÓGICA DE JUEGO ORDENAMIENTO ---

function moveItem(element, text) {
    // Si está en el pool, mover a slots
    if (element.parentNode === orderingPool) {
        orderingSlots.appendChild(element);
        currentOrderingState.push(text);
        element.classList.add('selected');
    } else {
        // Si está en slots, mover a pool
        orderingPool.appendChild(element);
        currentOrderingState = currentOrderingState.filter(t => t !== text);
        element.classList.remove('selected');
    }
}

function checkOrderAnswer() {
    const q = questions[currentQuestionIndex];
    // Verificar longitud
    if (currentOrderingState.length !== q.answer.length) {
        return; // No hacer nada si faltan items
    }

    // Verificar orden exacto
    const isCorrect = JSON.stringify(currentOrderingState) === JSON.stringify(q.answer);
    
    handleResult(isCorrect, q.answer.join(' -> '));
}

// --- VERIFICACIÓN DE RESPUESTAS ---

function checkStandardAnswer(selected, correct) {
    const isCorrect = selected === correct;
    handleResult(isCorrect, correct === true ? "Verdadero" : (correct === false ? "Falso" : correct));
}

function handleResult(isCorrect, correctAnswerText) {
    let title, msg, icon;

    if (isCorrect) {
        score += 10;
        title = "¡Correcto!";
        msg = "Has ganado 10 puntos de altitud.";
        icon = "✅";
        document.getElementById('feedback-title').style.color = "var(--color-success)";
    } else {
        title = "Incorrecto";
        msg = `La respuesta correcta era: <br><strong>${correctAnswerText}</strong>`;
        icon = "❌";
        document.getElementById('feedback-title').style.color = "var(--color-error)";
    }

    updateStats();
    showFeedback(title, msg, icon);
}

function showFeedback(title, msg, icon) {
    document.getElementById('feedback-title').innerHTML = title;
    document.getElementById('feedback-message').innerHTML = msg;
    document.getElementById('feedback-icon').textContent = icon;
    feedbackOverlay.classList.remove('hidden');
}

function nextQuestion() {
    feedbackOverlay.classList.add('hidden');
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        endGame();
    }
}

// --- FIN DEL JUEGO ---

function endGame() {
    showScreen(resultScreen);
    const finalScoreEl = document.getElementById('final-score');
    const rankTitle = document.getElementById('rank-title');
    const rankDesc = document.getElementById('rank-desc');

    // Animación de conteo
    let tempScore = 0;
    const interval = setInterval(() => {
        if (tempScore >= score) {
            clearInterval(interval);
            tempScore = score;
        } else {
            tempScore += 5;
        }
        finalScoreEl.textContent = tempScore;
    }, 30);

    // Calcular Rango
    if (score >= 250) {
        rankTitle.textContent = "🤠 Guía Experto";
        rankDesc.textContent = "Conoces el Pico Duarte como la palma de tu mano. ¡Estás listo para liderar la expedición!";
        rankTitle.style.color = "#d35400";
    } else if (score >= 150) {
        rankTitle.textContent = "🥾 Caminante";
        rankDesc.textContent = "Tienes buena preparación, pero revisa algunos detalles antes de subir La Compartición.";
        rankTitle.style.color = "#27ae60";
    } else {
        rankTitle.textContent = "📷 Turista";
        rankDesc.textContent = "Aún te falta preparación física y teórica. ¡Estudia el mapa y vuelve a intentarlo!";
        rankTitle.style.color = "#7f8c8d";
    }
}