const squadre = [
    {
      nome: "inter",
      falliSubiti: Math.floor(Math.random() * 100) + 1,
      puntiFatti: Math.floor(Math.random() * 100) + 1,
    },
    {
      nome: "milan",
      falliSubiti: Math.floor(Math.random() * 100) + 1,
      puntiFatti: Math.floor(Math.random() * 100) + 1,
    },
    {
      nome: "juventus",
      falliSubiti: Math.floor(Math.random() * 100) + 1,
      puntiFatti: Math.floor(Math.random() * 100) + 1,
    },
];
  
const NomieFalli = squadre.map((squadra) => {
    return { nome: squadra.nome, falliSubiti: squadra.falliSubiti };
});
  
console.log(NomieFalli);


