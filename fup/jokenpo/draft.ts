let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};


let jog1: string = input();
let jog2: string = input();

if (jog1 == "P") {
    if (jog2 == "R") {
        write("jog1");
    } else if (jog2 == "P") {
        write("empate");
    } else {
        write("jog2");
    }
} 
else if (jog1 == "R") {
    if (jog2 == "R") {
        write("empate");
    } else if (jog2 == "P") {
        write("jog2");
    } else {
        write("jog1");
    }
}
else if (jog1 == "S") {
    if (jog2 == "R") {
        write("jog2");
    } else if (jog2 == "P") {
        write("jog1");
    } else {
        write("empate");
    }
}
