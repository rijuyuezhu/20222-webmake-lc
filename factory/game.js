
// 对话框中的内容
const dialogue = [
    {
        name: '第一部分',
        content: 'Bocchi与虹夏 进入工厂 见到（工厂主）与工厂主对话 发现LCP纤维强度'
    },
    {
        name: 'Background',
        content: '自从杜邦科学家发现Kevlar以来已经有40年了，研究人员最初认为凯夫拉尔可能对轮胎有益。现在它是防弹背心的代名词。最大的工厂位于弗吉尼亚州里士满。'
    },
    {
        name: '虹夏',
        content: '看！是纺纱机欸！'
    },
    {
        name: '<br>',
        content: '（对防护材料的需求正在上升，在杜邦的旧砖厂，凯夫拉纺纱机正在不停地工作。）。'
    },
    {
        name: '<br>',
        content: '（声音的响声）。'
    },
    {
        name: '<br>',
        content: '（杜邦公司的比尔·哈里森（Bill Harrison）展示了数百个等待发货的凯夫拉线轴。它们在荧光灯下闪闪发光。）'
    },
    {
        name: '虹夏',
        content: '我不得不说，我没有准备好它是多么令人惊讶的美丽。我的意思是，它看起来像这些美丽的线轴，就像数千根金线或其他东西一样。这就像你要做一幅挂毯。'
    },
    {
        name: 'Bocchi',
        content: '哇！'
    },
    {
        name: '工厂主',
        content: '杜邦化学家斯蒂芬妮·克沃勒克（Stephanie Kwolek）于1965年发现了Kevlar。她很快意识到这种分子具有有趣的特性。它重量轻，耐热，强度是钢的五倍。起初，杜邦认为他们可以使用Kevlar来制造更耐用的汽车轮胎。然后他们意识到它可以做得更好。'
    },
    {
        name: '<br>',
        content: '(展开： Kevlar，是美国杜邦公司于1965年推出的一种芳香聚酰胺类合成纤维，发明者为波兰裔美国化学家斯蒂芬妮·克沃勒克。凯芙拉极佳的抗拉性能，其强度为同等质量钢铁的五倍，而密度仅为钢铁约五分之一（凯芙拉密度为每立方公分1.44克；钢铁密度为每立方公分7.859克），因此在70年代初被用于替代赛车轮胎中的部分钢材。此外，凯芙拉不会像钢铁般与氧气和水产生锈蚀。现在凯芙拉广泛用于船体、飞机、自行车轮胎、军用头盔、防弹背心等。其主要弱点为于碱性环境下，或暴露于氯及紫外线之下时，将渐渐被分解。)'
    },
    {
        name: '虹夏',
        content: '这种材料居然可以做轮胎！'
    },
    {
        name: 'Bocchi',
        content: '（内心活动：好玩）'
    },
    {
        name: '<br>',
        content: '（枪声，虹夏与Bocchi看向一边的展示台）'
    },
    {
        name: '工厂主',
        content: '（得意）它可以阻止一颗飞驰的子弹。'
    },
    {
        name: '虹夏',
        content: '哇！防弹衣！小bocchi你看，你想要的超强材料！'
    },
    {
        name: '帕特·菲茨杰拉德先生（弹道学专家）',
        content: '（以英语发言）这是凯夫拉尔弹道靶场。'
    },
    {
        name: '工厂主',
        content: '在工厂隔壁，弹道学专家帕特·菲茨杰拉德（Pat Fitzgerald）在一个小实验室里工作，他用来测试新的防护背心。墙上挂着为凯夫拉尔而献出生命的警察和士兵的照片。菲茨杰拉德刚刚向一个可以进入背心的绗缝面板发射了一发.44马格南子弹。它由 28 层织物制成，由凯夫拉线编织而成。'
    },
    {
        name: '工厂主',
        content: '看，这是我们射击的地方，你可以感觉到子弹就在那里。'
    },
    {
        name: '工厂主',
        content: '让我们看看如果我拿起这个冰锥进入背心会发生什么。'
    },
    {
        name: '虹夏',
        content: '嘶——'
    },
    {
        name: '工厂主',
        content: '正如你所看到的，没有穿透力——很多穿透力。它很容易穿过背心。'
    },
    {
        name: '工厂主',
        content: '令人惊讶的是，刚刚挡住子弹的凯夫拉垫无法挡住冰锥。但通过稍加修补，我们已经制造出更紧密的编织物，可以抵抗锋利的边缘。它制造了其他织物来抵抗不同的危险，比如火灾。'
    },
    {
        name: '身份不明的女人',
        content: '五、四、三、二、一。'
    },
    {
        name: '工厂主',
        content: '在距离刺伤实验室几扇门的地方，十几个丙烷火焰喷射器产生了一个火球，吞没了热人。他是一个六英尺高的人体模型，上面覆盖着122个热传感器。'
    },
    {
        name: '<br>',
        content: '（火灾爆发的声音）'
    },
    {
        name: '工厂主',
        content: '研究员Roger Perry使用Thermo-Man测试新的织物设计，这些设计由凯夫拉尔等已知材料制成。'
    },
    {
        name: '工厂主',
        content: '我们的梦想是一种轻质耐用的材料，可以承受从子弹到生物武器的一切。新技术正在酝酿之中。但凯夫拉已被证明是如此多才多艺和可靠，以至于专家预测它可能会以某种方式使用至少40年。'
    },
    {
        name: '虹夏/Bocchi',
        content: '好厉害！'
    },
    {
        name: '虹夏',
        content: '带我们去看看工艺流程吧~（离开实验室）'
    },
    {
        name: '第二部分',
        content: '参观工艺流程'
    },
    {
        name: '工厂主',
        content: '在LCP工厂，挤出成型工艺、注塑成型工艺和纤维成型工艺是主要的三个方法。'
    },
    {
        name: '虹夏',
        content: '那这工艺正好可以帮你做LCP琴弦！'
    },
    {
        name: '<br>',
        content: '（Part 1）'
    },
    {
        name: '工厂主',
        content: '来，看看这个——挤出成型：挤出成型是使高聚物的熔体(或粘性流体)在挤出机的螺杆或柱塞的挤压作用下通过一定形状的口模而连续成型, 所得的制品为具有恒定断向形状的连续型材。（展开：1845年英格兰的 Richard Brooman、Henry Bewley 研制成功了世界上第一台柱塞式挤出机，1876年美国的 William Kiel、JohnPrior 研制成功了第一台单螺杆挤出机。经过一个半世纪发展，挤出成型原理、技术不断发展，成型设备持续高效化、智能化、精密化，可适用的聚合物种类、制品形式、制品结构不断丰富，塑料制品总量的 60％以上采用挤出成型，广泛应用于生产、生活等各个方面。）'
    },
    {
        name: '工厂主',
        content: '目前约 50 % 的热塑性塑料制品是挤出成型的。'
    },
    {
        name: '虹夏',
        content: '哇，看！那就是挤出成型的机器吗？'
    },
    {
        name: '工厂主',
        content: '对的！基本上主要由三步组成：'
    },
    {
        name: '工厂主',
        content: '第一步——塑化：在在挤出机内将固体塑料加热并依靠塑料之间的内摩擦热使其成为粘流态物料。'
    },
    {
        name: '工厂主',
        content: '第二步——成型：在挤出机螺杆的旋转推挤作用下, 通过具有一定形状的口模, 粘流态物料成为连续的型材。'
    },
    {
        name: '工厂主',
        content: '第三步——定型：用适当的方法, 使挤出的连续型材冷却定型为制品。'
    },
    {
        name: 'Bocchi',
        content: '液…液压机…'
    },
    {
        name: '<br>',
        content: '（Part 2）'
    },
    {
        name: '工厂主',
        content: '第二种——注塑成型工艺。注塑成型过程包括合模、注射、保压、冷却、开模、顶出等复杂步骤，（展开：产品容易出现缩孔、银纹、翘曲、气泡、熔裂纹等缺陷），微孔注塑、纳米注塑、电磁注塑、发泡注塑、气辅注塑、振动注塑等新设备、新技术层出不穷。'
    },
    {
        name: '虹夏',
        content: '哇，这就是你说的微孔起泡注射设备耶！'
    },
    {
        name: '<br>',
        content: '（Part 3）'
    },
    {
        name: '工厂主',
        content: '纤维成型工艺——这就是本工厂制作采用的主要工艺咯。液晶高分子纤维分为溶致LCP纤维、热致LCP纤维两大类。（展开：溶致性LCP纤维具有耐化学腐蚀、耐气候老化、耐辐射等优异性能，热致LCP纤维也发展迅速，在耐紫外、染色兼容性、力学强度、耐磨性等方面表现优异。）为了优化LCP的拉丝工艺或进一步复合不同材料，出现了共混纤维工艺。我们将液晶高分子化合物熔融成熔体或制成浓溶液，然后经喷丝小孔挤出成细微细液条，将此微细液条冷凝、脱出溶剂，并在张力下进行一定牵伸比的拉伸以使高分子键在纤维中尽可能规则性地沿纤维长轴方向，最终定型而成纤维。'
    },
    {
        name: '虹夏',
        content: '哦，看到你桌上的设计图纸了——'
    },
    {
        name: '<br>',
        content: '（参观结束，Bocchi获得了想要的由纤维成型工艺做成的LCP琴弦~）'
    },
    {
        name: '虹夏/Bocchi',
        content: '真是不虚此行！'
    }
];

const jumpTo = (element) => {
    window.scrollTo({"behavior": "smooth", "top": element.offsetTop});
}
const gameEnd = () => {
    // end game
    document.getElementById("game").style.display = "none";
    document.getElementById("returnBox").style.display = "block";
}

let index = -1;
const diagContent = document.getElementById("diagContent");
// 更新对话框中的内容
function updateDialogue() {
    index++;
    if(index === dialogue.length-1) {
        document.getElementById("nextButton").innerHTML = "结束游戏";
    } else if(index === dialogue.length) {
        gameEnd();
        return ;
    }
    const currentDialogue = dialogue[index];
    const contentName = document.createElement("h2");
    contentName.class = "name";
    contentName.innerHTML = currentDialogue.name;
    diagContent.appendChild(contentName);
    const content = document.createElement("p");
    content.class = "content";
    content.innerHTML = currentDialogue.content;
    diagContent.appendChild(content);
    jumpTo(contentName)
}

const jumpGame = () => {
    const target = document.getElementById("game");
    window.scrollTo({"behavior": "smooth", "top": target.offsetTop});
}
const gameRun = () => {
    document.getElementById("introMessage").style.display = "none";
    document.getElementById("game").style.display = "block";
    jumpGame();
    updateDialogue();
}