<?php
/**
 * The loop that displays a single post
 *
 * The loop displays the posts and the post content. See
 * http://codex.wordpress.org/The_Loop to understand it and
 * http://codex.wordpress.org/Template_Tags to understand
 * the tags used in it.
 *
 * This can be overridden in child themes with loop-single.php.
 *
 * @package WordPress
 * @subpackage Birdsong_Gregory
 * @since Birdsong Gregory 1.2
 */
?>

<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>

				<div id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
					
					<div class="post_header">
						<?php $cat_obj = get_the_category(); ?>

						<h2 class="entry-title"><?php the_title(); ?></h2>
			     		
			     		<div class="clearfix">
			     			<span class="post_title_bar"></span>
			     		</div>

						<figure class="employee_photo">
			     			<?php the_post_thumbnail( 'full' ); ?>
			     			<figcaption class="employee_position">
			     				<?php the_field('position', $post->ID); ?>
			     			</figcaption> 
						</figure>
						
					</div>

					<div class="entry-content">
						<?php the_content(); ?>
						<?php wp_link_pages( array( 'before' => '<div class="page-link">' . __( 'Pages:', 'birdsong' ), 'after' => '</div>' ) ); ?>
					</div><!-- .entry-content -->

					<div class="employee_socials">
						<ul class="social_list">
							<li>
								<a href="<?php the_field('linkedin_link', $post->ID);?>" class="linkedin_on"></a>
							</li>
							<li>
								<a href="<?php the_field('instagram_link', $post->ID);?>" class="instagram_on"></a>
							</li>
						</ul>
					</div>


				</div><!-- #post-## -->

				<div id="nav-post">
					<div id="nav-below" class="navigation">
						<div class="nav-previous">
							<?php previous_post_link( '%link','<i class="icon-left"></i>' ); ?>
						</div>
						<ul class="mobile-nav-post">
							<li><?php previous_post_link( '%link','<i class="icon-left"></i>' ); ?></li>
							<li><?php next_post_link( '%link', '<i class="icon-right"></i>' ); ?></li>
						</ul>
						<div class="nav-next">
							<?php next_post_link( '%link', '<i class="icon-right"></i>' ); ?>
						</div>
					</div><!-- #nav-below -->
				</div><!-- #post-nav -->


<?php endwhile; // end of the loop. ?>
