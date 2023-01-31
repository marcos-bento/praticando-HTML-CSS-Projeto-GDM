const botaoMenu = document.querySelector('.cabecalho__imagem-tema-diurno')
const botaoMenu2 = document.querySelector('.cabecalho__imagem-tema-noturno')
const body = document.querySelector('body')
const menu = document.querySelector('.cabecalho__menu')
const menuLista = document.querySelector('.menuLateralEscondido')
const bannerTitulo = document.querySelector('.banner__titulo')
const bannerTexto = document.querySelector('.banner__texto')
const topicoTexto = document.querySelector('.topico__texto')
const topicoTexto2 = document.querySelector('.topico__texto2')
const topicoTexto3 = document.querySelector('.topico__texto3')
const topicoTitulo = document.querySelector('.topico__titulo')
const topicoTitulo2 = document.querySelector('.topico__titulo2')
const topicoTitulo3 = document.querySelector('.topico__titulo3')



menu.addEventListener('click', () =>{
	menuLista.classList.toggle('menuLateralEscondido-Aberto')
	menu.classList.toggle('cabecalho__menu-aberto')
})

botaoMenu.addEventListener('click', () =>{
	botaoMenu.classList.toggle('cabecalho__imagem-tema-diurno');
	botaoMenu.classList.toggle('cabecalho__imagem-tema-noturno');
	body.classList.toggle('body__modo-diurno');
	bannerTitulo.classList.toggle('banner__titulo-diurno');
	bannerTexto.classList.toggle('banner__texto-diurno');
	topicoTexto.classList.toggle('topico__texto-diurno');
	topicoTexto2.classList.toggle('topico__texto-diurno');
	topicoTexto3.classList.toggle('topico__texto-diurno');
	topicoTitulo.classList.toggle('topico__titulo-diurno');
	topicoTitulo2.classList.toggle('topico__titulo-diurno');
	topicoTitulo3.classList.toggle('topico__titulo-diurno');
	openForm();
})

function openForm() {
	document.getElementById("myForm").style.display = "block";
	setTimeout(() => {
		closeForm();
	}, 1500)
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

