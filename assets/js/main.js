/* ============== Show and Hide Menu =========== */

const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

/* ==== Menu show =========*/

/* === validate if constant exists ======== */

if (navToggle) {
	navToggle.addEventListener('click', () => {
		navMenu.classList.add('show-menu');
	});
}

/* ======= menu hidden ====== */

if (navClose) {
	navClose.addEventListener('click', () => {
		navMenu.classList.remove('show-menu');
	});
}

/* ================== Remove Menu Mobile ============== */

const navlink = document.querySelectorAll('.nav__link');

function linkAction() {
	const navMenu = document.getElementById('nav-menu');
	//when click on each nav__link, we remove the show menu
	navMenu.classList.remove('show-menu');
}

navlink.forEach((n) => n.addEventListener('click', linkAction));

/* ================= Change Background Header ======== */

function scrollHeader() {
	const header = document.getElementById('header');
	if (this.scrollY > 80) {
		header.classList.add('scroll__header');
	} else {
		header.classList.remove('scroll__header');
	}
}
window.addEventListener('scroll', scrollHeader);

/*=============== QUESTIONS ACCORDION ===============*/
const accordionItems = document.querySelectorAll('.questions__item');

accordionItems.forEach((item) => {
	const accordionHeader = item.querySelector('.questions__header');

	accordionHeader.addEventListener('click', () => {
		const openItem = document.querySelector('.accordion-open');

		toggleItem(item);

		if (openItem && openItem !== item) {
			toggleItem(openItem);
		}
	});
});

const toggleItem = (item) => {
	const accordionContent = item.querySelector('.questions__content');

	if (item.classList.contains('accordion-open')) {
		accordionContent.removeAttribute('style');
		item.classList.remove('accordion-open');
	} else {
		accordionContent.style.height = accordionContent.scrollHeight + 'px';
		item.classList.add('accordion-open');
	}
};

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
	const scrollY = window.pageYOffset;

	sections.forEach((current) => {
		const sectionHeight = current.offsetHeight;
		const sectionTop = current.offsetTop - 58;
		const sectionId = current.getAttribute('id');

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			document
				.querySelector('.nav__menu a[href*=' + sectionId + ']')
				.classList.add('active-link');
		} else {
			document
				.querySelector('.nav__menu a[href*=' + sectionId + ']')
				.classList.remove('active-link');
		}
	});
}
window.addEventListener('scroll', scrollActive);

/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
	const scrollUp = document.getElementById('scroll-up');
	// When the scroll is higher than 400 viewport height, add the show-scroll class to the a tag with the scroll-top class
	if (this.scrollY >= 400) scrollUp.classList.add('show-scroll');
	else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);
