import { TweenMax, TimelineMax, Linear } from "gsap";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import ScrollMagic from 'ScrollMagic';
import 'debug.addIndicators';
import "../scss/style.scss";

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

const controller = new ScrollMagic.Controller();

const Tl1 = new TimelineMax()
	.to('.banner-1 .banner__img', 1, {y: "150%", ease: Linear.easeNone,  opacity: 0})
	.to('.banner-1 .banner__img', 1, {y: "-50%", ease: Linear.easeNone,  opacity: 0});
	
const banner1 = new ScrollMagic.Scene({
    triggerElement: '.test',
    triggerHook: 1,
    duration: '60%'
    })
    .setTween(Tl1)
		.addTo(controller)
		.addIndicators({ name: "timeLine" });

const TlBg1 = new TimelineMax()
	.to('.banner-1 .banner__bg', 1, {y: "-100%", ease: Linear.easeNone, opacity: 0});
const bannerBg1 = new ScrollMagic.Scene({
    triggerElement: '.test',
    triggerHook: 1,
    duration: '100%'
    })
    .setTween(TlBg1)
    .addTo(controller);
    
const Tl2 = new TimelineMax()
	.to('.banner-2 .banner__img', 2, {y: "-180%", ease: Linear.easeNone, opacity: 0});
const banner2 = new ScrollMagic.Scene({
    triggerElement: '.test',
    triggerHook: 1,
    duration: '100%'
    })
    .setTween(Tl2)
    .addTo(controller);

const TlBg2 = new TimelineMax()
	.to('.banner-2 .banner__bg', 1, {y: "200%", ease: Linear.easeNone, opacity: 0}, 0.05)
	.to('.banner-2 .banner__bg', 1, {y: "-100%", ease: Linear.easeNone, opacity: 0});
const bannerBg2 = new ScrollMagic.Scene({
    triggerElement: '.test',
    triggerHook: 1,
    duration: '100%'
    })
    .setTween(TlBg2)
    .addTo(controller);

const Tl3 = new TimelineMax().to('.banner-3 .banner__img', 1, {y: "-150%", ease: Linear.easeNone, opacity: 0}, 0.2);
const banner3 = new ScrollMagic.Scene({
    triggerElement: '.test',
    triggerHook: 1,
    duration: '100%'
    })
    .setTween(Tl3)
		.addTo(controller);
		
const TlBg3 = new TimelineMax()
	.to('.banner-3 .banner__bg', 1, {y: "280%", ease: Linear.easeNone, opacity: 0})
	.to('.banner-3 .banner__bg', 1, {y: 0, ease: Linear.easeNone, opacity: 0});
const bannerBg3 = new ScrollMagic.Scene({
		triggerElement: '.test',
		triggerHook: 1,
		duration: '100%'
		})
		.setTween(TlBg3)
		.addTo(controller);

const Tl4 = new TimelineMax()
	.to('.banner-4 .banner__img', 1, {y: "280%", ease: Linear.easeNone, opacity: 0}, 0.1)
	.to('.banner-4 .banner__img', 1, {y: "-100%", ease: Linear.easeNone, opacity: 0});
const banner4 = new ScrollMagic.Scene({
    triggerElement: '.test',
    triggerHook: 1,
    duration: '100%'
    })
    .setTween(Tl4)
    .addTo(controller);

const TlBg4 = new TimelineMax().to('.banner-4 .banner__bg', 1, {y: "-140%", ease: Linear.easeNone, opacity: 0});
const bannerBg4 = new ScrollMagic.Scene({
    triggerElement: '.test',
    triggerHook: 1,
    duration: '100%'
    })
    .setTween(TlBg4)
    .addTo(controller);