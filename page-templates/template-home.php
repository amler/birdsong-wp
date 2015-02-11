<?php
/**
 * Template Name: Home
 */
?>

<?php get_header(); ?>

<?php 
$dir_path = get_template_directory_uri();
get_template_part( 'inc/simplehtmldom/simple_html_dom'); 
?>


<script src="<?= $dir_path; ?>/library/mediaelement/modernizr-2.6.2-respond-1.1.0.min.js"></script>
<script>var TEMPLATE_URL='<?php bloginfo( 'template_directory' );?>';</script>
<script src="<?= $dir_path; ?>/library/mediaelement/main-min.js"></script> 


<!-- isotope -->
<link href="<?= $dir_path; ?>/library/isotope/isotope.css" rel="stylesheet" />
<script src="<?= $dir_path; ?>/library/isotope/jquery.isotope.min.js"></script>
<!-- isotope -->

<link href="<?= $dir_path; ?>/css/home.css" type="text/css" rel="stylesheet"/>
<script src="<?= $dir_path; ?>/js/home.js"></script>

<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>

<div id="home_wrapper">
	<section class="slides">
		<?php $slider_imgs = get_field('home_slider', $post->ID); ?>

		<nav class="slide-navigator">
			<ul class="clearfix">

				<?php for ($index=0; $index < count($slider_imgs); $index++) { 
					$href_id = "#slide_" . $index;
				?>

				<li class="track-event" data-eventdata="Home/SlideshowBarClick/Slide">
					<a href="<?=$href_id?>" class="<?php echo ($index==0)? " active":""; ?>"></a>
				</li>				


				<?php } ?>
			</ul>
		</nav>
		
		<?php for ($index=0; $index < count($slider_imgs); $index++) { 
			$slider_img = $slider_imgs[$index];
			$id = "slide_" . $index;
		?>
		<article class="slide<?php echo ($index==0)? " active":""; ?>" id="<?=$id?>">
			<div class="slide-inner">
				<div class="slide-background" data-bg="<?=$slider_img['slide_image']['url']?>" data-bgmobile="<?=$slider_img['slide_image']['url']?>"></div>
				<div class="text-overlay">
					<h1><?=$slider_img['slide_caption']?></h1>
					<div class="clearfix"></div>
					<a href="<?=$slider_img['slide_link']?>" class="slide_btn">learn more</a>
				</div>
				
				<div class="arrow-bounce"></div>
			</div>
		</article>
		<?php
		}
		?>
		
	</section>

	<section class="orange" id="orange">
		<div class="orange_inner">
			<div class="home_logo">
				<a href="<?php echo home_url(); ?>">
					<img src="<?php bloginfo('template_directory');?>/images/home_logo.png"/>
				</a>
			</div>
			<div class="orange_content">
				<?php the_content(); ?>
			</div>
		</div>
	</section>
	<section class="clients">
		<div class="home_inner">
			<h1 class="wow fadeInDown">our clients</h1>
			<div class="clearfix wow fadeInDown">
				<span class="title_bar"></span>
			</div>
			<p class="wow fadeInDown"><?php the_field('clients_text', $post->ID); ?></p>
			<div class="website_list">
			<ul>
			<?php 
				$websites = get_field('client_websites', $post->ID);
				foreach ($websites as $key => $website) {
			?>
				<li class="wow fadeInDown">
					<div>
						<span>
							<img src="<?=$website['website_icon']['url']?>" class="site_icon">
							<img src="<?=$website['website_hover_icon']['url']?>" class="site_hover_icon">
						</span>
					</div>
				</li>
			<?php		
				}
			?>
			</ul>
			</div>
		</div>
	</section>

	<section class="agency">
		<div class="home_inner">
			<h1>3 things about <br class="visible-xs"/>our agency</h1>
			<div class="clearfix">
				<span class="title_bar"></span>
			</div>
			<div class="thing_list">
				<ul>
					<?php 
					$things = get_field('things', $post->ID);
					foreach ($things as $key => $thing) {
					?>
					<li>
						<div class="thing_icon wow fadeInDown" style="background-image:url(<?=$thing['thing_icon']['url'] ?>)"></div>
						<h2 class="thing_title wow fadeInDown">
							<?=$thing['thing_title']?>
						</h2>
						<p class="thing_content wow fadeInDown">
							<?=$thing['thing_content']?>
						</p>
					</li>
					<?php		
					}
					?>
				</ul>
			</div>
			<div class="service">
				<div class="service_control_bar wow fadeInDown">
					<h3>our services</h3>
					<div class="services_off" id="sc_ctrl_btn">
						<span class="left"></span>
						<span class="right"></span>
					</div>
				</div>
				<div class="service_list">
					<ul>
					<?php 
					$services = get_field('services', $post->ID);
					foreach ($services as $key => $service) {
					?>
						<li class="wow fadeInDown">
							<h5 style="background-image:url(<?= $service['service_icon']['url'] ?>)">
								<?= $service['service_title'] ?>	
							</h5>
							<?= $service['service_content'] ?>
						</li>
					<?php		
					}
					?>
					</ul>
				</div>

				<div class="service_contents">
					<ul>
					<?php 
					foreach ($services as $key => $service) {
					?>
						<li>
							<?= $service['service_content'] ?>
						</li>
					<?php		
					}
					?>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<section id="feeds">
<?php 
	$instagrams = do_shortcode('[alpine-phototile-for-instagram id=899 user="birdsonggregory" src="user_recent" imgl="instagram" style="windows" size="M" num="10" align="center" max="100"]'); 

	$html = str_get_html($instagrams);
	$instagrams = $html->find("div[class*=AlpinePhotoTiles] > div[class*=AlpinePhotoTiles] > a[class*=AlpinePhotoTiles]");

	$args=array(
		'tag' => 'featured',
		'showposts'=> 2
		);
	$featured_posts = get_posts($args);

	$args = array(
		'posts_per_page' => 6,
		'post_type'   => 'employees',
		'post_status' => 'publish',
		'orderby'     => 'rand'
		);
	$employees = get_posts($args);

	$args = array(
		'posts_per_page'   => 10,	
		'post_type' => 'post',
		'post_status' => 'publish'
		);
	$recent_posts = get_posts( $args );
	for($index = 0; $index < count($recent_posts); $index++) {
		$post = $recent_posts[$index];
		setup_postdata($post);
		$tags = wp_get_post_tags($post->ID);
		$is_featured = false;
		foreach ($tags as $key => $tag) {
			if($tag->name == "Featured") {
				$is_featured = true;	
			}
		}
		if ($is_featured) {
			array_splice($recent_posts, $index, 1);
		}
	}	
	unset($index);

	$feeds_count = count($instagrams) + count($featured_posts) + count($employees) + count($recent_posts);

?>

	<ul class="iso_items isotope feed_list">
<?php 
$instagram_index = 0;
$featured_index = 0;
$employee_index = 0;
$recent_index = 0;

for ($index = 1; $index <= $feeds_count * 2; $index++) { 
	$feed_mode = $index % 5;

	$class_name = "iso_item ";
	$is_blog_feed = true;
	unset($post);
	switch ($feed_mode) {
	    case 1:
	    	if (isset($instagrams[$instagram_index])) {
		        echo "<li class='iso_item instagram_feed'>" . $instagrams[$instagram_index]->outertext . "</li>";
		        $instagram_index++;
		        $is_blog_feed = false;
	    	}
	        break;
	    case 2:
	    	if (isset($recent_posts[$recent_index])) {
		        $post = $recent_posts[$recent_index];
		        $recent_index++;
		        $class_name .= "recent_feed";
		        if( $recent_index % 3 == 1) {
		        	$class_name .= " wide";
		        }
	    	}
	        break;
	    case 3:
	    	if ($index == 8) {
	    		if (isset($employees[$employee_index])) {
	    			$post = $employees[$employee_index];
	    			$employee_index++;
	    			$class_name .= "employee_feed";
	    		}
	    	} else {
	    		if (isset( $instagrams[$instagram_index])) {
	    			echo "<li class='iso_item instagram_feed'>" . $instagrams[$instagram_index]->outertext . "</li>";
	    			$instagram_index++;
	    			$is_blog_feed = false;
	    		}
	    	}
	        break;
	    case 4:
	    	if (isset($employees[$employee_index])) {
		        $post = $employees[$employee_index];
		        $employee_index++;
		        $class_name .= "employee_feed";
	    	}
	        break;
	    case 0:
		    if (isset($featured_posts[$featured_index])) {
		        $post = $featured_posts[$featured_index];
		        $featured_index++;
		        $class_name .= "featured_feed";
		    }
	        break;
	    default:
	         break;
	}
	if ( !$is_blog_feed ) continue;
	if ( $is_blog_feed && isset($post) ) {
		setup_postdata($post);
		$cat_obj = get_the_category();
		$large_image_url = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), 'full');
		if (isset($large_image_url[0])) {
			$featured_img = $large_image_url[0];
		} else {
			$featured_img = $dir_path . "/images/empty.jpg";
		}
		$cat_class = "";
		if (isset($cat_obj[0]->slug)) {
			$cat_class = "cat_".$cat_obj[0]->slug;
		}
?>
		<li class="<?=$class_name?>">
			<div style="background-image:url(<?=$featured_img?>)" class="feed_bg <?=$cat_class?>">
			<?php 
			if (strpos($class_name, 'featured_feed') !== false) {
			?>
		     	<div class="featured_content">
		     		<div class="featured_post_infos featured_<?=$cat_class?>">
		     			<span class="post_category"><?php echo $cat_obj[0]->name; ?></span>
		     			<span class="post_date"><?php echo get_the_date('m.d.Y'); ?></span>
		     			<span class="post_author"><?php the_author(); ?></span>
		     		</div>
		     		<div class="clearfix">
		     			<span class="post_title_bar"></span>
		     		</div>
		     		<a href="<?php the_permalink(); ?>">
		     			<h2><?php the_title(); ?></h2>
		     		</a>
		     		<a href="<?php the_permalink(); ?>" class="read_more">Read More</a>
			     </div>
			<?php
			} else if (strpos($class_name, 'employee_feed') !== false) {
			?>
				<div class="feed_infos">
		     		<div class="clearfix">
		     			<span class="post_title_bar"></span>
		     		</div>
		     		<a href="<?php the_permalink(); ?>">
						<h2><?php the_title(); ?></h2>
					</a>
					<span class="position"><?php the_field('position', $post->ID); ?></span>
					<div class="employee_socials">
						<ul class="social_list">
							<li>
								<a href="<?php the_field('linkedin_link', $post->ID);?>" class="menu_linkedin_on" target="_blank"></a>
							</li>
							<li>
								<a href="<?php the_field('instagram_link', $post->ID);?>" class="menu_instagram_on" target="_blank"></a>
							</li>
						</ul>
					</div>
				</div>
			<?php
			} else if (strpos($class_name, 'recent_feed') !== false) {
			?>
				<div class="feed_infos">
					<span class="recent_feed_cat <?=$cat_obj[0]->slug?>">
						<?php echo $cat_obj[0]->name; ?>
					</span>
		     		<div class="clearfix">
		     			<span class="post_title_bar"></span>
		     		</div>
		     		<a href="<?php the_permalink(); ?>">
						<h2><?php the_title(); ?></h2>
					</a>
					<div class="date_author">
						<span class="post_date"><?php echo get_the_date('m.d.Y'); ?></span>
						<span class="post_author"><?php the_author(); ?></span>
					</div>
				</div>
			<?php	
			} 
			?>
			</div>
		</li>
<?php
	}
}	
?>
	</ul>
</section>

</div>

<?php endwhile; ?>		

<?php get_footer(); ?>