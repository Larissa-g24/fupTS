let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let entrada: number[] = input().split(" ").map(Number); 
let x = entrada[0];
let n = entrada[1];

let contador: number = 0;
let lista: number[] = [];

for (let i = 0; i < n; i++) {
    lista.push(+input());
    
    if(lista[i] == x) { 
        contador++;
    }
}
 console.log(contador);