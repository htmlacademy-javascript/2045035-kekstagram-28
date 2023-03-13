/**
 * Функция для проверки длины строки.
 *
 * @param {string} string
 * @param {number | undefined} [maxLength=140]
 *
 */
const checkStringLength = ({ length }, maxLength = 140) => length <= maxLength;

/**
 * Функция для проверки, является ли строка палиндромом
 *
 * @param {string} input
 *
 */
const isPalindrome = (input) => {
	const normalizedInput = input.replaceAll(' ', '').toLowerCase();
	const reversedInput = [...normalizedInput].reverse().join('');

	return normalizedInput === reversedInput;
};

/**
 *Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9
 *и возвращает их в виде целого положительного числа.
 *
 * @param {string} input
 * @returns {number | NaN} Если в строке нет ни одной цифры, функция должна вернуть `NaN`
 */

const concatNumber = (input) => {
	input = String(input);
	const stringWithOnlyDigits = input.replace(/\D/g, '');

	if (stringWithOnlyDigits.length) {
		return +stringWithOnlyDigits;
	}

	return NaN;
};

/**
 * @param {string} originalString исходная строка
 * @param {number} minLength минимальная длина
 * @param {string} addedString строка с добавочными символами
 * @returns {string} исходная строка, дополненная указанными символами до заданной длины. Символы добавляются в начало строки.
 */
const addString = (originalString, minLength, addedString) => {
	while (originalString.length < minLength) {
		const remainLength = minLength - originalString.length;

		if (remainLength >= addedString.length) {
			originalString = addedString + originalString;
		} else {
			originalString = addedString.slice(0, remainLength) + originalString;
		}
	}

	return originalString;
};

/**
 * фунция для создания рандомного целого положительного числа
 * @param {number} min
 * @param {number} max
 */
const getRandomInteger = (min, max) => {
	const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
	const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
	const result = Math.random() * (upper - lower + 1) + lower;

	return Math.floor(result);
};

/**
 * создаёт генератор id. Каждый из таких генераторов инкреметирует предыдущий
 */
const createIdGenerator = () => {
	let lastGeneratedId = 0;

	return () => {
		lastGeneratedId += 1;
		return lastGeneratedId;
	};
};

/**
 * функция для генерации рандомного неповторяющегося числа
 * @param {number} min
 * @param {number} max
 */
const createRandomIdFromRangeGenerator = (min, max) => {
	const previousValues = [];

	return function () {
		let currentValue = getRandomInteger(min, max);
		if (previousValues.length >= max - min + 1) {
			return null;
		}
		while (previousValues.includes(currentValue)) {
			currentValue = getRandomInteger(min, max);
		}
		previousValues.push(currentValue);
		return currentValue;
	};
};

/**
 * Получить случайный элемент из массива
 * @param {Array<Element>} elements переданный массив
 */
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

/**
 *
 * @param {KeyboardEvent} evt
 */
const isEscapeKey = (evt) => evt.key === 'Escape';

export {
	checkStringLength,
	isPalindrome,
	concatNumber,
	addString,
	getRandomInteger,
	getRandomArrayElement,
	createIdGenerator,
	createRandomIdFromRangeGenerator,
	isEscapeKey,
};
