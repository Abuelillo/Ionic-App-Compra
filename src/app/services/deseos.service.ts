import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas :Lista[] = [];

  constructor(private storag: Storage) { 
    this.cargarStorage();    
  }

  crearLista(titulo:string){
    const nuevaLista = new Lista(titulo);
    this.listas.push(nuevaLista);
    this.guardarStorage();

    return nuevaLista.id;
  }

  obtenerLista(id:string | number){
    id = Number(id);

    return this.listas.find(listaData => listaData.id === id)
  }

  guardarStorage(){
    localStorage.setItem('data',JSON.stringify(this.listas));
      // set a key/value
    //this.storag.set('data', JSON.stringify(this.listas));
  }

  cargarStorage(){
    if (localStorage.getItem('data')) {
      this.listas = JSON.parse(localStorage.getItem('data'));
    } else {
      this.listas = [];
    }   
    /* Or to get a key/value pair
    storage.get('age').then((val) => {
          console.log('Your age is', val);
    });*/
  }

  borrarLista(lista:Lista){
    this.listas = this.listas.filter(listaData =>listaData.id !== lista.id);
  }

 

   
}
