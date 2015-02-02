<?php
/**
 * Template for displaying all single posts
 *
 * @package WordPress
 * @subpackage Birdsong_Gregory
 * @since Birdsong Gregory 1.0
 */

get_header(); ?>

		<div id="container">

			<?php
			/*
			 * Run the loop to output the post.
			 * If you want to overload this in a child theme then include a file
			 * called loop-single.php and that will be used instead.
			 */
			get_template_part( 'loop', 'single_employees' );
			?>

		</div><!-- #container -->

		<div class="prefooter">
			<div class="prefooter_inner">
				<h2>Talk to Us</h2>
				<div class="title_bar visible-xs"></div>
				<p><?php the_field('talk_to_us', 'options');?></p>
			</div>
		</div>


<?php get_footer(); ?>
