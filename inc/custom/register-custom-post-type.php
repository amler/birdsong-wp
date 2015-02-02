<?php 
class RegisterCustomPostType{
		public $custom_post_type_name;
		public $custom_post_type_multi_title;
		public $custom_post_type_single_title;
		public $include_path;
		
		function __construct( $custom_post_type ){ // parameter format is $custom_post_type[0]: custom post type name, $custom_post_type[1]: Custom post type Multi Title(ex: Apartments), $custom_post_type[2]: Custom post type Single Title(ex: Apartment), $custom_post_type[3]: include path of metabox content.
			$this->custom_post_type_name = $custom_post_type[0];
			$this->custom_post_type_multi_title = $custom_post_type[1];
			$this->custom_post_type_single_title = $custom_post_type[2];

			if(!empty($custom_post_type[3])){
				$this->include_path = $custom_post_type[3];
			}

			add_action( 'init', array($this, 'register_custom_post_type' ) );
		} // __construct

		function include_body(){
			if(!empty($this->include_path)){
				require $this->include_path;
			}
		}
		
		function register_custom_post_type(){
			$post_type_name = $this->custom_post_type_name;

			$multi_title = $this->custom_post_type_multi_title;  // Apartments
			$single_title = $this->custom_post_type_single_title; // Apartment

			$labels = array( 
				'name' => _x($multi_title, 'post type general name'), 
				'singular_name' => _x($multi_title, 'post type singular name'), 
				'add_new' => _x('Add New', $single_title), 
				'add_new_item' => __('Add New '.$single_title), 
				'edit_item' => __('Edit '.$single_title), 
				'new_item' => __('New '.$single_title), 
				'view_item' => __('View '.$single_title), 
				'search_items' => __('Search '.$single_title), 
				'not_found' => __('Nothing found'), 
				'not_found_in_trash' => __('Nothing found in Trash'), 
				'parent_item_colon' => '' 
				);   

			$args = array( 
				'labels' 	=> $labels, 
				'public'	=> true, 
				'publicly_queryable' => true, 
				'show_ui' => true, 
				'query_var' => true, 
				'menu_icon' => get_stylesheet_directory_uri() . '/library/images/custom-post-icon.png', 
				'rewrite' => true, 
				'show_in_menu' => false,
				'capability_type' => 'post', 
				'hierarchical' => true, 
				'menu_position' => null, 
				'supports' => array('title','editor','thumbnail', 'excerpt') 
				);   

			register_post_type( $post_type_name , $args );

			add_action("admin_init", array($this, 'include_body'));
		} // register_custom_post_type

	} // end class
?>