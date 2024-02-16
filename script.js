let section;

let jsonArr = [
    article1 = {
        img: "../src/våtUggl.jpg",
        alt: "uggla",
        caption: "bild tsda sdsad ext",
        txt: "Bild på en uggla som sitter och ugglar"
    },

    article1 = {
        img: "../src/uggl.PNG",
        alt: "uggla2",
        caption: "bildtext 2",
        txt: "dfjkas dfkjads kjfasdklfs dajaksvdh ixczjnk asjdfn"
    },

    article1 = {
        img: "../src/våtUggl.jpg",
        alt: "uggla3",
        caption: "bildtext 3",
        txt: "dfjk asdfkjadskjfasdk lfsndajak svdh ixczjn kasj dfn"
    },

    article1 = {
        img: "../src/våtUggl.jpg",
        alt: "uggla4",
        caption: "bildtext 4",
        txt: "dfjk asdfkjadsk jfasdklfs ndajaksvdhi xczj nkasjdfn"
    }
];
//En JSON array som jag använder för att lagra informationen av artiklarna som ska skapas dynamiskt. Arrayen innehåller objekt som har ett namn och ett antal värde tillhörande sig i form av strängar som innehåller den text information eller bild källa som ska användas i den artikeln

window.onload = () => {
    section = document.getElementById("artiklar"); //Sektionen där jag ska placera in mina artiklar
    addArticles(); //Anropar direkt funktionen som skapar artiklarna
}

function addArticles() {
    //Funktionen innehåller en for-loop som loopar igenom alla JSON objek i jsonArr för att använda informationen som just det objektet har för att skapa artikeln 
    for (let i = 0; i < jsonArr.length; i++) {
        const article = document.createElement("article");
        const fig = document.createElement("figure");
        const img = document.createElement("img");
        const caption = document.createElement("figcaption");
        const text = document.createElement("p");
        //CreateElement() används för att skapa html element.

        text.innerText = jsonArr[i].txt;

        caption.innerText = jsonArr[i].caption;

        img.src = jsonArr[i].img;
        img.alt = jsonArr[i].alt;
        //Innehållet och andra attribut sätts till rätt värde genom att välja värdet av ett attribut av det JSON objektet som har index numret som for loopen är på

        fig.appendChild(img);
        fig.appendChild(caption);

        article.appendChild(fig)
        article.appendChild(text);
        //AppendChild() används för att nestla elementen rätt, när de skapades innan så ligger de bara på rad utanför bodyn vilket är varför vi måste placera in elementen så att rätt barn hamnar med rätt föräldrar

        section.appendChild(article);
        //slutligen så nestlar vi article i sectionen som håller artiklarna vilket kommer göra att de finns på rätt plats.
    }
}