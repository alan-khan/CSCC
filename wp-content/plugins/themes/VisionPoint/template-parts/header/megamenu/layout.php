<?php
$home_bg_class = '';    
if( is_front_page() ) : 
    $home_bg_class = 'home-bg';
endif;
?>
<div id="megamenu-bar" class="megamenu-bar <?php echo esc_attr( $home_bg_class ); ?>">
    <div id="megamenu-bar-wrap">
        <div class="container">
            <div id="megamenu-content" class="header-row">
                <?php 
                   if( has_nav_menu( 'mega_menu' ) ) :
                       get_template_part( 'template-parts/header/megamenu/nav' );
                    endif;
                ?>
            </div> 
        </div>
    </div>
</div>