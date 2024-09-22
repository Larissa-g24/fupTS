let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let dia: number = +input();
let hora: number = +input();

if (dia >= 2 && dia <= 6) {
    if (hora >= 8 && hora <= 11 || hora >= 14 && hora <= 17) {
        write("SIM"); 
    } else {
        write("NAO");
    }
}   
if (dia == 7) {
    if (hora >= 8 && hora <= 11) {
        write("SIM")
    } else {
        write("NAO");
    }
} 
if (dia == 1) {
    write("NAO");
}