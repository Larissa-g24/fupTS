let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let letra: string = input();
let num: number = +input();

if (letra == "c") {
    write(Math.ceil(num));
} else if (letra == "f") {
    write(Math.floor(num));
} else {
    write(Math.round(num));
}