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


	let exquisite = gsap.timeline({
		scrollTrigger: {
			trigger: ".exquisite",
			start: "center center",
			end: "+=900",
			toggleClass: "active"
		},
	});


	let userContent = gsap.timeline({
		scrollTrigger: {
			trigger: ".user_content",
			start: "center center",
			end: "+=900",
			toggleClass: "active"
		},
	});


	

	let previewScreen = gsap.timeline({
		scrollTrigger: {
			trigger: ".--preview-screen",
			start: "center center",
			end: "+=900",
			toggleClass: "active",
			markers: false,
		},
	});

	// let screenDown = gsap.timeline({
	// 	scrollTrigger: {
	// 		trigger: ".-go_up",
	// 		start: "center center",
	// 		end: "+=900",
	// 		toggleClass: "show",
	// 		markers: false	
	// 	},
	// });



		let scrollpos = window.scrollY

		const header = document.querySelector(".--preview-screen-content")
		const scrollChange = 700

		const add_class_on_scroll = () => header.classList.add("opacity")
		const remove_class_on_scroll = () => header.classList.remove("opacity")

		window.addEventListener('scroll', function() { 
		scrollpos = window.scrollY;

		if (scrollpos >= scrollChange) { add_class_on_scroll() }
		else { remove_class_on_scroll() }
		
		})





		let scrolltoTop = window.scrollY
		const Gotop = document.querySelector(".-go_up")
		const scrollToChange = 700

		const add_class_on_scroll_up = () => Gotop.classList.add("show")
		const remove_class_on_scroll_up = () => Gotop.classList.remove("show")

		window.addEventListener('scroll', function() { 
		scrolltoTop = window.scrollY;

		if (scrolltoTop >= scrollToChange) { add_class_on_scroll_up() }
		else { remove_class_on_scroll_up() }
		
		})





    // GSAP Animation
	const boxes = gsap.utils.toArray(".run-item");
	const loop = horizontalLoop(boxes, {
		paused: true, // Sets the tween to be paused initially
		repeat: -1 // Makes sure the tween runs infinitely
	});

	loop.play() // Call to start playing the tween

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


// -------------------------------------------------------------------------------------------------------------------------------------

/*
This helper function makes a group of elements animate along the x-axis in a seamless, responsive loop.

Features:
 - Uses xPercent so that even if the widths change (like if the window gets resized), it should still work in most cases.
 - When each item animates to the left or right enough, it will loop back to the other side
 - Optionally pass in a config object with values like "speed" (default: 1, which travels at roughly 100 pixels per second), paused (boolean),  repeat, reversed, and paddingRight.
 - The returned timeline will have the following methods added to it:
   - next() - animates to the next element using a timeline.tweenTo() which it returns. You can pass in a vars object to control duration, easing, etc.
   - previous() - animates to the previous element using a timeline.tweenTo() which it returns. You can pass in a vars object to control duration, easing, etc.
   - toIndex() - pass in a zero-based index value of the element that it should animate to, and optionally pass in a vars object to control duration, easing, etc. Always goes in the shortest direction
   - current() - returns the current index (if an animation is in-progress, it reflects the final index)
   - times - an Array of the times on the timeline where each element hits the "starting" spot. There's also a label added accordingly, so "label1" is when the 2nd element reaches the start.
 */
   function horizontalLoop(items, config) {
	items = gsap.utils.toArray(items);
	config = config || {};
	let tl = gsap.timeline({repeat: config.repeat, paused: config.paused, defaults: {ease: "none"}, onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100)}),
		length = items.length,
		startX = items[0].offsetLeft,
		times = [],
		widths = [],
		xPercents = [],
		curIndex = 0,
		pixelsPerSecond = (config.speed || 1) * 100,
		snap = config.snap === false ? v => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
		totalWidth, curX, distanceToStart, distanceToLoop, item, i;
	gsap.set(items, { // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
		xPercent: (i, el) => {
			let w = widths[i] = parseFloat(gsap.getProperty(el, "width", "px"));
			xPercents[i] = snap(parseFloat(gsap.getProperty(el, "x", "px")) / w * 100 + gsap.getProperty(el, "xPercent"));
			return xPercents[i];
		}
	});
	gsap.set(items, {x: 0});
	totalWidth = items[length-1].offsetLeft + xPercents[length-1] / 100 * widths[length-1] - startX + items[length-1].offsetWidth * gsap.getProperty(items[length-1], "scaleX") + (parseFloat(config.paddingRight) || 0);
	for (i = 0; i < length; i++) {
		item = items[i];
		curX = xPercents[i] / 100 * widths[i];
		distanceToStart = item.offsetLeft + curX - startX;
		distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
		tl.to(item, {xPercent: snap((curX - distanceToLoop) / widths[i] * 100), duration: distanceToLoop / pixelsPerSecond}, 0)
		  .fromTo(item, {xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] * 100)}, {xPercent: xPercents[i], duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond, immediateRender: false}, distanceToLoop / pixelsPerSecond)
		  .add("label" + i, distanceToStart / pixelsPerSecond);
		times[i] = distanceToStart / pixelsPerSecond;
	}
	function toIndex(index, vars) {
		vars = vars || {};
		(Math.abs(index - curIndex) > length / 2) && (index += index > curIndex ? -length : length); // always go in the shortest direction
		let newIndex = gsap.utils.wrap(0, length, index),
			time = times[newIndex];
		if (time > tl.time() !== index > curIndex) { // if we're wrapping the timeline's playhead, make the proper adjustments
			vars.modifiers = {time: gsap.utils.wrap(0, tl.duration())};
			time += tl.duration() * (index > curIndex ? 1 : -1);
		}
		curIndex = newIndex;
		vars.overwrite = true;
		return tl.tweenTo(time, vars);
	}
	tl.next = vars => toIndex(curIndex+1, vars);
	tl.previous = vars => toIndex(curIndex-1, vars);
	tl.current = () => curIndex;
	tl.toIndex = (index, vars) => toIndex(index, vars);
	tl.times = times;
  tl.progress(1, true).progress(0, true); // pre-render for performance
  if (config.reversed) {
    tl.vars.onReverseComplete();
    tl.reverse();
  }
	return tl;
}