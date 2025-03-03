let num1 = [];
let num2 = [];
let answer = 0;
let operandClicked = false;
let operand;
let display = document.querySelector(".display");

document.querySelectorAll(".operand").forEach((button) => {
    button.addEventListener("click", (event) => {
        operandClicked = true;
        operand = event.target.textContent.trim();
    });
});


document.querySelectorAll(".number").forEach((button) => {
  button.addEventListener("click", (event) => {
    let num = event.target.textContent.trim();
    if (!operandClicked) {
      if(num1.length==0){
        display.textContent = "";
      }
      num1.push(num);
      console.log("num1  ",num1);
    }else{
        if(num2.length==0)display.textContent = "";
        num2.push(num);
        console.log("num2  ",num2);
    }
    display.textContent+=num;
  });
});


document.querySelector(".equal").addEventListener("click", () =>{
    let first = 0;
    let second = 0;
    let pwr = 1;
    for(let i=num1.length-1; i>=0; i--){
        first += num1[i] * pwr;
        pwr *= 10;
    }
    pwr = 1;
    for(let i=num2.length-1; i>=0; i--){
        second += num2[i] * pwr;
        pwr *= 10;
    }
    console.log(first, "   ", second);
    switch(operand){
        case "+":
            answer = first + second;
            break;
        case "-":
            answer = first-second;
            break;
        case "/":
            answer = first/second;
            break;
        case "x":
            answer = first * second;
            break;
    }
    document.querySelector(".display").textContent = answer;
    clear();
});

const clear = () => {
    num1 = [];
    num2 = [];
    operand= "";
    operandClicked = false;
    answer = 0;
};

document.querySelector(".clear").addEventListener("click", () => {
    document.querySelector(".display").textContent = "0";
    clear();
});

document.querySelector(".back").addEventListener("click", () => {
    if(!operandClicked){
        num1.pop();
    }else{
        num2.pop();
    }
    display.textContent = display.textContent.slice(0, -1); 
});

document.querySelector(".ordrbtn").addEventListener("click", () => {
    alert("Coming Right Up!");
})