let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

// function maiornumero(n1: number, n2: number): number {
//     return Math.max();
// }

// let num1: number = +input();
// let num2: number = +input();

// console.log(maiornumero(n1, n2));

let N1: number = +input();
let N2: number = +input();

//N1 > N2? console.log(N1): console.log(N2)

if (N1 > N2) {
    console.log(N1);
} else {
    console.log(N2);
}