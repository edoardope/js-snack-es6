const bicidacorsa = [
    {
        nome: 'De Rosa Merak 2021',
        peso: 55

    }, {
        nome: 'BMC Teammachine SLR01 2021',
        peso: 60
    }, {
        nome: 'bici 3',
        peso: 44
    }
]

let nome = document.querySelector("#nome")
let peso = document.querySelector("#peso")

let biciPesoMinore = bicidacorsa[0];

for (let i = 1; i < bicidacorsa.length; i++) {
  const { peso } = bicidacorsa[i];
  if (peso < biciPesoMinore.peso) {
    biciPesoMinore = bicidacorsa[i];
  }
}

console.log(biciPesoMinore);

nome.innerHTML = `Nome: ${biciPesoMinore.nome}`;
peso.innerHTML = `Peso: ${biciPesoMinore.peso}kg`;