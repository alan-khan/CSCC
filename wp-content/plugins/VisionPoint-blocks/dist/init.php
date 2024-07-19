<?php 
/**
 * Block INIT 
 * 
 * Enqueue CSS/JS of Blocks
 */

 if( ! defined( 'ABSPATH' ) ) {
    exit;
 }


 function visionpoint_blocks_editor_assets() {
 
   //Assets for js editor only
   wp_enqueue_script( 
      'visionpoint-blocks-editor-js',
      plugins_url( 'dist/assets/blocks.js', dirname(__FILE__) ),
      array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-components', 'wp-editor' ),
		null,
      true
   );

   //Assets for styles editor only 
   wp_enqueue_style(
      'visionpoint-blocks-editor-styles',
      plugins_url( 'dist/assets/style-blocks.css', dirname( __FILE__ ) ),
		array( 'wp-edit-blocks' ),
		null
   );

   wp_enqueue_style( 
      'fontawesome-block',
      get_template_directory_uri() . 'assets/dist/fontawesome.css',
      array( 'wp-edit-blocks' ),
      null
   );
      wp_enqueue_style( 'build',get_template_directory_uri()  . '/dist/build.min.css' );
      wp_enqueue_style( 'index-theme-css', get_template_directory_uri() . '/dist/index.min.css' );

 }

 add_action( 'enqueue_block_editor_assets', 'visionpoint_blocks_editor_assets' );
 function enqueue_frontend_styles() {
   wp_enqueue_style( 'index',  plugins_url( 'dist/assets/style-blocks.css', dirname( __FILE__ ) ) );
   wp_enqueue_style( 'fontawesome-block', get_template_directory_uri() . 'assets/dist/fontawesome.css' );

}
  
  add_action( 'wp_enqueue_scripts','enqueue_frontend_styles' , 999 );

 function visionpoint_blocks_custom_category( $categories ) {
   $category_title = __('VisionPoint', 'visionpoint');

   return array_merge(
      $categories,
      [
         [
            'slug'  => 'visionpoint',
            'title' => $category_title
         ]
      ]
   );
 }

 //if needed settings page here.

 