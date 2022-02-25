const colors = ["green", "red", "blue", "brown", "yellow", "grey"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    
// get random number between 0 - 3
    const randomNumber = Math.round(Math.random() * 5);
    console.log(randomNumber)
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})      