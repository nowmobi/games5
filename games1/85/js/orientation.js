window.addEventListener('load', function() {
  const orientationDiv = document.getElementById('orientation');
  
  function checkOrientation() {
    const isPortrait = window.innerHeight > window.innerWidth;
    
    if (isPortrait) {
      orientationDiv.style.display = 'flex';
    } else {
      orientationDiv.style.display = 'none';
    }
  }
  
  // 检查初始方向
  checkOrientation();
  
  // 监听方向变化
  window.addEventListener('resize', checkOrientation);
  window.addEventListener('orientationchange', function() {
    // 延迟执行以确保获取到正确的尺寸
    setTimeout(checkOrientation, 100);
  });
});