const quiz = {
    questions: [
        {
            question: "Who is the primary antagonist in 'The Lord of the Rings' trilogy?",
            options: ["Sauron", "Gandalf", "Frodo", "Aragorn"],
            correctAnswer: 0,
        },
        {
            question: "What is the name of Frodo's loyal companion throughout the quest?",
            options: ["Legolas", "Gollum", "Samwise", "Boromir"],
            correctAnswer: 2,
        },
        {
            question: "What is the name of the land where most of the story takes place?",
            options: ["Narnia", "Hogwarts", "Middle-earth", "Westeros"],
            correctAnswer: 2,
        },
        {
            question: "What precious item does the One Ring make its wearer invisible?",
            options: ["The Hobbit", "The Sword Sting", "The One Ring", "The Cloak of Invisibility"],
            correctAnswer: 3,
        },
        {
            question: "Which character is known as the 'White Wizard' in 'The Lord of the Rings'?",
            options: ["Aragorn", "Frodo", "Gandalf", "Legolas"],
            correctAnswer: 2,
        },
        {
            question: "What powerful creature does Gollum call 'my precious'?",
            options: ["Smeagol", "Saruman", "Shelob", "The One Ring"],
            correctAnswer: 0,
        },
        {
            question: "Who is the heir to the throne of Gondor and one of the main characters in the story?",
            options: ["Smeagol", "Saruman", "Frodo", "Aragorn"],
            correctAnswer: 3,
        },
        {
            question: "What is the name of the mystical forest where the Elves reside?",
            options: ["Mirkwood", "Fangorn", "Lothlórien", "Rivendell"],
            correctAnswer: 2,
        },
        {
            question: "What is the name of the volcano where the One Ring is ultimately destroyed?",
            options: ["Mount Doom", "Mount Everest", "Mount Kilimanjaro", "Mount Rainier"],
            correctAnswer: 0,
        },
        {
            question: "Who was the author of 'The Lord of the Rings' trilogy?",
            options: ["George R.R. Martin", "J.K. Rowling", "C.S. Lewis", "J.R.R. Tolkien"],
            correctAnswer: 3,
        },
    ],
    currentQuestion: 0,
    score: 0,
    questionContainer: document.getElementById("question"),
    timerContainer: document.getElementById("timer-container"),
    optionsList: document.getElementById("options"),
    resultContainer: document.getElementById("result"),
    resetButton: document.getElementById("reset-button"),
    timer: null,

    displayQuestion: function () {
        const questionObj = this.questions[this.currentQuestion];
        this.questionContainer.textContent = questionObj.question;
        this.optionsList.innerHTML = "";

        // Create and display answer options
        questionObj.options.forEach((option, index) => {
            const optionItem = document.createElement("li");
            optionItem.textContent = `${index + 1}. ${option}`;
            optionItem.addEventListener("click", () => this.checkAnswer(index));
            this.optionsList.appendChild(optionItem);
        });

        // Reset the timer and start a new one
        this.resetTimer();
    },

    resetTimer: function () {
        this.timerContainer.innerHTML = ""; // Remove previous timer
        this.timer = document.createElement("div");
        this.timer.id = "timer";
        this.timer.style.animation = "none";
        this.timer.style.width = "100%";
        this.timerContainer.appendChild(this.timer);

        if (this.timerTimeout) {
            // Clear the previous timer if it exists
            clearTimeout(this.timerTimeout);
        }

        // Start the timer animation immediately
        this.timer.style.animation = "timer 10s linear";

        // Set a timeout to check the answer after 10 seconds and store the timeout ID
        this.timerTimeout = setTimeout(() => {
            this.checkAnswer(-1); // Pass -1 to indicate no user input (timeout)
        }, 10000);
    },

    checkAnswer: function (userAnswer) {
        const correctAnswer = this.questions[this.currentQuestion].correctAnswer;

        if (userAnswer === correctAnswer) {
            this.score++;
        }

        this.currentQuestion++;

        if (this.currentQuestion < this.questions.length) {
            this.displayQuestion();
        } else {
            this.showResult();
        }
    },

    showResult: function () {
        this.questionContainer.textContent = "";
        this.optionsList.innerHTML = "";
        this.timerContainer.innerHTML = "";
        this.resultContainer.style.display = "block";
        let resultText;
        resultText = `Quiz complete! You got ${this.score} out of ${this.questions.length} questions correct.`;
        document.getElementById("result-text").textContent = resultText;
        this.resetButton.style.display = "block";
    },

    resetQuiz: function () {
        this.currentQuestion = 0;
        this.score = 0;
        this.start();
        this.resultContainer.style.display = "none";
        this.resetButton.style.display = "none";
    },

    start: function () {
        this.displayQuestion();
        document.getElementById("quiz-container").style.display = "block";
        document.getElementById("start-container").style.display = "none";
    },
};

document.getElementById("start-button").addEventListener("click", () => quiz.start());
quiz.resetButton.addEventListener("click", () => quiz.resetQuiz());
/*
const newsTicker = document.getElementById("news-ticker");
const newsList = newsTicker.querySelector("ul");
const headlines = newsList.getElementsByTagName("li");
let currentIndex = 0;

function scrollHeadlines() {
    headlines[currentIndex].style.display = "none";
    currentIndex = (currentIndex + 1) % headlines.length;
    headlines[currentIndex].style.display = "inline";
}

const intervalId = setInterval(scrollHeadlines, 3000);

setTimeout(() => {
    clearInterval(intervalId);
    console.log("News ticker stopped after 20 seconds.");
}, 20000);
*/