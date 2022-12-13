(function () {
    var menu = document.getElementById('header-nav');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) menu.classList.add('menuFixo');
        else menu.classList.remove('menuFixo');
    });
})();


$(function() {
  $('#cep').mask('00000-000');
  $('#tel').mask('(00) 00000-0000');
})


const menuItems = document.querySelectorAll('.menu p a[href^="#"]');

function getScrollTopByHref(element) {
	const id = element.getAttribute('href');
	return document.querySelector(id).offsetTop;
}

function scrollToPosition(to) {
  smoothScrollTo(0, to);
}

function scrollToIdOnClick(event) {
	event.preventDefault();
	const to = getScrollTopByHref(event.currentTarget)- 80;
	scrollToPosition(to);
}

menuItems.forEach(item => {
	item.addEventListener('click', scrollToIdOnClick);
});

// Caso deseje suporte a browsers antigos / que não suportam scroll smooth nativo
/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int) endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== 'undefined' ? duration : 400;


  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60); 
};

var form = document.querySelector('form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
});

document.querySelector('#PedidoButton').addEventListener('click', (e) =>{

 let Address = document.querySelector('.endereco').value;
 let City = document.querySelector('.cidade').value;
 let complement= document.querySelector('.complemento').value;
 let district = document.querySelector('.bairro').value;
 let name = document.querySelector('.nome').value;
 let tel = document.querySelector('#tel').value;
 let textArea = document.querySelector('.textArea').value;

 if(Address && City && complement && district && name && tel && textArea ) {

  document.querySelector('.endereco').value=("");
  document.querySelector('.cidade').value=("");
  document.querySelector('.complemento').value=("");
  document.querySelector('.bairro').value=("");
  document.querySelector('.nome').value=("");
  document.querySelector('#tel').value=("");
  document.querySelector('#cep').value=("");
  document.querySelector('.textArea').value=("");

  let dados = document.querySelector('.fundo-poupup');
  dados.classList.remove('open');
 }
  
});

document.querySelector('.fundo-poupup').addEventListener('click', (e) =>{
  let dados = document.querySelector('.fundo-poupup');
  dados.classList.add('open');
});