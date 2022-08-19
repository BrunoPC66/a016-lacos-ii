let num = +prompt('Digite um número para obter a multiplicação dele de 1 a 10:');
let multi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let m in multi) {
    let tabuada = num*multi[m]
    console.log(`${num} x ${multi[m]} = ${tabuada}`);
};
