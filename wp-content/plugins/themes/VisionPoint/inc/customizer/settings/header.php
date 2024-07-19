<?php 

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}


if ( ! class_exists( 'VP_Customizer_Header') ) :

    class VP_Customizer_Header{
        
        public function __construct() {
            add_action( 'customize_register', array( $this, 'customizer_options' ) );
        }

        public function customizer_options( $wp_customize ) {
             
            // Add Header Panel
            $wp_customize->add_panel( 'vp_header_panel', array(
                'title' => __( 'Header', 'vp-theme' ),
                'description' => __( 'Header Settings', 'vp-theme' ),
                'priority' => 200,
            ) );

            // Add Header Section
            $wp_customize->add_section( 'vp_header_section', array(
                'title' => __( 'Logo', 'vp-theme' ),
                'description' => __( 'Set Logo on Header', 'vp-theme' ),
                'priority' => 10,
                'panel' => 'vp_header_panel',
            ) );

            // Add Header Settings
            /**
             * https://developer.wordpress.org/reference/classes/wp_customize_image_control/
             */
            $wp_customize->add_setting( 'vp_header_logo', array(
                'default'    => '',
                'capability' => 'edit_theme_options',
                'transport'  => 'postMessage',
                'sanitize_callback' => 'vp_sanitize_image',
            ) );

            //Add image control
            $wp_customize->add_control( new WP_Customize_Image_Control( $wp_customize, 'vp_header_logo', array(
                'label' => __( 'Logo', 'vp-theme' ),
                'description' => __( 'Custom Site Logo', 'vp-theme' ),
                'section' => 'vp_header_section',
                'settings' => 'vp_header_logo',
            ) ) );
            
 
        }
    }

endif;

return new VP_Customizer_Header();