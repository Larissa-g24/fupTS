let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

// colocar em string
let hora = input();
let min = input();
let dia = input(); 
let mes = input();
let ano = input();

// preencher dois digitos se faltar com zero
let vhr = hora.padStart(2, "0");
let vmin = min.padStart(2, "0");
let vdia = dia.padStart(2, "0");
let vmes = mes.padStart(2, "0");

// tirar caracteres do inicio
let vano;

if (ano >= 1000) { // tirar dois
  vano = ano.slice(2);
} else { // tirar um
  vano = ano.slice(1);
}

console.log(vhr + ":" + vmin + " " + vdia + "/" + vmes + "/" + vano);