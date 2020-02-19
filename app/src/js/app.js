import "../scss/style.scss";
import { ScrollScene, addIndicators } from 'scrollscene';
import { gsap, Linear } from 'gsap';





const Tl1 = gsap.timeline({ paused: true })
	.to('.banner-1 .banner__img', 1, {y: "150%", ease: Linear.easeNone,  opacity: 0})
	.to('.banner-1 .banner__img', 1, {y: "-150%", ease: Linear.easeNone,  opacity: 0});

const banner1 = new ScrollScene({
	triggerElement: '.test',
	gsap: {
			timeline: Tl1,
	},
	duration: '100%'
});


const TlBg1 = gsap.timeline({ paused: true })
	.to('.banner-1 .banner__bg', 1, {y: "-100%", ease: Linear.easeNone, opacity: 0});

const bannerBg1 = new ScrollScene({
	triggerElement: '.test',
	gsap: {
		timeline: TlBg1,
	},
	duration: '100%'
});
		

const Tl2 = gsap.timeline({ paused: true })
	.to('.banner-2 .banner__img', 2, {y: "-180%", ease: Linear.easeNone, opacity: 0});

const banner2 = new ScrollScene({
	triggerElement: '.test',
	gsap: {
		timeline: Tl2,
	},
	duration: '100%'
});


const TlBg2 = gsap.timeline({ paused: true })
	.to('.banner-2 .banner__bg', 1, {y: "200%", ease: Linear.easeNone, opacity: 0})
	.to('.banner-2 .banner__bg', 1, {y: "-200%", ease: Linear.easeNone, opacity: 0});

const bannerBg2 = new ScrollScene({
	triggerElement: '.test',
	gsap: {
		timeline: TlBg2,
	},
	duration: '100%'
});

const Tl3 = gsap.timeline({ paused: true })
	.to('.banner-3 .banner__img', 2, {y: "-150%", ease: Linear.easeNone, opacity: 0});

const banner3 = new ScrollScene({
	triggerElement: '.test',
	gsap: {
		timeline: Tl3,
	},
	duration: '100%'
});


const TlBg3 = gsap.timeline({ paused: true })
	.to('.banner-3 .banner__bg', 1, {y: "280%", ease: Linear.easeNone, opacity: 0})
	.to('.banner-3 .banner__bg', 1, {y: "-280%", ease: Linear.easeNone, opacity: 0});

const bannerBg3 = new ScrollScene({
	triggerElement: '.test',
	gsap: {
		timeline: TlBg3
	},
	duration: '100%'
});


const Tl4 = gsap.timeline({ paused: true })
	.to('.banner-4 .banner__img', 1, {y: "280%", ease: Linear.easeNone, opacity: 0})
	.to('.banner-4 .banner__img', 1, {y: "-280%", ease: Linear.easeNone, opacity: 0});

const banner4 = new ScrollScene({
	triggerElement: '.test',
	gsap: {
		timeline: Tl4
	},
	duration: '100%'
});

const TlBg4 = gsap.timeline({ paused: true })
	.to('.banner-4 .banner__bg', 1, {y: "-140%", ease: Linear.easeNone, opacity: 0});

const bannerBg4 = new ScrollScene({
	triggerElement: '.test',
	gsap: {
		timeline: TlBg4
	},
	duration: '100%'
});


const TlLogo = gsap.timeline({ paused: true })
	.to('.logo', 1, {y: "150%", ease: Linear.easeNone, zoom: 0.2});

const logo = new ScrollScene({
	triggerElement: '.test',
	gsap: {
		timeline: TlLogo
	},
	duration: '100%'
});


