let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let A = +input();
let B = +input();

let soma = A + B;
let sub = A - B;
let mult = A * B;
let div = A / B;
let resto = A % B;

console.log(soma);
console.log(sub);
console.log(mult);
console.log(div.toFixed(2));
console.log(resto);