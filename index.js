const modulos = document.querySelectorAll(".modulo");

let contadores = [];

modulos.forEach((m, i) => {
  contadores[i] = 0;
  m.addEventListener("click", () => {
    m.innerHTML = `Modulo ${i + 1} clickeado ${++contadores[i]} veces`;
  });
});

let numeroBinario = (numero) => {
  if (numero === 0) return "0";
  if (numero === 1) return "1";

  return numeroBinario(Math.floor(numero / 2)) + (numero % 2).toString();
};

console.log(numeroBinario(1));
console.log(numeroBinario(2));
console.log(numeroBinario(3));
console.log(numeroBinario(4));
console.log(numeroBinario(5));
console.log(numeroBinario(6));
console.log(numeroBinario(7));
console.log(numeroBinario(8));
console.log(numeroBinario(9));
console.log(numeroBinario(10));
console.log(numeroBinario(11));
console.log(numeroBinario(12));
console.log(numeroBinario(13));
console.log(numeroBinario(14));
console.log(numeroBinario(15));
console.log(numeroBinario(16));
