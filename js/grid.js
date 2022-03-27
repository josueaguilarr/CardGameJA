var btn1 = document.getElementById('newgrid');
btn1.addEventListener('click', newGrid);

var btn2 = document.getElementById('deletegrid');
btn2.addEventListener('click', deleteGrid);

var divpadre = document.getElementById('padre');
divpadre.classList.add('divpadre', 'bgcard');

var divmsj = document.getElementById('msj');
divmsj.classList.add('container', 'fs-5');

var num = document.getElementById('numero');

var numeros = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
var vidas = 3;
var intento = 0;
var posicion = 0;
var limite = false;

function newGrid() {
    var busqueda;
    var img1 = document.createElement('img');
    busqueda = Math.floor(Math.random() * ((9 + 1) - 1) + 1);
    img1.setAttribute("src", "img/" + busqueda + ".png");
    img1.id = 'busqueda';
    img1.height = '120';
    num.appendChild(img1);
    for (let i = 0; i < 9; i++) {
        numeros[i] = Math.floor(Math.random() * ((9 + 1) - 1) + 1);
        for (var j = 0; j < i; j++) {
            if (numeros[i] == numeros[j]) {
                i--;
            }
        }
    }

    for (var i = 0; i < 9; i++) {
        var br = document.createElement('br');
        var div = document.createElement('div');
        div.id = 'div' + posicion;
        div.classList.add('bgitem');
        var img2 = document.createElement('img');
        img2.setAttribute("src", "img/signo.png");
        img2.height = '120';
        img2.id = 'img' + posicion;
        div.appendChild(img2);
        divpadre.appendChild(div);
        posicion = posicion + 1;
    }

    for (var i = 0; i < 9; i++) {
        const img3 = document.getElementById('img' + i);
        img3.img1 = numeros[i];
        img3.addEventListener('click', function() {
            if (limite == false) {
                img3.src = 'img/' + img3.img1 + '.png';
                if (img3.img1 == busqueda) {
                    divmsj.textContent = 'Felicidades encontraste el número ' + img3.img1 + ' :)';
                    limite = true;
                } else {
                    vidas--;
                    divmsj.textContent = 'Oops! Te quedan ' + vidas + ' vidas';
                }
                if (vidas == 0) {
                    divmsj.textContent = 'Te quedaste sin vidas, reinicia :(';
                    limite = true;
                }
            }
        })
    }
}

function deleteGrid() {
    while (divpadre.firstElementChild) {
        divpadre.removeChild(divpadre.firstElementChild);
        limite = false;
        intentos = 0;
    }
    while (num.firstElementChild) {
        num.removeChild(num.firstElementChild);
    }
    posicion = 0;
    divmsj.textContent = '';
    vidas = 3;
}