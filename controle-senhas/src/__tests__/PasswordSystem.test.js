import { PasswordSystem } from '../PasswordSystem.js';

describe('PasswordSystem', () => {
  let system;

  beforeEach(() => {
    system = new PasswordSystem();
  });

  test('Gera a primeira senha corretamente', () => {
    expect(system.generatePassword()).toBe('A001');
  });

  test('Gera múltiplas senhas corretamente', () => {
    system.generatePassword();
    expect(system.generatePassword()).toBe('A002');
  });

  test('Armazena senhas corretamente', () => {
    system.generatePassword();
    system.generatePassword();
    expect(system.getAllPasswords()).toEqual(['A001', 'A002']);
  });

  test('Chama a próxima senha corretamente', () => {
    system.generatePassword();
    expect(system.callNext()).toBe('A001');
  });

  test('Senha atual está correta', () => {
    system.generatePassword();
    system.callNext();
    expect(system.getCurrent()).toBe('A001');
  });

  test('Lista de pendentes é atualizada corretamente', () => {
    system.generatePassword();
    system.generatePassword();
    system.callNext();
    expect(system.getPendingPasswords()).toEqual(['A002']);
  });

  test('Lista de atendidas está correta', () => {
    system.generatePassword();
    system.callNext();
    expect(system.getAttendedPasswords()).toEqual(['A001']);
  });

  test('Total de senhas geradas está correto', () => {
    system.generatePassword();
    system.generatePassword();
    expect(system.getTotalGenerated()).toBe(2);
  });

  test('Total de pendentes está correto', () => {
    system.generatePassword();
    system.generatePassword();
    system.callNext();
    expect(system.getTotalPending()).toBe(1);
  });

  test('Reset do sistema zera tudo', () => {
    system.generatePassword();
    system.callNext();
    system.reset();
    expect(system.getTotalGenerated()).toBe(0);
    expect(system.getCurrent()).toBe(null);
    expect(system.getAllPasswords()).toEqual([]);
  });
});
