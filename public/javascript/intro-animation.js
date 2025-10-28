document.addEventListener('DOMContentLoaded', (event) => {
    const overlay = document.getElementById('gif-intro-overlay');
    const mainContent = document.getElementById('main-content');
    console.log(overlay.classList);
    
    const GIF_DURATION_MS = 100;

    // Set a timeout for the GIF's duration (1.5s)
    setTimeout(() => {
        // --- START THE FADE-OUT PROCESS ---
        overlay.style.display = 'flex';
        
        // Force browser repaint (to ensure transition starts smoothly)
        overlay.offsetHeight; 
        
        //overlay.style.backgroundColor = 'red';
        overlay.classList.add('fade-out'); 
        
        // 2. Wait for the CSS transition (2000ms from your CSS) to fully complete
        setTimeout(() => {
            overlay.style.display = 'none';      // Completely hide the overlay
            mainContent.style.display = 'block'; // Show the website content
        }, GIF_DURATION_MS); // <-- This MUST match your CSS transition duration (2s = 2000ms)

    }, GIF_DURATION_MS);

    // Initial state setup (should be done by CSS, but harmless here)
    overlay.style.display = 'flex';
});