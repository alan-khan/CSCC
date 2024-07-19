<?php
// Prevent file from being accessed directly
if (!defined('ABSPATH')) exit();

define('DB_NAME',     'cleveland');
define('DB_USER',     'root');
define('DB_PASSWORD', 'root');
define('DB_HOST',     'localhost');
define('DB_CHARSET',  'utf8');
define('DB_COLLATE',  '');

define('AUTH_KEY',         '//!tNp|>p{=Rsjh`KkS6-%Wnp(O4[I6a~Oz8$CDhVvNl:~8OQ1To%cGjY7-jRZ]l');
define('SECURE_AUTH_KEY',  'b-5476=KeUxUC]9pFVzDmqh.ws9qy,cjgm^04|oz/*w|B|&l+*rD.t0})T~aPO}n');
define('LOGGED_IN_KEY',    'nJ|IB/AH-p401C>j+>i;<o}f<J8|t)1*=H>ap1yl?#+V~jWRv#9UFB$BL.a{L(uE');
define('NONCE_KEY',        'hg)7%, g _2Oz|7@HPB@ |8_)00z3Ag12+xykGVfaTaKrz%=5g2m#F)FL:&PyF&p');
define('AUTH_SALT',        'ckoLHV#uBaz|jVmoL-#dCTfpoa-2tPTv? ^C7j)_pZ0H5|u~UYa~~@,sgHEq+;g9');
define('SECURE_AUTH_SALT', '+SZfNq /bo|63eJg~M8sZBQ+MKAH?p,8~ipAEnO(eg/;E6OlE2$UQnE|9|Fh2b9{');
define('LOGGED_IN_SALT',   '#-%<wl3vH(8;k-i;fZh>jH?Kzr_)kYbYPs+*VG 3yOB>-]jS6T|z&h=2NSVF#+,P');
define('NONCE_SALT',       'Bl<ZV^+`h#IB` 6;q8SnXUcH c-we<RocnVOt>aij`c%@[zUf?7aQq=8$)2>o1y7');

$table_prefix = 'wp_';

define('WPLANG', '');
define('WP_DEBUG', true);