let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let C: number = +input();
let B: number = +input();
let G: number = +input();
let M: number = +input();

let QuantF: number = B + G + M

let quantV: number = Math.ceil(QuantF / C);
write(quantV);