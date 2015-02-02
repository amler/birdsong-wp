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

				<div id="top-nav-post">
					<div class="top-nav-previous">
						<i class="icon-prev"></i>
						<?php
						$prev_post = get_previous_post();
						if (!empty( $prev_post )) { 
						$large_image_url = wp_get_attachment_image_src( get_post_thumbnail_id( $prev_post->ID ), 'full');
						if (isset($large_image_url[0])) {
							$featured_img = $large_image_url[0];
						} else {
							$featured_img = $dir_path . "/images/empty.jpg";
						}
						?>
						<a href="<?php echo get_permalink( $prev_post->ID ); ?>" style="background-image:url(<?=$featured_img?>)">
							<h3><?php echo $prev_post->post_title; ?></h3>
						</a>

						<?php } ?>
					</div>

					<div class="top-nav-next">
						<i class="icon-next"></i>
						<?php
						$next_post = get_next_post();
						if (!empty( $next_post )) { 
						$large_image_url = wp_get_attachment_image_src( get_post_thumbnail_id( $next_post->ID ), 'full');
						if (isset($large_image_url[0])) {
							$featured_img = $large_image_url[0];
						} else {
							$featured_img = $dir_path . "/images/empty.jpg";
						}
						?>
						<a href="<?php echo get_permalink( $next_post->ID ); ?>" style="background-image:url(<?=$featured_img?>)">
							<h3><?php echo $next_post->post_title; ?></h3>
						</a>

						<?php } ?>
					</div>
				</div>

				<div id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
					
					<div class="signup_insights">
						<div class="signup_header">
							<h3>get more insights</h3>
							<i id="sign_ctrl_btn" class="signup_off"></i>
						</div>
						<div class="newsletter">
							<p>Let us help you stay ahead of the competition.</p>
							<?php the_field('post_newsletter', 'options'); ?>
						</div>
					</div>

					<div class="post_header">
						<?php 
						$cat_obj = get_the_category(); 
						$cat_link = get_category_link($cat_obj[0]->cat_ID);
						?>
			     		<div class="featured_post_infos cat_<?php echo $cat_obj[0]->slug; ?>">
			     			<span class="post_category">
			     				<a href="<?= esc_url( $cat_link ); ?>">
			     					<?php echo $cat_obj[0]->name; ?>
			     				</a>
			     			</span>
			     			<span class="post_date"><?=get_the_date('m.d.Y')?></span>
			     			<span class="post_author"><?php the_author(); ?></span>
			     		</div>
			     		<div class="clearfix">
			     			<span class="post_title_bar"></span>
			     		</div>
						<h2 class="entry-title"><?php the_title(); ?></h2>
						<?php 
							$subhead = get_field('subhead', $post->ID); 
						?>
						<?php if ( $subhead != "" ) { ?>
							<h4 class="entry-subtitle"><?php echo $subhead; ?></h4>
						<?php } ?>						

						<?php 
							$cutline = get_field('cutline', $post->ID);
							$large_image_url = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), 'full');
							if (isset($large_image_url[0])) {
								$featured_img = $large_image_url[0];
							} else {
								$featured_img = $dir_path . "/images/empty.jpg";
							}
						?>
						<?php if ( $cutline != "" ) { ?>
							<div class="cutline">
								<img src="<?=$featured_img?>">
								<figcaption><?php echo $cutline; ?></figcaption>
							</div>
						<?php } ?>
					</div>

					<div class="entry-content">
						<?php the_content(); ?>
						<?php wp_link_pages( array( 'before' => '<div class="page-link">' . __( 'Pages:', 'birdsong' ), 'after' => '</div>' ) ); ?>
					</div><!-- .entry-content -->

<?php if ( get_the_author_meta( 'description' ) ) : // If a user has filled out their description, show a bio on their entries  ?>
					<div id="entry-author-info">
						<div id="author-avatar">
							<?php
							/** This filter is documented in author.php */
							echo get_avatar( get_the_author_meta( 'user_email' ), apply_filters( 'birdsong_author_bio_avatar_size', 60 ) );
							?>
						</div><!-- #author-avatar -->
						<div id="author-description">
							<h2><?php printf( __( 'About %s', 'birdsong' ), get_the_author() ); ?></h2>
							<?php the_author_meta( 'description' ); ?>
							<div id="author-link">
								<a href="<?php echo get_author_posts_url( get_the_author_meta( 'ID' ) ); ?>" rel="author">
									<?php printf( __( 'View all posts by %s <span class="meta-nav">&rarr;</span>', 'birdsong' ), get_the_author() ); ?>
								</a>
							</div><!-- #author-link	-->
						</div><!-- #author-description -->
					</div><!-- #entry-author-info -->
<?php endif; ?>


				</div><!-- #post-## -->
				
				<div class="latest_posts">
					<div class="latest_header">
						<h3>more reads</h3>
					</div>
					<ul class="feed_list">
					<?php 
						$main_post_id = get_the_ID();
						$args = array(
							'posts_per_page' => 4,
							'post_type'   => 'post',
							'post_status' => 'publish'
							);
						$latest_posts = get_posts($args);
						$index = 0;
						$dir_path = get_template_directory_uri();
						foreach ($latest_posts as $key => $post) {
							setup_postdata($post);
							if(get_the_ID() != $main_post_id && $index < 3)
							{
								$index++;
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
					<li class="recent_feed">
						<div style="background-image:url(<?=$featured_img?>)" class="feed_bg <?=$cat_class?>">
							<div class="feed_infos" onclick="location.href='<?php the_permalink();?>'">
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
						</div>
					</li>
					<?php			
								
							}
						}
						wp_reset_postdata();
					?>
					</ul>
				</div>	

				<div id="nav-post">
					<div id="nav-below" class="navigation">
						<ul class="mobile-nav-post">
							<li><?php previous_post_link( '%link','<i class="icon-left"></i>' ); ?></li>
							<li><?php next_post_link( '%link', '<i class="icon-right"></i>' ); ?></li>
						</ul>
						<div class="nav-all">
							<a href="<?php echo home_url(); ?>/blog" class="bg_btn">all posts</a>
						</div>
					</div><!-- #nav-below -->
				</div><!-- #post-nav -->


<?php endwhile; // end of the loop. ?>
