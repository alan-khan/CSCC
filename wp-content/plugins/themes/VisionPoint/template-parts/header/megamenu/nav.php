<?php 

if( ! defined( 'ABSPATH' ) ) {
  exit; // Exit if accessed directly
}

?>  
<div id="megamenu-nav" class="">
    <?php 

        $menu_location = apply_filters( 'vp_mega_menu_locations', 'mega_menu' );
       
            
        if( has_nav_menu( $menu_location ) ) :
            
            wp_nav_menu( 
                array(
                    'theme_location' => $menu_location,
                    'container'      => false,
                    'menu_class'     => 'megamenu-menu',
                    'menu_id'        => 'megamenu-bar-menu',
                    'container_aria_label' => 'Primary Menu',
                    'walker'         => new VP_Walker_Mega_Menu(),
                )
            );
        endif;
    ?>
</div>