<?php
/**
 * Template Name: News Archive
 * Description: Custom template for displaying the news archive.
 */

get_header();
$output = '<div class="get_breadcrumb">';
  $output .= '<a href="'.home_url().'" rel="nofollow"><i class="fa fa-chevron-left" style="padding-right:4px"></i>Home</a>';
  if (is_category() || is_single()) {
      $output .= "&nbsp;&nbsp;/";
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
?>

<div id="primary" class="content-area">
    <main id="main" class="site-main">

      
            <div class="news-archive">
                <div class="container">
                <div class="row"><div class="breadcrumb"><?php echo $output;?>/ News Listing Page</div></div>
                    <div class="row">
                        <h1 class="page-title"><?php post_type_archive_title(); ?></h1>
                    </div>

                </div>

                <div class="container-fluid main-news">
                    <div class="container">
                            <div class="row">
                                <?php
                                 $args = array(
                                    'post_type'     => 'news',
                                    'post_status'   => 'publish',
                                    'order'         => 'ASC',
                                    'posts_per_page' => 1,
                                );
                                
                                $news = get_posts($args);
                                foreach($news as $s){ 
                                   
                                    $image = wp_get_attachment_image_src( get_post_thumbnail_id( $s->ID ),'full' )
                                ?>
                                <div class="col-md-6">
                                    <img src="<?php echo $image[0]; ?>" style="width:100%;"/>
                                    <div class="date"><?php echo get_the_date(); ?> </div>
                                    <h4><a href="<?php echo get_permalink($s->ID);?>"><?php echo $s->post_title; ?></a></h4>
                                    <p><?php  $content = $s->post_content; echo $content = wp_trim_words($content, 35);  ?></p>
                                </div>
                                <?php } ?>

                                <div class="col-md-6">

                                    <?php
                                    $args = array(
                                        'post_type'     => 'news',
                                        'post_status'   => 'publish',
                                        'order'         => 'ASC',
                                        'posts_per_page' => 3,
                                    );
                                    
                                    $newss = get_posts($args);
                                    foreach($newss as $s){ 
                                    
                                        $image = wp_get_attachment_image_src( get_post_thumbnail_id( $s->ID ), 'full' )
                                    ?>

                                    <div class="row news-row">
                                    
                                            <div class="col-md-5 col-6">
                                                <img src="<?php echo $image[0]; ?>" style="width:100%;"/>
                                            </div>
                                            <div class="col-md-7 col-6">    
                                                <div class="date"><?php echo get_the_date(); ?> </div>
                                                <h5><a href="<?php echo get_permalink($s->ID);?>"><?php echo $s->post_title; ?></a></h5>
                                            </div>
                                        
                                    </div>
                                    <?php } ?>

                            </div>
                        </div>
                    </div>
                </div>
                <!-- search  -->
                <div class="main-search">
                    <label>Search</label>
                    <input type="text" placeholder="Search newsroom..." class="form-control feild" onkeypress="fetchResults()" onkeyup="fetchResults()" value="<?php echo get_search_query(); ?>" name="s" id="searchInput" />
                    <button type="submit"><i class="fa fa-search"></i></button>
                                

                                <!-- <form role="search" method="get" id="searchform" action="<?php echo esc_url(home_url('/')); ?>">
                                    <div>
                                        <label for="s">Search News:</label>
                                        <input type="text" class="feild" onkeypress="fetchResults()" onkeyup="fetchResults()" value="<?php echo get_search_query(); ?>" name="s" id="searchInput" />
                                     
                                    </div>
                                </form> -->
                </div>
                <!-- tabs -->
                <div class="container">
                    <!-- <div >

                    </div> -->
                    <p class="news-filters-heading">Filter</p>
                        <div class="categories">
                            <span id="toggleDiv" class="toggle-mobile-btn">Tap to view filters</span>
                            <div id="targetDiv" class="toggle-mobile-filters">
                                <ul class="tabs-nav" id="tabs-nav">
                                    <li><a href="#tab1" class="category" data-id="">View all</a></li>
                                    <?php $categories =  get_categories(array('exclude' => get_cat_ID('Uncategorized')));
                                    if (!empty($categories)) {
                                            
                                    $i = 2;
                                    foreach ($categories as $category) { ?>
                                    <li><a  class="category" data-id="<?php echo $category->slug; ?>"><?php echo $category->name; ?></a></li>
                                    <?php  $i++;} } ?>
                                        
                                </ul> <!-- END tabs-nav -->
                            </div>
                        </div>
                </div>




<?php

$search_query = get_search_query();
  $args='';
if ($search_query) {
    $args = $search_query;
}

$args = array(
    'post_type'      => 'news',
    'post_status'    => 'publish',
    'order'          => 'ASC',
    'posts_per_page' => 4,
    'category_name'  => '',
    's'=> $args,
    'paged'          => get_query_var('paged') ? get_query_var('paged') : 1 // Add this to handle pagination
    
);

$newss = new WP_Query($args);

function limit_words($string, $word_limit)
{
    $words = explode(" ",$string);
    return implode(" ",array_splice($words,0,$word_limit));
}

if ($newss->have_posts()) :  

?>
    <div class="container">
        <div class="row datafetch" id="datafetch">
        <ul class="news-flex-container">
            <?php while ($newss->have_posts()) : $newss->the_post(); ?>
            <li>
                    <div class="news-flex-body">
                    <?php if (has_post_thumbnail()) : ?>
                        <div class="entry-thumbnail">
                            <a href="<?php the_permalink(); ?>">
                                <?php the_post_thumbnail(); ?>
                            </a>
                        </div>
                    <?php else : ?>
                        <div class="entry-thumbnail">
                            <a href="<?php the_permalink(); ?>">
                                <img src="<?php echo site_url() . '/wp-content/uploads/2023/07/fire_pre_sm-1024x683-1.jpg'; ?>" alt="Cleveland State University">
                            </a>
                        </div>
                    <?php endif; ?>
                    <p class="news-flex-date">
                        <?php echo get_the_date('F j, Y'); ?>
                    </p>
                    <p class="news-flex-title">
                        <a href="<?php the_permalink(); ?>"><?php  echo limit_words(get_the_title(),15 );?></a>
                    </p>
                    <p class="news-flex-exerpt">
                        <?php  echo limit_words(get_the_excerpt(),22 );  ?>
                    </p>

                    </div>
                </li>
            <?php endwhile; ?>
                    </ul>

            <div class="pagination">
        <?php
        // Pagination
        $big = 999999999; // Set a big number to avoid conflicts
        $pagination = paginate_links(array(
            'base'      => str_replace($big, '%#%', esc_url(get_pagenum_link($big))),
            'format'    => '?paged=%#%',
            'current'   => max(1, get_query_var('paged')),
            'total'     => $newss->max_num_pages,
            'prev_text' => __('<span></span>'),
            'next_text' => __('<span></span>'),
        ));

         if ($pagination) {
                    echo '<ul>';
                    echo '<li>' . $pagination . '</li>';
                    echo '</ul>';
                }
        ?>
    </div>
        </div>
    </div>

 

<?php else : ?>
    <p><?php _e('No news found.', 'your-theme'); ?></p>
<?php endif; ?>

    </main>
</div>



<?php get_footer(); ?>

<script>
document.addEventListener('DOMContentLoaded', function () {
    var searchInput = document.querySelector('#search-input');
    var searchResults = document.querySelector('#search-results');

    searchInput.addEventListener('keyup', function () {
        var searchText = searchInput.value.trim();

        // Check if the search input is empty or has whitespace
        if (searchText === '') {
            searchResults.style.display = 'none'; // Hide the container
        } else {
            searchResults.style.display = 'block'; // Show the container
        }

        // Perform your search-related actions here
        // You can update the content within the #search-results container as needed
    });
});

</script>
<script>
window.addEventListener('keydown',function(e){if(e.keyIdentifier=='U+000A'||e.keyIdentifier=='Enter'||e.keyCode==13){if(e.target.nodeName=='INPUT'&&e.target.type=='text'){e.preventDefault();return false;}}},true);
</script>
<script>
    jQuery(document).ready(function($) {
        jQuery("body").on('click', '.datafetch .bx-unive-pagination a.my', function(event){

 var activeLi = $('li.active'); 
    var categroy  =  '';
 if (activeLi.length > 0) {
    var categroy = activeLi.find('a.category').data('id');
  }         
            var page = jQuery(this).attr('p');
            if(page == '')
            {
                page = 1;
            }
            var keyword = jQuery('#searchInput').val();
            $.ajax({
            url: '<?php echo admin_url('admin-ajax.php'); ?>',
            type: 'POST',
            data: {
                action: 'data_fetch',
                keyword:keyword,
                'page':page,
                categroy:categroy
            },
            success: function success(data) {
                jQuery('#datafetch').html(data);
            
            }
            });
        });


        jQuery(".category").on('click', function(event){
           
            var categroy  =  jQuery(this).attr('data-id');
            var page = jQuery(this).attr('p');
            if(page == '')
            {
                page = 1;
            }
            var keyword = jQuery('#searchInput').val();
            
            $.ajax({
            url: '<?php echo admin_url('admin-ajax.php'); ?>',
            type: 'POST',
            data: {
                action: 'data_fetch',
                'categroy':categroy,
                keyword:keyword,
                'page':page
            },
            success: function success(data) {
                jQuery('#datafetch').html(data);
            
            }
            });
        });

        jQuery('.form-search').submit(function(e){
            e.preventDefault();
        });
});
</script>