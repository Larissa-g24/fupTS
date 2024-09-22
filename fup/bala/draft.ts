let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};


let coordXA: number = +input();
let coordYA: number = +input();

let coordXB: number = +input();
let coordYB: number = +input();

let D: number = ((coordXB - coordXA) * (coordXB - coordXA)) + ((coordYB - coordYA) * (coordYB - coordYA));


console.log(Math.sqrt(D).toFixed(2));


// dAB² = (xB – xA)² + (yB – yA)²