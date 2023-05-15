const div_colorida = document.getElementById("colorida");
const input_cor = document.getElementById("input_cor");
const meu_primeiro_array = [1,2,3,4,'casa']

div_colorida.style.height = '1em';
div_colorida.style.backgroundColor = 'black';

function mudar_cor(e){
    div_colorida.style.backgroundColor = e.target.value;
    console.log(e.target.value);
}

input_cor.onchange = mudar_cor;

let cont = 0;
while(cont < meu_primeiro_array.legth){
    console.log(meu_primeiro_array[cont]);
    cont++;
}

for(let i=0;i<meu_primeiro_array.legth;i++){
    console.log('com for',meu_primeiro_array[i]);
}

meu_primeiro_array.forEach( (ele, indice) => {
    console.log(ele, indice);
});

for (const ele of meu_primeiro_array){
    console.log('for of',ele);
}

console.log('map', meu_primeiro_array.map((e) => e + 1 ));