function displayCard() {
    document.getElementById("clcCard").classList.toggle("display");
}
let main = document.querySelector('main');

main.addEventListener("click", function () {
    console.log("Delete");
    document.querySelector('#clcCard').classList.add("display");
}, true);

let cards = document.querySelectorAll('.card');

document.querySelector('#sort').addEventListener("change", function () {
    if (this.value == "inProg") {
        for (let i = 0; i < cards.length; i++) {
            if (cards[i].classList.contains("start"))
                cards[i].classList.add('display');
        }
    }
    else if (this.value == "pastSem") {
        console.log("This sem");
        for (let i = 0; i < cards.length; i++) {
            if (cards[i].classList.contains("past"))
                cards[i].classList.add('display');
        }
    }
    else {
        for (let i = 0; i < cards.length; i++) {
                cards[i].classList.remove('display');
        }
    }
});
