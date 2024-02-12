let section;
let jsonArr = [
    article1 = {
        img: "../src/våt uggl.jpg",
        caption: "bildtext",
        text: "dfjkasdfkjadskjfasdklfsndajaksvdhixczjnkasjdfn"
    },

    article1 = {
        img: "../src/uggl.PNG",
        caption: "bildtext",
        text: "dfjkasdfkjadskjfasdklfsndajaksvdhixczjnkasjdfn"
    },

    article1 = {
        img: "../src/våt uggl.jpg",
        caption: "bildtext",
        text: "dfjkasdfkjadskjfasdklfsndajaksvdhixczjnkasjdfn"
    },

    article1 = {
        img: "../src/våt uggl.jpg",
        caption: "bildtext",
        text: "dfjkasdfkjadskjfasdklfsndajaksvdhixczjnkasjdfn"
    }
];

window.onload = () => {
    section = document.getElementById("artiklar");
    addArticles();
}

function addArticles() {
    for (let i = 0; i <= 4; i++) {
        section.innerHTML += "<article><figure><img src=\"" + jsonArr[i].img + "\"><figcaption>" + jsonArr[i].caption + "</figcaption></figure><p>" + jsonArr[i].text + "</p></article>"
    }
}