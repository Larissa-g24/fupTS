let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let a = +input();
let b = +input();
let c = +input();

let p = (a + b + c) / 2;

let var1 = p * (p - a) * (p - b) * (p - c);

let area =  Math.sqrt(var1);

console.log(area.toFixed(2));