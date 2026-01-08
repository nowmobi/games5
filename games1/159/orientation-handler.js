(function() {
    'use strict';
    
    // Check if we're on a mobile device
    function isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    // Function to handle orientation change
    function handleOrientationChange() {
        const orientationDiv = document.getElementById('orientation');
        
        if (!isMobile()) {
            // Not a mobile device, hide the orientation div
            if (orientationDiv) {
                orientationDiv.style.display = 'none';
            }
            return;
        }
        
        // Check screen orientation
        if (window.orientation !== undefined) {
            // iOS or Android using window.orientation
            // 0 and 180 are portrait, 90 and -90 are landscape
            if (Math.abs(window.orientation) === 90) {
                // Landscape
                if (orientationDiv) {
                    orientationDiv.style.display = 'none';
                }
            } else {
                // Portrait
                if (orientationDiv) {
                    orientationDiv.style.display = 'flex';
                }
            }
        } else {
            // Alternative method using screen orientation API
            const orientation = screen.orientation;
            if (orientation && orientation.angle !== undefined) {
                if (Math.abs(orientation.angle) === 90) {
                    // Landscape
                    if (orientationDiv) {
                        orientationDiv.style.display = 'none';
                    }
                } else {
                    // Portrait
                    if (orientationDiv) {
                        orientationDiv.style.display = 'flex';
                    }
                }
            } else {
                // Fallback: use window inner dimensions
                if (window.innerWidth > window.innerHeight) {
                    // Landscape
                    if (orientationDiv) {
                        orientationDiv.style.display = 'none';
                    }
                } else {
                    // Portrait
                    if (orientationDiv) {
                        orientationDiv.style.display = 'flex';
                    }
                }
            }
        }
    }

    // Listen for orientation changes
    window.addEventListener('orientationchange', handleOrientationChange);
    window.addEventListener('resize', handleOrientationChange);

    // Initial check
    window.addEventListener('load', function() {
        setTimeout(handleOrientationChange, 100); // Small delay to ensure values are correct
    });

    // Also check on window focus in case the user switched apps
    window.addEventListener('focus', handleOrientationChange);
})();