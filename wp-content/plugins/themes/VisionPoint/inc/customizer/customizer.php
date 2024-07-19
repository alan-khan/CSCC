<?php 

if ( ! class_exists( 'VP_Customizer') ) :

    class VP_Customizer{
        
        public function __construct() {
            add_action( 'customize_register', array( $this, 'controls_helpers' ) );
            add_action( 'init', array( $this, 'register_options' ) );
        }

        public function controls_helpers() {
            require_once get_template_directory() . '/inc/customizer/customizer-sanitization.php';
        }

        public function register_options() {
            require_once get_template_directory() . '/inc/customizer/settings/header.php';
        }
    }

endif;

return new VP_Customizer();