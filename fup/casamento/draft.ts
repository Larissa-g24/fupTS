let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};


let lista: number[] = input().split(" ").map(Number);

let refMenor: number = lista[0];
let refMaior: number = lista[0];

for (let i = 1; i < lista.length; i++) {
    if (lista[i] < refMenor) {
        refMenor = lista[i];
    } else if (lista[i] > refMaior) {
        refMaior = lista[i];
    }
} 
write(refMenor + refMaior);