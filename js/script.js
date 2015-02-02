
new WOW().init();

var win_width, win_height, site_url;
var header_height = 73;

jQuery(document).ready(function() {	
	win_width = parseInt(jQuery(window).width());
	win_height = parseInt(jQuery(window).height());

	site_url = jQuery("#site_url").val();

	menu_control();

	jQuery(".internal_link").click(function(event){
		scroll_animation(this, event, 2000);
		return false;
	});

	set_header_height();
	not_search();
	
	post_newsletter_toggle();

	jQuery(".latest_posts .feed_list li").height(jQuery(".latest_posts .feed_list li").width());

});	


jQuery(window).load(function() {
	
});


jQuery(window).resize(function() {
	win_width = parseInt(jQuery(window).width());
	win_height = parseInt(jQuery(window).height());

	set_header_height();

	jQuery(".latest_posts .feed_list li").height(jQuery(".latest_posts .feed_list li").width());

});


function scroll_animation(linkobj, event, delay)
{
	jQuery('html, body').stop().animate({
		scrollTop: parseInt(jQuery(jQuery(linkobj).attr('href')).offset().top) - header_height
	}, delay,'easeInOutExpo');
	event.preventDefault();
	return false;
}


function isMobile() {	
	if( navigator.userAgent.match(/Android/i) ||
		navigator.userAgent.match(/webOS/i) ||
		navigator.userAgent.match(/iPad/i) ||
		navigator.userAgent.match(/iPhone/i) ||
		navigator.userAgent.match(/iPod/i)
		){
			return true;
	}	
}

function menu_control()
{
	jQuery("#toggle-menu").click(function(){
		jQuery(this).toggleClass('toggle-menu-visible').toggleClass('toggle-menu-hidden');

		if (jQuery(this).hasClass("toggle-menu-hidden")) {
			jQuery( "#nav_container" ).fadeOut(700);
		} else {
			jQuery( "#nav_container" ).fadeIn(700);
		}
	});

}

function set_header_height()
{
	if (win_width <= 767 ) {
		header_height = 61;
	} else {
		header_height = 73;
	}
}

function not_search()
{
	jQuery("#search-btn").click(function(){
		if (jQuery(".search-form input[type='search']").val() == "") {
			alert("Enter search key");
			return false;
		}
	});
}


function post_newsletter_toggle() 
{
	jQuery(".signup_header").click(function() {
		jQuery(this).find("#sign_ctrl_btn").toggleClass('signup_off').toggleClass('signup_on');
		jQuery(".signup_insights .newsletter").slideToggle("fast");
	});
}


