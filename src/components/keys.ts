// 47 keys in total
// 26 - alhpa
// 10 - numeric
// 11 - special

// ~ --- - --- =
// [ --- ] --- \
// , --- . --- /
// ; --- '

const generateAlphabets = () => {
  const CHAR_CODE_FOR_LOWER_CASE_A = "a".charCodeAt(0);
  const CHAR_CODE_FOR_UPPER_CASE_A = "A".charCodeAt(0);

  const alphaKeys = [];

  for (let i = 0; i < 26; i += 1) {
    const lowerCaseCharCode = CHAR_CODE_FOR_LOWER_CASE_A + i;
    const upperCaseCharCode = CHAR_CODE_FOR_UPPER_CASE_A + i;

    alphaKeys.push({
      title: String.fromCharCode(lowerCaseCharCode),
      baseKey: String.fromCharCode(lowerCaseCharCode),
      shiftedKey: String.fromCharCode(upperCaseCharCode),
      upperCaseKey: String.fromCharCode(upperCaseCharCode),
    });
  }

  return alphaKeys;
};

export const numericKeys = [
  {
    title: "0",
    baseKey: "0",
    shiftedKey: ")",
    upperCaseKey: null,
  },
  {
    title: "1",
    baseKey: "1",
    shiftedKey: "!",
    upperCaseKey: null,
  },
  {
    title: "2",
    baseKey: "2",
    shiftedKey: "@",
    upperCaseKey: null,
  },
  {
    title: "3",
    baseKey: "3",
    shiftedKey: "#",
    upperCaseKey: null,
  },
  {
    title: "4",
    baseKey: "4",
    shiftedKey: "$",
    upperCaseKey: null,
  },
  {
    title: "5",
    baseKey: "5",
    shiftedKey: "%",
    upperCaseKey: null,
  },
  {
    title: "6",
    baseKey: "6",
    shiftedKey: "^",
    upperCaseKey: null,
  },
  {
    title: "7",
    baseKey: "7",
    shiftedKey: "&",
    upperCaseKey: null,
  },
  {
    title: "8",
    baseKey: "8",
    shiftedKey: "*",
    upperCaseKey: null,
  },
  {
    title: "9",
    baseKey: "9",
    shiftedKey: "(",
    upperCaseKey: null,
  },
];

export const alphabetKeys = [...generateAlphabets()];

export const specialKeys = [
  {
    title: "`",
    baseKey: "`",
    shiftedKey: "~",
    upperCaseKey: null,
  },
  {
    title: "-",
    baseKey: "-",
    shiftedKey: "_",
    upperCaseKey: null,
  },
  {
    title: "=",
    baseKey: "=",
    shiftedKey: "+",
    upperCaseKey: null,
  },
  {
    title: "[",
    baseKey: "[",
    shiftedKey: "{",
    upperCaseKey: null,
  },
  {
    title: "]",
    baseKey: "]",
    shiftedKey: "}",
    upperCaseKey: null,
  },
  {
    title: "\\",
    baseKey: "\\",
    shiftedKey: "|",
    upperCaseKey: null,
  },
  {
    title: ";",
    baseKey: ";",
    shiftedKey: ":",
    upperCaseKey: null,
  },
  {
    title: "'",
    baseKey: "'",
    shiftedKey: '"',
    upperCaseKey: null,
  },
  {
    title: ",",
    baseKey: ",",
    shiftedKey: "<",
    upperCaseKey: null,
  },
  {
    title: ".",
    baseKey: ".",
    shiftedKey: ">",
    upperCaseKey: null,
  },
  {
    title: "/",
    baseKey: "/",
    shiftedKey: "?",
    upperCaseKey: null,
  },
];

const keys = [...alphabetKeys, ...numericKeys, ...specialKeys];

export default keys;
