(function() {
    var orientationDiv = document.getElementById('orientation');
    
    function checkOrientation() {
        var isPortrait = window.innerHeight > window.innerWidth;
        
        if (isPortrait) {
            orientationDiv.className = 'portrait';
        } else {
            orientationDiv.className = '';
        }
    }
    
    checkOrientation();
    
    window.addEventListener('resize', function() {
        checkOrientation();
    });
    
    // Also check orientation on deviceorientation event for mobile devices
    window.addEventListener('orientationchange', function() {
        setTimeout(checkOrientation, 100); // Delay to ensure the window dimensions are updated
    });
})();