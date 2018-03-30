

$(document).ready(function() {


	/**
	 *
	 * Enable the smooth scroll
	 *
	 */
	


	const sectionNav = $(".section-nav li");
	const banner = $('#banner').offset().top;
	const aboutMe = $('#aboutMe').offset().top;
	const portfolio = $('#portfolio').offset().top;

	$(window).on('scroll',function () {
		if ( window.pageYOffset > 0 ) {
			$('.site-header').addClass('darken');
		} else if ( window.pageYOffset === 0 ) {
			$('.site-header').removeClass('darken')
		}

		if ( window.pageYOffset > banner ) {
			$(sectionNav).each( function() {
				if ( $(this).children("a").attr("href") === "#aboutMe" ) {
					$(this).children("a").addClass("active");
				} else {
					$(this).children("a").removeClass("active");
				}
			})
		} if ( window.pageYOffset > aboutMe ) {
			$(sectionNav).each( function() {
				if ( $(this).children("a").attr("href") === "#portfolio" ) {
					$(this).children("a").addClass("active");
				} else {
					$(this).children("a").removeClass("active");
				}
			})
		} if ( window.pageYOffset === 0 ) {
			$(sectionNav).each( function() {
				if ( $(this).children("a").attr("href") === "#banner" ) {
					$(this).children("a").addClass("active");
				} else {
					$(this).children("a").removeClass("active");
				}
			})
		}
	})

	$(sectionNav).each( function() {
		
		$(this).on('click', function () {
			const span = $(this).children("a");
			if ( $(span).attr("class").indexOf("active") === -1 ) {
				$(this).siblings("li").children("a").removeClass("active");
				$(span).addClass("active");
				$('html').smoothScroll(1000);
			}
		})

	} )
	
}())