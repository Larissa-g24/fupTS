let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let N1: number = +input();
let N2: number = +input();
let operador: string = input();

if (operador == "/") {
    console.log(Math.floor(N1 / N2));
} else if (operador == "+") {
    console.log(Math.floor(N1 + N2));
} else if (operador == "-") {
    console.log(Math.floor(N1 - N2));
} else {
    console.log(Math.floor(N1 * N2));
}