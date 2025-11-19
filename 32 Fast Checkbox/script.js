/* ------------------------ DOM ELEMENTS ------------------------ */
const toggles = document.querySelectorAll(".toggle");
const good = document.querySelector("#good");
const cheap = document.querySelector("#cheap");
const fast = document.querySelector("#fast");
/* ------------------------ FUNCTIONS ------------------------ */
function doIt(checkedBox) {
  if (good.checked && cheap.checked && fast.checked) {
    if (good === checkedBox) {
      fast.checked = false;
    }
    if (cheap === checkedBox) {
      good.checked = false;
    }
    if (fast === checkedBox) {
      cheap.checked = false;
    }
  }
}
/* ------------------------ EVENT LISTENERS ------------------------ */
toggles.forEach((toggle) =>
  toggle.addEventListener("change", (e) => doIt(e.target))
);

/*
outras formas de fazer a função
1) Mais legível
function doIt(checkedBox) {
  const checkboxes = { good, cheap, fast };
  
  if (good.checked && cheap.checked && fast.checked) {
    // Cria um array com as checkboxes que NÃO são a que acabou de ser marcada
    const otherCheckboxes = Object.values(checkboxes).filter(cb => cb !== checkedBox);
    
    // Desmarca a primeira checkbox que não seja a atual
    const checkboxToUncheck = otherCheckboxes.find(cb => cb.checked);
    if (checkboxToUncheck) {
      checkboxToUncheck.checked = false;
    }
  }
}

2) Mais flexível
function doIt(checkedBox) {
  const allCheckboxes = [good, cheap, fast];
  
  // Conta quantas estão marcadas
  const checkedCount = allCheckboxes.filter(cb => cb.checked).length;
  
  // Se todas as 3 estiverem marcadas, desmarca uma que não seja a atual
  if (checkedCount === 3) {
    const checkboxToUncheck = allCheckboxes.find(cb => cb !== checkedBox && cb.checked);
    if (checkboxToUncheck) {
      checkboxToUncheck.checked = false;
    }
  }
}

3) Mais robusta (lida melhor com casos edge)
function doIt(checkedBox) {
  const checkboxes = [
    { name: 'good', element: good },
    { name: 'cheap', element: cheap },
    { name: 'fast', element: fast }
  ];
  
  const allChecked = checkboxes.every(cb => cb.element.checked);
  
  if (allChecked) {
    // Encontra uma checkbox para desmarcar (que não seja a que foi clicada)
    const checkboxToUncheck = checkboxes.find(cb => 
      cb.element !== checkedBox && cb.element.checked
    );
    
    if (checkboxToUncheck) {
      console.log(`Desmarcando ${checkboxToUncheck.name} para manter a regra`);
      checkboxToUncheck.element.checked = false;
    }
  }
}

4) Mais curta
function doIt(checkedBox) {
  if (good.checked && cheap.checked && fast.checked) {
    [good, cheap, fast].find(cb => cb !== checkedBox && cb.checked).checked = false;
  }
}


*/
