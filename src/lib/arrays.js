const getNthElement = (index, array) => {
  return array[index % 4];
};

const arrayToCSVString = array => {
  return array.toString();
};

const csvStringToArray = string => {
  return string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  return array.concat(element);
};

const removeNthElement = (index, array) => {
  array.splice(index, 1);
};

const numbersToStrings = numbers => {
  return numbers.map(number => number.toString());
};

const uppercaseWordsInArray = strings => {
  return strings.map(string => string.toUpperCase());
};

const reverseWordsInArray = strings => {
  return strings.map(string =>
    string
      .split('')
      .reverse()
      .join(''),
  );
};

const onlyEven = numbers => {
  return numbers.filter(number => number % 2 === 0);
};

const removeNthElement2 = (index, array) => {
  return array.filter((el, i) => i !== index);
};

const elementsStartingWithAVowel = strings => {
  return strings.filter(string =>
    ['a', 'e', 'i', 'o', 'u'].includes(string.toLowerCase().split('')[0]),
  );
};

const removeSpaces = string => {
  return string
    .split('')
    .filter(element => element !== ' ')
    .join('');
};

const sumNumbers = numbers => {
  return numbers.reduce((total, value) => total + value);
};

const sortByLastLetter = strings => {
  return strings.sort((a, b) => b[b.length - 1] < a[a.length - 1] || -1);
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter,
};
