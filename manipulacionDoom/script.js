const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');
const form = document.querySelector('#formulario')

//Eventos
form.addEventListener('submit', btnOnClick)



function btnOnClick(event) {
  event.preventDefault()
  const sumaInputs = Number(input1.value) + Number(input2.value)
  pResult.innerText = "Resultado: " + sumaInputs
}

/*
btn.addEventListener('click', btnOnClick)



function btnOnClick(event) {
  event.preventDefault()
  const sumaInputs = Number(input1.value) + Number(input2.value)
  pResult.innerText = "Resultado: " + sumaInputs
}
//Solo hat qu espesifica en el formulario que el button es type="button"
*/