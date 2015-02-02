

	<?php
		$args = array(
		  'orderby' => 'id',
		  'order' => 'DESC'
		  );
		$categories = get_categories($args);
	?>
<div class="category_posts">
	<ul>
	<?php 
	foreach ($categories as $key => $category) { 
		if ($category->slug == "uncategorized" || $category->slug == "agency") {
			continue;
		}
		$args = array(
			'posts_per_page'   => 1,
			'cat'  => 	$category->cat_ID,
			'post_type' => 'post',
			'post_status' => 'publish'
		);
		$blog_posts = new WP_Query( $args );
		while ( $blog_posts->have_posts() ) : $blog_posts->the_post(); 
	?>
		<li>
			<div class="clearfix">
				<span class="cat_post_head cat_<?php echo $category->slug; ?>">
					<?php echo $category->name; ?>
				</span>
			</div>
			<a href="<?php the_permalink(); ?>"><h5><?php the_title(); ?></h5></a>
			<span class="cat_post_info">
				<?php echo get_the_date('m.d.Y'); ?> | 
				<?php the_author(); ?>
			</span>
		</li>
	<?php 
		endwhile;
		wp_reset_postdata();
	} 
	?>
	</ul>
</div>

