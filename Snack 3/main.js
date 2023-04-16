function arrayAndNumber(array, n1, n2) {

    const nuovoArray = array.filter((elemento, indice) => {
      return indice >= n1 && indice <= n2;
    });
  
    return nuovoArray;
}

let città = [
    "milano",
    "venezia",
    "torino",
    "roma",
    "napoli",
    "palermo",
]

console.log(arrayAndNumber(città, 1, 4))