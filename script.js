var carSize = document.querySelectorAll('.block3__option');
carSize.forEach(button => {
    button.addEventListener('click', changeSize)
});

function changeSize(event) {
    var carArray = [{
        name: 'Малый газовоз на базе автомобиля УАЗ',
        image: 'img/carSize-little.png'
        }, {
        name: 'Малый газовоз на базе автомобиля Iveco',
        image: 'img/carSize-small.png'
        }, {
        name: 'Средний газовоз на базе автомобиля Камаз',
        image: 'img/carSize-medium.png'
        }, {
        name: 'Большая цистерна-прицеп',
        image: 'img/carSize-big.png'
        }
    ];
    var a = parseInt(event.target.dataset.num);
    var carImage = document.getElementById('carImage');
    carImage.setAttribute('src', carArray[a].image);
    for(i = 0; i < carSize.length; i++) {
        carSize[i].className = 'block3__option';
    }
    carSize[a].className = 'block3__option block3__option-accent';
    carImage.setAttribute('alt',carArray[a].name);
}


var popup__close = document.getElementById('popup__close');
popup__close.addEventListener('click', hidePopup, false);

var btnsZakaz = document.getElementsByClassName('btnZakaz');
for(i = 0; i < btnsZakaz.length; i++) {
    btnsZakaz[i].addEventListener('click', showPopup, false);
};

function showPopup() {
    var wrap = document.getElementById('wrapper');
    var popup = document.getElementById('popup');
    wrap.style.opacity = '0.1';
    wrap.style.userSelect = 'none';
    popup.style.display = 'block';
}
function hidePopup() {
    var wrap = document.getElementById('wrapper');
    var popup = document.getElementById('popup');
    wrap.style.opacity = '1';
    wrap.style.userSelect = 'auto';
    popup.style.display = 'none';
}

var popup__form = document.getElementById('popup__form');
var popup__btn = document.getElementById('popup__btn');
popup__btn.addEventListener('click', function() {
    var url = 'thanks.html';
    popup__form.action = url;
}, false);