<?php get_header(); ?>

<?php 
$dir_path = get_template_directory_uri();
?>

<!-- royalslider -->
<link href="<?php echo $dir_path; ?>/library/royalslider/royalslider.css" rel="stylesheet" />
<link href="<?php echo $dir_path; ?>/library/royalslider/skins/default/rs-default.css@v=1.0.4.css" rel="stylesheet" />
<script src="<?php echo $dir_path; ?>/library/royalslider/jquery.royalslider.min.js@v=9.3.6"></script>
<!-- royalslider -->

<link href="<?php echo $dir_path; ?>/css/portfolio.css" type="text/css" rel="stylesheet"/>
<script src="<?php echo $dir_path; ?>/js/portfolio.js"></script>

<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>

<div id="portfolio_wrapper">
	<section id="top_section">
		<?php $slider_imgs = get_field('first_slider', $post->ID); ?>
		<input type="hidden" id="first-slide-count" value="<?=count($slider_imgs)?>">
		<div id="first-slider" class="royalSlider rsDefault">

			<?php for ($index=0; $index < count($slider_imgs) ; $index++) { 
				$slider_img = $slider_imgs[$index];
				?>
				<div class="slide-bg<?php echo ($index==0)? " active":""; ?>" style="background-image:url(<?=$slider_img['first_slider_image']['url']?>)">
				</div>
				<?php
			}
			?>

		</div>
		
		<div class="top_gradient_bg">
			<div class="top_intro">
				<div class="portfolio_title">
					<h1><?php the_title(); ?></h1>
					<span><?php the_field('top_sub_title', $post->ID) ?></span>
				</div>
			</div>
		</div>
	</section>
	

	<section id="challenges">

		<?php 
		$args = array(
			'post_type' => 'projects',
			'post_status' => 'publish'
			);
		$projects = get_pages($args);

		$prev_study = null;
		$next_study = null;
		$page_count = count($projects);
		for ($index = 0; $index < $page_count; $index++) {
			$page = $projects[$index];
			if ($page->ID == $post->ID) {
				if ($index == 0) {
					$prev_study = $projects[$page_count-1];
					$next_study = $projects[1];
					break;
				} else if($index == $page_count-1) {
					$prev_study = $projects[$page_count-2];
					$next_study = $projects[0];
					break;
				}
				$prev_study = $projects[$index-1];
				$next_study = $projects[$index+1];
			}
		}
		?>

		<div id="nav-study">
			<div class="top-nav-previous">
				<i class="icon-prev"></i>
			<?php
			if (!empty( $prev_study )) { 
				$large_image_url = wp_get_attachment_image_src( get_post_thumbnail_id( $prev_study->ID ), 'full');
				if (isset($large_image_url[0])) {
					$featured_img = $large_image_url[0];
				} else {
					$featured_img = $dir_path . "/images/empty.jpg";
				}
				?>
				<a href="<?php echo get_permalink( $prev_study->ID ); ?>" style="background-image:url(<?=$featured_img?>)">
					<h3>
						<?php echo $prev_study->post_title; ?><br/>
						<span><?php the_field('top_sub_title', $prev_study->ID) ?></span>
					</h3>
				</a>

				<?php } ?>
			</div>

			<div class="top-nav-next">
				<i class="icon-next"></i>
				<?php
				if (!empty( $next_study )) { 
					$large_image_url = wp_get_attachment_image_src( get_post_thumbnail_id( $next_study->ID ), 'full');
					if (isset($large_image_url[0])) {
						$featured_img = $large_image_url[0];
					} else {
						$featured_img = $dir_path . "/images/empty.jpg";
					}
					?>
				<a href="<?php echo get_permalink( $next_study->ID ); ?>" style="background-image:url(<?=$featured_img?>)">
					<h3>
						<?php echo $next_study->post_title; ?><br/>
						<span><?php the_field('top_sub_title', $next_study->ID) ?></span>
					</h3>
				</a>

					<?php } ?>
			</div>
		</div>

		<div class="challenge_content">
			<div class="portfolio_inner">
				<div class="challenges_intro">
					<p class="wow fadeInDown">
						<?php the_field('clinet_challenges_intro', $post->ID) ?>
					</p>
				</div>
				<div class="clinet_challenges">
					<div class="clearfix text-center">
						<h3 class="challenge_title">Challenges</h3>
					</div>
					<div class="clearfix text-center visible-xs">
						<span class="title_bar"></span>
					</div>
					<div class="challenge_bar">
						<div class="bar_item"></div>
						<div class="bar_item"></div>
						<div class="bar_item"></div>
					</div>
					<div class="challenge_list">
						<ul>
						<?php 
						$challenges = get_field('clinet_challenges', $post->ID);
						foreach ($challenges as $key => $challenge) {
						?>
						<li class="wow fadeInDown">
							<?=$challenge['clinet_challenge'];?>
							<hr class="visible-xs">	
						</li>
						<?php
						 }
						?>
						</ul>
					</div>
				</div>
			</div>
		</div>	
		<figure class="challenge_banner">
			<?php $banner_img = get_field('clinet_challenges_banner', $post->ID); ?>
			 <img src="<?=$banner_img['url']?>" alt="">
		</figure>
	</section>

	<section id="insights">
		<div class="insights_inner">
			<div class="clearfix text-center">
				<h3 class="insight_title wow fadeInDown">insights</h3>
				<div class="clearfix"></div>
				<span class="title_bar wow fadeInDown"></span>
			</div>

			<?php $slider_txts = get_field('insights', $post->ID); ?>
			<input type="hidden" id="insight-slide-count" value="<?=count($slider_txts)?>">
			<div id="insight-slider" class="royalSlider rsDefault">

				<?php for ($index=0; $index < count($slider_txts) ; $index++) { 
					$slider_txt = $slider_txts[$index];
					?>
					<div class="slide-bg<?php echo ($index==0)? " active":""; ?>">
						<p>
							<?=$slider_txt['insight_slide_text']?>
						</p>
					</div>
					<?php
				}
				?>
			</div>

		</div>
	</section>


	<section id="birdsong_icons">

		<?php
		$icons = get_field('birdsong_icons', $post->ID);   
		$icon_layout = get_field('icon_layout', $post->ID);
		if (!isset($icon_layout)) {
			$icon_layout = "two_column";
		}
		?>
		
		<?php if ($icon_layout == "two_column") { ?>
		<div class="icon_list two-col">
			<?php 
				for ($index = 0; $index < count($icons); $index+=2) {
			?>
				<div class="icon_row">
					<figure>
						<img src="<?=$icons[$index]['birdsong_icon_image']['url']?>" alt="">
					</figure>
					<figure>
						<img src="<?=$icons[$index+1]['birdsong_icon_image']['url']?>" alt="">
					</figure>
				</div>
			<?php
				}
			?>
		</div>
		<?php } else { ?>
		<ul class="icon_list one-col">
		<?php 
			foreach ($icons as $key => $icon) {
		?>
			<li>
				<img src="<?=$icon['birdsong_icon_image']['url']?>" alt="">
			</li>
		<?php
			}
		?>
		</ul>
		<?php } ?>
	</section>

	<section id="strategy">
		<div class="strategy_paragraph">
			<div class="portfolio_inner">
				<div class="clearfix text-center">
					<h3 class="strategy_title wow fadeInDown">strategy</h3>
					<div class="clearfix"></div>
					<span class="title_bar wow fadeInDown"></span>
				</div>
				<p class="wow fadeInDown">
					<?php the_field('strategy_paragraph', $post->ID) ?>
				</p>
			</div>
		</div>
		<figure class="strategy_banner">
			<?php $banner_img = get_field('strategy_banner', $post->ID); ?>
			<img src="<?=$banner_img['url']?>" alt="">
		</figure>
	</section>


	<section id="solution">
		<div class="solution_inner">
			<div class="solution_paragraph">
				<div class="clearfix">
					<h3 class="solution_title">solution</h3>
					<div class="clearfix"></div>
					<span class="title_bar"></span>
				</div>
				<p>
					<?php the_field('solution_paragraph', $post->ID) ?>
				</p>
			</div>

			<div class="solution_slider">
				<?php $solution_imgs = get_field('solution_slider', $post->ID); ?>
				<?php 
					if( count($solution_imgs) > 0 ) {
				?>
				<input type="hidden" id="solution-slide-count" value="<?=count($solution_imgs)?>">
				<div id="solution-slider" class="royalSlider rsDefault">

					<?php for ($index=0; $index < count($solution_imgs) ; $index++) { 
						$solution_img = $solution_imgs[$index];
					?>
					<div class="slide-bg<?php echo ($index==0)? " active":""; ?>" style="background-image:url(<?=$solution_img['solution_slider_image']['url']?>)">
					</div>
					<?php
					}
					?>

					<?php $slider_videos = get_field('solution_slider_video', $post->ID); ?>
					<?php foreach ($slider_videos as $slider_video) { ?>
					<a class="rsImg" href="<?=$slider_video['video_background_image']['url']?>" data-rsVideo="<?=$slider_video['video_link']?>"></a>
					<?php
					}
					?>
				</div>
				<?php } ?>

			</div>
		</div>
	</section>


	<section id="services">
		<?php $services_bg = get_field('services_background', $post->ID); ?>
		<div class="services_bg" style="background-image:url(<?=$services_bg['url']?>)"></div>
		<div class="portfolio_inner">
			<div class="clearfix text-center">
				<h3 class="services_title wow fadeInDown">services</h3>
				<div class="clearfix"></div>
				<span class="title_bar wow fadeInDown"></span>
			</div>
			<div class="service_list">
				<ul>
					<?php 
					$services = get_field('service_list', $post->ID);
					foreach ($services as $key => $service) {
						?>
						<li class="wow fadeInDown">
							<?=$service['service_item'];?>	
						</li>
						<?php
					}
					?>
				</ul>
			</div>
		</div>
	</section>

</div>

<?php endwhile; ?>		

<?php get_footer(); ?>