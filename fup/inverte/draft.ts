import { writeHeapSnapshot } from "v8";

let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let entrada: string = input();

if (entrada >= "a" && entrada <= "z") {
    write(entrada.toUpperCase()); // transforma minusculo em maiusculo
} else if (entrada >= "A" && entrada <= "Z") {
    write(entrada.toLowerCase()); // transforma maiusculo pra minusculo
} else {
    write(entrada);
}


