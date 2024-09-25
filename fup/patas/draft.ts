let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};


let chuteChicoB: number = +input();
let chuteCebolinha: number = +input();
let qtd: number = +input();

let soma: number = 0;

for (let i = 0; i < qtd; i++) {
    let letra: string = input();
    if (letra == "v" || letra == "c") {
        soma += 4;
    } else if (letra == "g") {
        soma += 2;
    }
}

let absChico: number = Math.abs(soma - chuteChicoB);
let absCebolinha: number = Math.abs(soma - chuteCebolinha);

if ( absChico == absCebolinha) {
    write(soma);
    write("empate");
} else if (absChico > absCebolinha) {
    write(soma);
    write("Cebolinha");
} else {
    write(soma);
    write("Chico Bento");
}


