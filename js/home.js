jQuery(document).ready(function() {
	service_content_toggle();
	set_feed_isotope();

	mobile_service_list_toggle();

	jQuery(".feed_list > li > *").addClass("wow fadeInDown");

	make_instagram_feed_infos();

});	


jQuery(window).load(function() {
	
});


jQuery(window).resize(function() {
	set_feed_isotope();

});



function service_content_toggle() 
{
	jQuery(".service_control_bar").click(function() {
		jQuery(this).find("#sc_ctrl_btn").toggleClass('services_off').toggleClass('services_on');
		jQuery(".service_contents > ul").slideToggle();
	});
}

function set_iso_item_width()
{
	var container_width = win_width;
	var item_width = null;
	if (win_width >= 1100) {
		item_width = container_width / 5.008;
	} else if (win_width >= 560 && win_width < 1100) {
		item_width = container_width / 3.005;
	} else if ( win_width < 560 ) {
		item_width = container_width / 2.005;
	}
	
	jQuery(".feed_list li.iso_item").css("width", item_width+"px");
	jQuery(".feed_list li.iso_item").css("height", item_width+"px");	

	jQuery(".feed_list li.iso_item.featured_feed").css("width", (item_width*1.998)+"px");
	jQuery(".feed_list li.iso_item.featured_feed").css("height", (item_width*1.998)+"px");

	jQuery(".feed_list li.iso_item.wide").css("width", (item_width*1.998)+"px");

	if ( win_width < 560 ) {
		jQuery(".feed_list li.iso_item.wide").css("width", item_width+"px");
		jQuery(".feed_list li.iso_item:nth-child(3)").css("width", (item_width*1.998)+"px");
		jQuery(".feed_list li.iso_item:nth-child(3)").css("height", (item_width*1.998)+"px");

		jQuery(".feed_list li.iso_item:nth-child(4)").css("width", (item_width*1.998)+"px");

		jQuery(".feed_list li.iso_item:nth-child(8)").css("width", (item_width*1.998)+"px");
		jQuery(".feed_list li.iso_item:nth-child(8)").css("height", (item_width*1.998)+"px");
		
		jQuery(".feed_list li.iso_item:nth-child(9)").css("width", (item_width*1.998)+"px");
	}

	return item_width;
}

function set_feed_isotope() {
	var item_width = set_iso_item_width();

	$container = jQuery('.feed_list.iso_items');
	$container.imagesLoaded(function () {
		$container.isotope({
			itemSelector: '.iso_item',
			layoutMode: 'masonry'
		});
	});
}


function mobile_service_list_toggle() 
{
	if (win_width <= 767 ) {
		jQuery(".service_list > ul > li h5").click(function(){
			//jQuery(".service_list > ul > li ul").slideUp("slow");
			jQuery(this).parent().find("ul").slideToggle("slow");
			jQuery(this).toggleClass("show_state");
		});
	}
}



function slide_caption_effect() {
	var title_item = jQuery(".slide.active h1");
	var btn_item =  jQuery(".slide.active .slide_btn");
	title_item.animate({
		top: "-500px"
	}, 350 );
	btn_item.animate({
		bottom: "-500px"
	}, 200 );

	setTimeout(function(){
		title_item.css("top", "0");
		btn_item.css("bottom", "0");
	}, 1000);   
}

function make_instagram_feed_infos()
{
	var feed_cat = "instagram"
	jQuery(".feed_list > li.instagram_feed").each(function() {
		var feed_title = jQuery(this).find("a").attr("title");
		var feed_url = jQuery(this).find("a").attr("href");
		var feed_html = '<div class="feed_infos"><span class="recent_feed_cat '+feed_cat+'">'+feed_cat+'</span><div class="clearfix"><span class="post_title_bar"></span></div><a href="'+feed_url+'"><h2>'+feed_title+'</h2></a></div>';
		jQuery(this).find("a").addClass("feed_bg");
		jQuery(this).find("a").html(jQuery(this).find("a").html()+feed_html);
	});
	jQuery(window).trigger("resize");
}


jQuery(document).ready(function() {
	// adding click event to feed item cells
	jQuery('.feed_bg').click(function($event){
		if (jQuery($event.currentTarget).prop('href') === undefined && jQuery($event.target).prop('href') === undefined) {
			window.location.href = jQuery($event.currentTarget).find('a').eq(0).prop('href');
		}
	});

	// arrow click
	$('.slide-inner .arrow-bounce').click(function() {
		var index = $(this).parent().parent().index() - 1;
		var count = 0;
		$('article.slide').each(function(index) {
			count ++;
		});
		if (index >= 0 && (index + 1) < count) {
			var element = '.slide-navigator a#slide_' + (index + 1);
			// $(element).trigger('click');
			console.log('index', index)
            var t = $(this).parent("li").index();
            PTT.SlideManager.animateTo(t, "click")
		} else {
			$('html, body').animate({ scrollTop: $('section#orange').offset().top - 74}, 1000);
		}
	});
});

