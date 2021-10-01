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
