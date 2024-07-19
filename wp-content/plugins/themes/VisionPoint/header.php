<!doctype html>
<html <?php language_attributes(); ?>>

<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="profile" href="https://gmpg.org/xfn/11">

  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?> >
  <a class="screen-reader-text skip-link"  href="#content" title="<?php echo esc_attr( 'Skip to content', 'vp' );  ?>"><?php esc_html('Skip to content', 'vp-theme'); ?></a>
    <div id="wrap" class="site">
      <header id="masthead" class="site-header" role="banner">
        <?php do_action('vp_top_bar'); ?>
        <?php do_action('vp_mega_menu'); ?>
      </header>
      <main id="content" class="site-content" role="main">