document.addEventListener('DOMContentLoaded', function() {
    // Get references to DOM elements
    const featuredImage = document.getElementById('featured-image');
    const imageTitle = document.getElementById('image-title');
    const thumbnails = document.querySelectorAll('#thumbnail-list img');

    // Add click event listeners to each thumbnail
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            // Update featured image src and alt
            featuredImage.src = thumbnail.src.replace('-small.jpg', '-large.jpg');
            featuredImage.alt = thumbnail.alt;

            // Update image title
            imageTitle.textContent = thumbnail.alt;
        });
    });
});
