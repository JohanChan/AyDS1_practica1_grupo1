import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let componente:AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    componente = new AppComponent();
  });

/* 
 * 
 * JOHAN LEONEL CHAN TOLEDO 
 * 201603052
 * PRUEBAS BASICAS SUMA RESTA MULTIPLICACIÓN
*/

it('Resultado valido para suma', ()=>{
  let texto = '1+2+3+4';
  let esperado = 10
  expect(componente.igual2(texto)).toEqual(esperado);
})

it('Resultado valido para resta', ()=>{
  let texto = '15-5-2';
  let esperado = 8
  expect(componente.igual2(texto)).toEqual(esperado);
})

it('Resultado valido para multiplicacion', ()=>{
  let texto = '5*5';
  let esperado = 25
  expect(componente.igual2(texto)).toEqual(esperado);
})

it('Resultado valido para suma', ()=>{
  let texto = '1+2+3+4';
  let esperado = 10
  expect(componente.igual2(texto)).toEqual(esperado);
})

it('Resultado valido para operaciones varias', ()=>{
  let texto = '4*2+15';
  let esperado = 23
  expect(componente.igual2(texto)).toEqual(esperado);
})

it('Indefinido texto Cero', ()=>{
  expect(componente.textCero()).toBeUndefined();
})

it('Indefinido texto Uno', ()=>{
  expect(componente.textUno()).toBeUndefined();
})

it('Indefinido texto Dos', ()=>{
  expect(componente.textDos()).toBeUndefined();
})

it('Indefinido texto Tres', ()=>{
  expect(componente.textTres()).toBeUndefined();
})

it('Indefinido texto Cuatro', ()=>{
  expect(componente.textCuatro()).toBeUndefined();
})

it('Indefinido texto Cinco', ()=>{
  expect(componente.textCinco()).toBeUndefined();
})

it('Indefinido texto Seis', ()=>{
  expect(componente.textSeis()).toBeUndefined();
})

it('Indefinido texto Siete', ()=>{
  expect(componente.textSiete()).toBeUndefined();
})

it('Indefinido texto Ocho', ()=>{
  expect(componente.textOcho()).toBeUndefined();
})

it('Indefinido texto Nueve', ()=>{
  expect(componente.textNueve()).toBeUndefined();
})

it('Indefinido texto Punto', ()=>{
  expect(componente.textPunto()).toBeUndefined();
})

it('Indefinido texto Div', ()=>{
  expect(componente.div()).toBeUndefined();
})

it('Indefinido Opcion Suma', ()=>{
  expect(componente.opcionSuma()).toBeUndefined();
})

it('Indefinido Opcion Resta', ()=>{
  expect(componente.opcionResta()).toBeUndefined();
})

it('Indefinido Opcion Multiplicacion', ()=>{
  expect(componente.opcionMulti()).toBeUndefined();
})

it('Indefinido Opcion Historial', ()=>{
  expect(componente.historial()).toBeUndefined();
})

it('Indefinido Texto Raiz', ()=>{
  expect(componente.raiz()).toBeUndefined();
})

it('Indefinido Texto Potencia', ()=>{
  expect(componente.potencia()).toBeUndefined();
})

it('Indefinido Texto par1', ()=>{
  expect(componente.par1()).toBeUndefined();
})

it('Indefinido Texto par2', ()=>{
  expect(componente.par2()).toBeUndefined();
})

it('Indefinido Add historia', ()=>{
  expect(componente.add_historia("Resultoad","13")).toBeUndefined();
})

it('Resultado funcion resultado_valido', ()=>{
  componente.pantalla = "hola"
  let esperado = true;
  expect(componente.resultado_valido()).toEqual(true);
})

it('Resultado Log', ()=>{
  let texto = "";
  expect(componente.getBaseLog(2,10)).toEqual(3.3219280948873626);
})

it('Resultado valido para resta', ()=>{
  let texto = '15-5-2';
  let esperado = 8
  expect(componente.igual2(texto)).toEqual(esperado);
})


it('Resultado valido para resta 2', ()=>{
  let texto = '150-5-2-100';
  let esperado = 43
  expect(componente.igual2(texto)).toEqual(esperado);
})

it('Resultado valido para multiplicacion', ()=>{
  let texto = '5*5';
  let esperado = 25
  expect(componente.igual2(texto)).toEqual(esperado);
})

  // YASMIN ELISA MONTERROSO ESCOBEDO
  // 201801385
  // Pruebas unitarias con división, raices y potencias


  it('Resultado valido para división', ()=>{
    let texto = '894/4';
    let esperado = 223.5
    expect(componente.igual2(texto)).toEqual(esperado);
  })

  it('Resultado valido para potencia con 0', ()=>{
    let texto = '5^0';
    let esperado = 1
    expect(componente.igual2(texto)).toEqual(esperado);
  })

  it('Resultado valido para potencias', ()=>{
    let texto = '2^12';
    let esperado = 4096
    expect(componente.igual2(texto)).toEqual(esperado);
  })

  it('Resultado valido para raices', ()=>{
    let texto = '4096^(1/2)';
    let esperado = 64
    expect(componente.igual2(texto)).toEqual(esperado);
  })

  // FIN DE MI PARTE

  it('Resultado valido para una ecuacion lineal', ()=>{
    let exp = '2x-5=x,x';
    let esperado = 'x=5'
    expect(componente.resolver2(exp)).toEqual(esperado);
  })

  it('Resultado valido para una ecuacion cuadratica', ()=>{
    let exp = 'x^2+2x=-1,x';
    let esperado = 'x=-1'
    expect(componente.resolver2(exp)).toEqual(esperado);
  })

  it('Titulo de la pestaña', ()=>{
    expect(componente.title).toEqual('calculadora');
  })

  it('Ver si el resultado de la ecuacion no es string', ()=>{
    expect(componente.errEc).toBeFalsy()
  })

  // WALTER OSWALDO MACH VELASQUEZ
  // 201315300
  // Pruebas unitarias  evaluacion de expresiones
  it('Evaluacion correcta de expresiones',()=>{
    let expresion='x+y+z;x=23;y=2;z=1';
    expect(componente.evaluar_expresion(expresion)).toEqual(26);
  });

  it('Sintaxis valida en expresiones',()=>{
    let expresion='x^2+2*(cos(x)+x*x);x=6';
    expect(componente.sintaxis_valida(expresion)).toEqual(true);
  });

  it('Ingreso de valores correctos',()=>{
    let exp='x+y+z;x=23;y=2;z=1';
    let expresion=exp.split(';');
    let result=componente.parametros_expresion(expresion).valid;

    expect(result).toBeTruthy();
  });


  it('Resultado valido',()=>{
    expect(componente.resultado_valido).toBeTruthy();
  })

  // Fernando Augusto Armira Ramirez
// 201503961
// Pruebas unitarias logaritmos

 it('Resultado correcto para un logaritmo de base 10', ()=>{
  let base = 10
  let num = 1;
  let esperado = 0
  expect(componente.getBaseLog(base,num)).toEqual(esperado);
})

it('Resultado correcto para un logaritmo distinto de base 10', ()=>{
  let base = 5
  let num = 125;
  let esperado = 3.0000000000000004
  expect(componente.getBaseLog(base,num)).toEqual(esperado);
})

it('Logaritmo de base 10 de un numero negativo', ()=>{
  let base = 10
  let num = -1;
  expect(componente.getBaseLog(base,num)).toBeNaN();
})

it('Logaritmo indefinido', ()=>{
  let base = 10
  let num = "fer";
  expect(componente.getBaseLog(base,num)).toBeNaN();;
})

// Edgar Humberto Borrayo Bartolón
// 201503702
// Pruebas de historial

it('Resultado operaciones basicas', ()=>{
  let texto = '1+2*6/4';
  let esperado = 4
  expect(componente.igual2(texto)).toEqual(esperado);
});

it('Resultado operaciones intermedias', ()=>{
  let texto = '800/4^2';
  let esperado = 50
  expect(componente.igual2(texto)).toEqual(esperado);
});

it('Resultado operaciones avanzadas',()=>{
  let expresion='x+y+z;x=23;y=2;z=1';
  expect(componente.evaluar_expresion(expresion)).toEqual(26);
});

it('Resultado operaciones logaritmicas', ()=>{
  let base = 10
  let num = 1;
  let esperado = 0
  expect(componente.getBaseLog(base,num)).toEqual(esperado);
})

it('Resultado satisfactorio historial', ()=>{
  expect(componente.historial()).toBe();
})

});
