let cin : string[] = [];
try { cin = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => cin.length === 0 ? "" : cin.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};


let qntd: number = +input();
let vet: number[] = [];

for (let i = 0; i < qntd; i++) {
    vet.push(+input());
    write(vet[i]);
}







































// var readlineSync = require('readline-sync');
// let input = () : string => readlineSync.question();
// let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);


// let userName = readline();
// console.log('Hi ' + userName + '!');
// console.log("oi");

// let menor = 0;
// let maior = 100;
// let numero = Math.floor(Math.random() * 101);

// for (;;) {
//     write(`Chute um valor entre ${menor} e ${maior}`);
//     let chute = +input();
//     if (chute == numero) {
//         console.log("acertou"); 
//         break;
//     } if(numero < chute) {
//         write("errou, é menor. " ,"");
//         maior = chute;
//     } else {
//         write("Errou, é maior. " ,"");
//     menor = chute;
//     }
//     if (maior - menor == 2) {
//         console.log("voce perdeu o jogo");
//     }
// }