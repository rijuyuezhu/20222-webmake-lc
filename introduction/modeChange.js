let mode = 1;
const conciseClass = Array.from(document.getElementsByClassName("concise"));
const moreDetailsClass = Array.from(document.getElementsByClassName("more-details"));
const button = document.getElementById("modeChangeButton");

const makeNone = (element) => {
    element.style.display = "none";
}

const makeBlock = (element) => {
    element.style.display = "block";
}

const changeMode = () => {
    if (mode === 1) {
        mode = 2;
        conciseClass.forEach(makeNone);
        moreDetailsClass.forEach(makeBlock);
        button.innerHTML = "内容：详细";
    } else {
        mode = 1;
        conciseClass.forEach(makeBlock);
        moreDetailsClass.forEach(makeNone);
        button.innerHTML = "内容：简约";
    }
}