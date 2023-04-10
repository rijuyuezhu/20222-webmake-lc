const games = [

    //problems 0
    [
        {
            description: "A. 手机天线",
            cor: 1,
        },
        {
            description: "B. 电容",
            cor: 1,
        },
        {
            description: "C. 雷达天线屏蔽罩",
            cor: 1,
        }
    ],

    //problems 1
    [
        {
            description: "A. 航空航天材料",
            cor: 1,
        },
        {
            description: "B. 口香糖",
            cor: 0,
        },
        {
            description: "C. 防弹衣",
            cor: 1,
        }
    ],

    //problem 2
    [
        {
            description: "A. 建筑承重",
            cor: 1,
        },
        {
            description: "B. 牵引绳缆",
            cor: 1,
        },
        {
            description: "C. 软糖",
            cor: 0,
        }
    ],
    
    //Problem 3
    [
        {
            description: "A. 人造心脏",
            cor: 1,
        },
        {
            description: "B. 人造血管",
            cor: 1,
        },
        {
            description: "C. 防弹衣",
            cor: 1,
        }
    ],

    //Problem 4
    [
        {
            description: "A. 防火材料",
            cor: 1,
        },
        {
            description: "B. 棉纱手套",
            cor: 0,
        },
        {
            description: "C. 消防沙",
            cor: 0,
        }
    ],

    //Problem 5
    [
        {
            description: "A. 图像显示",
            cor: 1,
        },
        {
            description: "B. 信息存储",
            cor: 1,
        },
        {
            description: "C. 温度检测",
            cor: 1,
        }
    ]
];

const answersReason = [

    //problem 0
    "LCP 具有优秀的<b>介电性能</b>，可实现对信息<b>高速传输、低时延</b>的要求。",

    //problem 1
    "LCP 具有优异的<b>机械性能</b>，突出的耐热性能，极小的膨胀系数，低的收缩率和高的稳定性，绝缘性和耐化学腐蚀性等特点，是一种优秀的<b>工程材料</b>。",

    //problem 2
    "LCP具有良好的机修强度和<b>抗拉伸的特性</b>，且具有记忆功能，能在一定程度上回弹回初始状态。",

    //problem 3
    "LCP 具备无毒性、耐腐蚀性、力学性能长期保持率高、易加工成各种形状、生物相容强等特征，可作为<b>生物医用材料</b>，在取代、修复生物组织或器官功能领域应用广泛。",

    //problem 4
    "LCP 具有良好的<b>耐高温特性</b>。一些 LCP 热塑性弹性体可耐高温，但是在高温下易<b>软化</b>，故应用受到限制。",

    //problem 5
    "LCP 具有优秀的介电常数、介电损耗、插损等性能，在<b>信息检测和传导</b>领域表现出优异的物理化学性质。"
];

const Pictures = [];

const buttons = Array.from(document.getElementsByClassName("optionButtons"));
let buttonStatus = [0, 0, 0];
const changeButtonStatus = (id) => {
    if(buttonStatus[id] === 0) {
        buttons[id].innerHTML = "<h3>退选该项</h3>";
        buttons[id].style.color = "red";
        buttonStatus[id] = 1;
    } else {
        buttons[id].innerHTML = "<h3>选择该项</h3>";
        buttons[id].style.color = "var(--col-purple)";
        buttonStatus[id] = 0;
    }
}

let point = 0;
let nowProblemNumber = 0;
let ansProblemNumber = 0;

const numberToABC = (number) => {
    switch(number) {
        case 0:
            return 'A';
        case 1:
            return 'B';
        case 2:
            return 'C';
        default:
            return null;
    }
}

const updateScore = () => {
    const score = document.getElementById("scoreShow");
    const percent = document.getElementById("percentShow");
    const problemNumber = document.getElementById("problemNumber");
    score.innerHTML = "得分：" + point.toString();

    let percentShow;
    if(ansProblemNumber === 0) {
        percentShow = 100;
    } else {
        percentShow = (100 * point / ansProblemNumber).toFixed(0);
    }
    percent.innerHTML = "正确率：" + percentShow.toString() + "%";
    problemNumber.innerHTML = "题目：" + (1 + nowProblemNumber).toString() + "/" + games.length.toString();
}

const jumpGame = () => {
    let target = document.getElementById("countPanel");
    window.scrollTo({"behavior": "smooth", "top": target.offsetTop});
}

const showProblem = () => {
    jumpGame();
    document.getElementById("answerShow").style.display = "none";
    const optionImgs = Array.from(document.getElementsByClassName("option"));
    for(let i = 0; i < 3; i++) {
        if(optionImgs[i].hasChildNodes)
            optionImgs[i].removeChild(optionImgs[i].firstChild);
        optionImgs[i].appendChild(Pictures[nowProblemNumber][i]);
    }
    const optionDes = Array.from(document.getElementsByClassName("optionDescription"));
    for(let i = 0; i < 3; i++) {
        optionDes[i].innerHTML = games[nowProblemNumber][i].description;
    }
    for(let i = 0; i < 3; i++) {
        if(buttonStatus[i] === 1)
            changeButtonStatus(i);
    }
    updateScore();
    document.getElementById("buttonArray").style.display = "block";
}

const generateReason = () => {
    const answerReason = document.getElementById("answerReason");
    answerReason.innerHTML = answersReason[nowProblemNumber];
}

const answerProblem = () => {
    ++ansProblemNumber;
    let correct = 1;
    let answerString = "";
    for(let i = 0; i < 3; i++) {
        if(buttonStatus[i] !== games[nowProblemNumber][i].cor) {
            correct = 0;
        }
        if(games[nowProblemNumber][i].cor)
            answerString += numberToABC(i);
    }
    document.getElementById("buttonArray").style.display = "none";
    
    const answerReact = document.getElementById("answerReact");
    if(correct) {
        answerReact.innerHTML = "恭喜，答案正确&#128512;！答案是 " + answerString + "。";
        ++point;
    } else {
        answerReact.innerHTML = "抱歉，答案错误&#128517;！答案是 " + answerString + "。";
    }
    generateReason();
    updateScore();

    //prepare next problem
    ++nowProblemNumber;
    const nextProblemButton = document.getElementById("nextProblemButton");
    if(nowProblemNumber === games.length) {
        nextProblemButton.innerHTML = "<h3>结束游戏</h3>";
    } else {
        nextProblemButton.innerHTML = "<h3>下一道题</h3>";
    }
    document.getElementById("answerShow").style.display = "block";
}

const gameEnd = () => {
    // end game
    document.getElementById("gamePanel").style.display = "none";
    document.getElementById("returnBox").style.display = "block";
}


const nextProblem = () => {
    if(nowProblemNumber === games.length) {
        gameEnd();
    } else {
        showProblem();
    }
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

const initialize = () => {
    for(let i = 0; i < games.length; i++) {
        const picList = [];
        for(let j = 0; j < 3; j++) {
            let img = new Image();
            img.src = "assets/" + i.toString() + "/" + numberToABC(j) + ".png";
            img.alt = games[i][j].description;
            img.style.width = "80%";
            picList.push(img);
        }
        Pictures.push(picList);
    }
}


initialize();