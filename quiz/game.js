// 生成一个选择题游戏
function generateQuiz(questions) {
    // 初始化得分和当前问题索引
    let score = 0;
    let currentQuestionIndex = 0;

    // 获取HTML元素
    const questionElement = document.getElementById("question");
    const choicesElement = document.getElementById("choices");
    const restartButton = document.getElementById("restart");
    const scoreElement = document.getElementById("score");

    // 显示问题和选项
    function showQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        questionElement.innerText = currentQuestion.question;
        choicesElement.innerHTML = "";
        currentQuestion.choices.forEach((choice) => {
            const choiceElement = document.createElement("button");
            choiceElement.innerText = choice;
            choiceElement.addEventListener("click", () => {
                // 判断答案是否正确
                if (choice === currentQuestion.answer) {
                    score++;
                    scoreElement.innerText = `得分: ${score}`;
                }
                // 显示下一个问题
                currentQuestionIndex++;
                if (currentQuestionIndex >= questions.length) {
                    // 游戏结束
                    questionElement.innerText = "游戏结束，刷新网页以重玩";
                    choicesElement.innerHTML = "";
                } else {
                    showQuestion();
                }
            });
            choicesElement.appendChild(choiceElement);
        });
        restartButton.innerHTML = "再试一次";
        restartButton.addEventListener("click", () => {
            score = 0;
            currentQuestionIndex = 0;
            scoreElement.innerText = `得分: ${score}`;
            showQuestion();
        });
    }

    // 显示第一个问题
    showQuestion();
}

let point = 0;
let nowProblemNumber = 0;
let ansProblemNumber = 0;
const questions = [
    {
        question: "液晶高分子是一种什么材料？",
        options: ["金属", "塑料", "陶瓷"],
        answer: 2,
    },
    {
        question: "液晶高分子的发明者是谁？",
        options: ["高锟", "高分子", "高句丽"],
        answer: 0,
    },
    {
        question: "液晶高分子有哪些应用？",
        options: ["电子产品", "建筑", "医疗器械", "所有选项都正确"],
        answer: 3,
    },
];
const updateScore = () => {
    const score = document.getElementById("scoreShow");
    const percent = document.getElementById("percentShow");
    const problemNumber = document.getElementById("problemNumber");
    score.innerHTML = "得分：" + point.toString();

    let percentShow;
    if (ansProblemNumber === 0) {
        percentShow = 100;
    } else {
        percentShow = (100 * point / ansProblemNumber).toFixed(0);
    }
    percent.innerHTML = "正确率：" + percentShow.toString() + "%";
    problemNumber.innerHTML = "题目：" + (1 + nowProblemNumber).toString() + "/" + questions.length.toString();
}

const jumpGame = () => {
    let target = document.getElementById("countPanel");
    window.scrollTo({"behavior": "smooth", "top": target.offsetTop});
}

const chooseOption = (id) => {
    const optionButtons = Array.from(document.getElementsByClassName("optionButtons"));
    /*if(optionButtons[id].style.color === "var(--col-purple)") {
        optionButtons[id].style.color = "var(--col-black)";
    } else {
        optionButtons[id].style.color = "var(--col-purple)";
    }*/
    for (let i = 0; i < optionButtons.length;i++){
        if (i === id) {
        optionButtons[i].style.color = "var(--col-purple)";
    } else {
        optionButtons[i].style.color = "var(--col-black)";
    }
    }

}
const createOptionButton = (id) => {
    const optionArray = document.getElementById("optionArray");
    optionArray.innerHTML +=
        "<div class=\"flex-container vertical\">\n" +
        "<div class=\"flex-grow center-block-no-confine\">\n" +
        "<div class=\"u-center\" >\n" +
        "<button type=\"button\" class=\"optionButtons default-button\" onclick=\"chooseOption(" +
        (id).toString() + ")\"><h3>" +
        questions[nowProblemNumber].options[id] +
        "</h3></button>\n" + "</div>\n" + "</div>\n" + "</div>\n";
}

const clearOptionButton = () =>{
    const optionArray = document.getElementById("optionArray");
    optionArray.innerHTML = "";
}
const showProblem = () => {
    jumpGame();
    document.getElementById("answerShow").style.display = "none";
    const problem = document.getElementById("problem");
    problem.innerHTML = questions[nowProblemNumber].question;

    clearOptionButton();
    for (let i = 0; i < questions[nowProblemNumber].options.length; i++) {
        createOptionButton(i);
    }
    const optionButtons = Array.from(document.getElementsByClassName("optionButtons"));
    for (let i = 0; i < questions[nowProblemNumber].options.length; i++) {
        optionButtons[i].style.color = "var(--color-black)";
    }
    updateScore();
    document.getElementById("optionArray").style.display = "block";
    document.getElementById("buttonArray").style.display = "block";
}
const gameRun = () => {
    //Begin
    document.getElementById("introMessage").style.display = "none";
    document.getElementById("gamePanel").style.display = "block";
    document.getElementById("countPanel").style.display = "flex";
    point = 0;
    nowProblemNumber = 0;
    ansProblemNumber = 0;
    updateScore();
    showProblem();
    jumpGame();
}


const answerProblem = () => {
    ++ansProblemNumber;
    const optionButtons = Array.from(document.getElementsByClassName("optionButtons"));
    let correct = optionButtons[questions[nowProblemNumber].answer].style.color === "var(--col-purple)";
    let answerString = questions[nowProblemNumber].options[questions[nowProblemNumber].answer];

    document.getElementById("buttonArray").style.display = "none";

    const answerReact = document.getElementById("answerReact");
    if(correct) {
        answerReact.innerHTML = "恭喜，答案正确&#128512;！答案是 " + answerString + "。";
        ++point;
    } else {
        answerReact.innerHTML = "抱歉，答案错误&#128517;！答案是 " + answerString + "。";
    }
    updateScore();

    //prepare next problem
    ++nowProblemNumber;
    const nextProblemButton = document.getElementById("nextProblemButton");
    if(nowProblemNumber === questions.length) {
        nextProblemButton.innerHTML = "<h3>结束游戏</h3>";
    } else {
        nextProblemButton.innerHTML = "<h3>下一道题</h3>";
    }
    document.getElementById("answerShow").style.display = "block";
}

const nextProblem = () => {
    if(nowProblemNumber === questions.length) {
        gameEnd();
    } else {
        showProblem();
    }
}

const gameEnd = () => {
    // end game
    document.getElementById("gamePanel").style.display = "none";
    document.getElementById("returnBox").style.display = "block";
}