<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'db_cscc' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );



define( 'WP_DEBUG_LOG', true );

define( 'WP_DEBUG_DISPLAY', true );
/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'VUi%6#UCS8)>Vj2C[pxZ4= _+HN|$]vZ29NGqiC4iAlXNR3LQ%O^#|$(C_F Y+f]' );
define( 'SECURE_AUTH_KEY',  'Cq%=U+E}`EFa(.GQ{2oGG7I3#7<h(<fU2-Wv,u?Sv86vV{N(c8O`hn4ti#8UdxpO' );
define( 'LOGGED_IN_KEY',    'U,vPG)3?S!cp{W9&tN<;:RY:Di7&kdiaK0AVSHOsv2,?Jnx1VW*1M58bx6RG0,]N' );
define( 'NONCE_KEY',        'nwOiXw] Mbol~/N]@];#%:)B#T)G&qWVm;9$r8m^-D>JEUHu0|G_*xky#LzD%> ?' );
define( 'AUTH_SALT',        '_fk/kN+e^ANd/U|E0WtCoxiXm<4wWgp;F;,kbq@4pc~K5AX&A`8cIH[=xs8gsx%@' );
define( 'SECURE_AUTH_SALT', '; F>=Zd,PdmXuc;q3_lz1$!1|*H$DMJ9Bj^vq,tX<8d<LY{K#w>CQhyj)C4H~nKS' );
define( 'LOGGED_IN_SALT',   ']=bKdi4AV7>,*Kn^]#.,QW8E1B>p]-QsT<-!O/gw!1qDOST^&2BbUJTnUzO|DUay' );
define( 'NONCE_SALT',       'i*4r@|}9?j<hk?bmSs}H$l8M%:X)!V@*rA|>p 3F__xA!i?_y71$:VCI-oR1ok5o' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
