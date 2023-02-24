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
 * @returns {number | NaN} Если в строке нет ни одной цифры, функция должна вернуть NaN
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

export { checkStringLength, isPalindrome, concatNumber, addString };
