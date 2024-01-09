/* eslint-disable */
import "bootstrap";
import "./style.css";

let iconos = ["♦", "♥", "♠", "♣"];
let numeros = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

function iconosAleatorios() {
  let numero = Math.floor(Math.random() * iconos.length);
  return numero;
}

function numerosAleatorios() {
  let numero = Math.floor(Math.random() * numeros.length);
  return numero;
}

let iconoArriba = document.querySelector(".icono-arriba");
let obtenerNumero = document.querySelector(".numero");
let iconoAbajo = document.querySelector(".icono-abajo");
let icono = iconos[iconosAleatorios()];
let numero = numeros[numerosAleatorios()];

iconoArriba.innerHTML = icono;
obtenerNumero.innerHTML = numero;
iconoAbajo.innerHTML = icono;

if (icono == "♦" || icono == "♥") {
  iconoArriba.style.color = "red";
  iconoAbajo.style.color = "red";
} else {
  iconoArriba.style.color = "black";
  iconoAbajo.style.color = "black";
}
