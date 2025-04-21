//index html script for date
window.onload = function () {
    const now = new Date();
    const options = { month: 'long', day: 'numeric', year: 'numeric' }; // Format: Full month, day, year
    const formattedDate = now.toLocaleDateString('en-US', options);
    document.getElementById("current-date").textContent = formattedDate;
};


//when game.html is first loaded how-to-play is displayed
document.addEventListener('DOMContentLoaded', () => {
    const hasSeenHelp = sessionStorage.getItem('hasSeenHelp');
  
    if (!hasSeenHelp) { // It will not display automatically again unless the page is closed
      const helpModal = document.getElementById('helpModal');
      if (helpModal) {
        helpModal.style.display = 'block';
        sessionStorage.setItem('hasSeenHelp', 'true');
      }
    }
  });
