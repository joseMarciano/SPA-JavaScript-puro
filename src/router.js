import inicializaCadastro from './componentes/cadastro/componente-cadastro.js';
import inicializaTabela from './componentes/lista/listagem-cliente.js';


const rotas = {
    "/": inicializaTabela,
    "/cadastro": inicializaCadastro
}

const rootDiv = document.querySelector('[data-container]');

const navegacao = (pathName) => {
    window.history.pushState({}, pathName, window.location.origin + pathName);

    rootDiv.innerHTML = "";
    const iniciarRota = rotas[window.location.pathname];

    rootDiv.appendChild(iniciarRota());
}

window.navegacao = navegacao;

window.onpopstate = () => {
    rootDiv.innerHTML = "";
    rootDiv.appendChild(rotas[window.location.pathname]());
}
export { navegacao };