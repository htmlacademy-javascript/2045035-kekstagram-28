const TEST_STRING = 'проверяемая строка';
const TEST_NUMBER_DATA = ['2023 год', 'ECMAScript 2022', '1 кефир, 0.5 батона', 'агент 007', 'а я томат', 2023, -1, 1.5];
const TEST_ADD_STRING_DATA = [
	['1', 2, '0'],
	['1', 4, '0'],
	['q', 4, 'werty'],
	['q', 4, 'we'],
	['qwerty', 4, '0'],
];

/**
 * Функция для проверки длины строки.
 *
 * @param {string} string
 * @param {number | undefined} [maxLength=140]
 *
 *@example
 *checkStringLength('проверяемая строка', 20); // true
 *checkStringLength('проверяемая строка', 18); // true
 *checkStringLength('проверяемая строка', 10); // false
 */

const checkStringLength = ({ length }, maxLength = 140) => length <= maxLength;

for (const length of [20, 18, 10]) {
	checkStringLength(TEST_STRING, length);
}

/**
 * Функция для проверки, является ли строка палиндромом
 *
 * @param {string} input
 *
 */

const checkPalindrome = (input) => {
	const normalizedInput = input.replaceAll(' ', '').toLowerCase();
	const reversedInput = [...normalizedInput].reverse().join('');

	return normalizedInput === reversedInput;
};

checkPalindrome('Лёша на полке клопа нашёл ');

/**
 *Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9
 *и возвращает их в виде целого положительного числа.
 *
 * @param {string} input
 * @returns {number | NaN} Если в строке нет ни одной цифры, функция должна вернуть NaN
 *
 * @example
 * concatNumber('2023 год');            // 2023
 * concatNumber('ECMAScript 2022');     // 2022
 * concatNumber('1 кефир, 0.5 батона'); // 105
 * concatNumber('агент 007');           // 7
 * concatNumber('а я томат');           // NaN
 * имяФункции(2023); // 2023
 * имяФункции(-1);   // 1
 * имяФункции(1.5);  // 15
 */

const concatNumber = (input) => {
	input = String(input);
	const stringWithOnlyDigits = input.replace(/\D/g, '');

	if (stringWithOnlyDigits.length) {
		return +stringWithOnlyDigits;
	}

	return NaN;
};

for (const string of TEST_NUMBER_DATA) {
	concatNumber(string);
}

/**
 * Функция, которая принимает три параметра:
 * исходную строку, минимальную длину и строку с добавочными символами —
 * и возвращает исходную строку, дополненную указанными символами до заданной длины.
 * Символы добавляются в начало строки.
 * Если исходная строка превышает заданную длину, она не должна обрезаться.
 * Если «добивка» слишком длинная, она обрезается с конца.
 *
 * @param {string} originalString
 * @param {number} minLength
 * @param {string} addedString
 *
 * @example
 * addString('1', 4, '0');      // '0001' // Добавочный символ использован три раза
 * addString('q', 4, 'werty');  // 'werq' // Добавочные символы обрезаны с конца
 * addString('q', 4, 'we');     // 'wweq' // Добавочные символы использованы полтора раза
 * addString('qwerty', 4, '0'); // 'qwerty' // Добавочные символы не использованы, исходная строка не изменена
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

for (const pad of TEST_ADD_STRING_DATA) {
	addString(...pad);
}
