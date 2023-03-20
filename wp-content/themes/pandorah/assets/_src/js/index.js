/*
 * @title Main App
 * @description Application entry point
 */


// GSAP START
import { gsap } from './components/gsap/gsap.min';
import { ScrollTrigger } from './components/gsap/ScrollTrigger.min';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    // callAccordions();
});

window.addEventListener('load', () => {

	function top(){
		window.scrollTo(0, 0);
	}
	setTimeout(	top, 100);

    // document.querySelector('.--preview-screen-btn').addEventListener('click', function(){
    //     document.querySelector('.--preview-screen-message').classList.add('show');
    //     document.querySelector('.--preview-screen').classList.add('active');
    // })

	// document.querySelector('.--preview-screen-down').addEventListener('click', function(){
	// 	// document.querySelector('.--preview-screen').classList.add('up');


	// 	// document.querySelector('.--preview-screen-message-box').classList.add('go');
	// 	// document.querySelector('.--preview-screen-message').classList.add('scale');
	// 	document.querySelector('.-go_up').classList.add('show');
	// })


	document.querySelector('.-go_up').addEventListener('click', function(){
		// document.querySelector('.--preview-screen-message-box').classList.remove('go');
		// document.querySelector('.--preview-screen-message').classList.remove('scale');
		// document.querySelector('.--preview-screen').classList.remove('up');
		window.scrollTo({top: 0, behavior: 'smooth'});
		document.querySelector('.-go_up').classList.remove('show');
        // document.querySelector('body').classList.add('overflow');
	})


	// let exquisite = gsap.timeline({
	// 	scrollTrigger: {
	// 		trigger: ".exquisite",
	// 		start: "center center",
	// 		end: "+=900",
	// 		toggleClass: "active"
	// 	},
	// });


	// let userContent = gsap.timeline({
	// 	scrollTrigger: {
	// 		trigger: ".user_content",
	// 		start: "center center",
	// 		end: "+=900",
	// 		toggleClass: "active"
	// 	},
	// });

	// let screenDown = gsap.timeline({
	// 	scrollTrigger: {
	// 		trigger: ".-go_up",
	// 		start: "center center",
	// 		end: "+=900",
	// 		toggleClass: "show",
	// 		markers: false	
	// 	},
	// });


	const elem = document.querySelector(".--preview-screen");
	
	let previewScreen = gsap.timeline({
		scrollTrigger: {
			trigger: '.--preview-screen-content',
			pin: true,
			start: "top top",
			end: "+=100%",
			// toggleClass: 'active',
			markers: false,
	
			onUpdate:(self)=>{
				// console.log(self);
				if(self.progress < 0.5) {
					elem.classList.remove('active');
				}else{
					elem.classList.add('active');
				}
			},
			scrub: true,
		}
	})
	.to('.--preview-screen-img',{
		scale: 1.1
	})


	let scrolltoTop = window.scrollY
	const Gotop = document.querySelector(".-go_up")
	const scrollToChange = 1500

	const add_class_on_scroll_up = () => Gotop.classList.add("show")
	const remove_class_on_scroll_up = () => Gotop.classList.remove("show")

	window.addEventListener('scroll', function() { 
	scrolltoTop = window.scrollY;

	if (scrolltoTop >= scrollToChange) { add_class_on_scroll_up() }
	else { remove_class_on_scroll_up() }
	
	})


	function openAccordion() {
		const content = this.parentElement.querySelector('.accordion_description');
		this.parentElement.classList.toggle('show');
	
		if (content.style.maxHeight) {
		  content.style.maxHeight = null;
		} else {
		  content.style.maxHeight = `${content.scrollHeight}px`;
		}
	}
	
	const element = document.querySelectorAll('.accordion_title');
	element.forEach((item) => {
		item.addEventListener('click', openAccordion);
	});
});
