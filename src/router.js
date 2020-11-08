import inicializaCadastro from './componentes/cadastro/componente-cadastro.js';


const rotas = {
    "/cadastro": inicializaCadastro
}

const rootDiv = documento.querySelector('[data-container]');

const navegacao = (pathName) => {
    window.history.pushState({}, pathName, window.location.origin + pathName);

    rootDiv.innerHTML = "";
    const iniciarRota = rotas[window.location.pathname];

    rootDiv.appendChild(iniciarRota());
}

export { navegacao };