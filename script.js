// 生成一个选择题游戏
function generateQuiz(questions) {
    // 初始化得分和当前问题索引
    let score = 0;
    let currentQuestionIndex = 0;

    // 获取HTML元素
    const questionElement = document.getElementById("question");
    const choicesElement = document.getElementById("choices");
    const submitButton = document.getElementById("submit");
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
                    questionElement.innerText = "游戏结束";
                    choicesElement.innerHTML = "";
                    submitButton.disabled = true;
                } else {
                    showQuestion();
                }
            });
            choicesElement.appendChild(choiceElement);
        });
    }

    // 显示第一个问题
    showQuestion();
}

// 问题和答案
const questions = [
    {
        question: "液晶高分子是一种什么材料？",
        choices: ["金属", "塑料", "陶瓷"],
        answer: "塑料",
    },
    {
        question: "液晶高分子的发明者是谁？",
        choices: ["高锟", "高分子", "高句丽"],
        answer: "高锟",
    },
    {
        question: "液晶高分子有哪些应用？",
        choices: ["电子产品", "建筑", "医疗器械", "所有选项都正确"],
        answer: "所有选项都正确",
    },
];

// 生成游戏
generateQuiz(questions);