// 生成一个选择题游戏
let point = 0;
let nowProblemNumber = 0;
let ansProblemNumber = 0;
const questions = [
    {
        question: "LCP的分子结构是什么？",
        options: ["随机线圈", "重复单元的长链", "交联链","芳香环"],
        answer: 3,
    },
    {
        question: "LCP的熔点是多少？",
        options: ["低于100°C", "100-200摄氏度", " 200-300摄氏度","300°C以上"],
        answer: 2,
    },
    {
        question: "LCP是热塑性聚合物还是热固性聚合物？",
        options: ["热塑性", "热固性"],
        answer: 0,
    },
    {
        question: "LCP的一些常见应用是什么？",
        options: ["汽车零部件", "电子元件","航空航天组件","以上所有内容"],
        answer: 3,
    },
    {
        question: "在电子应用中使用LCP的主要优势是什么？",
        options: ["低介电常数", "高热导率","高抗拉强度","以上均无"],
        answer: 0,
    },
    {
        question: "LCP通常使用哪种类型的处理？",
        options: ["注塑成型", "挤压","吹塑成型","压缩成型"],
        answer: 0,
    },
    {
        question: "使用无导线心脏起搏器的主要缺点是什么？",
        options: ["高成本", "耐化学性差","热稳定性低","以上均无"],
        answer: 0,
    },
    {
        question: "LCP与其他热塑性塑料有何不同？",
        options: ["熔点更高", "具有更复杂的分子结构","具有更好的尺寸稳定性","以上所有内容"],
        answer: 3,
    },
    {
        question: "LCP是可回收材料吗？",
        options: ["是", "否"],
        answer: 0,
    },
    {
        question: "决定LCP财产的主要因素是什么？",
        options: ["分子量", "分子结构","加工条件","以上均无"],
        answer: 1,
    },
    {
        question: "LCP具有记忆功能的基础是什么？",
        options: ["动态共价键", "静态共价键","动态离子键","静态离子键"],
        answer: 0,
    },
    {
        question: "LCP具有变色的能力的原因是什么？",
        options: ["液晶分子具有类似于金属键的电子海", "液晶分子的共价键震动范围广","液晶分子成周期性排列","液晶分子之间形成供电子流动离域π键"],
        answer: 2,
    },
    {
        question: "无机纤维与LCP基底之间的相容性差，极大提高了LCP的抗冲击能力，这属于LCP在哪一方面的应用？",
        options: ["通信领域", "生物医用领域","复合材料领域","光学器件领域"],
        answer: 2,
    },
    {
        question: "环氧中引入液晶后，材料的热导是传统环氧热导率的1.5倍，这属于LCP在哪一方面的应用？",
        options: ["通信领域", "生物医用领域","复合材料领域","导热领域"],
        answer: 3,
    },
    {
        question: "研究表明，许多生物组织具有液晶态有序结构。LCP具有高强度、高模量、易加工、自增强等优异性能，可以用于人工肌肉、人工骨骼等方面。这属于LCP在哪一方面的应用？",
        options: ["通信领域", "生物医用领域","复合材料领域","导热领域"],
        answer: 1,
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
        jumpGame();
    }
}

const gameEnd = () => {
    // end game
    document.getElementById("gamePanel").style.display = "none";
    document.getElementById("returnBox").style.display = "block";
}