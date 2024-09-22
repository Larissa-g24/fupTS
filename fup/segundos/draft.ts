let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};


        // let n = +input();
        // let horas = n / 3600;
        // let resto = n % 3600;
        // let minutos = resto / 60;
        // let ho
        // let segundos = resto % 60;
        // console.log(horas + ":" + minutos + ":" + segundos)
        // 


        let tempo: number = +input();

        let hora: number = parseInt(tempo / 3600);
        let resto: number = tempo % 3600;
        let minutos: number = parseInt(resto / 60);
        let segundos: number = resto % 60;

        console.log(hora + ":" + minutos + ":" + segundos)
