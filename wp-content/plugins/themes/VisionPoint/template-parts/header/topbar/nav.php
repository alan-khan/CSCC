<?php 

if( ! defined( 'ABSPATH' ) ) {
  exit; // Exit if accessed directly
}

?>
<div id="top-bar-nav" class="navigation">
<button class="menu-button" aria-expanded="false" aria-controls="site-header-menu" aria-label="<?php esc_attr_e( 'Menu', 'vp' ); ?>"></button>
    <?php 
        $menu_location = apply_filters( 'vp_topbar_menu_location', 'topbar_menu' );

        if( has_nav_menu( $menu_location ) ) :

            wp_nav_menu(
                array(
                    'theme_location' => $menu_location,
                    'container'      => false,
                    'menu_class'     => 'top-bar-menu',
                    'menu_id'        => 'top-bar-nav-menu',
                    'container_aria_label' => 'Top Menu',
                    'walker'         => new VP_Walker_Top_Nav_Menu(),
                )
            );
        endif;
    ?>
</div>