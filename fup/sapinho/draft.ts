let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};


let profundidade: number = +input();
let salto: number = +input();
let escorrega: number = +input();

let posiçaoSapo: number = 0;

while (posiçaoSapo <= profundidade) {
    let saida: string = posiçaoSapo + " ";
    posiçaoSapo += salto;

    if (posiçaoSapo >= profundidade ) {
       saida += "saiu";
       console.log(saida);
       break;
    } else {
        saida += posiçaoSapo;
        console.log(saida);
        posiçaoSapo -= escorrega;
    }
}
 
