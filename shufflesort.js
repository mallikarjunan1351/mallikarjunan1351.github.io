// Number Array:
var Number = [1,2,3,4,5,6,7,8,9];
const bgColor = ['#7896a6', '#4e8cac', '#35444e', '#4e8cac', '#35444e', '#bfbfbf', '#bfbfbf', '#7997a7', '#35444e'];

const shuffleCard = () => {
    Number.sort(() => Math.random() - 0.5);
    generateCards(Number);
};

const sortCard = () => {
    Number.sort();
    generateCards(Number);
};

const generateCards = (numbers) => {
    // Reset Number Card
    document.getElementById("numberCard").innerHTML = "";
    // Create Number Card
    numbers.forEach(number => {
    document.getElementById("numberCard").innerHTML += '<div class="card" style="background:'+bgColor[number-1]+';border-left:5px solid '+bgColor[number-1]+'"><div class="container"><h1><b>'+number+'</b></h1></div></div>';
    });
}

// IIFE
(() => {
    generateCards(Number);
})()