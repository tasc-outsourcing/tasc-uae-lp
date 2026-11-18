
$(window).on('load', function(){
	secHeight();
	// gridAdjust(".info-cards .info-card .info-card-body");
	gridAdjust(".info-card-container .info-card .info-card-body");
	gridAdjust(".info-card-awards .info-content-wrap");
	if ($(window).width() > 767) {
		gridAdjust(".info-cards .info-card .info-card-body");
	}
});

// } // Mobile Only Slider
$(document).ready( function(){
	// secHeight();
});



$(window).resize(function(){
	secHeight();
	gridAdjust(".info-card-container .info-card .info-card-body");
	gridAdjust(".info-card-awards .info-content-wrap");
	gridAdjust(".info-cards .info-card .info-card-body");

});

	// if ($(window).width() > 767) {
	// 	gridAdjust(".info-card-specaial .info-card .info-card-body");
	// }
	// Trigger when window is resized

	function gridAdjust(targertSteing) {
		var targertHight = $(targertSteing);
		targertHight.css('height', 'auto');
		var heights = [];
		targertHight.each(function() {
			var elem = $(this);
			var height = elem.outerHeight();
			heights.push(height);
		});
		heights = heights.sort(function(a, b) {
			return b - a
		});
		console.log(heights);
		var tallest = heights[0];
		targertHight.css('height', tallest + 'px');

		if ($(window).width() < 767) {
			mobileOnlySlider(".info-slide-mobile", 1, true, true, 767);
			mobileOnlySlider(".info-content-slide-mobile", 1, false, true, 767);
			
		 }
	}

	// if ($(window).width() > 767) {
	// 	gridAdjust(".info-card-container .info-card .info-card-body");
	// 	gridAdjust(".info-card-specaial .info-card .info-card-body");
	// };




function mobileOnlySlider($slidername, $slidesToShow, $dots, $arrows, $breakpoint) {
	var slider = $($slidername);
	var settings = {
	  mobileFirst: true,
	  slidesToShow: $slidesToShow,
	  slidesToScroll: 1,
	  dots: $dots,
	  arrows: $arrows,
	  infinite: false,
	  responsive: [
		{
		  breakpoint: $breakpoint,
		  settings: "unslick"
		}
	  ]
	};

	slider.slick(settings);

	$(window).on("resize", function () {
	  if ($(window).width() > $breakpoint) {
		return;
	  }
	  if (!slider.hasClass("slick-initialized")) {
		return slider.slick(settings);
	  }
	});

  } // Mobile Only Slider
function secHeight() {
    var h = $('#main-header').outerHeight();
    minHeight(h);
	$('body').css('padding-top', h + 'px');
}

function minHeight(h) {
	$(".nav-scroll").click(function(e) {
		e.preventDefault();
		var elem = $(this);
		var id = elem.attr('href');
		scrollToID(id);
	});

	var scrollToID = function(id) {
		$('html, body').animate({
			scrollTop: $(id).offset().top - h
		}, 300);
		return false;
	}
}
// function gridAdjust(targertSteing) {
// 	if ($(window).width() < 767) {
// 	var targertHight = $(targertSteing);
// 	  targertHight.css('height', 'auto');
// 	   var heights = [];
// 	   targertHight.each(function() {
// 		 var elem = $(this);
// 		 var height = elem.outerHeight();
// 		 heights.push(height);
// 	   });
// 	   heights = heights.sort(function(a, b) {
// 		 return b - a
// 	   });
// 	   var tallest = heights[0];
// 	   targertHight.css('height', tallest + 'px');
// 	}
// }


// function mobileOnlySlider($slidername, $slidesToShow, $dots, $arrows, $breakpoint) {
//   var slider = $($slidername);
//   var settings = {
//     mobileFirst: true,
// 	slidesToShow: $slidesToShow,
//     slidesToScroll: 1,
//     dots: $dots,
//     arrows: $arrows,
// 	infinite: false,
//     responsive: [
//       {
//         breakpoint: $breakpoint,
//         // settings: "unslick"
// 		slidesToShow: 1
//       }
//     ]
//   };

//   slider.slick(settings);

//   $(window).on("resize", function () {
//     if ($(window).width() > $breakpoint) {

//       return;
//     }

//     if (!slider.hasClass("slick-initialized")) {
//       return slider.slick(settings);
//     }

//   });
