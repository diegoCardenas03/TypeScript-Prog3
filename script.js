"use strict";
// -------------DATOS PRIMITIVOS----------------
// let estudiasteJavascript: boolean = false;
// if(estudiasteJavascript){
//     console.log('Puedes seguir viendo este curso TypeScript')
// }
// else{
//     console.log('Primero tenés que ver el curso de Javascript')
// }
// let interMiami: number = 11
// let fcDallas: number = 11
// let messi: number = 1
// let juegaMessi: boolean = true
// let palabras: string = 'Me emocioné al verlo a Messi'
// function jugar(equipo1: number, equipo2: number, juegaMessi: boolean): void {
//     let motivo:string = ''
//     if(juegaMessi) {
//         equipo1 += messi
//         motivo = ' por que juega Messi '
//     }
//     if (equipo1 > equipo2) console.log(`Gana Inter Miami${motivo}`)
//     if (equipo1 == equipo2) console.log('Empatan')
//     if (equipo1 < equipo2) console.log('Gana FC Dallas')
// }
// jugar(interMiami, fcDallas, juegaMessi)
// -------------------ANY--------------------
// let disney:any;
// disney = 'Star Wars y Marvel'
// console.log(disney)
// disney = 15000000000
// console.log(disney)
// disney = true
// console.log(disney)
// --------------------Array--------------------
// let arregloNumeros:number[] = [1,2,3,4,5,6]
// let arregloTexto:string[] = ['HTML', 'CSS', 'JS']
// arregloTexto[0].indexOf('HTML')
// -----------------------Objetos Literales---------------------
// let programador = {
//     nombre: 'Diego Cardenas',
//     tecnologias: ['React', 'JAVA'],
//     tomaMate: true
// }
// programador = {
//     nombre: 'Ricardo Montañas',
//     tecnologias: ['Python'],
//     tomaMate: true
// }
// console.log(programador)
// -----------------TYPE PERSONALIZADO-------------------
// type Programador = {
//     nombre: string,
//     tecnologias: string[],
//     tomarMate: boolean | null
// }
// let programador: Programador = {
//     nombre: 'Diego Cardenas',
//     tecnologias: ['React', 'JAVA'],
//     tomarMate: true
// }
// let programador2: Programador = {
//     nombre: 'Federico',
//     tecnologias: ['HTML', 'Cobol'],
//     tomarMate: null
// }
// ------------INTERFACES-----------
// interface Programador {
//     nombre: String,
//     tecnologias: string[],
//     tomarMate?: boolean | null
// }
// let dev: Programador = {
//     nombre: 'Diego Cardenas',
//     tecnologias: ['React', 'JAVA'],
//     tomarMate: true
// }
// let dev2 = {
//     nombre: 'Federico',
//     tecnologias: ['HTML', 'Cobol'],
//     tomarMate: null,
//     apellido: 'Buenardo',
//     recibido: false,
// }
// function enviarCurriculum(programador: Programador){
//     console.log(`Este Curriculum es de ${programador.nombre}`)
// }
// enviarCurriculum(dev2)
// --------------------Clases y POO----------------------
// class Pelicula{
//     nombre?: string;
//     protagonistas?: string[];
//     actores?:string[];
//     constructor(nombre:string, protagonistas: string[], actores: string[]){
//         this.nombre = nombre;
//         this.protagonistas = protagonistas;
//         this.actores = actores;
//     }
//     proyectarEnCine(){
//         console.log(`la película ${this.nombre} está siendo proyectada`)
//     }
// }
// const pelicula = new Pelicula('Barbie', ['Barbie', 'Ken'], ['Margot Robbie', 'Ryan Gosling'])
// const pelicula2 = new Pelicula('Oppenheimer', ['Oppenheimer', 'Strauss'], ['Cillian Murphy', 'Robert Downey Jr'])
// pelicula.proyectarEnCine()
// console.log(pelicula2)
// -----------ENCAPSULAMIENTO Y GENÉRICOS---------------
class Sorteo {
    constructor(nombre) {
        this.nombre = nombre;
    }
    setTicket(ticket) {
        this.ticket = ticket;
    }
    getTicket() {
        return this.ticket;
    }
    sortear() {
        return `Para ${this.nombre} el ticket es ${this.ticket}`;
    }
}
let sorteo = new Sorteo('Sergie Code');
sorteo.setTicket('S7');
console.log(sorteo.sortear());
