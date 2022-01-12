let count=3;
let countElement= document.querySelector(".number");

console.log(countElement);

function suma(){
    count++;
    countElement.innerText= count + " like(s)";
    console.log(count);
}