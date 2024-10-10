//Задание 1.a.
const dateOneInput = document.getElementById("date-one");
const dateTwoInput = document.getElementById("date-two");
const resultDate = document.getElementById("result-date");
const calculateBtn = document.getElementById("calculate-date-btn");

const dateResult = (message) => {
  resultDate.textContent = message;
};
const dateError = (error) => {
  resultDate.textContent = error;
};

const dateDifference = () => {
  const dateOneValue = dateOneInput.value;
  const dateTwoValue = dateTwoInput.value;

  console.log("Date One:", dateOneValue);
  console.log("Date Two:", dateTwoValue);

  if (!dateOneValue || !dateTwoValue) {
    dateError("Ошибка! Введите обе даты.");
    return;
  }
  const dateOneObject = new Date(dateOneValue);
  const dateTwoObject = new Date(dateTwoValue);

  const diffDays = getDiffDays(dateOneObject, dateTwoObject);
  dateResult(`Количество дней между датами: ${diffDays}`);
};

const getDiffDays = (dateOne, dateTwo) => {
  const diffMs = Math.abs(dateTwo.getTime() - dateOne.getTime());
  return Math.round(diffMs / (1000 * 60 * 60 * 24));
};

calculateBtn.addEventListener("click", dateDifference);

//Задание 1.b.
const stringInput = document.getElementById("string-text");
const resultString = document.getElementById("result-string");
const vowelsBtn = document.getElementById("calculate-vowels-btn");

const stringResult = (message) => {
  resultString.textContent = message;
};
const stringError = (error) => {
  resultString.textContent = error;
};

const isValidStr = (str) => /^[a-z ]+$/.test(str);
const findVowelsCount = (str) => (str.match(/[aeiou]/gi) || []).length;

const checkString = () => {
  const stringValue = stringInput.value;
  console.log("Enter string:", stringValue);

  if (!stringValue) {
    return stringError("Ошибка! Введите строку.");
  }

  if (!isValidStr(stringValue)) {
    return stringError(
      "Ошибка! Введите только строчные латинские буквы и/или пробелы."
    );
  }
  const vowelsCount = findVowelsCount(stringValue);
  stringResult(`Количество гласных в строке: ${vowelsCount}`);
};

vowelsBtn.addEventListener("click", checkString);
