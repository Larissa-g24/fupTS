let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};


let entradaB: number = +input();
let entradaT: number = +input();

let base1: number = entradaB;
let base2: number = entradaT;

let areaF: number = ((base1 + base2) * 70) / 2;
let metadeAareaRet: number = (160 * 70) / 2;

if (areaF > metadeAareaRet) {
    write("1");
} else if (areaF == metadeAareaRet) {
    write("0");
} else {
    write("2");
}