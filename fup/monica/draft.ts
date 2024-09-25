let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};


let M: number = +input();
let A: number = +input();
let B: number = +input();

let outroF: number = M - (A + B);

if (outroF > A && outroF > B) {
    write(outroF);
} else if (A > B && A > outroF) {
    write(A);
} else {
    write(B);
}
