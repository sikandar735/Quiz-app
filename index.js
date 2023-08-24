const questions = [ 
    {
        question: "Which language is used for building interactive user interfaces and is maintained by Facebook?",
        answers:  [
            {text: "Java", correct:false},
            {text: "Python", correct:false},
            {text: "Ruby", correct:false},
            {text: "JavaScript", correct:true},
        ]
    },
    {
        question: "Which programming language is often associated with artificial intelligence and machine learning?",
        answers:  [
            {text: "C", correct:false},
            {text: "Python", correct:true},
            {text: "Go", correct:false},
            {text: "Swift", correct:false},
        ]
    },
    {
        question: "Which language is known for its focus on simplicity and readability, with a 'Zen of Python' guiding principles?",
        answers:  [
            {text: "JavaScript", correct:false},
            {text: "Ruby", correct:false},
            {text: "Python", correct:true},
            {text: "C#", correct:false},
        ]
    },
    {
        question: "Which language is often used for system administration tasks and configuration management?",
        answers:  [
            {text: "Bash", correct:true},
            {text: "Perl", correct:false},
            {text: "Python", correct:false},
            {text: "Ruby", correct:false},
        ]
    },
    {
        question: "Which language is a statically-typed language known for its speed and performance, commonly used for system programming?",
        answers:  [
            {text: "Java", correct:false},
            {text: "C++", correct:false},
            {text: "Rust", correct:true},
            {text: "Swift", correct:false},
        ]
    },
    {
        question: "Which language was developed by Microsoft and is commonly used for developing Windows applications?",
        answers:  [
            {text: "C#", correct:true},
            {text: "Java", correct:false},
            {text: "Python", correct:false},
            {text: "Ruby", correct:false},
        ]
    },
    {
        question: "Which language is widely used for creating web servers and server-side applications?",
        answers:  [
            {text: "Java", correct:false},
            {text: "Node.js", correct:false},
            {text: "Python", correct:false},
            {text: "JavaScript", correct:true},
        ]
    },
    {
        question: "Which language is known for its use in data science, analytics, and machine learning?",
        answers:  [
            {text: "Python", correct:true},
            {text: "R", correct:false},
            {text: "Scala", correct:false},
            {text: "Java", correct:false},
        ]
    },
    {
        question: "Which language is often used for creating dynamic and interactive web pages?",
        answers:  [
            {text: "HTML", correct:false},
            {text: "CSS", correct:false},
            {text: "JavaScript", correct:true},
            {text: "PHP", correct:false},
        ]
    },
    {
        question: "Which language is designed for concurrent and distributed computing?",
        answers:  [
            {text: "Java", correct:true},
            {text: "Python", correct:false},
            {text: "C++", correct:false},
            {text: "Ruby", correct:false},
        ]
    },
    {
        question: "Which language is commonly used for scripting and automation in Windows environments?",
        answers:  [
            {text: "Python", correct:true},
            {text: "PowerShell", correct:false},
            {text: "Bash", correct:false},
            {text: "Ruby", correct:false},
        ]
    },
    {
        question: "Which language is a functional programming language known for its concise syntax and immutability features?",
        answers:  [
            {text: "Haskell", correct:true},
            {text: "Scala", correct:false},
            {text: "Erlang", correct:false},
            {text: "Java", correct:false},
        ]
    },
    {
        question: "Which language is used for building cross-platform mobile applications using a single codebase?",
        answers:  [
            {text: "Kotlin", correct:false},
            {text: "Swift", correct:false},
            {text: "C#", correct:false},
            {text: "Flutter", correct:true},
        ]
    },
    {
        question: "Which language is designed for numerical and scientific computing, often used in fields like engineering and physics?",
        answers:  [
            {text: "Fortran", correct:true},
            {text: "COBOL", correct:false},
            {text: "Pascal", correct:false},
            {text: "Ada", correct:false},
        ]
    },
    {
        question: "Which language is used for querying and manipulating databases?",
        answers:  [
            {text: "SQL", correct:true},
            {text: "Java", correct:false},
            {text: "Python", correct:false},
            {text: "C++", correct:false},
        ]
    },
    {
        question: "Which language is often used for creating game development, simulations, and graphics applications?",
        answers:  [
            {text: "Java", correct:false},
            {text: "C++", correct:true},
            {text: "Python", correct:false},
            {text: "C#", correct:false},
        ]
    },
    {
        question: "Which language is known for its use in building blockchain applications and smart contracts?",
        answers:  [
            {text: "Solidity", correct:true},
            {text: "Python", correct:false},
            {text: "Ruby", correct:false},
            {text: "Java", correct:false},
        ]
    },
    {
        question: "Which language is commonly used for scripting and automating repetitive tasks on Linux systems?",
        answers:  [
            {text: "Bash", correct:true},
            {text: "Perl", correct:false},
            {text: "Python", correct:false},
            {text: "Ruby", correct:false},
        ]
    },
    {
        question: "Which language is used for building decentralized applications (DApps) on the Ethereum blockchain?",
        answers:  [
            {text: "Python", correct:false},
            {text: "Solidity", correct:true},
            {text: "Java", correct:false},
            {text: "C++", correct:false},
        ]
    },
    {
        question: "Which language is known for its use in real-time embedded systems and microcontrollers?",
        answers:  [
            {text: "C", correct:true},
            {text: "Java", correct:false},
            {text: "Python", correct:false},
            {text: "Rust", correct:false},
        ]
    },
    {
        question: "Which language is used for building scalable and high-performance applications, often employed by tech giants?",
        answers:  [
            {text: "Python", correct:false},
            {text: "Java", correct:true},
            {text: "Ruby", correct:false},
            {text

: "C++", correct:false},
        ]
    },
    {
        question: "Which language is a scripting language commonly used for web development and server-side scripting?",
        answers:  [
            {text: "PHP", correct:true},
            {text: "Python", correct:false},
            {text: "Ruby", correct:false},
            {text: "JavaScript", correct:false},
        ]
    },
    {
        question: "Which language is often used for building high-performance scientific and numerical applications?",
        answers:  [
            {text: "C", correct:true},
            {text: "Fortran", correct:false},
            {text: "Python", correct:false},
            {text: "Java", correct:false},
        ]
    },
    {
        question: "Which language is known for its use in creating 3D graphics and game development?",
        answers:  [
            {text: "C#", correct:false},
            {text: "Python", correct:false},
            {text: "UnityScript", correct:false},
            {text: "C++", correct:true},
        ]
    },
];

 
 const questionElement = document.getElementById("question");
 const answerButtons = document.getElementById("answer-buttons");
 const nextButton = document.getElementById("next-btn");

 let currentQuestionIndex = 0;
 let score = 0;

 function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        // answerButton.appendChild(button);
        answerButtons.append(button);

        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);

    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const iscorrect = selectedBtn.dataset.correct === "true";
    if(iscorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `Your Score ${score} out of ${questions.length}`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();