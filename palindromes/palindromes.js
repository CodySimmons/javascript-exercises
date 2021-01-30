const palindromes = function (inputString) {
  let formattedString = inputString.toLowerCase().replace(/[^A-Za-z]/g, ""); //makes lowercase, removes punctuation
  return (
    //returns comparison with original formatting
    formattedString
      .split("") //turns string into an array, *MUST INCLUDE ""*
      .reverse() //reverse array order
      .join("") === formattedString //concatenates array back into string *MUST INCLUDE ""*
  );
};

module.exports = palindromes;

// console.log(palindromes("racecar"));
