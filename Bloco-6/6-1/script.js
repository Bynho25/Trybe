let states = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];
let formStates = document.querySelector('#states');
let cont = 1;
function setStates() {
  for(let i = 0; i < states.length; i += 1) {
    let eachState = document.createElement('option');
    eachState.value = cont;
    eachState.innerHTML = states[i];
    formStates.appendChild(eachState);
    cont +=1;
  }
}
setStates();