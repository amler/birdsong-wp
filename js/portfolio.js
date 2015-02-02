jQuery(document).ready(function() {
	var first_ctrl_nav = 'bullets';
	if (parseInt(jQuery("#first-slide-count").val()) <= 1) {
		first_ctrl_nav = 'none';
	}
	if (parseInt(jQuery("#first-slide-count").val()) > 0) {
		jQuery('#first-slider').royalSlider({
			arrowsNav: true,
			arrowsNavAutoHide: false,
			fadeinLoadedSlide: true,
			controlNavigation: first_ctrl_nav,
			imageScaleMode: 'fill',
			imageAlignCenter:true,
			loop: true,
			loopRewind: false,
			numImagesToPreload: 4,
			slidesOrientation: 'horizontal',
			keyboardNavEnabled: true,
			autoScaleSlider: true, 
			slidesSpacing: 0,
			autoPlay: {
				enabled: true,
				pauseOnHover: false
			}
		});	
	}


	if (parseInt(jQuery("#insight-slide-count").val()) > 0) {
		jQuery('#insight-slider').royalSlider({
			arrowsNav: false,
			arrowsNavAutoHide: false,
			fadeinLoadedSlide: true,
			controlNavigation: 'bullets',
			imageScaleMode: 'fill',
			imageAlignCenter:true,
			loop: true,
			loopRewind: false,
			numImagesToPreload: 4,
			transitionSpeed: 1000,
			slidesOrientation: 'horizontal',
			keyboardNavEnabled: true,
			autoScaleSlider: true, 
			slidesSpacing: 0,
			autoPlay: {
				enabled: true,
				pauseOnHover: false,
				delay: 10000
			}
		});
	}
		

	if (parseInt(jQuery("#solution-slide-count").val()) > 0) {
		jQuery('#solution-slider').royalSlider({
			arrowsNav: true,
			arrowsNavAutoHide: false,
			fadeinLoadedSlide: true,
			controlNavigation: 'none',
			imageScaleMode: 'fill',
			imageAlignCenter:true,
			loop: true,
			loopRewind: false,
			numImagesToPreload: 4,
			slidesOrientation: 'horizontal',
			keyboardNavEnabled: true,
			autoScaleSlider: true, 
			slidesSpacing: 0,
			autoPlay: {
				enabled: true,
				pauseOnHover: false
			},
			video: {
				autoHideArrows:true,
				autoHideControlNav:true
			}  
		});	
	}	

	jQuery(window).trigger('resize');

	firstslide_size_cal();
	set_icon_width();
});	


jQuery(window).load(function() {
		
});


jQuery(window).resize(function() {
	firstslide_size_cal();
	set_icon_width();
});



function firstslide_size_cal()
{
	var slide_height = win_height - header_height;
	jQuery("#first-slider").height(slide_height);
	jQuery("#first-slider .slide-bg").height(slide_height);
}

function set_icon_width()
{
	var icon_width;	
	if (win_width > 560) {
		icon_width = win_width / 2;	
	} else {
		icon_width = win_width;	
	}
	
	jQuery(".icon_list .icon_row figure").css("max-width", icon_width+"px");
}



