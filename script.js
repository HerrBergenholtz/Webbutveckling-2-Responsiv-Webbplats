let section;
let jsonArr = [
    article1 = {
        img: "../src/våt uggl.jpg",
        alt: "uggla",
        caption: "bild tsda sdsad ext",
        txt: "dfjkasdfk jadskjfasdkl fsndajaksvdhix czjnkasjdfn"
    },

    article1 = {
        img: "../src/uggl.PNG",
        alt: "uggla2",
        caption: "bildtext",
        txt: "dfjkas dfkjads kjfasdklfs dajaksvdh ixczjnk asjdfn"
    },

    article1 = {
        img: "../src/våt uggl.jpg",
        alt: "uggla3",
        caption: "bildtext",
        txt: "dfjk asdfkjadskjfasdk lfsndajak svdh ixczjn kasj dfn"
    },

    article1 = {
        img: "../src/våt uggl.jpg",
        alt: "uggla4",
        caption: "bildtext",
        txt: "dfjk asdfkjadsk jfasdklfs ndajaksvdhi xczj nkasjdfn"
    }
];

window.onload = () => {
    section = document.getElementById("artiklar");
    addArticles();
}

function addArticles() {
    for (let i = 0; i < 4; i++) {
        const article = document.createElement("article");
        const fig = document.createElement("figure");
        const img = document.createElement("img");
        const caption = document.createElement("figcaption");
        const text = document.createElement("p");

        text.innerText = jsonArr[i].txt;
        caption.innerText = jsonArr[i].caption;
        img.src = jsonArr[i].img;
        img.alt = jsonArr[i].alt;
        fig.appendChild(img);
        fig.appendChild(caption);
        article.appendChild(fig)
        article.appendChild(text);
        section.appendChild(article);

        //section.innerHTML += "<article><figure><img src=\"" + jsonArr[i].img + "\"><figcaption>" + jsonArr[i].caption + "</figcaption></figure><p>" + jsonArr[i].text + "</p></article>"
    }
}