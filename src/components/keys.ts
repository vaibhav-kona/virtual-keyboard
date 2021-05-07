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

const keys = [...generateAlphabets()];

// const otherKeys = [
//   {
//     type: "alphaNumeric",
//     keys: [
//       {
//         title: "a",
//         baseKey: "a",
//         shiftedKey: "A",
//         upperCaseKey: "A",
//       },
//       {
//         title: "a",
//         baseKey: "a",
//         shiftedKey: "A",
//         upperCaseKey: "A",
//       },
//     ],
//   },
// ];

export default keys;
