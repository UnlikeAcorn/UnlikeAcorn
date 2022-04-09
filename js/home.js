$(() => {
	const $playBtn = $("#about-phone button");
	const initPlayerAndPlay = () => {
		let playing = false;
		const $videoPlayer = $('#about-phone video');
		const videoPlayer = $videoPlayer[0];
		videoPlayer.src = 'https://video-delivery.x-point-of-entry.com/ome.tv/English (U-S-) 2.mp4';

		videoPlayer.addEventListener('canplay', () => $("#about-phone .poster").hide());

		const play = () => {
			playing ? videoPlayer.pause() : videoPlayer.play();
			$playBtn.toggleClass("pause");
			playing = !playing;
		};

		play();
		$playBtn.click(play);
	};
	const initSwiper = () => {
		let swiper;
		$("<link/>", {href: "css/swiper.min.css", rel: "stylesheet"}).appendTo("body");
		$.getScript("js/swiper.min.js", function () {
			var swiperImages = [
					["images/video-chat-teaser-1", "Swipe and get ready"],
					["images/video-chat-teaser-2", "to meet someone new"],
					["images/video-chat-teaser-3", "to make friends with anyone"],
					["images/video-chat-teaser-4", "to find cool people anywhere"],
					["images/video-chat-teaser-5", "to see new faces every day"],
					["images/video-chat-teaser-6", "in the world of unlimited fun!"]
				],
				$swiperContainer = $("<div/>", {class: "swiper-container"}),
				$swiperPagination = $("<div/>", {class: "swiper-pagination"}).appendTo($swiperContainer),
				$swiperWrapper = $("<div/>", {class: "swiper-wrapper"}).appendTo($swiperContainer),
				i = 0,
				swiperImageInfo = null;
			for (i; i < swiperImages.length; i++) {
				swiperImageInfo = swiperImages[i];
				$("<div class=\"swiper-slide\"><picture><source srcset=\"" + swiperImageInfo[0] + ".webp\" type=\"image/webp\" /><source srcset=\"" + swiperImageInfo[0] + ".png\" type=\"image/png\" /><img src=\"" + swiperImageInfo[0] + ".png\" alt=\"" + swiperImageInfo[1] + "\" /></picture></div>").appendTo($swiperWrapper);
			}
			$("#about").append($swiperContainer);
			swiper = new Swiper(".swiper-container", {
				speed: 800,
				loop: true,
				slidesPerView: "auto",
				spaceBetween: 0,
				centeredSlides: true,
				grabCursor: true,
				keyboard: true,
				simulateTouch: true,
				preloadImages: false,
				pagination: {
					el: ".swiper-pagination",
					clickable: true,
				},
				autoplay: {
					delay: 2500,
					disableOnInteraction: false
				}
			});
			$(window).scroll(function () {
				swiper.autoplay[$(window).scrollTop() > 100 ? "start" : "stop"]();
			});
		});
	};
  $playBtn.one('click', initPlayerAndPlay);

	$("#start-button").click(function () {
		scrollToSection("#app", true, () => window._r.start());
	});

	if (/(iPad|iPhone|iPod)/i.test(navigator.userAgent)) {
		$("#about-top-blocks").addClass('ios')
	}

	if (/android/i.test(navigator.userAgent)) {
		$("#about").addClass("android")
	}

	$(window).load(initSwiper);
});
