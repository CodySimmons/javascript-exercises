const caesar = function (input, shift) {
  return input
    .split("")
    .map((char) => shiftChar(char, shift))
    .join("");
};

const codeSet = (code) => (code < 97 ? 65 : 97);

const mod = (n, m) => ((n % m) + m) % m; //helps mod negative numbers, JS is weird about it.

const shiftChar = (char, shift) => {
  const code = char.charCodeAt();

  //if character is a valid alphabet character, shift character depending on its codeset value
  //mod 26 helps it loop around if goes below 0/above 26
  if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
    return String.fromCharCode(
      mod(code + shift - codeSet(code), 26) + codeSet(code)
    );
  }
  return char;
};

//let input = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
// let input = "Hello";
// let shift = 4;

// console.log(caesar(input, shift));

//caesar();
// const mod = (n, m) => ((n % m) + m) % m; //helps mod negative numbers, JS is weird about it.
// const input = 66;
// const shift = -5;

// console.log(mod(input + shift - 65, 26));
// console.log(mod(input + shift - 65, 26) + 65);

module.exports = caesar;
