let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let P: number = +input();
let D_A: number = +input();
let D_P: number = +input();

if (P == 0) {
    if ((D_A + D_P) % 2 == 0) {
    write(0);
} else {
    write(1);
}
} else {
    if ((D_P + D_A) % 2 == 0) {
    write(1);
} else {
    write(0);
}
}
