<?php
/**
 * Twenty Twenty-Two functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_Two
 * @since Twenty Twenty-Two 1.0
 */


 /**
 * Main theme functions: assets including, post types, walkers etc.
 */
require_once( 'inc/theme-setup.php' );

if ( ! function_exists( 'pandorah_support' ) ) :

	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * @since Twenty Twenty-Two 1.0
	 *
	 * @return void
	 */
	function pandorah_support() {

		// Add support for block styles.
		add_theme_support( 'wp-block-styles' );

		// Enqueue editor styles.
		add_editor_style( 'style.css' );

	}

endif;

add_action( 'after_setup_theme', 'pandorah_support' );

if ( ! function_exists( 'pandorah_styles' ) ) :

	/**
	 * Enqueue styles.
	 *
	 * @since Twenty Twenty-Two 1.0
	 *
	 * @return void
	 */
	function pandorah_styles() {
		// Register theme stylesheet.
		$theme_version = wp_get_theme()->get( 'Version' );

		$version_string = is_string( $theme_version ) ? $theme_version : false;
		wp_register_style(
			'pandorah-style',
			get_template_directory_uri() . '/assets/_dist/css/main.css',
			array(),
			$version_string
		);
		// Add styles inline.
		// Enqueue theme stylesheet.
		wp_enqueue_style( 'pandorah-style' );
	}

	function global_scripts() {
		wp_enqueue_script('custom-js', get_stylesheet_directory_uri() . '/assets/_dist/js/index.js', array('jquery'));
	}

	function pandorah_styles2() {
		// Register theme stylesheet.
		$theme_version = wp_get_theme()->get( 'Version' );

		$version_string = is_string( $theme_version ) ? $theme_version : false;
		wp_register_style(
			'pandorah-style2',
			get_template_directory_uri() . '/assets/_dist/css/critical.css',
			array(),
			$version_string
		);

		// Add styles inline.

		// Enqueue theme stylesheet.
		wp_enqueue_style( 'pandorah-style2' );

	}

endif;
add_action( 'wp_enqueue_scripts', 'pandorah_styles2' );
add_action( 'wp_enqueue_scripts', 'pandorah_styles' );
add_action('wp_enqueue_scripts', 'global_scripts');