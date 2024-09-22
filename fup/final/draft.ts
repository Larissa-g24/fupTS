let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};


let n1: number = +input();
let n2: number = +input();
let notafinal: number = +input();

let media: number = (n1 + n2) / 2;
let mediafinal: number = (media + notafinal) / 2;

if (media >= 7) {
    write("aprovado");
} else if (media < 4) {
    write("reprovado");
} else if (media >= 4 && media <= 7) {
    if (mediafinal >= 5) {
        write("aprovado na final");
    } else {
        write("reprovado na final");
    }

}