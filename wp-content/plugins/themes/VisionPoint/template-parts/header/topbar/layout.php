<div id="top-bar" class="top-bar">
    <div id="top-bar-wrap">
        <div class="container">
            <div id="top-bar-content" class="header-row">
                <?php 
                    vp_display_logo();
                ?>
                <?php 
                    if( has_nav_menu( 'topbar_menu' ) ) :
                        get_template_part( 'template-parts/header/topbar/nav' );
                    endif;
                ?>
            </div>
        </div>
    </div>
</div>