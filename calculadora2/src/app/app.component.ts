import { Component, Input } from '@angular/core';
import * as Calculator from "@mroutput/jscalc";
import * as nerdamer from 'nerdamer/all';

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
  logaritmo : Boolean = false;
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
    if(this.logaritmo == false){
    console.log(this.texto);
    var c = new Calculator();
    var ans = c.exec(this.texto);

    console.log(ans);
    this.pantalla = ans;
  } else{
    this.pantalla = this.getBaseLog(10, this.texto)
    this.logaritmo = false
  }
  }

  //-20x+5=4x,x
  //x^2+2x=-1,x
  resolver(){
    var componentes = this.pantalla.split(',')
    var ecuacion = componentes[0] //5x-8=4x
    var variable = componentes[1] //x
    var sol = nerdamer.solveEquations(ecuacion, variable);

    //cadena con la solucion
    var solucion = sol.toString();

    //Le quito los sqrt y los intercambio por el signo de raiz
    var posicion = solucion.indexOf("sqrt");
    while(posicion != -1){
      solucion = solucion.replace('sqrt', '√')//
      
      posicion = solucion.indexOf("sqrt",posicion+1);
    }

    this.pantalla = variable + "=" + solucion;
  }

  //Logaritmo de un numero
  log(){
    this.logaritmo = true
  }
  
  getBaseLog(x, y) {
    return Math.log(y) / Math.log(x);
  }
}
