let x = 0;

const Timer = setTimeout(() => {
  console.log("O x é 0");
}, 1500);

x = 5;

if (x > 0) {
  clearTimeout(Timer);
  console.log("O x passou de 0");
}

const myInterval = setInterval(() => {
  console.log("Imprimindo intervalo");
}, 500);

setTimeout(() => {
  console.log("Não precisamos mais repetir");
  clearInterval(myInterval);
}, 1500);
