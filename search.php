<?php
/**
 * Template for displaying Search Results pages
 *
 * @package WordPress
 * @subpackage Birdsong_Gregory
 * @since Birdsong Gregory 1.0
 */

get_header(); ?>
		
		<div id="container">
			<div id="content" role="main">

<?php if ( have_posts() ) : ?>
				<h1 class="page-title">
				<?php printf( __( 'Search Results for: %s', 'birdsong' ), '<span>' . get_search_query() . '</span>' ); ?>
				</h1>
				<?php
				/*
				 * Run the loop for the search to output the results.
				 * If you want to overload this in a child theme then include a file
				 * called loop-search.php and that will be used instead.
				 */
				 get_template_part( 'loop', 'search' );
				?>
<?php else : ?>
				<div id="post-0" class="post no-results not-found">
					<h2 class="entry-title"><?php _e( 'Nothing Found', 'birdsong' ); ?></h2>
					<div class="entry-content">
						<p><?php _e( 'Sorry, but nothing matched your search criteria. Please try again with some different keywords.', 'birdsong' ); ?></p>
						<?php get_search_form(); ?>
					</div><!-- .entry-content -->
				</div><!-- #post-0 -->
<?php endif; ?>
			</div><!-- #content -->
		</div><!-- #container -->

		<div class="prefooter">
			<div class="prefooter_inner">
				<h2>Talk to Us</h2>
				<div class="title_bar visible-xs"></div>
				<p><?php the_field('talk_to_us', 'options');?></p>
			</div>
		</div>

<?php get_footer(); ?>
