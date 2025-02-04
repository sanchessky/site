/**
 * @author Thiago Sanches

 */

// Banner carrosel ------------
const main = document.querySelector('main')
const backgrounds = ['url(img/jogo.jpg)','url(img/jogo2.jpg)','url(img/jogo3.jpg)']

let indice = 0

function slider(){
    indice ++
    if (indice >= backgrounds.length) {
        indice = 0
    }
    //troca da imagem de background no CSS
main.style.backgroundImage = backgrounds[indice]
main.style.transition = 'background-image 1s ease-in-out'
}

setInterval(slider, 3000)

// fim do Banner carrosel --------------------------------------------------------------


// Inserindo o ano na tag <span> no HTML
let ano = document.getElementById('copyrightYear')

// A linha abaixo obtem o ano atual do sistema
let anoAtual = new Date().getFullYear()
// A linha abaixo atribui o ano a tag <span>
ano.innerHTML = anoAtual