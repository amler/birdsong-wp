<?php
/**
 * Header template for our theme
 *
 * Displays all of the <head> section and everything up till <div id="main">.
 *
 * @package WordPress
 * @subpackage Birdsong_Gregory
 * @since Birdsong Gregory 1.0
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>" />
<meta content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=1;" name="viewport">
<title><?php
	/*
	 * Print the <title> tag based on what is being viewed.
	 */
	global $page, $paged;

	wp_title( '|', true, 'right' );

	// Add the blog name.
	bloginfo( 'name' );

	// Add the blog description for the home/front page.
	$site_description = get_bloginfo( 'description', 'display' );
	if ( $site_description && ( is_home() || is_front_page() ) )
		echo " | $site_description";

	// Add a page number if necessary:
	if ( ( $paged >= 2 || $page >= 2 ) && ! is_404() )
		echo ' | ' . sprintf( __( 'Page %s', 'birdsong' ), max( $paged, $page ) );

	?></title>

<link rel="icon" href="<?php bloginfo('template_directory'); ?>/icon-touch.png" type="image/x-icon" />
<link rel="shortcut icon" href="<?php bloginfo('template_directory'); ?>/favicon.ico" type="image/x-icon" />

<link rel="profile" href="http://gmpg.org/xfn/11" />
<link rel="stylesheet" type="text/css" media="all" href="<?php bloginfo( 'stylesheet_url' ); ?>" />
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
<?php
	/*
	 * We add some JavaScript to pages with the comment form
	 * to support sites with threaded comments (when in use).
	 */
	if ( is_singular() && get_option( 'thread_comments' ) )
		wp_enqueue_script( 'comment-reply' );

	/*
	 * Always have wp_head() just before the closing </head>
	 * tag of your theme, or you will break many plugins, which
	 * generally use this hook to add elements to <head> such
	 * as styles, scripts, and meta tags.
	 */
	wp_head();
?>

<script src="<?php bloginfo('template_directory'); ?>/library/wow/wow.js"></script>
<script src="<?php bloginfo('template_directory'); ?>/library/jquery/jquery-ui.js"></script>

<link rel="stylesheet" type="text/css" href="//cloud.typography.com/796976/679066/css/fonts.css" />
<link href="<?php bloginfo('template_directory');?>/css/animate.css" type="text/css" rel="stylesheet"/>
<link href="<?php bloginfo('template_directory');?>/library/bootstrap-3.3.1/css/bootstrap.css" type="text/css" rel="stylesheet"/>

<link href="<?php bloginfo('template_directory');?>/css/main.css" type="text/css" rel="stylesheet"/>
<script src="<?php bloginfo('template_directory'); ?>/js/script.js"></script>
</head>

<body <?php body_class(); ?>>
<div id="wrapper" class="hfeed">
	<header id="site-header">
		<div class="header_top">
			<a href="<?php echo home_url(); ?>" class="site_logo">
				<img src="<?php bloginfo('template_directory');?>/images/logo.png" class="hidden-xs"/>
				<img src="<?php bloginfo('template_directory');?>/images/svgs/orange/icons_30px_orange_bg_logo.svg" class="visible-xs"/>
			</a>
		</div>
		<div class="toggle-menu-wrap">
			<a id="toggle-menu" class="toggle-menu-hidden">
				<div>
					<span class="top"></span>
					<span class="middle"></span>
					<span class="bottom"></span>
				</div>
			</a>
		</div>
		<div id="nav_container">

			<div class="nav_logo">
				<a href="<?php echo home_url(); ?>">
					<img src="<?php bloginfo('template_directory');?>/images/svgs/white/icons_30px_white_bg_logo.svg"/>
				</a>
			</div>
			<?php 
			$menu_attr = array(
				'container_id'    => 'navbar',
				'theme_location'  => 'primary',
				'menu_class'      => 'nav'
				);
			wp_nav_menu( $menu_attr );
			?>

			<div id="nav_socials">
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
					
			<?php get_template_part( 'nav', 'posts' ); ?>

		</div>
	</header><!-- #header -->

	<main id="site-main">
