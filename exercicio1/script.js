const gols = [
    [27, 4, 20, 13, 14],
    [11, 15, 12, 8, 9],
    [5, 5, 12, 16, 4],
    [20, 33, 11, 12, 19],
    [3, 3, 4, 5, 10]
];

for(let j = 0; j < gols.length; j++) {
    console.log(`Jogador ${j+1}: ${gols[j]}`);
}




// for (let j in gols) {
//     let temporadas = `Jogador ${+j+1}: `
//     for (let g of gols[j]) {
//         temporadas += `${g} `
//     }
//     console.log(temporadas);
// };