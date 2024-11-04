<?php
/*
Plugin Name: Login Page Header & Footer
Description: Adds options in the Customizer to show the site's Header and Footer on the Login Page.
Text Domain: login-page-header-footer
*/

// Prevent direct access
if (!defined('ABSPATH')) exit;

// Hook to add Customizer settings
add_action('customize_register', 'lphf_customize_register');
function lphf_customize_register($wp_customize) {
    // Add Section for Login Page Customization
    $wp_customize->add_section('lphf_login_page_customization', [
        'title' => __('Login Page Customization', 'login-page-header-footer'),
        'priority' => 30,
    ]);

    // Add Setting for Header
    $wp_customize->add_setting('lphf_show_login_header', [
        'default' => false,
        'sanitize_callback' => 'wp_validate_boolean',
    ]);
    $wp_customize->add_control('lphf_show_login_header', [
        'type' => 'checkbox',
        'section' => 'lphf_login_page_customization',
        'label' => __('Show Header on Login Page', 'login-page-header-footer'),
    ]);

    // Add Setting for Footer
    $wp_customize->add_setting('lphf_show_login_footer', [
        'default' => false,
        'sanitize_callback' => 'wp_validate_boolean',
    ]);
    $wp_customize->add_control('lphf_show_login_footer', [
        'type' => 'checkbox',
        'section' => 'lphf_login_page_customization',
        'label' => __('Show Footer on Login Page', 'login-page-header-footer'),
    ]);
}

// Hook to display Header on the Login page
add_action('login_enqueue_scripts', 'lphf_display_login_header');
function lphf_display_login_header() {
    if (get_theme_mod('lphf_show_login_header')) {
        get_header();
    }
}

// Hook to display Footer on the Login page
add_action('login_footer', 'lphf_display_login_footer');
function lphf_display_login_footer() {
    if (get_theme_mod('lphf_show_login_footer')) {
        get_footer();
    }
}

// Register "Form Builder" page in the plugin's settings menu
add_action('admin_menu', 'crfb_add_form_builder_page');
function crfb_add_form_builder_page() {
    add_submenu_page(
        'options-general.php',  // Parent menu item
        'Registration Form Builder',  // Page title
        'Form Builder',  // Menu title
        'manage_options',  // Capability
        'crfb_form_builder',  // Menu slug
        'crfb_render_form_builder'  // Callback function
    );
}

// Render Form Builder UI
function crfb_render_form_builder() {
    include plugin_dir_path(__FILE__) . 'form-builder-interface.php';
}

// Hook to enqueue admin scripts and styles
add_action('admin_enqueue_scripts', 'crfb_enqueue_form_builder_assets');

function crfb_enqueue_form_builder_assets($hook) {
    if ($hook != 'settings_page_crfb_form_builder') {
        return;
    }

    wp_enqueue_style('crfb-form-builder-css', plugin_dir_url(__FILE__) . 'admin-style.css');
    wp_enqueue_script('crfb-form-builder-js', plugin_dir_url(__FILE__) . 'admin-script.js', array('jquery', 'jquery-ui-draggable', 'jquery-ui-droppable', 'jquery-ui-sortable'), false, true);
    
    // Enqueue Dashicons
    wp_enqueue_style('dashicons');
    
    wp_localize_script('crfb-form-builder-js', 'crfb_vars', array(
        'ajaxurl' => admin_url('admin-ajax.php'),
        'nonce' => wp_create_nonce('crfb_nonce')
    ));
}


add_action('register_form', 'crfb_display_custom_registration_form');
function crfb_display_custom_registration_form() {
    $form_fields = get_option('crfb_custom_form_fields', []);
    foreach ($form_fields as $field) {
        echo '<p>';
        echo '<label>' . ucfirst($field['type']) . '</label>';
        echo '<input type="' . esc_attr($field['type']) . '" name="' . esc_attr($field['type']) . '" />';
        echo '</p>';
    }
}



// Save form fields via AJAX
add_action('wp_ajax_crfb_save_form', 'crfb_save_form');
function crfb_save_form() {
    check_ajax_referer('crfb_nonce', 'nonce');
    update_option('crfb_custom_form_fields', $_POST['form_fields']);
    wp_send_json_success(['message' => 'Form saved successfully']);
}
