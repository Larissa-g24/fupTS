import { log } from "console";

let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let n1: number = +input();
let n2: number = +input();
let n3: number = +input();

if (n1 == n2 && n2 == n3) {
    write(3);
} else if (n1 == n2 && n2 != n3) {
    write(2);
} else if (n2 == n3 && n3 != n1) {
    write(2);
} else if (n1 == n3 && n3 != n2) {
    write(2);
} else {
    write(0);
}


// if (n1 == n2 && n2 == n3) {
//     console.log(3);
// } else if (n1 != n2 && n2 != n3 && n1!= n3) {
//     console.log(0);
// }
//  if ( n1 == n2) {
//     if (n1 != n3) {
//         console.log(2);
//     }
// }
//  if (n1 == n3) {
//     if (n1 != n2) {
//         console.log(2);
//     }

// }
// if (n2 == n3) {
//     if (n1 != n2) {
//         console.log(2);
//     }
// } 

// let contador: number = 0;

// if (n1 == n2) {
//     contador +1;
// } 
// if (n1 == n3) {
//     contador +1;
// }  
// if (n2 == n3) {
//     contador +1;
// }
// console.log(contador);


// } else if (n1 == n2 && n2 == n3) {
//     console.log(3);
// } else {
//     console.log(0);
// }