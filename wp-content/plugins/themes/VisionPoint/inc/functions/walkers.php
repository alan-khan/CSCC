<?php 
/**
 * Nav Walker Classes for Custom Header menus
*/

// Top Bar Nav Menu Walker
class VP_Walker_Top_Nav_Menu extends Walker_Nav_Menu {
    function start_lvl( &$output, $depth = 0, $args = array() ) {
        $output .= '<ul id="top-bar-sub-menu" class="top-bar-sub-menu submenu">';
    }
    function start_el( &$output, $item, $depth = 0, $args = array(), $id = 0 ) {
       
        $output .= '<li class="' . implode( ' ', $item->classes ) . '">';
        $output .= '<a href="' . $item->url . '">' . $item->title . '</a>';
    }
    function end_el( &$output, $item, $depth = 0, $args = array() ) {
        $output .= '</li>';
    }
    function end_lvl( &$output, $depth = 0, $args = array() ) {
        $output .= '</ul>';
    }
}
//Mega Menu Walker
class VP_Walker_Mega_Menu extends Walker_Nav_Menu {

    public $megaMenuID; // ID of the current mega menu

    public $count;

    public function __construct()
    {
        $this->megaMenuID = 0;

        $this->count = 0;
    }

    function start_lvl( &$output, $depth = 0, $args = array() ) { 
        $indent = str_repeat("\t", $depth);
        $submenu = ($depth > 0) ? ' sub-menu' : '';
        if( $this->megaMenuID != 0 && $depth == 0 ) {
            $output .= "\n$indent<ul class=\"megamenu-dropdown $submenu depth_$depth\" >\n";
        }else{
            $output .= "\n$indent<ul class=\"submenu-dropdown\" >\n";
        }
        // $output .= "\n$indent<ul class=\"megamenu-dropdown $submenu depth_$depth\" >\n";
        $output .= "<div class=\"container\">\n";
        $output .= "<div class=\"row\">\n";
        if ($this->megaMenuID != 0 && $depth == 0) {
            $output .= "<li class=\"megamenu-column  col\"><ul>\n";
        }
    }

    public function end_lvl(&$output, $depth = 0, $args = array())
    {
        if ($this->megaMenuID != 0 && $depth == 0) {
            $output .= "</li></ul>";
        }

        $output .= "</ul>";
    }

    function start_el(&$output, $item, $depth = 0, $args = array(), $id = 0) {

      
       
        $has_mega_menu      = get_post_meta( $item->ID, '_menu_item_megamenu_parent', true );
        $has_image          = get_post_meta( $item->ID, '_megamenu-child-img-id', true );
        $has_column_divider = get_post_meta( $item->ID, '_menu_item_megamenu_divider', true );


        $indent = ($depth) ? str_repeat("\t", $depth) : '';

        $li_attributes = '';
        $class_names = $value = '';

        $classes = empty($item->classes) ? array() : (array) $item->classes;

        if ($this->megaMenuID != 0 && $this->megaMenuID != intval($item->menu_item_parent) && $depth == 0) {
            $this->megaMenuID = 0;
        }

        if( $has_column_divider ) {
            array_push( $classes, 'column-divider' );
            $output .= "</ul></li><li class=\"megamenu-column col\"><ul>\n";
        }
        
        if( $has_mega_menu) {
            array_push( $classes, 'megamenu' );
            $this->megaMenuID = $item->ID;
        } 
        if( $this->megaMenuID == 0 && $depth == 0 ) {
            array_push( $classes, 'submenu position-relative' );
        }
        if( $item->menu_item_parent == 0 && $depth == 0 ) {
            array_push( $classes, 'parent' );
        }else{
            array_push( $classes, 'child' );
        }
        
        $classes[] = ( $has_image ) ? 'mm-has-image-card' : ''; //Custom image class from menu item
  
    
        $class_names = implode(' ', apply_filters('nav_menu_css_class', array_filter($classes), $item, $args));
        $class_names = ' class="'.esc_attr($class_names).'"';

    

        $id = apply_filters('nav_menu_item_id', 'menu-item-'.$item->ID, $item, $args);
        $id = strlen($id) ? ' id="'.esc_attr($id).'"' : '';

        $output .= $indent.'<li'.$id.$value.$class_names.$li_attributes.'>';

        $a_class_names = '';
        if( $depth === 1 && $has_image) {
            $a_class_names = ' class="card"';
        }
        
        $attributes = !empty($item->attr_title) ? ' title="'.esc_attr($item->attr_title).'"' : '';
        $attributes .= !empty($item->target) ? ' target="'.esc_attr($item->target).'"' : '';
        $attributes .= !empty($item->xfn) ? ' rel="'.esc_attr($item->xfn).'"' : '';
        $attributes .= !empty($item->url) ? ' href="'.esc_attr($item->url).'"' : '';
      

       
        $item_output = $args->before;
        $has_src     = wp_get_attachment_image( $has_image, 'megamenu-image', "", array( "class" => "card-img-top" ) );
        
      
       if( $depth == 0 ) {
            $item_output .=  '<a'.$attributes . '>';
            $item_output .= $args->link_before.apply_filters('the_title', $item->title, $item->ID).$args->link_after;
            $item_output .= '</a>';
       } elseif( $depth == 1 && $has_image ) {

            $item_output .=  '<a'.$attributes . $a_class_names . '>';
            if( $has_image ) {
                $item_output .= $has_src;
            }
            $item_output .= '<div class="card-body">';  
            $item_output .= '<span class="card-title">';
            $item_output .= $args->link_before.apply_filters('the_title', $item->title, $item->ID).$args->link_after;
            $item_output .= '</span>';  
            if (strlen($item->description) > 2 && $depth == 1) {
                $item_output .= '<p class="card-text">'.$item->description.'</p>';
            }
            $item_output .= '</div>';
            $item_output .= '</a>';
       } else{
            $item_output .=  '<a'.$attributes . ' class="megamenu-link">';
            $item_output .= $args->link_before.apply_filters('the_title', $item->title, $item->ID).$args->link_after;
            $item_output .= '</a>';
       }

      
        $item_output .= $args->after;
        

        $output .= apply_filters('walker_nav_menu_start_el', $item_output, $item, $depth, $args);
    }

    function display_element($element, &$children_elements, $max_depth, $depth, $args, &$output) {
        if (!$element) {
            return;
        }

        $id_field = $this->db_fields['id'];

        //display this element
        if (is_array($args[0])) {
            $args[0]['has_children'] = !empty($children_elements[$element->$id_field]);
        } elseif (is_object($args[0])) {
            $args[0]->has_children = !empty($children_elements[$element->$id_field]);
        }

        $cb_args = array_merge(array(&$output, $element, $depth), $args);
        call_user_func_array(array($this, 'start_el'), $cb_args);

        $id = $element->$id_field;

        // descend only when the depth is right and there are childrens for this element
        if (($max_depth == 0 || $max_depth > $depth + 1) && isset($children_elements[$id])) {
            foreach ($children_elements[ $id ] as $child) {
                if (!isset($newlevel)) {
                    $newlevel = true;
              //start the child delimiter
              $cb_args = array_merge(array(&$output, $depth), $args);
                    call_user_func_array(array($this, 'start_lvl'), $cb_args);
                }
                $this->display_element($child, $children_elements, $max_depth, $depth + 1, $args, $output);
            }
            unset($children_elements[ $id ]);
        }

        if (isset($newlevel) && $newlevel) {
            //end the child delimiter
          $cb_args = array_merge(array(&$output, $depth), $args);
            call_user_func_array(array($this, 'end_lvl'), $cb_args);
        }

        //end this element
        $cb_args = array_merge(array(&$output, $element, $depth), $args);
        call_user_func_array(array($this, 'end_el'), $cb_args);
    }
}
