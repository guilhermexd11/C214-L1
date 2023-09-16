const { expect } = require('chai');
const { calcularIMC, verificarIMCSaudavel } = require('../src/imc');

const imcFinal = 0;

describe('Calculadora de IMC', () => {
  it('Calculadora deve rodar tranquilo', () => {
    const peso = 80; // 80 kg
    const altura = 180; // 180 cm

    const IMEsperado = (peso / Math.pow(altura / 100, 2)).toFixed(2);
    const IMCCalculado = calcularIMC(peso, altura);

    expect(IMCCalculado).to.equal(IMEsperado);
  });

  it('altura = 0, entrada inadequada', () => {
    const peso = 70; // 70 kg
    const altura = 0; // 0 cm

    const IMCCalculado = calcularIMC(peso, altura);

    expect(IMCCalculado).to.equal('NaN');
  });

  it('IMC saudável', () => {
    const IMC = 22.5;

    const dentroDaFaixaSaudavel = verificarIMCSaudavel(IMC);

    expect(dentroDaFaixaSaudavel).to.be.true;
  });

  it('IMC não saudável', () => {
    const IMC = 30.5; // IMC indicando sobrepeso

    const dentroDaFaixaSaudavel = verificarIMCSaudavel(IMC);

    expect(dentroDaFaixaSaudavel).to.be.false;
  });
});
