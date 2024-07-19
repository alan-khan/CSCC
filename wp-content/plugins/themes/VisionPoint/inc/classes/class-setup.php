<?php 
/**
 * SetUp Class
 * --styles
 * --scripts
 * theme support 
 */

 namespace VP_THEME;

 defined( 'ABSPATH' ) or die( 'File cannot be accessed directly' );

 class Setup {
		private $theme_url;

		function __construct() {
			
			$this->theme_url = get_template_directory_uri();

			add_action( 'wp_enqueue_scripts', [ $this, 'add_styles' ], 999 );
			add_action( 'wp_enqueue_scripts', [ $this, 'add_scripts' ], 999 );
			add_action( 'admin_enqueue_scripts', [ $this, 'add_admin_script' ]);
			add_action( 'after_setup_theme',  [ $this, 'vp_setup'] );
			
		}


		function add_styles() {
			wp_enqueue_style( 'build', $this->theme_url . '/dist/build.min.css' );
			wp_enqueue_style( 'index-theme-css', $this->theme_url . '/dist/index.min.css' );
		}

		function add_scripts() {
			wp_enqueue_script( 'index-theme-js', $this->theme_url . '/dist/index.js', array( 'jquery' ), '', true );
			wp_enqueue_script( 'bootstrap-script', 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js', array( 'jquery' ) );
		}

		function add_admin_script() {
			wp_enqueue_script( 'admin-script', $this->theme_url . '/assets/js/admin/admin-menu.js', array(), '', true );
		}

		function vp_setup() {


			require_once get_template_directory() . '/inc/customizer/customizer.php';

			register_nav_menus( array(
				'topbar_menu' => esc_html__( 'Top Bar', 'vp-theme' ),
				'mega_menu'   => esc_html__( 'Mega Menu', 'vp-theme' ),
			) );

			add_theme_support( 'disable-custom-colors'     ); //color palette 
			add_theme_support( 'disable-custom-gradients'  ); //do not need gradients
			add_theme_support( 'disable-custom-font-sizes' ); //font sizes
			add_theme_support( 'title-tag' ); //Title Tag

			//image sizes 
			add_image_size( 'megamenu-image', 107, 107, true );
		}

		 

 }

 new Setup();