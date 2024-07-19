<?php
// Prevent file from being accessed directly
if (!defined('ABSPATH')) exit();

define('DB_NAME',     'local');
define('DB_USER',     'root');
define('DB_PASSWORD', 'root');
define('DB_HOST',     'localhost');
define('DB_CHARSET',  'utf8');
define('DB_COLLATE',  '');

define('AUTH_KEY',         '*4Sa%b_t.PO1-iD_Yng!+}ld5ju_8f;Zc.R 3W+]JqPq:s6ZQ]V0<yK+ .|!p<bh');
define('SECURE_AUTH_KEY',  'XuXr9mFIc`Ej|WV)7a~}4Lb}bed38Ap}v_l7A/O-7)FM)~5NOdmSU+U2rdNP/||d');
define('LOGGED_IN_KEY',    'ePW!-TE,TC6~`:Hevl-n|04HB65fB~1W|`Y>sy8-$%RNQe?G_O_*1v?^CD-NY|(C');
define('NONCE_KEY',        'Ydq^><{!TF_1mEnz|Bv$-RBFeI<Gw_KZD#rw~W9>dTm{=#BK>yawVw)PT@)L>1cb');
define('AUTH_SALT',        'z|j>nRUX,!]&d{893w^/ZT$Ztz=SBIQ!HKGKs:5+*Ifr<w-,uZ*x;BC]c>F+,uga');
define('SECURE_AUTH_SALT', '[{s1.4WIH WU5-3muF1h|^u*T&mOp!-tVreg&%ej@Ko~kup8W`YL2g&UIj}*Y8D+');
define('LOGGED_IN_SALT',   'q}CpfuQaI$a[#EZ/[VQ6QE>tt3:qGT%26:G9_@XGk#N;:xgRW7(r2XQw#K_8VQ;<');
define('NONCE_SALT',       'r/y*0~A*{DkXh+&*}e+dTmUr>KNX*0T#k>hD.Ti}#5-*/c<Is!5E J%6yxgWb3p0');

$table_prefix = 'wp_';

define('WPLANG',   '');
define('WP_DEBUG', true);