const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Verifica se caso não passe argumentos, retorna um objeto', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
  it('Verifica se passando os argumentos Monday e 09:00-AM deve retornar a string The zoo is closed', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });
  it('Verifica se passando os argumentos Tuesday e 09:00-AM deve retornar a string The zoo is open', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });
  it('Verifica se passando os argumentos Wednesday e 09:00-AM deve retornar a string The zoo is closed', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
  });
  it('Verifica se passando os argumentos para hora e forem diferentes do formato AM ou PM retorna erro', () => {
    expect(() => getOpeningHours('Monday', '09:00-HS')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('Verifica se passando os argumentos para hora não seja número retorna uma mensagem de erro', () => {
    expect(() => getOpeningHours('Monday', '09:aa-HS')).toThrow('The minutes should represent a number');
  });
  it('Verifica se passando um horário que não esteja entre zero e 12 retorna uma mensagem de erro', () => {
    expect(() => getOpeningHours('Monday', '19:00-AM')).toThrow('The hour must be between 0 and 12');
  });
  it('Verifica se passando minutos que não estejam entre zero e 59 retorna uma mensagem de erro', () => {
    expect(() => getOpeningHours('Monday', '10:70-AM')).toThrow('The minutes must be between 0 and 59');
  });
  it('Verifica se passando dia errado retorna erro', () => {
    expect(() => getOpeningHours('Mon', '10:00-AM')).toThrow('The day must be valid. Example: Monday');
  });
});
