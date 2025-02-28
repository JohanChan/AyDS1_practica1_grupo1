import { Component, Input } from '@angular/core';
import * as Calculator from "@mroutput/jscalc";
import * as nerdamer from 'nerdamer/all';


interface Expression_val {
  values: any;
  valid: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculadora';
  pantalla;
  errEc:boolean = false;
  operador;
  resultado: number = 0;
  numero: number = 0;
  numeroa: number = 0;
  texto: String = "";
  roott: Boolean = false;
  logaritmo : Boolean = false;
  historia: Operacion[];
  constructor(){
    this.historia = new Array<Operacion>();
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

  igual2(texto: string){

    this.texto = texto
    return this.igual()

  }

  igual(){
    if(this.logaritmo == false){
    console.log(this.texto);
    var c = new Calculator();
    var ans = c.exec(this.texto);

    console.log(ans);
    this.pantalla = ans;

    this.add_historia(this.texto, ans);

    return ans
  } else{
    this.pantalla = this.getBaseLog(10, this.texto)
    this.logaritmo = false
    return this.getBaseLog(10, this.texto)
  }
  }

  //Edy Galicia, cambio en las funciones resolver y resolver2.

  //-20x+5=4x,x
  //x^2+2x=-1,x
  resolver(){
    this.pantalla = this.resolver2(this.pantalla);
  }

  //-20x+5=4x,x
  //x^2+2x=-1,x
  resolver2(pantallas:string) {
    var componentes = pantallas.split(',')
    var ecuacion = componentes[0] //5x-8=4x
    var variable = componentes[1] //x
    console.log(ecuacion)
    console.log(variable)
    var sol = nerdamer.solveEquations(ecuacion, variable);

    //cadena con la solucion
    var solucion = sol.toString();

    //Le quito los sqrt y los intercambio por el signo de raiz
    var posicion = solucion.indexOf("sqrt");
    while (posicion != -1) {
      solucion = solucion.replace('sqrt', '√')//

      posicion = solucion.indexOf("sqrt", posicion + 1);
    }


    var res = variable + "=" + solucion;
    if(typeof(res) != 'string'){
      this.errEc = true;
    }
    return res

  }

  //Logaritmo de un numero
  log(){
    this.logaritmo = true
  }

  getBaseLog(x, y) {
    return Math.log(y) / Math.log(x);
  }


  evaluar_expresion(exp:string):number{
    let expresion=exp.split(';');
    let evaluar=expresion[0];

    if(this.sintaxis_valida(evaluar)){
        let res=this.parametros_expresion(expresion)
        if(res.valid){
          var e = nerdamer(evaluar,res.values).evaluate();
          var result: number = +e.text();
          this.pantalla=result;
          this.add_historia(this.pantalla, String(result));
          return result;
        }
    }

    this.pantalla="Sintaxis incorrecta"
    return -1;

  }



  sintaxis_valida(expresion:string):boolean{
    var re=/[a-zA-Z0-9+\-\*/^]*/
    return expresion.match(re).length!=0
  }

  parametros_expresion(expresion: string[]) :Expression_val{
    let valores_recibidos:String[];
    let valores_finales="";

    for(let i=1; i<expresion.length; i++){
      valores_recibidos=expresion[i].trim().split('=')
      valores_finales+=`"${valores_recibidos[0]}":"${valores_recibidos[1]}"`

      if(i<expresion.length-1){
      valores_finales+=','
      }
    }
      try{
        let valores:Expression_val={
          values:JSON.parse(`{${valores_finales}}`),
          valid:true
        }
        return valores
      }catch(err){
        let error:Expression_val={
          values:err,
          valid:false
        }
        return error
      }
  }

  resultado_valido(){
    return this.pantalla.length!=0;
  }



  add_historia(texto:String, resultado:String){
    var op_realizada = new Operacion(texto, resultado);
    this.historia.push(op_realizada);
  }

  historial(){
    console.log('HISTORIAL');
    this.historia.forEach((operacion, index) => {
      console.log(String(index)+'. '+operacion.getStringOp());
    });
  }

}

export class Operacion{
  public texto:String;
  public resultado:String;

  constructor(texto:String,resultado:String)
  {
      this.texto = texto;
      this.resultado = resultado;
  }

  getStringOp():string{
    var cadena = this.texto+' = '+this.resultado;
    return cadena;
  }
}
