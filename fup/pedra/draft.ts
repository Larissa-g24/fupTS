let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

class gato {
    nome: string;
    idade:number; 
    
    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }
}

// class Aluno { //classe
//     nome: string; // atributos
//     idade: number;
//     altura: number;

//     constructor(nome: string, idade: number) {
//         this.nome = nome;
//         this.idade = idade;
//         this.altura = 0;
//     }
// }
// let italo = new Aluno("Italo", 18); //objeto
// italo.altura = 1.90;
// console.log(italo);
// let luana = new Aluno("Luana", 19);
// console.log(luana);







