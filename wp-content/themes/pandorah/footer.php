

<footer class="site-footer" role="contentinfo">
    <div class="container">
        <img class="footer_logo" src="<?php the_field('image_of_footer');?>" alt="Footer image">
        <ul class="footer_list">
            <?php if (have_rows('footer_list')):
                while (have_rows('footer_list')) : the_row(); ?>

                    <?php if(get_sub_field('link')){ ?>
                        <li class="footer_item"><a href="<?php the_sub_field('link'); ?>"><?php the_sub_field('text'); ?></a></li>
                    <?php }else{ ?>
                        <li class="footer_item"><?php the_sub_field('text'); ?></li>
                    <?php } ?>

                <?php endwhile;
                    endif; 
            ?>
        </ul>

        <ul class="social_list">
            <?php if (have_rows('social_list')):
                while (have_rows('social_list')) : the_row(); ?>
                    <li class="social_item">
                        <a href="<?php the_sub_field('link'); ?>">
                            <img src="<?php the_sub_field('image'); ?>" alt="Social icon">
                        </a>
                    </li>
                <?php endwhile;
                endif; 
            ?>
        </ul>
    </div>
</footer>

</div><!-- wrapper -->


<?php wp_footer(); ?>

<script>


		window.scrollTo(0, 0);
	


</script>

</body>
</html>

