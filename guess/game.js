const games = [

    //problems 0
    [
        {
            description: "A. 手机天线",
            cor: 1,
            reason: " 显然是"
        },
        {
            description: "B. 电容",
            cor: 1,
            reason: "显然是"
        },
        {
            description: "C. 雷达天线屏蔽罩",
            cor: 1,
            reason: "显然是"
        }
    ],

    //problems 1
    [
        {
            description: "A. 航空航天材料",
            cor: 1,
            reason: "显然是"
        },
        {
            description: "B. 口香糖",
            cor: 0,
            reason: "显然不是"
        },
        {
            description: "C. 防弹衣",
            cor: 1,
            reason: "显然是"
        }
    ],

    //problem 2
    [
        {
            description: "A. 建筑承重",
            cor: 1,
            reason: "显然是"
        },
        {
            description: "B. 牵引绳缆",
            cor: 1,
            reason: "显然是"
        },
        {
            description: "C. 软糖",
            cor: 0,
            reason: "显然不是"
        }
    ],
    
    //Problem 3
    [
        {
            description: "A. 人造心脏",
            cor: 1,
            reason: "显然是"
        },
        {
            description: "B. 人造血管",
            cor: 1,
            reason: "显然是"
        },
        {
            description: "C. 防弹衣",
            cor: 1,
            reason: "显然是"
        }
    ],

    //Problem 4
    [
        {
            description: "A. 防火材料",
            cor: 1,
            reason: "显然是"
        },
        {
            description: "B. 棉纱手套",
            cor: 0,
            reason: "显然不是"
        },
        {
            description: "C. 消防沙",
            cor: 0,
            reason: "显然不是"
        }
    ],

    //Problem 5
    [
        {
            description: "A. 图像显示",
            cor: 1,
            reason: "显然是"
        },
        {
            description: "B. 信息存储",
            cor: 1,
            reason: "显然是"
        },
        {
            description: "C. 温度检测",
            cor: 1,
            reason: "显然是"
        }
    ]
];

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

    let percentShow = 0;
    if(ansProblemNumber === 0) {
        percentShow = 100;
    } else {
        percentShow = (100 * point / ansProblemNumber).toFixed(0);
    }
    percent.innerHTML = "正确率：" + percentShow.toString() + "%";
    problemNumber.innerHTML = "题目：" + (1 + nowProblemNumber).toString() + "/" + games.length.toString();
}

const jumpGame = () => {
    target = document.getElementById("countPannel");
    window.scrollTo({"behavior": "smooth", "top": target.offsetTop});
}

const showProblem = () => {
    jumpGame();
    document.getElementById("answerShow").style.display = "none";
    const optionImgs = Array.from(document.getElementsByClassName("option"));
    for(let i = 0; i < 3; i++) {
        optionImgs[i].src = "assets/" + nowProblemNumber.toString() + "/" + numberToABC(i) + ".png";
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
    const answerJudge = Array.from(document.getElementsByClassName("answerJudge"));
    const answerReason = Array.from(document.getElementsByClassName("answerReason"));
    for(let i = 0; i < 3; i++) {
        if(games[nowProblemNumber][i].cor) {
            answerJudge[i].innerHTML = numberToABC(i) + ". 运用了 LCP";
        } else {
            answerJudge[i].innerHTML = numberToABC(i) + ". 未运用 LCP";
        }
        answerReason[i].innerHTML = games[nowProblemNumber][i].reason;
    }
}

const answerProblem = () => {
    ++ansProblemNumber;
    let correct = 1;
    for(let i = 0; i < 3; i++)
        if(buttonStatus[i] !== games[nowProblemNumber][i].cor) {
            correct = 0;
            break;
        }
    document.getElementById("buttonArray").style.display = "none";
    
    const answerReact = document.getElementById("answerReact");
    if(correct) {
        answerReact.innerHTML = "恭喜，答案正确！";
        ++point;
    } else {
        answerReact.innerHTML = "抱歉，答案错误！";
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
    document.getElementById("gamePannel").style.display = "none";
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
    document.getElementById("gamePannel").style.display = "block";
    document.getElementById("countPannel").style.display = "flex";
    jumpGame();
    point = 0;
    nowProblemNumber = 0;
    ansProblemNumber = 0;
    updateScore();
    showProblem();
}
