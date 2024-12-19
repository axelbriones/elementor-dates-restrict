<?php
// Function to enqueue the Elementor date restriction script
function enqueue_elementor_dates_restrict() {
    // Enqueue the JavaScript file for the script
    wp_enqueue_script(
        'elementor-dates-restrict', // Handle for the script
        get_template_directory_uri() . '/scripts/elementor-dates-restrict.js', // Path to the script file
        array('jquery'), // Dependencies (jQuery in this case)
        null, // Version (null means no version will be appended)
        true // Load in the footer
    );
}

// Hook the function to WordPress' enqueue scripts action
add_action('wp_enqueue_scripts', 'enqueue_elementor_dates_restrict');
?>
