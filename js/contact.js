
jQuery(document).ready(function() {	
	jQuery('#mc-embedded-subscribe').click(function(){
		var EMAIL = jQuery('#mce-EMAIL').val();
		var subscribe = jQuery('#mc-embedded-subscribe').val();
		var b_5f783490c5a9c9b85daad4173_3d45f4e040 = jQuery('#b_5f783490c5a9c9b85daad4173_3d45f4e040').val();

		var request_url = 'http://birdsonggregory.us9.list-manage.com/subscribe/post?u=5f783490c5a9c9b85daad4173&id=3d45f4e040';
		var u = "5f783490c5a9c9b85daad4173";
		var id="3d45f4e040";
		send_newsletter(EMAIL, subscribe, b_5f783490c5a9c9b85daad4173_3d45f4e040, u, id, request_url);
		
	});

});	


function send_newsletter(EMAIL, subscribe, b_5f783490c5a9c9b85daad4173_3d45f4e040, u, id, request_url)
{
	
	post_data = {
			EMAIL : EMAIL,
			subscribe : subscribe,
			b_5f783490c5a9c9b85daad4173_3d45f4e040 : b_5f783490c5a9c9b85daad4173_3d45f4e040,
			u : u,
			id : id
	};
	$.ajax({
			type	: "POST",
			cache	: false,
			url		: request_url,
			data	: post_data,
			dataType    : 'html',
			error: function(a,b,c){
				console.log(a);
				console.log(b);
				console.log(c);
			},
			success: function(data) {
				//alert(data);
			}
	});	
	return false;
}
