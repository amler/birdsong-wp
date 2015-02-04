<?php
/**
 * Template for displaying the footer
 *
 * Contains the closing of the id=main div and all content
 * after. Calls sidebar-footer.php for bottom widgets.
 *
 * @package WordPress
 * @subpackage Birdsong_Gregory
 * @since Birdsong Gregory 1.0
 */
?>

	</main><!-- #main -->

	<footer id="site-footer" role="contentinfo">

		<div class="footer_inner">
			<div class="footer_main">
				<h1 class="wow fadeInDown">what’s your <br class="visible-xs"/>problem?</h1>
				<div class="clearfix">
					<span class="title_bar wow fadeInDown"></span> 		
				</div>
				<p class="wow fadeInDown">We’ve never met a challenge we couldn’t solve.</p>
				<div class="clearfix wow fadeInDown">
					<a href="<?php echo home_url(); ?>/contact" class="bg_btn">tell us about it</a>
				</div>
			</div>
			<div class="footer_bar">
				<div class="bar_short"></div>
				<div class="bar_long"></div>
				<div class="bar_short hidden-xs"></div>
			</div>				
			<div class="footer_bottom">
				<div class="footer_logo">
					<a href="<?php echo home_url(); ?>">
						<img src="<?php bloginfo('template_directory');?>/images/svgs/orange/icons_30px_orange_bg_logo.svg"/>
					</a>
				</div>
				<div class="copyright">
					<p><?php the_field('copyright', 'options');?></p>
				</div>
				<div class="footer_socials">
					<ul class="social_list">
						<li>
							<a href="<?php the_field('twitter_link', 'options');?>" class="menu_twitter_on"  target="_blank"></a>
						</li>
						<li>
							<a href="<?php the_field('facebook_link', 'options');?>" class="menu_fb_on"  target="_blank"></a>
						</li>
						<li>
							<a href="<?php the_field('linkedin_link', 'options');?>" class="menu_linkedin_on"  target="_blank"></a>
						</li>
						<li>
							<a href="<?php the_field('instagram_link', 'options');?>" class="menu_instagram_on"  target="_blank"></a>
						</li>
					</ul>
				</div>
			</div>
		</div>


		<div class="other_elemetns">
			<input type="hidden" value="<?php bloginfo( 'template_directory' );?>" id="theme_url"/>
			<input type="hidden" value="<?php echo home_url(); ?>" id="site_url"/>
		</div>
	</footer><!-- #footer -->

</div><!-- #wrapper -->

<?php
	/*
	 * Always have wp_footer() just before the closing </body>
	 * tag of your theme, or you will break many plugins, which
	 * generally use this hook to reference JavaScript files.
	 */

	wp_footer();
?>


</body>
</html>
