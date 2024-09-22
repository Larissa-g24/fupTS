let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};


let xuxa: string[] = input().split("");
let lista: string[] = [];
let resultado: string = ""

for (let i = 0; i < xuxa.length; i++) {
    lista.unshift(xuxa[i]);
}
resultado = lista.join("");
write(resultado);