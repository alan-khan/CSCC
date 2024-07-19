<?php 
/**
 * Plugin Name: Vision Point Gutenberg Blocks
 * Plugin URI: https://github.com/visionpointmarketing/skeleton-theme/
 * Description: Custom Gutenberg block plugin
 * Author: VisionPoint
 * Author URI: https://www.visionpointmarketing.com/
 * Version: 1.0.0
 */

 //Exit if access directly
 if( ! defined( "ABSPATH") ) {
    exit;
 }

if( ! function_exists( 'visionpoint_blocks_main_file') ) {

   function visionpoint_blocks_main_file() {
      return __FILE__;
   }

   require_once plugin_dir_path( __FILE__ ) . 'loader.php';
}
