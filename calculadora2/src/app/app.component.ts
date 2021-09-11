import { Component, Input } from '@angular/core';
import * as Calculator from "@mroutput/jscalc";

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
  roott: Boolean = false;
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
    
    if (this.roott) {
      this.texto += ")"
      this.roott = false;
    }
    this.pantalla = this.texto;
  }
  textDos(){
    this.texto += "2"
    if (this.roott) {
      this.texto += ")"
      this.roott = false;
    }
    this.pantalla = this.texto;
  }
  textTres(){
    this.texto += "3"
    if (this.roott) {
      this.texto += ")"
      this.roott = false;
    }
    this.pantalla = this.texto;
  }
  textCuatro(){
    this.texto += "4"
    if (this.roott) {
      this.texto += ")"
      this.roott = false;
    }
    this.pantalla = this.texto;
  }
  textSeis(){
    this.texto += "6"
    if (this.roott) {
      this.texto += ")"
      this.roott = false;
    }
    this.pantalla = this.texto;
  }
  textSiete(){
    this.texto += "7"
    if (this.roott) {
      this.texto += ")"
      this.roott = false;
    }
    this.pantalla = this.texto;
  }
  textOcho(){
    this.texto += "8"
    if (this.roott) {
      this.texto += ")"
      this.roott = false;
    }
    this.pantalla = this.texto;
  }
  textNueve(){
    this.texto += "9"
    if (this.roott) {
      this.texto += ")"
      this.roott = false;
    }
    this.pantalla = this.texto;
  }
  textCero(){
    this.texto += "0"
    if (this.roott) {
      this.texto += ")"
      this.roott = false;
    }
    this.pantalla = this.texto;
  }
  textCinco(){
    this.texto += "5"
    if (this.roott) {
      this.texto += ")"
      this.roott = false;
    }
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
    this.texto += "+"
    this.pantalla = this.texto
  }
  opcionResta(){
    this.operador = 1
    this.numeroa = Number(this.pantalla)  
    this.texto += "-"
    this.pantalla = this.texto
  }
  opcionMulti(){
    this.operador = 2
    this.numeroa = Number(this.pantalla)
    this.texto += "*"
    this.pantalla = this.texto
  }

  par1(){
    this.texto += "("
    this.pantalla = this.texto

  }

  par2(){
    this.texto += ")"
    this.pantalla = this.texto
    
  }

  potencia(){
    this.texto += "^"
    this.pantalla = this.texto
    
  }

  raiz(){
    this.texto += "^(1/"
    this.pantalla = this.texto
    this.roott = true;
    
  }

  div(){
    this.texto += "/"
    this.pantalla = this.texto
    
  }

  igual(){
    console.log(this.texto);
    var c = new Calculator();
    var ans = c.exec(this.texto);

    console.log(ans);
    this.pantalla = ans;
  }
}
