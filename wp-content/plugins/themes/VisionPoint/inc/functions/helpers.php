<?php 
/**
 * Helper functions used throughout the theme
 */

 

function load_media_files() {
  wp_enqueue_media();
}
add_action( 'admin_enqueue_scripts', 'load_media_files' );

//MEGA MENU Custom Fields Section

//Activating if its a MEGA MENU or not
function megamenu_parent_field( $id, $item, $depth, $args ) {

   $mega_menu_value = get_post_meta( $item->ID, '_menu_item_megamenu_parent', true );
   $input_id        = 'megamenu_parent_field[' . $item->ID . ']';
   $input_name      = 'megamenu_parent_field[' . $item->ID . ']'; 

   //only want to activate this on the parent level
   if( $depth === 0 ) : 
?>
<p class="description description-wide">
  <label for="<?php echo esc_attr( $input_id ); ?>"><input type="checkbox" id="<?php echo esc_attr( $input_id ); ?>" name="<?php echo esc_attr( $input_name ) ?>" value="1" <?php echo ( $mega_menu_value == 1 ) ? 'checked="checked"' : ''; ?>>Activate Mega Menu</label>
</p>
<?php
  endif;
}
add_action('wp_nav_menu_item_custom_fields', 'megamenu_parent_field', 10, 4);

function save_megamenu_parent_field( $menu_id, $menu_item_db_id ) {

    // Sanitize.
		if ( ! empty( $_POST[ 'megamenu_parent_field' ][ $menu_item_db_id ] ) ) {
			$value = $_POST[ 'megamenu_parent_field' ][ $menu_item_db_id ];
		} else {
			$value = null;
		}

    if ( ! is_null( $value ) ) {
			update_post_meta( $menu_item_db_id, '_menu_item_megamenu_parent', $value );
		} else {
			delete_post_meta( $menu_item_db_id, '_menu_item_megamenu_parent' );
		}


   
}
add_action( 'wp_update_nav_menu_item', 'save_megamenu_parent_field', 10, 2 );

/***
 * You can find functionality from here credit:
 * Modified from https://gist.github.com/digamber89/e3c6289eaed0c6baf1d6d52f947bd3e7
 * 
 */
function megamenu_image_field( $id, $item, $depth, $args ) {
  $parent_id = $item->menu_item_parent;
  $mega_menu_parent_value = get_post_meta( $parent_id, '_menu_item_megamenu_parent', true );
  if( $depth === 1 && isset($mega_menu_parent_value) && $mega_menu_parent_value == 1) :
      // Get WordPress' media upload URL
      $upload_link = esc_url( get_upload_iframe_src( 'image', $item->ID ) );

      // See if there's a media id already saved as post meta
      $img_id = get_post_meta( $item->ID, '_megamenu-child-img-id', true );
      // Get the image src
      $img_src = wp_get_attachment_image_src( $img_id, 'full' );

      // For convenience, see if the array is valid
      $have_img = is_array( $img_src );
    
      ?>
       <div class="description description-wide jt-bg-image-upload-wrapper">
        <!-- Your image container, which can be manipulated with js -->
        <div class="custom-img-container">
            <?php if ( $have_img ) : ?>
                <img src="<?php echo $img_src[0] ?>" alt="" style="max-width:100%; width:107px; height:107px;" />
            <?php endif; ?>
        </div>

            <!-- Your add & remove image links -->
            <p class="hide-if-no-js">
                <a class="upload-custom-img <?php if ( $have_img  ) { echo 'hidden'; } ?>" 
                   href="<?php echo $upload_link ?>">
                    <?php _e('Set custom image') ?>
                </a>
                <a class="delete-custom-img <?php if ( ! $have_img  ) { echo 'hidden'; } ?>" 
                  href="#">
                    <?php _e('Remove this image') ?>
                </a>
            </p>

        <!-- A hidden input to set and post the chosen image id -->
        <input class="megamenu-child-img-id" name="megamenu-child-img-id[<?php echo $item->ID; ?>]" type="hidden" value="<?php echo esc_attr( $img_id ); ?>" />
    </div>
    <?php 
  endif;
}

add_action('wp_nav_menu_item_custom_fields', 'megamenu_image_field', 10, 4);

function save_megamenu_image_field( $menu_id, $menu_item_db_id, $menu_item_args ) {
  if ( defined( 'DOING_AJAX' ) && DOING_AJAX ) {
    return;
  }

  check_admin_referer( 'update-nav_menu', 'update-nav-menu-nonce' );

  if( isset($_POST['megamenu-child-img-id']) && !empty($_POST['megamenu-child-img-id'])  ){
    
    $value = $_POST['megamenu-child-img-id'][$menu_item_db_id] ?? null;
    if( !empty($value) ){
      update_post_meta($menu_item_db_id, '_megamenu-child-img-id', $value );
    }else{
      delete_post_meta($menu_item_db_id, '_megamenu-child-img-id' );
    }
  }
 

   
    
}
add_action( 'wp_update_nav_menu_item', 'save_megamenu_image_field', 10, 3 );

function megamenu_divider_field( $id, $item, $depth, $args ) {
  $parent_id = $item->menu_item_parent;
  $mega_menu_parent_value = get_post_meta( $parent_id, '_menu_item_megamenu_parent', true );
  if( $depth === 1 && isset($mega_menu_parent_value) && $mega_menu_parent_value == 1) :

  $mega_menu_value = get_post_meta( $item->ID, '_menu_item_megamenu_divider', true );
  $input_id        = 'megamenu_divider_field[' . $item->ID . ']';
  $input_name      = 'megamenu_divider_field[' . $item->ID . ']'; 

  ?>
  <p class="description description-wide">
    <label for="<?php echo esc_attr( $input_id ); ?>"><input type="checkbox" id="<?php echo esc_attr( $input_id ); ?>" name="<?php echo esc_attr( $input_name ) ?>" value="1" <?php echo ( $mega_menu_value == 1 ) ? 'checked="checked"' : ''; ?>>Start New Section</label>
  </p>
  <?php 
  endif;
}
add_action('wp_nav_menu_item_custom_fields', 'megamenu_divider_field', 10, 4);

function save_megamenu_divider_field( $menu_id, $menu_item_db_id ) {
 // Sanitize.
 if ( ! empty( $_POST[ 'megamenu_divider_field' ][ $menu_item_db_id ] ) ) {
    $value = $_POST[ 'megamenu_divider_field' ][ $menu_item_db_id ];
  } else {
    $value = null;
  }

  if ( ! is_null( $value ) ) {
    update_post_meta( $menu_item_db_id, '_menu_item_megamenu_divider', $value );
  } else {
    delete_post_meta( $menu_item_db_id, '_menu_item_megamenu_divider' );
  }

}
add_action( 'wp_update_nav_menu_item', 'save_megamenu_divider_field', 10, 2 );

 
/**
 * 
 * Adding Searchbox to top menu
 * @since 1.0.0
*/

add_filter( 'wp_nav_menu_items','add_search_box', 10, 2 );

function add_search_box( $items, $args ) {
    if( $args->theme_location == 'topbar_menu' ) :
      $items .= '<li class="menu-item search-item">' . get_search_form( false ) . '</li>';
    endif;

    return $items;
}

if( ! function_exists( 'vp_display_topbar') ) {
  /**
   * Display the top bar
   * 
   * @since 1.0.0
   */
  function vp_display_topbar() {
    // $display_topbar = get_theme_mod('vp_display_topbar', true);
    // if( $display_topbar ) {
    //    get_template_part('template-parts/header/topbar/layout');
    // }
    get_template_part('template-parts/header/topbar/layout');
  }

  add_action( 'vp_top_bar', 'vp_display_topbar');
}

if( ! function_exists( 'vp_display_logo') ) {
  /**
   * Display the logo
   * 
   * @since 1.0.0
   */
  function vp_display_logo() {
    
    $logo_url = get_theme_mod( 'vp_header_logo' );
    $attachment_id = attachment_url_to_postid( $logo_url );
    if( $attachment_id ) : 
      $attachment_src   = wp_get_attachment_image_src( $attachment_id, 'full' );
      $attachment_alt   = get_post_meta( $attachment_id, '_wp_attachment_image_alt', true );
      $attachment_title = get_post_field( 'post_title', $attachment_id );
      ?>
      <div id="logo">
        <a href="<?php echo esc_url( home_url('/') ); ?>" rel="home" class="site-logo">
            <img width="228" height="45" src="<?php echo esc_url( $attachment_src[0] ); ?>" alt="<?php echo esc_attr( $attachment_alt ); ?>" title="<?php echo esc_attr( $attachment_title ); ?>" />
        </a>
      </div>
    <?php 
    else: 
    ?>
    <div id="logo">
      <h2>Logo Here</h2>
    </div>
    <?php 
    endif;
  }

  add_action( 'vp_logo', 'vp_display_logo');
}

/**
 * 
 * Mega Menu
 */
if( ! function_exists( 'vp_display_megamenu') ) {
  /**
   * Display the top bar
   * 
   * @since 1.0.0
   */
  function vp_display_megamenu() {
    get_template_part('template-parts/header/megamenu/layout');
  }

  add_action( 'vp_mega_menu', 'vp_display_megamenu');
}