
jQuery(document).ready(function() {
	iso_preprocess();
	search_toggle();
	set_blog_isotope();

	jQuery( ".blog_list li" )
	.mouseout(function() {
		jQuery( this ).animate({
			top: "0"
		}, 1200 );
	});

});	


jQuery(window).load(function() {
	
});

jQuery(window).resize(function() {
	set_blog_isotope();

	
});

var $container;
function set_blog_isotope() {
	set_iso_item_width();

	$container = jQuery('.blog_list.iso_items');
	$container.imagesLoaded(function () {
		$container.isotope({
			itemSelector: '.iso_item',
			layoutMode: 'masonry'
		});
	});

	jQuery('.filter li a[data-filter]').click(function () {

		jQuery('.filter li a').removeClass('current');
		jQuery(this).addClass('current');

		var selector = jQuery(this).attr('data-filter');
		$container.isotope({
			filter: selector
		});

		jQuery(".featured_blogs").slideUp();

		return false;
	});	

}

function set_iso_item_width()
{
	var padding_size = 15 * 2;
	var container_width = win_width - padding_size;
	var item_width = null;
	if (win_width >= 1100) {
		item_width = container_width / 4.005;
	} else if (win_width >= 560 && win_width < 1100) {
		item_width = container_width / 2.005;
	} else if ( win_width < 560 ) {
		item_width = container_width;
	}
	
	jQuery(".blog_list li.iso_item").css("width", item_width+"px");
}

function search_toggle() 
{
	jQuery("#search-toggle").click(function() {
		jQuery(this).toggleClass('filter_state').toggleClass('search_state');
		jQuery(".categories ul li:nth-child(n+2)").fadeToggle(150, 'swing');
		jQuery(".search-form input[type='search']").fadeToggle(150, 'swing');

		jQuery("#search-btn").fadeToggle(1, 'swing');
		jQuery("#virtual-search-btn").fadeToggle(1, 'swing');
	});	

	jQuery(".filter li a[no-data-filter='all']").click(function() {
		jQuery("#search-toggle").removeClass("search_state");
		jQuery("#search-toggle").addClass("filter_state");

		jQuery(".categories ul li:nth-child(n+2)").fadeIn(150, 'swing');
		jQuery(".search-form input[type='search']").fadeOut(150, 'swing');

		jQuery("#search-btn").fadeOut(1, 'swing');
		jQuery("#virtual-search-btn").fadeIn(1, 'swing');
	});
}


function iso_preprocess()
{
	var filter_posts;
	jQuery("#load_more").click(function() {

		var curScrollTop = jQuery(window).scrollTop();

		var current_filter = jQuery(".categories ul li a.current").attr("data-filter");
		switch (current_filter) {
		    case ".insights":
			    filter_posts = jQuery("#hidden_posts li.insights");
		    	if (filter_posts.length > 0) {
			    	jQuery(".blog_list.iso_items li.insights").remove();
			    	jQuery(".blog_list.iso_items").append(filter_posts);
			    	reset_iso_item_width();
			    	jQuery(".filter li a[data-filter='.insights']").trigger('click');
				} else {
					alert("No more posts to load.");
				}
		        break;
		    
		    case ".trends":
		     	filter_posts = jQuery("#hidden_posts li.trends");
		    	if (filter_posts.length > 0) {
		    		jQuery(".blog_list.iso_items li.trends").remove();
			    	jQuery(".blog_list.iso_items").append(filter_posts);
			    	reset_iso_item_width();
			    	jQuery(".filter li a[data-filter='.trends']").trigger('click');
				} else {
					alert("No more posts to load.");
				}
		        break;
		    
		    case ".inspiration":
		    	filter_posts = jQuery("#hidden_posts li.inspiration");
		    	if (filter_posts.length > 0) {
		    		jQuery(".blog_list.iso_items li.inspiration").remove();
			    	jQuery(".blog_list.iso_items").append(filter_posts);
			    	reset_iso_item_width();
			    	jQuery(".filter li a[data-filter='.inspiration']").trigger('click');
				} else {
					alert("No more posts to load.");
				}
		        break;
		    
		    case ".agency":
		    	filter_posts = jQuery("#hidden_posts li.agency");
		    	if (filter_posts.length > 0) {
		    		jQuery(".blog_list.iso_items li.agency").remove();
			    	jQuery(".blog_list.iso_items").append(filter_posts);
			    	reset_iso_item_width();
			    	jQuery(".filter li a[data-filter='.agency']").trigger('click');
				} else {
					alert("No more posts to load.");
				}
		        break;
		    
		    default:
			    filter_posts = jQuery("#hidden_posts li");
			    if (filter_posts.length > 0) {
			    	jQuery(".blog_list.iso_items li").remove();
			    	jQuery(".blog_list.iso_items").append(filter_posts);
			    	reset_iso_item_width();
			    } else {
			    	alert("No more posts to load.");
			    }
			    break;
		}
			
		jQuery(window).scrollTop(curScrollTop);
	});
}

function reset_iso_item_width()
{
	set_iso_item_width();
	$container.isotope('destroy');
	$container.imagesLoaded(function () {
		$container.isotope({
			itemSelector: '.iso_item',
			layoutMode: 'masonry'
		});
	});
}