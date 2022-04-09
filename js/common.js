$(function() {
	window.ptSansConfig = {
		google: {
			families: [
				"PT Sans:400,700:latin,latin-ext,cyrillic,cyrillic-ext"
			]
		},
		ptSansListeners: [],
		active: function() {
			this.ptSansLoaded = true;
			this.ptSansListeners.forEach(function(listener) {
				listener();
			});
		},
		waitForPTSans: function(listener) {
			if (this.ptSansLoaded) {
				listener();
			} else {
				this.ptSansListeners.push(listener);
			}
		}
	};
	WebFont.load(window.ptSansConfig);
	ptSansConfig.waitForPTSans(function() {
		moveMenuUnderlineTo($("nav a.active"), false);
	});

	var scrollSpiedElements = [];
	var currentSpiedElementInfo = null;
	var isInitialScroll = true;
	$("nav a").each(function() {
		if (this.hash != "" && this.href.split("#")[0] == window.location.href.split("#")[0] && $(this.hash)[0]) { // Internal link
			scrollSpiedElements.push({
				hash: this.hash,
				$element: $(this.hash),
				top: -1
			});
		}
	});
	if (scrollSpiedElements.length > 1) {
		currentSpiedElementInfo = scrollSpiedElements[0];
	}
	var updateScrollSpiedElementsTops = function() {
		scrollSpiedElementsTops = [];
		for (var i = 0; i < scrollSpiedElements.length; i++) {
			var scrollSpiedElementInfo = scrollSpiedElements[i];
			scrollSpiedElementInfo.top = scrollSpiedElementInfo.$element.offset().top
		}
		scrollSpiedElementsTops.sort(function(a, b) {return a.top < b.top ? -1 : (a.top > b.top ? 1: 0);});
	};
	updateScrollSpiedElementsTops();

	var hash = window.location.hash;
	if (hash != "") {
		scrollToSection(hash);
	}
	moveMenuUnderlineTo($("nav a.active"), false);
	$("nav a").hover(
	    function() {
			moveMenuUnderlineTo($(this));
		},
		function() {
			moveMenuUnderlineTo($("nav a.active"))
		}
	);

	$("nav a").click(scrollToSectionOnLinkClick);

	var defaultHeaderTop = $("#page-wrap").offset().top;
	var headerHeight = $("header").outerHeight();
	var isHamburgerMenuVisible = false;
	var onScroll = function() {
		var windowScrollTop = $(window).scrollTop();
		$("header")[(windowScrollTop > defaultHeaderTop ? "add" : "remove") + "Class"]("sticky");
		if (scrollSpiedElements.length > 1) {
			var newSpiedElementInfo = scrollSpiedElements[0];
			for (var i = 1; i < scrollSpiedElements.length; i++) {
				var scrollSpiedElementInfo = scrollSpiedElements[i];
				if (Math.round(windowScrollTop + headerHeight) >= Math.round(scrollSpiedElementInfo.top)) {
					newSpiedElementInfo = scrollSpiedElementInfo;
				} else {
					break;
				}
			}
			if (newSpiedElementInfo.hash != currentSpiedElementInfo.hash) {
				$("nav a").removeClass("active").each(function() {
					if (this.hash == newSpiedElementInfo.hash) {
						$(this).addClass("active");
						moveMenuUnderlineTo($(this), !isInitialScroll);
						return false;
					}
				});
				currentSpiedElementInfo = newSpiedElementInfo;
			}
		}
		var newIsHamburgerMenuVisible = $("header > input").css("display") == "block";
		if (isHamburgerMenuVisible && !newIsHamburgerMenuVisible) {
			moveMenuUnderlineTo($("nav a.active"), false);
			$("header > input").prop("checked", false);
		}
		isHamburgerMenuVisible = newIsHamburgerMenuVisible;
	};
	onScroll();
	isInitialScroll = false;

	$(window).scroll(onScroll);
	$(window).resize(function() {
		defaultHeaderTop = $("#page-wrap").offset().top;
		headerHeight = $("header").outerHeight();
		updateScrollSpiedElementsTops();
		onScroll();
	});

	var lang = navigator.language.slice(0, 2);
	var defaultLang = "en";
	var appBtnUrlRoot = "https://cdn.ome.tv/images/";
	var googlePlayBtnUrl = appBtnUrlRoot + "googleplay-buttons/{lang}.svg";
	var appStoreBtnUrl = appBtnUrlRoot + "appstore-buttons/{lang}.svg";
	var googlePlayBtnBg = ["url(" + googlePlayBtnUrl.replace("{lang}", lang) + ")"];
	var appStoreBtnBg = ["url(" + appStoreBtnUrl.replace("{lang}", lang) + ")"];
	if (lang.toLowerCase() !== "en") {
		googlePlayBtnBg.push("url(" + googlePlayBtnUrl.replace("{lang}", defaultLang) + ")");
		appStoreBtnBg.push("url(" + appStoreBtnUrl.replace("{lang}", defaultLang) + ")");
	}
	$(".googleplay-button").css("background-image", googlePlayBtnBg.join(","));
	$(".appstore-button").css("background-image", appStoreBtnBg.join(","));

	if (/android/i.test(navigator.userAgent)) {
		$("section.faq, section.rules").addClass("android")
	}
});

function moveMenuUnderlineTo($menuItem, animate) {
	if (!$menuItem.length) return;
	var $menuUnderline = $("nav > span");
	animate = animate !== false;
	if (!animate) {
		$menuUnderline.addClass("notransition");
	}
	$menuUnderline.css({
		width: $menuItem.outerWidth(),
		right: $("nav").outerWidth() - $menuItem.position().left - $menuItem.outerWidth()
	});
	if (!animate) {
		$menuUnderline[0].offsetHeight;
		$menuUnderline.removeClass("notransition");
	}
}

function scrollToSection(hash, animate, callback) {
	history.pushState ? history.pushState(null, null, hash) : location.hash = hash;
	var scrollPos = $(hash).offset().top - $("header")[0].clientHeight;
	if (animate) {
		$("html, body").animate({scrollTop: scrollPos}, 300, function() {
			if (callback) callback();
		});
	} else {
		$("html, body").scrollTop(scrollPos);
		if (callback) callback();
	}
}

function scrollToSectionOnLinkClick(event) {
	if (this.hash == "" || this.href.split("#")[0] != window.location.href.split("#")[0]) return;
	event.preventDefault();
	scrollToSection(this.hash, true);
}
