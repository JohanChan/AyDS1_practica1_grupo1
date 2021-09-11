import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculadora';
  pantalla;
  operador;
  resultado: number = 0;
  numero: number = 0;
  numeroa: number = 0;
  texto: String = "";
  constructor(){
  }
  
  clear(){
    this.resultado = 0;
    this.numero = 0;
    this.texto = ""
    this.pantalla = this.texto;
  }
  textUno(){
    this.texto += "1"
    this.pantalla = this.texto;
  }
  textDos(){
    this.texto += "2"
    this.pantalla = this.texto;
  }
  textTres(){
    this.texto += "3"
    this.pantalla = this.texto;
  }
  textCuatro(){
    this.texto += "4"
    this.pantalla = this.texto;
  }
  textSeis(){
    this.texto += "6"
    this.pantalla = this.texto;
  }
  textSiete(){
    this.texto += "7"
    this.pantalla = this.texto;
  }
  textOcho(){
    this.texto += "8"
    this.pantalla = this.texto;
  }
  textNueve(){
    this.texto += "9"
    this.pantalla = this.texto;
  }
  textCero(){
    this.texto += "0"
    this.pantalla = this.texto;
  }
  textCinco(){
    this.texto += "5"
    this.pantalla = this.texto;
  }
  textPunto(){
    this.texto += "."
    this.pantalla = this.texto;
  }
  opcionSuma(){
    this.operador = 0
    this.numeroa = Number(this.pantalla)
    console.log("A "+this.numeroa);
    this.texto = ""
    this.pantalla = this.texto
  }
  opcionResta(){
    this.operador = 1
    this.numeroa = Number(this.pantalla)  
    this.texto = ""
    this.pantalla = this.texto
  }
  opcionMulti(){
    this.operador = 2
    this.numeroa = Number(this.pantalla)
    this.texto = ""
    this.pantalla = this.texto
  }

  /* Para igual 
    0 = suma
    1 = resta
    2 = multiplicacion
  */

  igual(){
    this.numero = Number(this.pantalla);
    console.log("B "+this.numero);
    switch(this.operador){
      case 0:         
        this.resultado = this.numeroa + this.numero;    
        this.numero = 0; 
        this.pantalla = String(this.resultado) 
      break;
      case 1: 
      this.resultado = this.numeroa - this.numero;     
        this.numero = 0;   
        this.pantalla = String(this.resultado)    
      break;
      case 2:
        this.resultado = this.numeroa * this.numero;     
        this.numero = 0;
        this.pantalla = String(this.resultado) 
      break;
      case 3: break;
    }
    this.operador = -1;
    this.numero = 0;
  }
}
