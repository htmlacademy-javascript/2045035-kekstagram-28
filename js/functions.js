// 1.Функция для проверки длины строки. должна возвразать true/false

function checkStringLength(string, length) {
  return string.length === length;
}

checkStringLength('gfgfgf', 8);

// 2.Функция для проверки, является ли строка палиндромом.. должна возвразать true/false
// Если хотите усложнить задание, предусмотрите случай, когда в строке встречаются пробелы. Они не должны учитываться при проверке!

function checkPalindrome(palindrome) {
  return (palindrome.replaceAll(' ', '').toLowerCase()) === (palindrome.replaceAll(' ', '').toLowerCase().split('').reverse().join(''));
}

checkPalindrome('Лёша на полке клопа нашёл ');

// 3.Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.
// Если в строке нет ни одной цифры, функция должна вернуть NaN
// Если хотите усложнить задание, предусмотрите случай, когда вместо строки приходит число:


//нагуглила
function getNumber(string) {
  return string.replace(/\D/g, '');
}

getNumber('1 кефир, 0.5 батона');

// написала
function getNumber2(string) {
  const arr = string.replaceAll(' ','').split('');
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
      newArr.push(arr[i]);
    }
  }

  return newArr.join('');
}

getNumber2('1 кефир, 0.5 батона');

// 4.Функция, которая принимает три параметра:
// исходную строку, минимальную длину и строку с добавочными символами —
// и возвращает исходную строку, дополненную указанными символами до заданной длины.
// Символы добавляются в начало строки.
// Если исходная строка превышает заданную длину, она не должна обрезаться.
// Если «добивка» слишком длинная, она обрезается с конца.

function addSymbol(string, minLength, symbol) {
  if (string >= minLength) {
    return string;
  } else {
    const arr = string.split('');
    const newSymbol = symbol.split('');

    for (let i = minLength - string.length; i > 0; i--) {
      arr.unshift(newSymbol[i]);
    }
    // console.log(arr);
    return arr.join('');

  }
}

addSymbol('q', 4, 'we');
