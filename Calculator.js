//crear una calculadora raíz cuadrada 
//create a square root calculator

let calculator = Number(prompt("Enter a number. The square root of your number will be returned."));
if(calculator < 50){
console.log("You're number is pretty small.")
}
else if(calculator == 50){
console.log("Perfectly balanced.. as all things should be.")
}

else if (calculator > 100){
console.log("I can tell that you like big numbers.")
}
console.log("Here is your number:" + " " + calculator * calculator)
