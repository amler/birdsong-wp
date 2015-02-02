<?php 
class AdminMenuCustomPostType{
		public $custom_post_type_name, $parent_menu_title, $user_role;  // user role 0 is lowest possible Level and User Level 10 is the highest
		public $submenu_title_names = array();
		public $submenu_page_names = array();
		public $cur_submenu_id;

		function __construct($custom_post_type_name, $parent_menu_title, $user_role){

			$this->custom_post_type_name = $custom_post_type_name;
			$this->parent_menu_title = $parent_menu_title;
			$this->user_role = $user_role;
		} // __construct

		function add_submenus($submenu_title_names, $submenu_page_names){
			$this->submenu_title_names = $submenu_title_names;
			$this->submenu_page_names = $submenu_page_names;
		}

		function create_menu(){
			add_action( 'admin_menu', array($this, 'admin_menu_custom_post_type' ) );
		}
		
		function admin_menu_custom_post_type(){
			$custom_post_type_name = $this->custom_post_type_name;
			$parent_menu_title = $this->parent_menu_title;

			$submenu_title_names = $this->submenu_title_names;
			$submenu_page_names = $this->submenu_page_names;

			// parent menu
			add_object_page($parent_menu_title, $parent_menu_title, $this->user_role, 'edit.php?post_type='.$custom_post_type_name, null, get_template_directory_uri().'/images/custom-post-icon.png',__FILE__);   
		    add_submenu_page('edit.php?post_type='.$custom_post_type_name, $parent_menu_title, $parent_menu_title, $this->user_role, 'edit.php?post_type='.$custom_post_type_name);
		    add_submenu_page('edit.php?post_type='.$custom_post_type_name, 'Add New', 'Add New', $this->user_role , 'post-new.php?post_type='.$custom_post_type_name);

		    // submenus
		    for ($i=0; $i < sizeof($submenu_page_names); $i++) {
		    	$this->cur_submenu_id = $i;

		    	add_submenu_page(
		    		'edit.php?post_type='.$custom_post_type_name, 
		    		$submenu_title_names[$i], 
		    		$submenu_title_names[$i], 
		    		$this->user_role, 
		    		$submenu_page_names[$i], 
		    		array(&$this, "submenu_function")
				); // add_submenu_page   	
		    }
		} // admin_menu_custom_post_type

		function submenu_function(){
			$cur_submenu_id = $this->cur_submenu_id;

			$prefix = $this->custom_post_type_name."_page_";

			$current_filter = current_filter();

			$cur_submenu_page_name = substr($current_filter, strlen($prefix), strlen($current_filter) - strlen($prefix));

			include dirname(dirname(__FILE__)).'/admin-menus/'.$this->custom_post_type_name.'/'.$cur_submenu_page_name.'.php';
		} // function
	} // end class
?>