$(function() {
	/* FAQ BEGIN */
	const $box = $(".ip-chat-box");
	const $girls = $(".faq-girls");
	const girlWidth = $girls.width();
	let breakpoints = [];
	const boxHeight = $box.outerHeight();

	const updateBreakpoints = function() {
		$box.scrollTop(0);
		breakpoints = $(".faq-q-a").map(function(i, el) { return $(el).position().top }).toArray();
		breakpoints.push($(".faq-q-a").last().position().top + $(".faq-q-a").last().outerHeight());
		moveGirl();
	};
	
	const moveGirl = function() {
		const scrollTop = $box.scrollTop();
		const scrollCenter = scrollTop + boxHeight / 2;
		let bp2 = breakpoints.find(function(bp) { return bp > scrollCenter }) || breakpoints[breakpoints.length - 1];
		const bp2Index = breakpoints.indexOf(bp2);
		const girlIndex = bp2Index;
		const bp1 = breakpoints[bp2Index - 1];
		var c = 200;
		bp2 -= 0.2 * (bp2 - bp1);
		const x1 = (bp1 - bp2) / 2;
		const x2 = - x1;
		const a = - c * (x2/x1 - 1) / (x2*x2 - x1 * x2);
		const x = x1 + (scrollCenter - bp1);
		const offset = - a * x * x + c;
		$(".faq-girls picture").hide();
		$(".faq-girls picture:nth-of-type(" + girlIndex + ")").show();
		$girls.css("right", Math.min(-20, offset - 185));
	};

	const controller = new ScrollMagic.Controller();
	const scene = new ScrollMagic.Scene({ triggerElement: '#bottom', triggerHook: 0 }).setPin('#bottom').addTo(controller);

	scene.on('progress', function(event) {
		let chatHeight = $('.ip-chat-box').height();
		let chatContentHeight = $('.ip-chat-box')[0].scrollHeight;

		$('.ip-chat-box')[0].scroll(0, (chatContentHeight - chatHeight) * event.progress);
	})

	const updateScrollParams = function() {
		$('#bottom').css('height', 'auto');

		if($('#bottom').height() <= $(window).height()) {
			$('#bottom').css('height', '100vh');
		}

		let windowHeight = $(window).height();
		let headerHeight = $('header').height();
		let bottomPosition = $('#bottom').offset().top;
		let chatBoxPosition = $('#chat-box').offset().top;
		let chatHeight = $('.ip-chat-box').height();
		let chatContentHeight = $('.ip-chat-box')[0].scrollHeight;
		let sceneOffset = 0

		if(chatBoxPosition - bottomPosition + headerHeight + chatHeight >= windowHeight) {
			sceneOffset = chatBoxPosition - bottomPosition - (windowHeight - chatHeight) / 2;
		} else {
			sceneOffset = -headerHeight
		}

		scene.duration(chatContentHeight);
		scene.offset(sceneOffset);
	}

	updateBreakpoints();
	moveGirl();

	$(window).on('load', updateScrollParams)

	$(window).resize(function() {
		updateBreakpoints();
		moveGirl();
		updateScrollParams();
	});
	
	$box.scroll(moveGirl);

	if (/android/i.test(navigator.userAgent)) {
		$("#bottom").addClass("android")
	}
	/* FAQ END */
});
