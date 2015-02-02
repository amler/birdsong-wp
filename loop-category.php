<?php
/**
 * The loop that displays posts
 *
 * The loop displays the posts and the post content. See
 * http://codex.wordpress.org/The_Loop to understand it and
 * http://codex.wordpress.org/Template_Tags to understand
 * the tags used in it.
 *
 * This can be overridden in child themes with loop.php or
 * loop-template.php, where 'template' is the loop context
 * requested by a template. For example, loop-index.php would
 * be used if it exists and we ask for the loop with:
 * <code>get_template_part( 'loop', 'index' );</code>
 *
 * @package WordPress
 * @subpackage Birdsong_Gregory
 * @since Birdsong Gregory 1.0
 */
?>



<?php
$dir_path = get_template_directory_uri();
?>

<ul class="search-results">
<?php while ( have_posts() ) : the_post(); ?>


	<li id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
		<?php 
		$large_image_url = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), 'full');
		if (isset($large_image_url[0])) {
			$featured_img = $large_image_url[0];
		} else {
			$featured_img = $dir_path . "/images/empty.jpg";
		}
		?>
		<div class="result-featured" style="background-image:url(<?=$featured_img?>)"></div>
		<div class="result-content">
			<h2 class="entry-title">
				<a href="<?php the_permalink(); ?>" rel="bookmark"><?php the_title(); ?></a>
			</h2>

			<?php $cat_obj = get_the_category(); ?>
	 		<div class="featured_post_infos cat_<?php echo $cat_obj[0]->slug; ?>">
	 			<span class="post_category"><?php echo $cat_obj[0]->name; ?></span>
	 			<span class="post_date"><?php echo get_the_date('m.d.Y'); ?></span>
	 			<span class="post_author"><?php the_author(); ?></span>
	 		</div>

	<?php if ( is_archive() || is_search() ) : // Only display excerpts for archives and search. ?>
			<div class="entry-summary">
				<p><?php echo excerpt(55); ?></p>
			</div><!-- .entry-summary -->
	<?php else : ?>
			<div class="entry-content">
				<?php the_content( __( 'Continue reading <span class="meta-nav">&rarr;</span>', 'birdsong' ) ); ?>
				<?php wp_link_pages( array( 'before' => '<div class="page-link">' . __( 'Pages:', 'birdsong' ), 'after' => '</div>' ) ); ?>
			</div><!-- .entry-content -->
	<?php endif; ?>
		</div>

	</li><!-- #post-## -->

	<?php comments_template( '', true ); ?>


<?php endwhile; // End the loop. Whew. ?>

</ul>
