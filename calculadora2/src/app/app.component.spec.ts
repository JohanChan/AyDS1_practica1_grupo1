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

});
