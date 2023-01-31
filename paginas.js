const botaoMenu = document.querySelector('.cabecalho__imagem-tema-diurno')
const botaoMenu2 = document.querySelector('.cabecalho__imagem-tema-noturno')
const body = document.querySelector('body')
const menu = document.querySelector('.cabecalho__menu')
const menuLista = document.querySelector('.menuLateralEscondido')
const banner = document.querySelector('.banner__titulo-paginas')
const bannerRodape = document.querySelector('.banner__rodape')
const topoTitulo = document.querySelector('.topo__titulo')
const topoTitulo2 = document.querySelector('.topo__titulo2')

menu.addEventListener('click', () =>{
	menuLista.classList.toggle('menuLateralEscondido-Aberto')
	menu.classList.toggle('cabecalho__menu-aberto')
})

botaoMenu.addEventListener('click', () =>{
	botaoMenu.classList.toggle('cabecalho__imagem-tema-diurno');
	botaoMenu.classList.toggle('cabecalho__imagem-tema-noturno');
	banner.classList.toggle('banner__titulo-paginas-diurno');
	bannerRodape.classList.toggle('banner__titulo-paginas-diurno');
	topoTitulo.classList.toggle('topo__titulo-diurno');
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
