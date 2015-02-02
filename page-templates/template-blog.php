<?php
/**
 * Template Name: Blog
 */
?>

<?php get_header(); ?>

<?php 
global $post;
setup_postdata($post);

$dir_path = get_template_directory_uri();

$args = array(
  'orderby' => 'id',
  'order' => 'DESC'
  );
$categories = get_categories($args);

?>	

<!-- isotope -->
<link href="<?php echo $dir_path; ?>/library/isotope/isotope.css" rel="stylesheet" />
<script src="<?php echo $dir_path; ?>/library/isotope/jquery.isotope.min.js"></script>
<!-- isotope -->

<link href="<?php echo $dir_path; ?>/css/blog.css" type="text/css" rel="stylesheet"/>
<script src="<?php echo $dir_path; ?>/js/blog.js"></script>
<div id="blog_wrapper">

	<div class="blog_header">
		<div class="blog_header_inner">
			<h1><?php the_field('blog_title', $post->ID); ?></h1>
			<div class="clearfix">
				<span class="title_bar"></span>
			</div>
			<p><?php the_field('blog_sum', $post->ID); ?></p>
			<div class="categories">
				<ul class="filter">
					<li>
						<a href="javascript:;" class="link current selected" no-data-filter="all">categories</a>
					</li>
					<?php 
					foreach ($categories as $key => $category) { 
						if ($category->slug == "uncategorized") {
							continue;
						}
					?>
					<li>
						<a href="#" class="link" data-filter=".<?= $category->slug?>"><?= $category->name?></a>
					</li>
					<?php 
					} 
					?>
				</ul>
				<?php get_search_form(); ?>
			</div>
		</div>
	</div>


	<div class="blog_main" id="blog-main">
		<ul class="featured_blogs">
		<?php
		    $args=array(
		      'tag' => 'featured',
		      'showposts'=> 2
		    );
		    $featured_posts = new WP_Query($args);
		    if( $featured_posts->have_posts() ) {
		      $index = 0;
		      while ($featured_posts->have_posts()) : $featured_posts->the_post(); 
				$cat_obj = get_the_category();
				$large_image_url = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), 'full');
				if (isset($large_image_url[0])) {
					$featured_img = $large_image_url[0];
				} else {
					$featured_img = $dir_path . "/images/empty.jpg";
				}
		      if ($index == 0) {
		?>
		     <li>
		     	<div class="featured_img" style="background-image:url(<?=$featured_img?>)" onclick="location.href='<?php the_permalink();?>'"></div>
		     	<div class="featured_content">
		     		<div class="featured_header">
			     		<div class="featured_post_infos cat_<?php echo $cat_obj[0]->slug; ?>">
			     			<span class="post_category"><?php echo $cat_obj[0]->name; ?></span>
			     			<span class="post_date"><?php echo get_the_date('m.d.Y'); ?></span>
			     			<span class="post_author"><?php the_author(); ?></span>
			     		</div>
			     		<div class="clearfix">
			     			<span class="post_title_bar"></span>
			     		</div>
		     		</div>
		     		<h4><a href="<?php the_permalink();?>"><?php the_title(); ?></a></h4>
		     		<p><?php echo excerpt(50); ?></p>
		     	</div>
		     </li>  
		<?php
		      } else if ($index == 1) {
		?>
		     <li>
		     	<div class="featured_img visible-xs" style="background-image:url(<?=$featured_img?>)" onclick="location.href='<?php the_permalink();?>'"></div>
		     	<div class="featured_content">
		     		<div class="featured_header">
			     		<div class="featured_post_infos cat_<?php echo $cat_obj[0]->slug; ?>">
			     			<span class="post_category"><?php echo $cat_obj[0]->name; ?></span>
			     			<span class="post_date"><?php echo get_the_date('m.d.Y'); ?></span>
			     			<span class="post_author"><?php the_author(); ?></span>
			     		</div>
			     		<div class="clearfix">
			     			<span class="post_title_bar"></span>
			     		</div>
		     		</div>
		     		<h4><a href="<?php the_permalink();?>"><?php the_title(); ?></a></h4>
		     		<p><?php echo excerpt(57); ?></p>
		     	</div>
		     	<div class="featured_img hidden-xs" style="background-image:url(<?=$featured_img?>)" onclick="location.href='<?php the_permalink();?>'"></div>
		     </li>  
		<?php      	
		      }	
			  $index++;
		      endwhile;
		    } 
		  wp_reset_query();  
		?>				
		</ul>

		<ul class="iso_items isotope blog_list">
		<?php 
		$posts_per_category = get_field('posts_per_category', $post->ID);
		if ($posts_per_category == "") {
			$posts_per_category = 10;
		}
		
		$args = array(
			'posts_per_page'   => 200,	
			'post_type' => 'post',
			'post_status' => 'publish'
			);
		$blog_posts = get_posts( $args );

		$agency_count = 0;
		$insights_count = 0;
		$inspiration_count = 0;
		$trends_count = 0;
		foreach ($blog_posts as $post) { 
			setup_postdata($post); 

			$tags = wp_get_post_tags($post->ID);
			$is_featured = false;
			foreach ($tags as $key => $tag) {
				if($tag->name == "Featured") {
					$is_featured = true;	
				}
			}
			if ($is_featured) continue;

			$cat_obj = get_the_category();
			
			switch ($cat_obj[0]->slug) {
				case "agency":
					$agency_count++;
					break;

				case "insights":
					$insights_count++;
					break;

				case "inspiration":
					$inspiration_count++;
					break;

				case "trends":
					$trends_count++;
					break;

				default:
					break;
			}
			if ($cat_obj[0]->slug == "agency" && $agency_count > $posts_per_category) {
				continue;
			}

			if ($cat_obj[0]->slug == "insights" && $insights_count > $posts_per_category) {
				continue;
			}

			if ($cat_obj[0]->slug == "inspiration" && $inspiration_count > $posts_per_category) {
				continue;
			}

			if ($cat_obj[0]->slug == "trends" && $trends_count > $posts_per_category) {
				continue;
			}


			$large_image_url = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), 'full');
			if (isset($large_image_url[0])) {
				$featured_img = $large_image_url[0];
			} else {
				$featured_img = $dir_path . "/images/empty.jpg";
			}
			?>
			<li class="iso_item <?php echo $cat_obj[0]->slug; ?>" onclick="location.href='<?php the_permalink();?>'">
				<figure>
					<img src="<?= $featured_img ?>" alt=""/>
				</figure>
				<div class="date_wrap">
					<span class="post_date"><?php echo get_the_date('m.d.Y'); ?></span>
				</div>
				<a class="post_bottom cat_<?php echo $cat_obj[0]->slug; ?>" href="<?php the_permalink(); ?>">
					<h5><?php the_title(); ?></h5>
				</a>
			</li>
		<?php 
		}
		wp_reset_postdata();
		
		?>
		</ul>

		<ul id="hidden_posts">
			<?php
			foreach ($blog_posts as $post) { 
				setup_postdata($post);

				$tags = wp_get_post_tags($post->ID);
				$is_featured = false;
				foreach ($tags as $key => $tag) {
					if($tag->name == "Featured") {
						$is_featured = true;	
					}
				}
				if ($is_featured) continue;
				$cat_obj = get_the_category();
				$large_image_url = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), 'full');
				if (isset($large_image_url[0])) {
					$featured_img = $large_image_url[0];
				} else {
					$featured_img = $dir_path . "/images/empty.jpg";
				}
			?>
			<li class="iso_item <?php echo $cat_obj[0]->slug; ?>">
				<figure>
					<img src="<?= $featured_img ?>" alt=""/>
				</figure>
				<div class="date_wrap">
					<span class="post_date"><?php echo get_the_date('m.d.Y'); ?></span>
				</div>
				<a class="post_bottom cat_<?php echo $cat_obj[0]->slug; ?>" href="<?php the_permalink(); ?>">
					<h5><?php the_title(); ?></h5>
				</a>
			</li>
			<?php
			}

			wp_reset_postdata();
			?>
		</ul>
	</div>

	<div class="blog_footer">
		<span class="bg_btn" id="load_more">load more</span>
	</div>

	<div class="prefooter">
		<div class="prefooter_inner">
			<h2>Talk to Us</h2>
			<div class="title_bar visible-xs"></div>
			<p><?php the_field('talk_to_us', 'options');?></p>
		</div>
	</div>

</div>

<?php get_footer(); ?>
