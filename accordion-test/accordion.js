const check1 = document.getElementById("check1");
const text1 = document.getElementById("text1");
const arrow1 = document.getElementById("arrow1");

check1.onclick = () => {
    text1.classList.toggle("open");
    arrow1.classList.toggle("open");
};

const check2 = document.getElementById("check2");
const text2 = document.getElementById("text2");
const arrow2 = document.getElementById("arrow2");

check2.onclick = () => {
    text2.classList.toggle("open");
    arrow2.classList.toggle("open");
};

const check3 = document.getElementById("check3");
const text3 = document.getElementById("text3");
const arrow3 = document.getElementById("arrow3");

check3.onclick = () => {
    text3.classList.toggle("open");
    arrow3.classList.toggle("open");
};