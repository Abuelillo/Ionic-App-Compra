import { ListaItem } from './lista-item.codel';
export class Lista{

    id:number;
    titulo:string;
    creadaEn:Date;
    terminadaEn:Date;
    terminada:boolean;
    pendientes:number;
    items:ListaItem[];

    constructor(titulo:string){ 
        this.titulo = titulo;
        this.creadaEn = new Date();
        this.terminada = false;
        this.pendientes = 0;
        
        this.items = [];
        this.id = new Date().getTime();
    }

}