<?php
/**
 * Initialize blocks
 */


 //Add as we go here
function visionpoint_loader() {

    //Load blocks functionality 
    require_once plugin_dir_path( __FILE__ ) . 'dist/init.php';
}

add_action( 'plugins_loaded', 'visionpoint_loader' );