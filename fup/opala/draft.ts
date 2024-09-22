let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let velo = +input();
let tempM = +input();
let cons = +input();

let tempH = tempM / 60;
let dp = velo * tempH;
let desempenho = dp / cons;

console.log(desempenho.toFixed(2));