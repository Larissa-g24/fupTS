let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};


let lista: string[] = input().split(" ");
let a = +lista[0];
let b = +lista[1];
let fim: number = b;

let saida: string = "[ ";

while (a <= fim) {
     saida += a + " " + b + " ";
     a += 1;
     b -= 1;
    
}
console.log(saida + "]");



