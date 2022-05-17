/* eslint-disable no-undef */
//Faz o botão subir aparecer e sumir quando rolar o scroll
// eslint-disable-next-line no-unused-vars


//Ao clicar no botão menu...
const btmenu = window.document.getElementById("menu");
const categorias = window.document.getElementById("categorias");
const subir = window.document.getElementById("subir");
const fundo = window.document.getElementById("fundo");
const html = window.document.getElementById("html");

btmenu.addEventListener("click", function() {

	//O menu vai aparecer
	if(categorias.style.display === "none") {
		categorias.style.transition = '200ms left linear'
		categorias.style.left = '-360px'
	} else {
		categorias.style.transition = '200ms left linear'
		categorias.style.left = '0px'
	}

	//O butão de voltar ao topo vai sumir ou aparecer quando clicar no btnmenu
	if(subir.style.display === "block") {
		subir.style.display = "none";
	}

	//O fundo vai aparecer ou sumir quando clicar no btnmenu
	if(fundo.style.display === "block") {
		fundo.style.display = "none";
	} else {
		fundo.style.display = "block";
	}

	//O scroll da pág vai sumir ou aparecer quando clicar no btnmenu
	if(html.style.overflowY === "hidden") {
		html.style.overflowY = "scroll";
	} else {
		html.style.overflowY = "hidden";
	}
    
});

//Ao fechar o menu clicando no fundo da pág...
fundo.addEventListener("click", function() {

	//O menu vai sumir ou aparecer quando clicar no fundo
		categorias.style.transition = '200ms left linear'
		categorias.style.left = '-360px'

	//O fundo vai sumir ou aparecer quando clicar no fundo
		fundo.style.display = "none";

	//O scroll da pág vai sumir ou aparecer quando clicar no fundo
	if(html.style.overflowY === "hidden") {
		html.style.overflowY = "scroll";
	} else {
		html.style.overflowY = "hidden";
	}
});

// Faz a bolinha de voltar ao topo aparecer apenas quando o scroll estiver a mais de 300 pxs do topo

// eslint-disable-next-line no-unused-vars
window.addEventListener("scroll", (event) => {
	let scroll = this.scrollY;
	let subir = window.document.getElementById("subir");

	if(scroll < 100) {
		subir.style.transition = "20ms right linear"
		subir.style.right = "-50px";

	} else {
		subir.style.transition = "100ms right linear"
		subir.style.right = "10px";
	}
});

window.addEventListener("scroll", (event) => {
	let scroll = this.scrollY;
	let nav = document.querySelector('nav')
	let buttonNav = document.getElementById('menu')

	if(scroll < 200) {
		nav.style.transition = '100ms height linear'
		nav.style.height = '180px'
		buttonNav.style.transition = '400ms margin-top linear'
		buttonNav.style.transition = '400ms margin-left linear'
		buttonNav.style.marginTop = '100px'
		buttonNav.style.marginLeft = '10px'
		
	} else {
		const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
		console.log(vw);

		if (vw > 560) {
			buttonNav.style.transition = '200ms margin-top linear'
			buttonNav.style.marginTop = '20px'
			buttonNav.style.marginLeft = '250px'
			nav.style.transition = '200ms height linear'
			nav.style.height = '100px'
		}
		
	}
});

//---------------------------------------
// Scroll suave 

const menuLinks = document.querySelectorAll(".menu a[href^=\"#\"]");

function getDistanceFromTheTop(element) {
	const id = element.getAttribute("href");
	return document.querySelector(id).offsetTop;
}

// function nativeScroll(distanceFromTheTop) {
//   window.scroll({
//     top: distanceFromTheTop,
//     behavior: "smooth",
//   });
// }

function scrollToSection(event) {
	event.preventDefault();
	const distanceFromTheTop = getDistanceFromTheTop(event.target) - 90;
	smoothScrollTo(0, distanceFromTheTop);
}

menuLinks.forEach((link) => {
	link.addEventListener("click", scrollToSection);
});

function smoothScrollTo(endX, endY, duration) {
	const startX = window.scrollX || window.pageXOffset;
	const startY = window.scrollY || window.pageYOffset;
	const distanceX = endX - startX;
	const distanceY = endY - startY;
	const startTime = new Date().getTime();

	duration = typeof duration !== "undefined" ? duration : 700;

	const easeInOutQuart = (time, from, distance, duration) => {
		if ((time /= duration / 2) < 1)
			return (distance / 2) * time * time * time * time + from;
		return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
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
}