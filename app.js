// Get references to HTML elements
const textInput = document.querySelector(".text-input");
const wordCountElement = document.querySelector(".word-count");
const letterCountElement = document.querySelector(".letter-count");
const spaceCountElement = document.querySelector(".space-count");

// Define an array of checks
const checks = [atLeastTwoCharacters, absenceOfThreeConsecutiveCharacters];

// Check if there are at least two alphabetical characters in the text
function atLeastTwoCharacters(text) {
  const letters = text.match(/[a-z]/gi) || [];
  return letters.length >= 2;
}

// Check if there are no three consecutive occurrences of the same character
function absenceOfThreeConsecutiveCharacters(text) {
  for (let i = 0; i < text.length - 2; i++) {
    if (text[i] === text[i + 1] && text[i] === text[i + 2]) {
      return false;
    }
  }
  return true;
}

// Listen for input changes in the text input field
textInput.addEventListener("input", () => {
  // Trim the input and split it into words
  const splitted = textInput.value.trim().split(/\s+/);

  // Count the number of letters and spaces in the text
  const letterCount = (textInput.value.match(/[a-z]/gi) || []).length;
  const spaceCount = (textInput.value.match(/\s+/g) || []).length;

  // Count the number of valid words based on the checks
  let wordCount = 0;
  for (const text of splitted) {
    let isValid = true;
    for (const check of checks) {
      if (!check(text)) {
        isValid = false;
        break;
      }
    }
    if (isValid) {
      wordCount++;
    }
  }

  // Update the displayed counts
  wordCountElement.textContent = wordCount;
  letterCountElement.textContent = letterCount;
  spaceCountElement.textContent = spaceCount;
});












// const textInput = document.querySelector(".text-input");
// const worldCountElement = document.querySelector(".word-count");
// const letterCountElement = document.querySelector(".letter-count");
// const spaceCountElement = document.querySelector(".space-count");

// const checks = [atLeastTwoCharacters, abscenceOfThreeConsecutiveCharacters];

// function atLeastTwoCharacters(text) {
//   const letters = text.match(/[a-z]/gi) || [];
//   return letters.length >= 2;
// }

// function abscenceOfThreeConsecutiveCharacters(text) {
//   for (const character of text) {
//     const occurrences = Array.from(text).filter((v) => v == character).length;

//     if (occurrences >= 3) {
//       return false;
//     }
//   }

//   return true;
// }

// textInput.addEventListener("input", () => {
//   const splitted = textInput.value.trim().split(/[\s-]/);
//   const letterCount = (textInput.value.match(/[a-z]/gi) || []).length;
//   const spaceCount = (textInput.value.match(/\s+/g) || []).length;
//   let wordCount = 0;

//   outer: for (const text of splitted) {
//     for (const check of checks) {
//       if (!check(text)) {
//         continue outer;
//       }
//     }
//     wordCount++;
//   }

//   worldCountElement.textContent = wordCount;
//   letterCountElement.textContent = letterCount;
//   spaceCountElement.textContent = spaceCount;
// });
