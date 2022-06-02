const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verifica se passando o parâmetro argumento retorna a quantidade de elefantes', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Verifica se passando o parâmetro names retorna um array com a relação dos nomes de todos os elefantes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('Verifica se passando o parâmetro averageAge retorna a média de idade dos elefantes', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  it('Verifica se passando o parâmetro average retorna a média de idade dos elefantes', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('Verifica se passando o parâmetro popularity retorna a popularidade dos elefantes', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  it('Verifica se passando o parâmetro availability retorna um array com a relação de dias em que é possível visitar os elefantes', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
  it('Verifica se passando o parâmetro não disponível na função retorna null', () => {
    expect(handlerElephants('feed')).toBe(null);
  });
  it('Verifica se não for passado um parâmetro do tipo sring, a função retorna undefined', () => {
    expect(handlerElephants(10)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('Verifica se não for passado um parâmetro a função retorna undefined', () => {
    expect(handlerElephants()).toBe(undefined);
  });
});
