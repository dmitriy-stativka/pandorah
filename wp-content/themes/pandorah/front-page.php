<?php
/**
 * The template for displaying default template pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package DS_Theme
 */

get_header(); ?>


<div class="--preview-screen-content">
    <section class="--preview-screen">
        <img class="--preview-screen-img" src="<?php the_field('background_start_block');?>" alt="">
        <div class="--preview-screen-box">
            <span class="--preview-screen-title"><?php the_field('start_title');?></span>
            <div class="--preview-screen-btn"></div>
        </div>
        <div class="--preview-screen-message">
            <div class="--preview-screen-message-box">
                    <img src="./wp-content/themes/pandorah/assets/_src/images/img1.png" alt="Logo">
                    <span class="--preview-screen-pretitle"><?php the_field('popup_pretitle');?></span>
                    <h2 class="--preview-screen-h2"><?php the_field('popup_title');?></h2>
                    <p class="--preview-screen-description"><?php the_field('popup_text');?></p>
                    <button class="--preview-screen-down">
                        <svg width="22" height="36" viewBox="0 0 22 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.45044 23.0996L11.0003 31.6495L19.5502 23.0996" stroke="#6B553B" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2.45044 13.7246L11.0003 22.2745L19.5502 13.7246" stroke="#6B553B" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2.45044 4.34961L11.0003 12.8995L19.5502 4.34961" stroke="#6B553B" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
            </div>
        </div>
    </section>
</div>

<div class="wrapper overflow">

    <button class="-go_up"></button>

    <section class="hero_section noise" style="background-image: url(<?php the_field('background_second');?>)">
        <div class="container">
            <img class="hero_section-img" src="<?php the_field('image_second');?>" alt="Hero image">
            <div class="hero_section-box">
                <h1 class="hero_section-title c-heading__title"><?php the_field('title_second');?></h1>
                <p class="hero_section-description c-heading__description"><?php the_field('description_second');?></p>
            </div>
        </div>
    </section>


    <section class="user_content active">
        <div class="container">
            <div class="user_content-box">    
                <div class="user_content-img">
                    <img src="<?php the_field('image_third');?>" alt="User image">
                </div>
            </div>

            <div class="user_content-heading">
                <h2 class="c-heading__title"><?php the_field('title_third');?></h2>
                <p class="c-heading__description"><?php the_field('text_third');?> </p>
            </div>
        </div>
    </section>



    <section class="mechanism">
        <div class="container">
            <div class="c-heading">
                <h2 class="c-heading__title"><?php the_field('title_fourth');?></h2>
                <p class="c-heading__description"><?php the_field('text_fourth');?></p>
            </div>

            <div class="mechanism-img">
                <img src="<?php the_field('image_fourth');?>" alt="Mechanism image">
            </div>
        </div>
    </section>


    <section class="run-section">
        <div class="run-lines line_stroke_1">
            <?php if (have_rows('image_list')):
                while (have_rows('image_list')) : the_row(); ?>
                    <div class="run-item"><img src="<?php the_sub_field('image');?>" alt="Image"></div>
                <?php endwhile;
                endif; 
            ?>
        </div>
        <div class="run-lines line_stroke_2">
            <?php if (have_rows('image_list')):
                while (have_rows('image_list')) : the_row(); ?>
                    <div class="run-item"><img src="<?php the_sub_field('image');?>" alt="Image"></div>
                <?php endwhile;
                endif; 
            ?>
        </div>
    </section>


    <section class="exquisite active">
        <div class="container">
            <div class="exquisite-media">
                <img src="<?php the_field('image_sixth');?>" alt="Image">
            </div>
            <div class="exquisite-content">
                <h2 class="c-heading__title"><?php the_field('title_sixth');?></h2>
                <p class="c-heading__description"><?php the_field('text_sixth');?></p>
            </div>
        </div>
    </section>


    <section class="faq">
        <div class="container">
            <div class="c-heading">
                <h2 class="c-heading__title"><?php the_field('title_faq');?></h2>
                <p class="c-heading__description"><?php the_field('text_faq');?></p>
            </div>
            
            <div class="row">
                <div class="accordion">
                    <?php if (have_rows('accordion_list')):
                        while (have_rows('accordion_list')) : the_row(); ?>
                            <div class="accordion_item">
                                <div class="accordion_title"><?php the_sub_field('title');?></div>
                                <div class="accordion_description"><?php the_sub_field('description');?></div>
                            </div>                        
                    <?php endwhile;
                        endif; 
                    ?>
                </div>
                <div class="faq_media">
                    <img src="<?php the_field('faq_image');?>" alt="">
                </div>
            </div>

            <div class="faq-btns">
                <a class="c-btn" href="<?php the_field('link_of_first_button');?>"><?php the_field('text_of_first_button');?></a>
                <a class="c-btn" href="<?php the_field('link_of_second_button');?>"><?php the_field('text_of_second_button');?></a>
            </div>
        </div>
    </section>
    <?php get_footer(); ?>
