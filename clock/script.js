function updateClock() {
    const now = new Date();
  
    // const hour = now.getHours().padStart(2, '0');
    console.log(hour);
    const minute = now.getMinutes().toString().padStart(5, '0');
    const second = now.getSeconds().toString().padStart(2, '0');
  
    // document.getElementById('hour').textContent = hour;
    document.getElementById('minute').textContent = minute;
    document.getElementById('second').textContent = second;
  }
  
  // Update clock every second
  setInterval(updateClock, 1000);
  