let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

// let [a, b]: number[] = input().split(" ").map(Number);

let lista: number[] = input().split(" ").map(Number);
let a = lista[0];
let b = lista[1];

let diferenca: number = a - b;
console.log(Math.abs(diferenca));

















// let [a, b]: number[] = input().split(" ").map(Number);
// let diferenca: number = a - b;
// console.log(Math.abs(diferenca));