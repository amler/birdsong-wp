<?php
/**
 * Template Name: Work
 */
?>

<?php get_header(); ?>

<link href="<?php bloginfo('template_directory');?>/css/work.css" type="text/css" rel="stylesheet"/>

<?php if ( have_posts() ) while ( have_posts() ) : the_post(); 
	$large_image_url = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), 'full');
?>

<div id="work_wrapper">
	<section class="work_header">
		<div class="work_header_inner">
			<h1><?php the_title(); ?></h1>
			<div class="clearfix">
				<span class="title_bar"></span>
			</div>
			<?php the_content(); ?>
		</div>
	</section>
	<section class="work_main" id="work-main">
		<div class="work_inner">
			<ul class="project_list">
			<?php 
			$args = array(
				'post_type' => 'projects',
				'post_status' => 'publish'
				);
			$projects = new WP_Query( $args );
			while ( $projects->have_posts() ) : $projects->the_post();
				$large_image_url = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), 'full');
			?>
				<li onclick="location.href='<?php the_permalink();?>'">
					<div class="project_featured" style="background-image:url(<?php echo $large_image_url[0] ?>)">
						<div class="featured_overlay">
							<a href="<?php the_permalink();?>" class="bg_btn">
								learn more
							</a>
						</div>
					</div>
					<a class="project_title" href="<?php the_permalink();?>">
						<h2><?php the_title(); ?></h2>
						<span><?php the_field('top_sub_title', $post->ID); ?></span>
					</a>

				</li>
			<?php
			endwhile;

			wp_reset_postdata();
			?>
			</ul>
		</div>	
	</section>

	<section class="prefooter">
		<div class="prefooter_inner">
			<h2>Talk to Us</h2>
			<div class="title_bar visible-xs"></div>
			<p><?php the_field('talk_to_us', 'options');?></p>
		</div>
	</section>

</div>

<?php endwhile; ?>

<?php get_footer(); ?>