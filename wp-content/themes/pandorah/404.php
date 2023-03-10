<?php
/**
 * The template for displaying an 404 page
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package DS_Theme
 */

get_header(); ?>


<div class="page-content p-404">

    <div class="p-404__inner inner-frame">

        <div class="page-title p-404__title"><?php _e( '404', 'dstheme' ); ?></div>

        <div class="p-404__text">
            <?php _e( 'Oops! The page you\'re looking for appears to have moved, been deleted or does not exists.', 'dstheme' ); ?>
        </div>

        <div class="p-404__btn">
            <a class="c-btn -normal -primary -large cta_1" href="/">
                <span class="c-btn__txt">Go To Homepage</span>
            </a>
        </div>


    </div>

</div>

<?php get_footer(); ?>

