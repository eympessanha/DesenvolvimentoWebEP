function aumenta() {
    const meuSpan = document.getElementById("meu_span");
    let meuValor = parseInt(meuSpan.innerText);
    meuValor++;
    meuSpan.innerText = meuValor;
    if (meuValor === 5) mudaDivs();
}

const mudaDivs = () => {
    const divs = document.querySelectorAll(".minha_div");

    divs.forEach( (elemento) => {
        elemento.style.backgroundColor = 'gray';
        elemento.style.height = '3em';
        elemento.style.border = 'solid black 1em';
    });
}

document.getElementById("meu_botao").onclick = aumenta;
