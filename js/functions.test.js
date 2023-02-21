import { describe, expect, it } from 'vitest';

/**
 * TODO: Заменить своими функциями
 */
const EMPTY_FUNCTION = () => {};

describe.todo('Функция для проверки длины строки.', () => {
	const Option = {
		STRING: 'проверяемая строка',
		DESCRIPTIONS: ['больше', 'равна', 'меньше'],
		EXPECTATIONS: [true, true, false],
		LENGTHS: [20, 18, 16],
	};

	for (let i = 0; i < Option.LENGTHS.length; i++) {
		it(`Длина строки ${Option.DESCRIPTIONS[i]} максимальной`, () => expect(EMPTY_FUNCTION(Option.STRING, Option.LENGTHS[i])).toBe(Option.EXPECTATIONS[i]));
	}
});

describe.todo('Функция для проверки, является ли строка палиндромом.', () => {
	const Option = {
		DESCRIPTIONS: ['Строка является палиндромом', 'Палиндром с разным регистром', 'Не палиндром', 'Палиндром с пробелами'],
		STRINGS: ['топот', 'ДовОд', 'Кекс', 'Лёша на полке клопа нашёл '],
		EXPECTATIONS: [true, true, false, true],
	};

	for (let i = 0; i < Option.STRINGS.length; i++) {
		it(Option.DESCRIPTIONS[i], () => expect(EMPTY_FUNCTION(Option.STRINGS[i])).toBe(Option.EXPECTATIONS[i]));
	}
});

describe.todo('Функция для извлечения цифр из строки.', () => {
	const Option = {
		DESCRIPTIONS: [
			'Строка содержит цифры в начале',
			'Строка содержит цифры в конце',
			'Строка содержит цифры в разных местах, нужно конкетинировать',
			'Строка содержит цифры с нулями впереди. Нужно опустить нули, преобразив в число.',
			'Строка не содержит цифр',
			'Число вернет число',
			'Дробное число',
			'Отрицательное число',
		],
		STRINGS: ['2023 год', 'ECMAScript 2022', '1 кефир, 0.5 батона', 'агент 007', 'а я томат', 2023, 1.5, -1],
		EXPECTATIONS: [2023, 2022, 105, 7, NaN, 2023, 15, 1],
	};

	for (let i = 0; i < Option.STRINGS.length; i++) {
		it(Option.DESCRIPTIONS[i], () => expect(EMPTY_FUNCTION(Option.STRINGS[i])).toBe(Option.EXPECTATIONS[i]));
	}
});

describe.todo('Функция для добавления символов в строку.', () => {
	const Option = {
		DESCRIPTIONS: [
			'Добавочный символ использован один раз',
			'Добавочный символ использован три раза',
			'Добавочные символы обрезаны с конца',
			'Добавочные символы использованы полтора раза',
			'Добавочные символы не использованы, исходная строка не изменена',
		],
		ARGUMENTS: [
			['1', 2, '0'],
			['1', 4, '0'],
			['q', 4, 'werty'],
			['q', 4, 'we'],
			['qwerty', 4, '0'],
		],
		EXPECTATIONS: ['01', '0001', 'werq', 'wweq', 'qwerty'],
	};

	for (let i = 0; i < Option.EXPECTATIONS.length; i++) {
		it(Option.DESCRIPTIONS[i], () => expect(EMPTY_FUNCTION(...Option.ARGUMENTS[i])).toBe(Option.EXPECTATIONS[i]));
	}
});
