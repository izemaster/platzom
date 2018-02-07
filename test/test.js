const expect = require('chai').expect
const platzom = require('..').default
//busca en el nivel superior el archivo main del package.json

describe('#platzom', function(){

  it('Si la palabra termina con "ar" se le quitan esas dos letras', function(){
    const translation = platzom("Programar");
    expect(translation).to.equal("Program");
  })

  it('Si la palabra inicia con Z se le añade "pe"', function(){
    const translation = platzom("Zorro");
    const translation2 = platzom("Zarpar");

    expect(translation).to.equal("Zorrope");
    expect(translation2).to.equal("Zarppe")
  })

  it('Si la palabra tiene 10 o mas letras se separa con un guion por la mitad', function(){
    const translation = platzom("abecedario");
    expect(translation).to.equal("abece-dario");


  })

  it('Si la palabra original es un palíndromo se intecalan mayusculas y minúsculas', function(){
    const translation = platzom("sometemos");
    expect(translation).to.equal("SoMeTeMoS");



  })
})
