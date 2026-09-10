const name = "Sampo";
const age = 21;
const favoriteAnimal = "Manuli";

const userAge = prompt("What is your age?")
const userName = prompt("What is your name?")

if (userAge < 18) {
    alert("You are under 18.");
}   
else if (userAge > 18) {
    alert("You are an adult!");
}

function greetUser(name) { console.log("Hello " + name + "!"); }
greetUser(userName);