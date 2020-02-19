import "../scss/style.scss";
import { ScrollScene, addIndicators } from 'scrollscene';
import { gsap, Linear } from 'gsap';


const Tl1 = gsap.timeline({ paused: true })
	.to('.banner-1 .banner__img', 1, {y: "150%", ease: Linear.easeNone,  opacity: 0})
	.to('.banner-1 .banner__img', 1, {y: "-150%", ease: Linear.easeNone,  opacity: 0});

const banner1 = new ScrollScene({
	triggerElement: '.content',
	gsap: {
			timeline: Tl1,
	},
	duration: '100%'
});


const TlBg1 = gsap.timeline({ paused: true })
	.to('.banner-1 .banner__bg', 1, {y: "-100%", ease: Linear.easeNone, opacity: 0});

const bannerBg1 = new ScrollScene({
	triggerElement: '.content',
	gsap: {
		timeline: TlBg1,
	},
	duration: '100%'
});
		

const Tl2 = gsap.timeline({ paused: true })
	.to('.banner-2 .banner__img', 2, {y: "-180%", ease: Linear.easeNone, opacity: 0});

const banner2 = new ScrollScene({
	triggerElement: '.content',
	gsap: {
		timeline: Tl2,
	},
	duration: '100%'
});


const TlBg2 = gsap.timeline({ paused: true })
	.to('.banner-2 .banner__bg', 1, {y: "200%", ease: Linear.easeNone, opacity: 0})
	.to('.banner-2 .banner__bg', 1, {y: "-200%", ease: Linear.easeNone, opacity: 0});

const bannerBg2 = new ScrollScene({
	triggerElement: '.content',
	gsap: {
		timeline: TlBg2,
	},
	duration: '100%'
});

const Tl3 = gsap.timeline({ paused: true })
	.to('.banner-3 .banner__img', 2, {y: "-150%", ease: Linear.easeNone, opacity: 0});

const banner3 = new ScrollScene({
	triggerElement: '.content',
	gsap: {
		timeline: Tl3,
	},
	duration: '100%'
});


const TlBg3 = gsap.timeline({ paused: true })
	.to('.banner-3 .banner__bg', 1, {y: "280%", ease: Linear.easeNone, opacity: 0})
	.to('.banner-3 .banner__bg', 1, {y: "-280%", ease: Linear.easeNone, opacity: 0});

const bannerBg3 = new ScrollScene({
	triggerElement: '.content',
	gsap: {
		timeline: TlBg3
	},
	duration: '100%'
});


const Tl4 = gsap.timeline({ paused: true })
	.to('.banner-4 .banner__img', 1, {y: "280%", ease: Linear.easeNone, opacity: 0})
	.to('.banner-4 .banner__img', 1, {y: "-280%", ease: Linear.easeNone, opacity: 0});

const banner4 = new ScrollScene({
	triggerElement: '.content',
	gsap: {
		timeline: Tl4
	},
	duration: '100%'
});

const TlBg4 = gsap.timeline({ paused: true })
	.to('.banner-4 .banner__bg', 1, {y: "-140%", ease: Linear.easeNone, opacity: 0});

const bannerBg4 = new ScrollScene({
	triggerElement: '.content',
	gsap: {
		timeline: TlBg4
	},
	duration: '100%'
});


const TlLogo = gsap.timeline({ paused: true })
	.to('.logo img', 1, {y: "80%", ease: Linear.easeNone, scale: 0.2, opacity: 0});

const logo = new ScrollScene({
	triggerElement: '.content',
	gsap: {
		timeline: TlLogo
	},
	duration: '100%'
});

const TlToScroll = gsap.timeline({ paused: true })
	.to('.to-scroll', 1, {opacity: 0, y: '-100%'});

const toScroll = new ScrollScene({
	triggerElement: '.content',
	gsap: {
		timeline: TlToScroll
	},
	duration: '2%'
});


const TlminiLogo = gsap.timeline({ paused: true })
	.from('.mini-logo img', 1, { y: 100, opacity: 0 }, 0.9);

const miniLogo = new ScrollScene({
	triggerElement: '.content',
	gsap: {
		timeline: TlminiLogo
	},
	triggerHook: 0.6,
	duration: '30%'
});


const TlText = gsap.timeline({ paused: true })
	.from('.text', 1, { y: 100, opacity: 0 }, 0.4);

const text = new ScrollScene({
	triggerElement: '.content',
	gsap: {
		timeline: TlText
	},
	triggerHook: 0.6,
	duration: '30%'
});

const TlIcons = gsap.timeline({ paused: true })
	.from('.icons-list', 1, { y: 100, opacity: 0 }, 0.1)
	.staggerFrom('.icons-list__item', 1, { y: 100, opacity: 0 }, 0.9);

const icons = new ScrollScene({
	triggerElement: '.content',
	gsap: {
		timeline: TlIcons
	},
	triggerHook: 0.6,
	duration: '50%'
});

const TlTitle = gsap.timeline({ paused: true })
	.from('h1', 1, { y: 100, opacity: 0 }, 1);

const title = new ScrollScene({
	triggerElement: '.content',
	gsap: {
		timeline: TlTitle
	},
	triggerHook: 0.6,
	duration: '50%'
});

const TlSubTitle = gsap.timeline({ paused: true })
	.from('h2', 1, { y: 100, opacity: 0 }, 1);

const subTitle = new ScrollScene({
	triggerElement: '.content',
	gsap: {
		timeline: TlSubTitle
	},
	triggerHook: 0.5,
	duration: '50%'
});

// subTitle.Scene.addIndicators({ name: 'pin scene', colorEnd: '#FFFFFF' })