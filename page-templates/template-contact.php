<?php
/**
 * Template Name: Contact
 */
?>

<?php get_header(); ?>

<link href="<?php bloginfo('template_directory');?>/css/contact.css" type="text/css" rel="stylesheet"/>

<?php if ( have_posts() ) while ( have_posts() ) : the_post(); 
	$large_image_url = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), 'full');
?>

<div id="contact_wrapper">
	<section class="contact_header" style="background-image:url(<?php echo $large_image_url[0] ?>)"></section>	
	<section class="contact_content">
		<div class="cc_inner">
			<h1><?php the_title(); ?></h1>
			<div class="clearfix">
				<span class="title_bar"></span>
			</div>
			<?php the_content(); ?>
		</div>
	</section>	
	<section class="form_container">
		<div class="contact_inner">
			<div class="form_header">
				<?php the_field('form_header', $post->ID); ?>
			</div>
			<?php 
			echo do_shortcode('[contact-form-7 id="900998" title="Contact Form"]'); 
			?>
			<div class="form_footer">
				<?php the_field('form_footer', $post->ID); ?>
			</div>

			<div class="newsletter">
				<?php the_field('newsletter', $post->ID); ?>
			</div>

			<div class="contact_socials">
				<span>go social</span>
				<div class="clearfix">
					<ul class="social_list">
						<li>
							<a href="<?php the_field('twitter_link', 'options');?>" class="twitter_on" target="_blank"></a>
						</li>
						<li>
							<a href="<?php the_field('facebook_link', 'options');?>" class="facebook_on" target="_blank"></a>
						</li>
						<li>
							<a href="<?php the_field('linkedin_link', 'options');?>" class="linkedin_on" target="_blank"></a>
						</li>
						<li>
							<a href="<?php the_field('instagram_link', 'options');?>" class="instagram_on" target="_blank"></a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<section class="career">
		<div class="career_inner">
			<div class="career_sum">
				<?php the_field('career_sum', $post->ID); ?>
				<span class="title_bar"></span>
			</div>
			<div class="career_content">
				<?php the_field('career_content', $post->ID); ?>
			</div>
		</div>
	</section>
</div>

<?php endwhile; ?>

<?php get_footer(); ?>