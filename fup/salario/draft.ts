import { writevSync } from "fs";

let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};


let salarioAtual: number = parseFloat(input());
let novoSalario: number = 0;

if (salarioAtual <= 1000) {
    let aumento: number = (salarioAtual * 20 / 100);
    novoSalario = salarioAtual + aumento;
    write(novoSalario.toFixed(2));
} else if (salarioAtual <= 1500) {
    let aumento: number = (salarioAtual * 15 / 100);
    novoSalario = salarioAtual + aumento;
    write(novoSalario.toFixed(2));
} else if (salarioAtual <= 2000) {
    let aumento: number = (salarioAtual * 10 / 100);
    novoSalario = salarioAtual + aumento;
    write(novoSalario.toFixed(2));
} else {
    let aumento: number = (salarioAtual * 5 / 100);
    novoSalario = salarioAtual + aumento;
    write(novoSalario.toFixed(2));
}
