<?php 

/**
 * Custom Theme Customizer
*/

/**
 * Add to array for more just standard ones here
 */
function customizer_social_media_array() {
    $social_sites = [
        'twitter',
        'facebook',
        'youtube',
        'instagram',
        'email'
    ];

    return $social_sites;
}

function social_media_icons() {
    $social_sites = customizer_social_media_array();

    foreach( $social_sites as $social_site ) :
        if( strlen( get_theme_mod( $social_site) ) > 0 ) {
            $active_sites[] = $social_site;
        }
    endforeach;

    //HTML IF you need to change
    if( ! empty( $active_sites ) ) {
        echo "<ul class='social-media-icons'>";
            foreach( $active_sites as $active_site ) :
                $class = 'fa fa-' . $active_site;
                if ( $active_site == 'email' ) {
                    ?>
                <li>
                    <a class="email" target="_blank" href="mailto:<?php echo antispambot( is_email( get_theme_mod( $active_site ) ) ); ?>">
                        <i class="fa fa-envelope" title="<?php _e('email icon', 'visionpoint'); ?>"></i>
                    </a>
                </li>
                    <?php 
                } else{
                    ?>
                    <li>
                        <a class="<?php echo $active_site; ?>" target="_blank" href="<?php echo esc_url( get_theme_mod( $active_site) ); ?>">
                            <i class="<?php echo esc_attr( $class ); ?>" title="<?php printf( __('%s icon', 'visionpoint'), $active_site ); ?>"></i>
                        </a>
                    </li>
                    <?php 
                }
            endforeach;
        echo "</ul>";
    }
}

function customizer_social_media( $wp_customize ) {

    $wp_customize->add_section( 'social_settings', 
        array(
            'title'    => __('Social Media Icons', 'visionpoint'),
            'priority' => 35,
        )
    );

    $social_sites = customizer_social_media_array();
    $priority = 5;

    foreach( $social_sites as $social_site ) :
        $wp_customize->add_setting( "$social_site",
            array(
                'type'       => 'theme_mod',
                'capability' => 'edit_theme_options'
            )
        );

        $wp_customize->add_control( $social_site, 
            array(
                'label'    => __( "$social_site url:", 'visionpoint'),
                'section'  => 'social_settings',
                'type'     => 'text',
                'priority' => $priority
            )
        );

        $priority = $priority + 5;
    endforeach;
}

add_action('customize_register', 'customizer_social_media');


function enqueue_slick_carousel() {
    wp_enqueue_style( 'slick-carousel-css', 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css' );
    wp_enqueue_script( 'jquery' );
    wp_enqueue_script( 'slick-carousel-js', 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js', array( 'jquery' ), '1.8.1', true );
}
add_action( 'wp_enqueue_scripts', 'enqueue_slick_carousel' );


function far_disable_copy() { ?>

  <script>
     jQuery(document).ready(function() {
    var $carouselSync1 = jQuery('.carousel-sync-1');
    var $carouselSync2 = jQuery('.carousel-sync-2');
    var $indexIndicator = jQuery('.index-indicator');

    function initCarousels() {
      $carouselSync1.slick({
        slidesToShow: 1,
        arrows: false, 
        // dots: true,
        asNavFor: '.carousel-sync-2', // Link this carousel to the second carousel
        // Add any other options or settings for the first carousel as needed
      });

      $carouselSync2.slick({
        slidesToShow: 1,
        
        dots: true,
        asNavFor: '.carousel-sync-1', // Link this carousel to the first carousel
        // Add any other options or settings for the second carousel as needed
      });
    }

    initCarousels();

    // Reinitialize carousels when window is resized (if needed)
    jQuery(window).on('resize', function() {
      $carouselSync1.slick('unslick');
      $carouselSync2.slick('unslick');
      initCarousels();
    });

    function updateIndexIndicator(currentSlide, totalSlides) {
      $indexIndicator.text(currentSlide + '/' + totalSlides);
    }

    // Initialize index indicator on page load
    updateIndexIndicator(1, $carouselSync2.slick('getSlick').slideCount);

    // Update index indicator when the carousel is changed
    $carouselSync2.on('afterChange', function(event, slick, currentSlide) {
      var totalSlides = slick.slideCount;
      var currentIndex = currentSlide + 1;
      updateIndexIndicator(currentIndex, totalSlides);
    });

    // Update index indicator when next/previous buttons are clicked
    $carouselSync2.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
      var totalSlides = slick.slideCount;
      var nextIndex = nextSlide + 1;
      updateIndexIndicator(nextIndex, totalSlides);
    });
   
  });
    jQuery(document).ready(function(){
      jQuery('.carousel').slick({
      slidesToShow: 1,
      dots:true
      });
      
    });

    var slickInitialized = false; // Flag to track Slick initialization
  
  function toggleSlick(element) {
    var currentIndex = jQuery(element).index('.inner-div');
    if (slickInitialized) {
      jQuery('.carousel12').slick('unslick');
     
      slickInitialized = false;
    } else {
      jQuery('.carousel12').slick({
        // Slick options and settings
      });

      jQuery('.carousel12').slick('slickGoTo', currentIndex,true);
      slickInitialized = true;
    }
  }
    jQuery(document).ready(function(){
      jQuery('.carousel_loaction').slick({
      slidesToShow: 1,
      dots:false
    });

    jQuery('.slider-single').slick({
 	slidesToShow: 1,
 	slidesToScroll: 1,
 	arrows: true,
 	fade: false,
 	adaptiveHeight: true,
 	infinite: false,
	useTransform: true,
 	speed: 400,
 	cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
 });

 jQuery('.slider-nav')
 	.on('init', function(event, slick) {
    jQuery('.slider-nav .slick-slide.slick-current').addClass('is-active');
 	})
 	.slick({
 		slidesToShow: 3,
 		slidesToScroll: 3,
 		dots: false,
 		focusOnSelect: false,
 		infinite: false,
 		responsive: [{
 			breakpoint: 1024,
 			settings: {
 				slidesToShow: 5,
 				slidesToScroll: 5,
 			}
 		}, {
 			breakpoint: 640,
 			settings: {
 				slidesToShow: 4,
 				slidesToScroll: 4,
			}
 		}, {
 			breakpoint: 420,
 			settings: {
 				slidesToShow: 3,
 				slidesToScroll: 3,
		}
 		}]
 	});

   jQuery('.slider-single').on('afterChange', function(event, slick, currentSlide) {
  jQuery('.slider-nav').slick('slickGoTo', currentSlide);
 	var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
 	jQuery('.slider-nav .slick-slide.is-active').removeClass('is-active');
 	jQuery(currrentNavSlideElem).addClass('is-active');
 });

 jQuery('.slider-nav').on('click', '.slick-slide', function(event) {
 	event.preventDefault();
 	var goToSingleSlide = jQuery(this).data('slick-index');

 	jQuery('.slider-single').slick('slickGoTo', goToSingleSlide);
 });


 jQuery('.slick-slide').click(function(){ 
  
  


  if (jQuery('.slider-single').is(':hidden')) {
    // If the slider-single is hidden, show it with slideDown animation
    jQuery('.slider-single').fadeIn(500);
    
    jQuery('.heading').fadeOut(500);
    jQuery('.slider-nav').hide();
  } else {
    // If the slider-single is visible, hide it with slideUp animation
    jQuery('.slider-single').fadeOut(500);
    jQuery('.heading').fadeIn(500);
    jQuery('.slider-nav').show();

  }

});

    });


jQuery(document).ready(function($) {
  // Show the first tab on page load
  $('.tabcontent').hide();
  $('.tabcontent#tab-0').show();
  $('.tabs .tablink:first').addClass('active');

  // Handle tab click event
  $('.tabs .tablink').click(function() {
    var tabId = $(this).attr('data-tab');
    $('.tabcontent').hide();
    $('.tabcontent#' + tabId).show();
    $('.tabs .tablink').removeClass('active');
    $(this).addClass('active');
  });


});





jQuery('.accordion').click(function(){
  jQuery(this).next('.panel').slideToggle();
});
jQuery('.expand-all-button').click(function(){
    var panels = jQuery('.panel');
    var isOpen = panels.first().is(':visible');

    if (isOpen) {
      panels.slideUp();
    } else {
      panels.slideDown();
    }
});





var imgurlOne = jQuery('.wp-block-blocks-we li:first-child a').attr('data-id');
jQuery('.img-main.img1').attr('src', imgurlOne).show();
jQuery('.wp-block-blocks-we li a').hover(function() {
  var imgurlOne = jQuery('.wp-block-blocks-we li:first-child a').attr('data-id');
  var imgurl = jQuery(this).attr('data-id');

  jQuery('.img-main.img1').attr('src', imgurl).show();
}, function() {
  jQuery('.img-main.img1').attr('src', imgurlOne).show();
});

var imgurlOne = jQuery('.our-facilities-list-items li:first-child a').attr('data-id');
jQuery('.img-main.img1').attr('src', imgurlOne).show();
jQuery('.our-facilities-list-items li a').hover(function() {
  var imgurlOne = jQuery('.our-facilities-list-items li:first-child a').attr('data-id');
  var imgurl = jQuery(this).attr('data-id');
  jQuery('.img-main.img1').attr('src', imgurl).show();
}, function() {
  jQuery('.img-main.img1').attr('src', imgurlOne).show();
});


jQuery('.drop-down').click(function() {
    var $this = jQuery(this);
    $this.next('.in-this-section ul .drop-down ul').toggle();
    $this.toggleClass('active');
    $this.find('i').toggleClass('arrow-down');
    //jQuery(this+'.active').children('ul').show();
    if ($this.hasClass('active')) {
        $this.children('ul').show();
    } else {
        $this.children('ul').hide();
    }
  });



// news tabs
jQuery('#tabs-nav li:first-child').addClass('active');
jQuery('.tab-content').hide();
jQuery('.tab-content:first').show();

// Click function
jQuery('#tabs-nav li').click(function(){
  jQuery('#tabs-nav li').removeClass('active');
  jQuery(this).addClass('active');
  jQuery('.tab-content').hide();
  
  var activeTab = jQuery(this).find('a').attr('href');
  jQuery(activeTab).fadeIn();
  return false;
});

 // Wait for the document to be fully loaded
 jQuery(document).ready(function($) {
  // Get the .wp-block-blocks-cleveland element
  var categories = $('.wp-block-blocks-cleveland');

  // Define a threshold for when to add the class (e.g., 100 pixels from the div's top)
  var threshold = 200;

  $(window).scroll(function() {
    // Get the current scroll position
    var scrollPosition = $(window).scrollTop();

    // Get the top position of the .wp-block-blocks-cleveland div
    var divTop = categories.offset().top;

    // Calculate the range for adding the class (within the threshold)
    var rangeStart = divTop - threshold;
    var rangeEnd = divTop + categories.height() + threshold;

    // Check if the scroll position is within the defined range
    if (scrollPosition >= rangeStart && scrollPosition <= rangeEnd) {
      // Add the desired class when scrolling near the div
      categories.addClass('animation-on-scroll');
    } else {
      // Remove the class when scrolling is not near the div
      categories.removeClass('animation-on-scroll');
    }
  });
});

jQuery(document).ready(function() {
  var $paragraph = jQuery('.single-news-title');
  var lineHeight = parseInt($paragraph.css('line-height'));
  var actualHeight = $paragraph.height();

  if (actualHeight > lineHeight) {
    jQuery('.posfixed').addClass('two-lines');
  }
});
  </script>
      <?php   
  }
  add_action( 'wp_footer', 'far_disable_copy' );

  // admin footer js add
function my_admin_footer_function() {
  ?>
  <script>
   setTimeout(function(){ 
    jQuery('.drop-down').click(function() {
    var $this = jQuery(this);
    $this.next('.in-this-section ul .drop-down ul').toggle();
    $this.toggleClass('active');
    $this.find('i').toggleClass('arrow-down');
    //jQuery(this+'.active').children('ul').show();
    if ($this.hasClass('active')) {
        $this.children('ul').show();
    } else {
        $this.children('ul').hide();
    }
  });

  jQuery('.in-this-section h4 i').click(function(){ 
 jQuery('.in-this-section ul').toggle(); 
});
  }, 8000);


 

  </script>
  <?php 
  }
  add_action('admin_footer', 'my_admin_footer_function');


//   News Custom Post Type Register 
function custom_post_type_news() {
 
    // Set UI labels for Custom Post Type
        $labels = array(
            'name'                => _x( 'News', 'Post Type General Name', 'twentytwenty' ),
            'singular_name'       => _x( 'News', 'Post Type Singular Name', 'twentytwenty' ),
            'menu_name'           => __( 'News', 'twentytwenty' ),
            'parent_item_colon'   => __( 'Parent News', 'twentytwenty' ),
            'all_items'           => __( 'All News', 'twentytwenty' ),
            'view_item'           => __( 'View News', 'twentytwenty' ),
            'add_new_item'        => __( 'Add New News', 'twentytwenty' ),
            'add_new'             => __( 'Add New', 'twentytwenty' ),
            'edit_item'           => __( 'Edit News', 'twentytwenty' ),
            'update_item'         => __( 'Update News', 'twentytwenty' ),
            'search_items'        => __( 'Search News', 'twentytwenty' ),
            'not_found'           => __( 'Not Found', 'twentytwenty' ),
            'not_found_in_trash'  => __( 'Not found in Trash', 'twentytwenty' ),
        );
         
    // Set other options for Custom Post Type
         
        $args = array(
            'label'               => __( 'News', 'twentytwenty' ),
            'description'         => __( 'News and reviews', 'twentytwenty' ),
            'labels'              => $labels,
            // Features this CPT supports in Post Editor
            'supports'            => array( 'title', 'editor', 'excerpt', 'author', 'thumbnail', 'comments', 'revisions', 'custom-fields', ),
            // You can associate this CPT with a taxonomy or custom taxonomy. 
            'taxonomies'          => array( 'genres' ),
            /* A hierarchical CPT is like Pages and can have
            * Parent and child items. A non-hierarchical CPT
            * is like Posts.
            */ 
            'hierarchical'        => true,
            'public'              => true,
            'show_ui'             => true,
            'show_in_menu'        => true,
            'show_in_nav_menus'   => true,
            'show_in_admin_bar'   => true,
            'menu_position'       => 5,
            'can_export'          => true,
            'has_archive'         => true,
            'exclude_from_search' => false,
            'publicly_queryable'  => true,
            'capability_type'     => 'post',
            'show_in_rest' => true,
            'taxonomies'          => array( 'category' ),
     
        );
         
        // Registering your Custom Post Type
        register_post_type( 'news', $args );
     
    }
     
    add_action( 'init', 'custom_post_type_news', 0 );
//   News End


function custom_news_archive_query($query) {
    if ($query->is_main_query() && is_post_type_archive('news')) {
        $query->set('posts_per_page', 3);
    }
}
add_action('pre_get_posts', 'custom_news_archive_query');


//   Register Featured Image
function theme_support_featured_images() {
    add_theme_support('post-thumbnails');
}

add_action('after_setup_theme', 'theme_support_featured_images');
//   End 

function render_latest_custom_posts_block() {
    $latest_posts = get_posts(array(
      'post_type' => 'news',
      'posts_per_page' => 3,
      'orderby' => 'date',
      'order' => 'DESC',
    ));
  
    $output = '';
  
    if (!empty($latest_posts)) {
      $output .= '<div class="news-li"><ul>';
  
      foreach ($latest_posts as $post) {
        $content = get_the_content($post->ID);
      $content = wp_trim_words($content, 25);
        setup_postdata($post);
        $output .= '<li>';
        $output .= '<h6><a href="' . get_permalink($post->ID) . '">' . get_the_title($post->ID) . '</a></h6>';
        $output .= '<p>'.$content.'</p>';
        $output .= '</li>';
      }
  
      $output .= '</ul></div>';
      wp_reset_postdata();
    }
  
    return $output;
  }
  
  function register_latest_custom_posts_block() {
    register_block_type('blocks/latest-custom-posts', array(
      'render_callback' => 'render_latest_custom_posts_block',
    ));
  }
  
  add_action('init', 'register_latest_custom_posts_block');



//  Latest Programs 
// Latest Programs Block 
function render_latest_programs_block() {
    $latest_posts = get_posts(array(
      'post_type' => 'programs',
      'posts_per_page' => 4,
      'orderby' => 'date',
      'order' => 'DESC',
    ));
  
    $output = '';
  
    if (!empty($latest_posts)) {
        $output .= '<div class="news-li"><ul>';
      
        foreach ($latest_posts as $post) {
          setup_postdata($post); // Call setup_postdata before accessing post data
          
          $content = get_the_content();
          $content = wp_trim_words($content, 20);

          $title = get_the_title($post->ID);
          $title = wp_trim_words($title, 3);
          
          $output .= '<li>';
          $output .= '<h2><a  href="' . get_permalink($post->ID) . '">' . $title . '</a></h2>';
          $output .= '<p>'.$content.'</p>';
          $output .= '<a class="cta-one anchorr" href="'.get_permalink($post->ID).'">View More</a>';
          $output .= '</li>';
        }
      
        $output .= '</ul></div>';
        wp_reset_postdata();
      }
  
    return $output;
  }
  
function register_latest_program_block() {
    register_block_type('blocks/latest-programs', array(
      'render_callback' => 'render_latest_programs_block',
    ));
  }
  
  add_action('init', 'register_latest_program_block');
//  Latest Program End 


function get_breadcrumb() {
  $output = '<div class="get_breadcrumb">';
  $output .= '<a href="'.home_url().'" rel="nofollow"><i class="fa fa-chevron-left" style="padding-right:4px"></i>Home</a>';
  if (is_category() || is_single()) {
      $output .= "&nbsp;&nbsp;/&nbsp; ";
      if (is_singular('news')) {
         
          $archive_url = get_post_type_archive_link('news');
          $output .= '<a href="' . $archive_url . '">News</a>';
      }else{
      $output .=get_the_category_list(' &bull; ');
      }
          if (is_single()) {
              $output .= "&nbsp;&nbsp;/ &nbsp;";

              $output .= get_the_title();
          }
  } elseif (is_page()) {
      $output .= "&nbsp;&nbsp;/ &nbsp;";

      $output .= get_the_title();
  } elseif (is_search()) {
      $output .= "&nbsp;&nbsp; / &nbsp;  Search Results for... ";
      $output .= '"<em>';
      $output .=get_search_query();
      $output .= '</em>"';
  }
  $output.='</div>';
  return $output;
}

function register_breadcrumbs() {
  register_block_type('blocks/breadcrumbs', array(
    'render_callback' => 'get_breadcrumb',
  ));
}
add_action('init', 'register_breadcrumbs');

// featured post
function render_featured_post_block() {
  $latest_posts = get_posts(array(
    'post_type' => 'news',
    'posts_per_page' => 3,
    'orderby' => 'date',
    'order' => 'DESC',
  ));

  $output = '';

  if (!empty($latest_posts)) {
    $output .='<div class="featured-post"><div class="row  text-center"><div class="col-md-12"><h2>Featured Post</h2></div> </div>';



      $output .= '<div class="row">';
    
      foreach ($latest_posts as $post) {
        setup_postdata($post); // Call setup_postdata before accessing post data
        
        $content = get_the_content();
        $content = wp_trim_words($content, 20);

        $title = get_the_title($post->ID);
        $title = wp_trim_words($title, 10);
        $post_date = get_the_date('F j, Y');
        
        $output .= '<div class="col-md-4">';
        $output .= '<p>' . $post_date . '</p>';
        $output .= '<h5><a href="' . get_permalink($post->ID) . '">' . $title . '</a></h5>';
        $output .= '</div>';
      }
    
      $output .= '</div></div>';
      wp_reset_postdata();
    }

  return $output;
}

function register_featured_post_block() {
  register_block_type('blocks/featured-post', array(
    'render_callback' => 'render_featured_post_block',
  ));
}

add_action('init', 'register_featured_post_block');


// search 
add_action('wp_ajax_data_fetch' , 'data_fetch');
add_action('wp_ajax_nopriv_data_fetch','data_fetch');
function data_fetch(){

  $category =  isset($_POST['categroy']) ?  $_POST['categroy'] : '';
  $curPage = isset($_POST['page']) ?  $_POST['page'] : 1;
  $per_page = 4;
  
  $previous_btn = true;
  $next_btn = true;
  $first_btn = true;
  $last_btn = true;
  $start = $page * $per_page;



$the_query = new WP_Query( 
  array( 'posts_per_page' => 4,
          's' => esc_attr( $_POST['keyword'] ),
          'post_type' => 'news' ,
          'category_name'  => $category ,
          'paged'=> $curPage
          ) );
    if( $the_query->have_posts() ) :
      ?>
      <ul class="news-flex-container"><?php

        while( $the_query->have_posts() ): $the_query->the_post(); ?>
  
  <li>
                    <div class="news-flex-body">
                    <?php if (has_post_thumbnail()) : ?>
                        <div class="entry-thumbnail">
                            <a href="<?php echo esc_url( post_permalink() ); ?> ?>">
                                <?php the_post_thumbnail(); ?>
                            </a>
                        </div>
                    <?php else : ?>
                        <div class="entry-thumbnail">
                            <a href="<?php  echo esc_url( post_permalink() ); ?>">
                                <img src="<?php echo site_url() . '/wp-content/uploads/2023/07/fire_pre_sm-1024x683-1.jpg'; ?>" alt="Cleveland State University">
                            </a>
                        </div>
                    <?php endif; ?>
                    <p class="news-flex-date">
                        <?php echo get_the_date('F j, Y'); ?>
                    </p>
                    <p class="news-flex-title">
                        <a href="<?php echo esc_url( post_permalink() ); ?> ?>"><?php
                           $content_title = get_the_title();
                            $content_title = wp_trim_words($content_title, 5);
                          ?>
                            <?php  echo $content_title; ?></a></a>
                    </p>
                    <p class="news-flex-exerpt">
                        <?php
                           $content = get_the_excerpt();
                            $content = wp_trim_words($content, 20);
                          ?>
                            <?php  echo $content;  ?>
                    </p>

                    </div>
                </li>

        <?php endwhile;
        ?>
        </ul>
	<div class="row">
<div class="col">
	<div class="d-block my-5">
	<nav class="pagination-wrapper"  aria-label="Pagination Navigation">

	<?php
  
  


	$result = "";
	$count = $the_query->found_posts;
	$ppp = 2;
	$total = $the_query->max_num_pages;
	$end = $ppp * $curPage;
	$start = $end - $ppp + 1;




   // This is where the magic happens
   $no_of_paginations = ceil($count / $per_page);

   if ($curPage >= 7) {
	   $start_loop = $curPage - 3;
	   if ($no_of_paginations > $curPage + 3)
		   $end_loop = $curPage + 3;
	   else if ($curPage <= $no_of_paginations && $curPage > $no_of_paginations - 6) {
		   $start_loop = $no_of_paginations - 6;
		   $end_loop = $no_of_paginations;
	   } else {
		   $end_loop = $no_of_paginations;
	   }
   } else {
	   $start_loop = 1;
	   if ($no_of_paginations > 7)
		   $end_loop = 7;
	   else
		   $end_loop = $no_of_paginations;
   }
  
   // Pagination Buttons logic    
   $result .= "
   <div class='pagination bx-unive-pagination'>
	   <ul class='pagination'><li>";

   if ($first_btn && $curPage > 1) {
	   $result .= "<a p='1' class='prev page-numbers   my'><span></span></a>";
   } else if ($first_btn) {
	  //  $result .= "<a p='1' class='prev page-numbers my current'><span></span></a>";
   }

   for ($i = $start_loop; $i <= $end_loop; $i++) {

	   if ($curPage == $i)
		   $result .= "<a p='$i' class='page-numbers current my'>{$i}</a>";
	   else
		   $result .= "<a p='$i'  class='page-numbers my'>{$i}</a>";
   }
  


   if ($last_btn && $curPage < $no_of_paginations) {
	   $result .= "<a p='$no_of_paginations' class='next page-numbers  my'><span></span></a>";
   } else if ($last_btn) {
	  //  $result .= "<a p='$no_of_paginations' class='next page-numbers current my '><span></span></a>";
   }

	$result .= $results_summary_html;

   $result . "</li></ul></div>";
	echo $result;
?>
	</nav>
	</div>
</div><!-- end of col -->
  </div><!-- end of row -->
  <?php
		wp_reset_postdata();  




	else: 
		echo '<h3>No Results Found</h3>';
    endif;
?>
    <?php
    die();
}
// add the ajax fetch js
add_action( 'wp_footer', 'ajax_fetch' );
function ajax_fetch() {
?>
<script type="text/javascript">
function fetchResults(){

   var activeLi = jQuery('li.active'); 
    var categroy  =  '';
 if (activeLi.length > 0) {
    var categroy = activeLi.find('a.category').data('id');
  }    
	var keyword = jQuery('#searchInput').val();
		jQuery.ajax({
			url: '<?php echo admin_url('admin-ajax.php'); ?>',
			type: 'post',
			data: { action: 'data_fetch', keyword: keyword ,'categroy':categroy },
			success: function(data) {
				jQuery('#datafetch').html( data );
			}
		});    

}
</script>

<?php
}
// end
//  Design of New  News Post
function block_templates( $args, $post_type ) {

	if( 'news' === $post_type ) {
		$args[ 'template' ] = [
      array(
        'core/columns',
        array(),
        array(
            array(
                'core/column',
                array(
                    'width' => '5%',
                ),
                array(
                    array('blocks/social'), // You can add your social block settings here
                ),
            ),
            array(
                'core/column',
                array(
                    'width' => '95%',
                ),
                array(
                    array(
                        'core/heading', // Use the core heading block
                        array(
                            'level' => 2, // Customize the heading level (1, 2, 3, 4, 5, 6)
                            'content' => 'H2 Roboto Slab 42', // Customize the heading text
                        ),
                    ),
                    array(
                        'core/paragraph', // Use the core paragraph block
                        array('content'=>    'lorem ipsum se ete due tere mono polo lorem ipsum se ete due tere mono polo lorem ipsum se ete due tere mono polo lorem ipsum se ete due tere mono pololorem ipsum se ete due tere mono polo lorem ipsum se ete due tere mono pololorem ipsum se ete due tere mono polo lorem ipsum se ete due tere mono pololorem ipsum se ete due tere mono polo lorem ipsum se ete due tere mono pololorem ipsum se ete due tere mono polo lorem ipsum se ete due tere mono pololorem ipsum se ete due tere mono polo lorem ipsum se ete due tere mono pololorem ipsum se ete due tere mono polo lorem ipsum se ete due tere mono pololorem ipsum se ete due tere mono polo lorem ipsum se ete due tere mono polo'),
                    
                    ),
                    array(
                      'core/paragraph', // Use the core paragraph block
                      array('content'=>    'lorem ipsum se ete due tere mono polo lorem ipsum se ete due tere mono polo lorem ipsum se ete due tere mono polo lorem ipsum se ete due tere mono pololorem ipsum se ete due tere mono polo lorem ipsum se ete due tere mono pololorem ipsum se ete due tere mono polo lorem ipsum se ete due tere mono pololorem ipsum se ete due tere mono polo lorem ipsum se ete due tere mono pololorem ipsum se ete due tere mono polo lorem ipsum se ete due tere mono pololorem ipsum se ete due tere mono polo lorem ipsum se ete due tere mono pololorem ipsum se ete due tere mono polo lorem ipsum se ete due tere mono pololorem ipsum se ete due tere mono polo lorem ipsum se ete due tere mono pololorem ipsum se ete due tere mono polo lorem ipsum se ete due tere mono pololorem ipsum se ete due tere mono polo lorem ipsum se ete due tere mono polo'),
                  
                  ),
                  array(
                    'core/heading', // Use the core heading block
                    array(
                        'level' => 3, // Customize the heading level (1, 2, 3, 4, 5, 6)
                        'content' => 'H2 Roboto Slab ', // Customize the heading text
                    ),
                  ),
                  // Start Mid Column 
                  array(
                    'core/columns',
                    array(),
                    array(
                          array(
                                'core/column',
                                  array(
                                      'width' => '50%',
                                  ),
                                  array(
                                        array(
                                          'core/video', // Use the core video block
                                          array(
                                              // Replace with your video's ID or URL
                                          ),
                                      ), // You can add your social block settings here
                                  ),
                                  ),
                                  array(
                                    'core/column',
                                      array(
                                          'width' => '50%',
                                      ),
                                      array(
                                        array(
                                          'core/paragraph', // Use the core paragraph block
                                          array('content'=>    'lorem ipsum se ete due tere mono polo lorem ipsum se ete due tere mono polo lorem ipsum se ete due tere mono polo lorem ipsum se ete due tere mono pololorem ipsum se ete due tere mono polo lorem ipsum se ete due tere mono pololorem ipsum se ete due tere mono polo lorem ipsum se ete due tere mono pololorem ipsum se ete due tere mono polo lorem ipsum se ete due tere mono pololorem ipsum se ete due tere mono polo lorem ipsum se ete due tere mono pololorem ipsum se ete due tere mono polo lorem ipsum se ete due tere mono pololorem ipsum se ete '),
                                      
                                      ),
                                  ),
                              ),
                          )
                    ),

                    // Eend Mid Column
                    array(
                      'core/heading', // Use the core heading block
                      array(
                          'level' => 4, // Customize the heading level (1, 2, 3, 4, 5, 6)
                          'content' => 'H2 Roboto Slab ', // Customize the heading text
                      ),
                    ),
                    array(
                      'core/paragraph', // Use the core paragraph block
                      array('content'=>    'lorem ipsum se ete due tere mono polo lorem ipsum se ete due tere mono polo lorem ipsum se ete due tere mono polo lorem ipsum se ete due tere mono pololorem ipsum se ete due tere mono polo lorem ipsum se ete due tere mono pololorem ipsum se ete due tere mono polo lorem ipsum se ete due tere mono pololorem ipsum se ete due tere mono polo lorem ipsum se ete due tere mono pololorem ipsum se ete due tere mono polo lorem ipsum se ete due tere mono pololorem ipsum se ete due tere mono polo lorem ipsum se ete due tere mono pololorem ipsum se ete due tere mono polo lorem ipsum se ete due tere mono pololorem ipsum se ete due tere mono polo lorem ipsum se ete due tere mono pololorem ipsum se ete due tere mono polo lorem ipsum se ete due tere mono pololorem ipsum se ete due tere mono polo lorem ipsum se ete due tere mono polo'),
                  
                  ),
                  array(
                    'core/paragraph', // Use the core paragraph block
                    array('content'=>    'lorem ipsum se ete due tere mono polo lorem ipsum se ete due tere mono polo lorem ipsum se ete due tere mono polo lorem ipsum se ete due tere mono pololorem ipsum se ete due tere mono polo lorem ipsum se ete due tere mono pololorem ipsum se ete due tere mono polo lorem ipsum se ete due tere mono pololorem ipsum se ete due tere mono polo lorem ipsum se ete due tere mono pololorem ipsum se ete due tere mono polo lorem ipsum se ete due tere mono pololorem ipsum se ete due tere mono polo lorem ipsum se ete due tere mono pololorem ipsum se ete due tere mono polo lorem ipsum se ete due tere mono pololorem ipsum se ete due tere mono polo lorem ipsum se ete due tere mono pololorem ipsum se ete due tere mono polo lorem ipsum se ete due tere mono pololorem ipsum se ete due tere mono polo lorem ipsum se ete due tere mono polo'),
                
                ),

               
                ),
            ),
        )
          ),
         
		];
			 
	}

	return $args;
} 

add_filter( 'register_post_type_args', 'block_templates', 20, 2);


// featured image caption option 
// Add Featured Image Caption Option
function custom_featured_image_caption($post_id) {
  $featured_image_caption = sanitize_text_field($_POST['featured_image_caption']);
  update_post_meta($post_id, '_featured_image_caption', $featured_image_caption);
}

function add_featured_image_caption_meta_box() {
  add_meta_box(
      'featured-image-caption',
      'Featured Image Caption',
      'render_featured_image_caption_meta_box',
      'news',  // Change this to the post type where you want the caption option
      'side', // Change this to 'normal' to display below the post editor
      'high'
  );
}

function render_featured_image_caption_meta_box($post) {
  $featured_image_caption = get_post_meta($post->ID, '_featured_image_caption', true);
  wp_nonce_field('featured_image_caption_nonce', 'featured_image_caption_nonce');
  ?>
  <p>
      <label for="featured_image_caption">Caption for Featured Image:</label>
      <input type="text" id="featured_image_caption" name="featured_image_caption" value="<?php echo esc_attr($featured_image_caption); ?>" style="width: 100%;">
  </p>
  <?php
}

function save_featured_image_caption_meta_box($post_id) {
  if (!isset($_POST['featured_image_caption_nonce']) || !wp_verify_nonce($_POST['featured_image_caption_nonce'], 'featured_image_caption_nonce')) {
      return $post_id;
  }

  if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
      return $post_id;
  }

  if ('page' == $_POST['post_type']) {
      if (!current_user_can('edit_page', $post_id)) {
          return $post_id;
      }
  } else {
      if (!current_user_can('edit_post', $post_id)) {
          return $post_id;
      }
  }

  custom_featured_image_caption($post_id);
}

add_action('add_meta_boxes', 'add_featured_image_caption_meta_box');
add_action('save_post', 'save_featured_image_caption_meta_box');

/**
 * PLEASE DO NOT ADD ANYTHING IN HERE UNLESS ITS FOR WP CUSTOMIZER, MOVE IT TO helpers.php
 */