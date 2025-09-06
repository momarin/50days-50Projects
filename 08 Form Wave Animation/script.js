const labels = document.querySelectorAll(".form-control label");

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, index) =>
        `<span style="transition-delay:${index * 50}ms">${letter}</span>`
    )
    .join("");
  /*
1. Seleciona TODOS os elementos <label> dentro de elementos com classe "form-control"
2. Para CADA label encontrado, executa uma função
3. Substitui o conteúdo HTML do label
4. Divide o texto em um ARRAY de caracteres individuais
5. Transforma cada letra em um elemento <span>
6. Junta todos os spans de volta em uma única string.
*/
});
