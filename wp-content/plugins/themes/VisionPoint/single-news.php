<?php
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

global $post;
get_header();

if (have_posts()) :
  while (have_posts()) :
    the_post();
    $featured_image = get_the_post_thumbnail_url();
    ?>
    <div class="container">
      <div class="row"><div class="breadcrumb"><?php echo $output;?></div></div></div>
  </div>

    <div class="container np-container-mw-800">
      
      <div class="row">
        
        

        <div class="content-area">
          
        <article class="single-news">
          
          <div class="single-news-header">
            <h1 class="single-news-title"><?php the_title(); ?></h1>
            <div class="single-news-meta">
            <span class="single-news-date"><a href="javascript:void(0)">Campus News</a> |</span>  
            <span class="single-news-date"><?php echo get_the_date(); ?> |</span> 
              <span class="single-news-author"><?php echo get_the_author(); ?></span>
            </div>
          </div>

          
            <div class="main-social verticle main posfixed">
              <ul>
                
                <li><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=<?php echo get_home_url();?>/news/<?php echo $post_slug = $post->post_name; ?>"><span class="fab fa-facebook"></span></a></li>
                <li><a target="_blank" href="https://twitter.com/intent/tweet?url=<?php echo get_home_url();?>/news/<?php echo $post_slug = $post->post_name; ?>"><span class="fab fa-twitter"></span></a></li>
                <li><a target="_blank" href="https://www.linkedin.com/shareArticle?url=<?php echo get_home_url();?>/news/<?php echo $post_slug = $post->post_name; ?>"><span class="fab fa-linkedin"></span></a></li>
              </ul>
            </div>
            

            <?php if ($featured_image) : ?>
              <div class="single-news-image ">
                <img src="<?php echo $featured_image; ?>" style="width:100%;" alt="<?php the_title(); ?>">
                <p><?php echo  $featured_image_caption = get_post_meta(get_the_ID(), '_featured_image_caption', true);?></p>
              </div>
            <?php endif; ?>
            
            <div class="single-news-content">
            
            <div class="">
              <?php the_content(); ?>
            </div>

            <div class="featured-post">
              <div class="row  text-center">
                  <div class="col-md-12">
                    <h2>Featured Post</h2>
                  </div>
              </div>
              <div class="row">

                <?php
                  // Define the custom query for featured posts
                  $args = array(
                      'post_type' => 'news',  // Adjust the post type as needed
                      'posts_per_page' => 3,  // Number of featured posts to display
                      'orderby' => 'date',   // Order by date
                      'order' => 'DESC',
                      
                  );

                  $featured_query = new WP_Query($args);

                  // Check if there are featured posts
                  if ($featured_query->have_posts()) :
                      while ($featured_query->have_posts()) :
                          $featured_query->the_post();
                           $post_date = get_the_date('F j, Y');
                          // Display featured post content here
                          ?>
                  <div class="col-md-4">
                    <p><?php echo $post_date; ?></p>
                    <h5><a href="<?php echo get_the_permalink(get_the_ID());?>"><?php echo get_the_title(); ?></a></h5>
                  </div>
                  <?php
                      endwhile;

                      // Restore the original post data
                      wp_reset_postdata();
                  else :
                      // No featured posts found
                      echo '<p>No featured posts found.</p>';
                  endif;
                  ?>
              </div>
            </div>

          </div>
          </div>
          
          </div>

        </article>

        


        </div>

        

  <?php
  endwhile;
else :
  echo '<p>No news found.</p>';
endif;

get_footer();
?>