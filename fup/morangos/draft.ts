let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};


let comp1: number = +input();
let larg1: number = +input();

let comp2: number = +input();
let larg2: number = +input();

let area1: number = comp1 * larg1;
let area2: number = comp2 * larg2;

if (area1 > area2) {
    console.log(area1);
} else {
    console.log(area2);
}
