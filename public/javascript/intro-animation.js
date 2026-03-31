/**
 * Handles the transition from the intro GIF overlay to the main website content.
 * * @listens document#DOMContentLoaded
 */
document.addEventListener('DOMContentLoaded', (event) => {
    const overlay = document.getElementById('gif-intro-overlay');
    const mainContent = document.getElementById('main-content');
    console.log(overlay.classList);
    
    const GIF_DURATION_MS = 500;

    setTimeout(() => {
        overlay.style.display = 'flex';
        
        overlay.offsetHeight; 

        overlay.classList.add('fade-out'); 
        
        setTimeout(() => {
            overlay.style.display = 'none';      // Completely hide the overlay
            mainContent.style.display = 'block'; // Show the website content
        }, GIF_DURATION_MS); 

    }, GIF_DURATION_MS);

    overlay.style.display = 'flex';
});