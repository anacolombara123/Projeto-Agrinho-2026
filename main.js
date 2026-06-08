/**
 * Arquivo: main.js
 * Descrição: Responsável pela interatividade do Menu Mobile e do Quiz AgroTech.
 * Projeto: Agrinho 2026
 */

document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // FUNCIONALIDADE 1: MENU RESPONSIVO MOBILE
    // ==========================================
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    // Evento de clique para abrir/fechar o menu mobile
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    // Fecha o menu automaticamente quando o usuário clica em um link
    const navLinks = document.querySelectorAll(".nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
        });
    });

    // ==========================================
    // FUNCIONALIDADE 2: QUIZ INTERATIVO AGROTECH
    // ==========================================
    
    // Perguntas do Quiz estruturadas em Array de Objetos
    const quizData = [
        {
            question: "Qual tecnologia é usada para mapear pragas em tempo real voando sobre a lavoura?",
            options: ["Drones", "Tratores antigos", "Enxadas mecânicas", "Satélites lunares"],
            correct: 0
        },
        {
            question: "Como os sensores IoT ajudam a economizar água no campo?",
            options: [
                "Prevendo a cotação do dólar",
                "Medindo a umidade exata do solo para ativar a irrigação apenas quando necessário",
                "Mudando a cor das folhas das árvores",
                "Fazendo chover artificialmente"
            ],
            correct: 1
        },
        {
            question: "Qual fonte de energia limpa é muito usada para alimentar bombas d'água no agro sustentável?",
            options: ["Energia a Carvão", "Energia Solar (Painéis fotovoltaicos)", "Combustível Fóssil", "Pilhas comuns"],
            correct: 1
        }
    ];

    // Seletores do DOM para o Quiz
    const questionText = document.getElementById("question-text");
    const optionsContainer = document.getElementById("options-container");
    const questionContainer = document.getElementById("question-container");
    const resultContainer = document.getElementById("result-container");
    const resultText = document.getElementById("result-text");
    const restartBtn = document.getElementById("restart-btn");

    let currentQuestionIndex = 0;
    let score = 0;

    // Inicializa ou reinicia o Quiz
    function startQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        resultContainer.classList.add("hide");
        questionContainer.classList.remove("hide");
        loadQuestion();
    }

    // Carrega a pergunta atual na tela
    function loadQuestion() {
        clearOptions();
        
        let currentQuestion = quizData[currentQuestionIndex];
        questionText.textContent = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;

        // Cria dinamicamente os botões de opção
        currentQuestion.options.forEach((option, index) => {
            const button = document.createElement("button");
            button.textContent = option;
            button.classList.add("option-btn");
            // Adiciona evento de clique para validar a resposta
            button.addEventListener("click", () => selectAnswer(index, button));
            optionsContainer.appendChild(button);
        });
    }

    // Limpa os botões antigos antes de carregar a nova pergunta
    function clearOptions() {
        optionsContainer.innerHTML = "";
    }

    // Valida a resposta escolhida pelo estudante
    function selectAnswer(selectedIndex, clickedButton) {
        const correctIndex = quizData[currentQuestionIndex].correct;
        const allButtons = optionsContainer.querySelectorAll(".option-btn");

        // Bloqueia cliques adicionais nos outros botões
        allButtons.forEach(btn => btn.disabled = true);

        // Verifica se acertou ou errou para aplicar as cores correspondentes (CSS)
        if (selectedIndex === correctIndex) {
            clickedButton.classList.add("correct");
            score++;
        } else {
            clickedButton.classList.add("wrong");
            // Destaca qual era a alternativa correta para aprendizado
            allButtons[correctIndex].classList.add("correct");
        }

        // Aguarda 2 segundos para o usuário ver o feedback visual e avança
        setTimeout(() => {
            currentQuestionIndex++;
            if (currentQuestionIndex < quizData.length) {
                loadQuestion();
            } else {
                showResults();
            }
        }, 2000);
    }

    // Apresenta o resultado final com base nos acertos
    function showResults() {
        questionContainer.classList.add("hide");
        resultContainer.classList.remove("hide");
        
        let mensagem = "";
        if(score === quizData.length) {
            mensagem = "Sensacional! Você é um verdadeiro Agro-Tecnólogo do Futuro! 🎯🌱";
        } else if(score > 1) {
            mensagem = "Muito bem! Você conhece bastante sobre a tecnologia verde no campo! 🚀";
        } else {
            mensagem = "Bom esforço! Que tal reler os cards informativos e tentar de novo? 📚";
        }

        resultText.innerHTML = `Você acertou <strong>${score}</strong> de <strong>${quizData.length}</strong> perguntas.<br><br>${mensagem}`;
    }

    // Evento para reiniciar o quiz
    restartBtn.addEventListener("click", startQuiz);

    // Inicia o Quiz automaticamente na primeira execução do site
    startQuiz();
});