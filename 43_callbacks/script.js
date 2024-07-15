const exibir = (num) => {
  console.log("A operação resultou em: " + num);
}


const soma = (a, b, callback) => {
  let op = a + b;
  callback(op)
};

const multiplicacao = (a, b, cb) => {
  let op = a * b;
  cb(op)
};

soma(2, 2, exibir)

multiplicacao(10, 3, exibir);

