import { describe, expect, it } from 'vitest';

/**
 * Заменить своими функциями
 */
const emptyFunction = () => {};

describe('Функция для проверки длины строки.', () => {
  const TEST_LENGTH_STRING = 'проверяемая строка';

  it('Длина строки меньше максимальной', () => expect(emptyFunction(TEST_LENGTH_STRING, 20)).toBe(true));

  it('Длина строки равна максимальной', () => expect(emptyFunction(TEST_LENGTH_STRING, 18)).toBe(true));

  it('Длина строки меньше максимальной', () => expect(emptyFunction(TEST_LENGTH_STRING, 18)).toBe(true));
});

describe('Функция для проверки, является ли строка палиндромом.', () => {
  it('Строка является палиндромом', () => expect(emptyFunction('топот')).toBe(true));

  it('Палиндром с разным регистром', () => expect(emptyFunction('ДовОд')).toBe(true));

  it('Не палиндром', () => expect(emptyFunction('Кекс')).toBe(false));

  it('Палиндром с пробелами', () => expect(emptyFunction('Лёша на полке клопа нашёл ')).toBe(true));
});

describe('Функция для извлечения цифр из строки.', () => {
  it('Строка содержит цифры в начале', () => expect(emptyFunction('2023 год')).toBe(2023));

  it('Строка содержит цифры в конце', () => expect(emptyFunction('ECMAScript 2022')).toBe(2022));

  it('Строка содержит цифры в разных местах, нужно конкетинировать', () => expect(emptyFunction('1 кефир, 0.5 батона')).toBe(105));

  it('Строка содержит цифры с нулями впереди. Нужно опустить нули, преобразив в число.', () => expect(emptyFunction('агент 007')).toBe(7));

  it('Строка не содержит цифр', () => expect(emptyFunction('а я томат')).toBe(NaN));

  it('Число вернет число', () => expect(emptyFunction(2023)).toBe(2023));

  it('Дробное число', () => expect(emptyFunction(1.5)).toBe(15));

  it('Отрицательное число', () => expect(emptyFunction(-1)).toBe(1));
});

describe('Функция для добавления символов в строку.', () => {
  it('Добавочный символ использован один раз', () => expect(emptyFunction('1', 2, '0')).toBe('01'));

  it('Добавочный символ использован три раза', () => expect(emptyFunction('1', 4, '0')).toBe('0001'));

  it('Добавочные символы обрезаны с конца', () => expect(emptyFunction('q', 4, 'werty')).toBe('werq'));

  it('Добавочные символы использованы полтора раза', () => expect(emptyFunction('q', 4, 'we')).toBe('wweq'));

  it('Добавочные символы не использованы, исходная строка не изменена', () => expect(emptyFunction('qwerty', 4, '0')).toBe('qwerty'));
});
