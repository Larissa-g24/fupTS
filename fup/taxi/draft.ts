let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};


let lista: number[] = input().split(" ").map(parseFloat);
let litroA: number = lista[0];
let litroG: number = lista[1];
let rendimentoA: number = lista[2];
let rendimentoG: number = lista[3];

let custoA: number = litroA / rendimentoA;
let custoG: number = litroG / rendimentoG;

if (custoG <= custoA) {
    write("G");
} else {
    write("A");
}