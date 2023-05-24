// referencias

const div_lista_imagens = document.getElementById("lista_imagens")
const div_imagens = document.getElementById("imagens")
const input_busca = document.getElementById('busca')

// modificando o array acrescentando o caminho das imagens
minhas_imagens.forEach(
    (ele) => {
        ele.caminho = 'imagens/numero_'+ ele.valor + '.png';
    }
)

const cartao = (clicada) => {
    const container = document.createElement('div');
    const imagem = document.createElement('img');
    const legenda = document.createElement('h5');

    container.style.border = 'solid black 1px';
    container.style.borderRadius = '5px';
    container.style.width = 'fit-content';
    container.style.textAlign = 'center';
    container.style.margin = '0 auto';
    container.style.fontFamily = 'sans-serif';

    imagem.src = clicada.src
    imagem.width = 200;

    legenda.innerHTML = clicada.alt

    container.appendChild(imagem);
    container.appendChild(legenda);

    div_imagens.innerHTML = '';
    div_imagens.appendChild(container);
}

// manipulando evento

const manipula_evento = ( evento ) => {
    const imagem_clicada = evento.target;
    cartao(imagem_clicada);
}

const criar_imagens = (entrada) => {
    div_lista_imagens.innerHTML = '';
    entrada.forEach(
        (ele) => {
            const imagem_numero = document.createElement('img');
            imagem_numero.src = ele.caminho;
            imagem_numero.width = 100;
            imagem_numero.className = "imagem_da_lista";
            imagem_numero.alt = ele.descricao;
            imagem_numero.onclick = manipula_evento; 

            div_lista_imagens.appendChild(imagem_numero)
        }
    )
}

criar_imagens(minhas_imagens);

// busca

const manipula_evento_busca = (e) => {
    const string_busca = e.target.value;
    const novo_array = minhas_imagens.filter(
        (elemento) => {
            return elemento.descricao.includes(string_busca)
        }
        )
        criar_imagens(novo_array);
}

input_busca.onkeyup = manipula_evento_busca;