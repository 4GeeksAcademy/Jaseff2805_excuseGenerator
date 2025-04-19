import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  const who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  const action = ['ate', 'peed on', 'crushed', 'broke'];
  const what = ['my homework', 'my phone', 'the car', 'the TV'];
  const when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

  const generateExcuse = () => {
    const whoIndex = Math.floor(Math.random() * who.length); //Math.floor y Math.random se utilizan para la generación de números aleatorios
    const actionIndex = Math.floor(Math.random() * action.length); //Math.floor y Math.random se utilizan para la generación de números aleatorios
    const whatIndex = Math.floor(Math.random() * what.length); //Math.floor y Math.random se utilizan para la generación de números aleatorios
    const whenIndex = Math.floor(Math.random() * when.length); //Math.floor y Math.random se utilizan para la generación de números aleatorios

    return `${who[whoIndex]} ${action[actionIndex]} ${what[whatIndex]} ${when[whenIndex]}`; //Sustituye a al forma básica de concatenar strings (+)

  }
  document.getElementById("excuse").innerHTML = generateExcuse();
};


