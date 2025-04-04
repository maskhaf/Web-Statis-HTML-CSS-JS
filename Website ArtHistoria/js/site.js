"use strict";

$(document).ready(function () {
	/* Video Lightbox */
	if (!!$.prototype.simpleLightboxVideo) {
		$('.video').simpleLightboxVideo();
	}

	/*ScrollUp*/
	if (!!$.prototype.scrollUp) {
		$.scrollUp();
	}

	/*Responsive Navigation*/
	$("#nav-mobile").html($("#nav-main").html());
	$("#nav-trigger span").on("click",function() {
		if ($("nav#nav-mobile ul").hasClass("expanded")) {
			$("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
			$(this).removeClass("open");
		} else {
			$("nav#nav-mobile ul").addClass("expanded").slideDown(250);
			$(this).addClass("open");
		}
	});

	$("#nav-mobile").html($("#nav-main").html());
	$("#nav-mobile ul a").on("click",function() {
		if ($("nav#nav-mobile ul").hasClass("expanded")) {
			$("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
			$("#nav-trigger span").removeClass("open");
		}
	});

	/* Sticky Navigation */
	if (!!$.prototype.stickyNavbar) {
		$('#header').stickyNavbar();
	}

	$('#content').waypoint(function (direction) {
		if (direction === 'down') {
			$('#header').addClass('nav-solid fadeInDown');
		}
		else {
			$('#header').removeClass('nav-solid fadeInDown');
		}
	});

});


/* Preloader and animations */
$(window).load(function () { // makes sure the whole site is loaded
	$('#status').fadeOut(); // will first fade out the loading animation
	$('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
	$('body').delay(350).css({'overflow-y': 'visible'});

	/* WOW Elements */
	if (typeof WOW == 'function') {
		new WOW().init();
	}

	/* Parallax Effects */
	if (!!$.prototype.enllax) {
		$(window).enllax();
	}

});

$(document).ready(function() {
    $('aside#gallery a').featherlight({
        beforeOpen: function(event) {
            var caption = this.$currentTarget.attr('data-caption');
            if (caption) {
                $('.featherlight-content').append('<div class="caption-text">' + caption + '</div>');
            }
        },
        afterClose: function(event) {
            $('.caption-text').remove();
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".animate-btn");

    button.addEventListener("click", function (event) {
        event.preventDefault(); // Mencegah navigasi instan ke #gallery
        
        // Tambahkan animasi klik
        button.classList.add("clicked");
        
        // Hapus animasi setelah selesai (agar bisa dimainkan lagi)
        setTimeout(() => {
            button.classList.remove("clicked");
        }, 300);

        // Smooth scroll ke #gallery
        document.querySelector("#gallery").scrollIntoView({
            behavior: "smooth"
        });
    });
});




