/* ------------------------ DOM ELEMENTS ------------------------ */
const resultEl = document.querySelector(".result");
const lengthEl = document.querySelector(".length");
const uppercase = document.querySelector(".uppercase");
const lowercase = document.querySelector(".lowercase");
const numbers = document.querySelector(".numbers");
const symbols = document.querySelector(".symbols");
const generate = document.querySelector(".generate");
const clipboard = document.querySelector(".clipboard");

const getFunctions = {
  upper: getUppercase,
  lower: getLowercase,
  number: getNumbers,
  symbol: getSymbols,
};
/* ------------------------ FUNCTIONS ------------------------ */
function getUppercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getLowercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getNumbers() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getSymbols() {
  const symbols = "!@#$%^&*(){}[]=<>/,.+-?"; //variavel local
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword(config) {
  // Destructuring do objeto config
  const { upper, lower, number, symbol, length } = config;
  let generatedPassword = "";
  const typesCount = upper + lower + number + symbol;
  const typesArray = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );

  if (typesCount === 0) {
    return "";
  }

  for (let i = 0; i < length; i += typesCount) {
    typesArray.forEach((type) => {
      const funcName = Object.keys(type)[0];
      generatedPassword += getFunctions[funcName]();
    });
  }
  const finalPassword = generatedPassword.slice(0, length);
  return finalPassword;
}
/* ------------------------ EVENT LISTENERS ------------------------ */
clipboard.addEventListener("click", async () => {
  const password = resultEl.innerText;

  if (!password) return;

  try {
    await navigator.clipboard.writeText(password);
    alert("Password copied to clipboard!");
  } catch {
    err;
    alert("Failed to copy password");
  }
});
generate.addEventListener("click", () => {
  const config = {
    length: +lengthEl.value,
    upper: uppercase.checked,
    lower: lowercase.checked,
    number: numbers.checked,
    symbol: symbols.checked,
  };
  resultEl.innerText = generatePassword(config);
});

/* crie as funçoes para gerar:
- uppercase letters
- lowercase letters
- numbers
- symbols

- explicação da função dos 3 primeiros:
  1)Math.random() * 26 - Gera um número aleatório entre 0 e 25.999...
  2)Math.floor(...) - Arredonda para baixo, resultando em um inteiro entre 0 e 25
  3)... + 65 - Soma 65 ao número (65 é o código ASCII para 'A')
  4)String.fromCharCode(...) - Converte o código ASCII de volta para caractere
*/
