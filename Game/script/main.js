//index html script for date
window.onload = function () {
    const now = new Date();
    const options = { month: 'long', day: 'numeric', year: 'numeric' }; // Format: Full month, day, year
    const formattedDate = now.toLocaleDateString('en-US', options);
    document.getElementById("current-date").textContent = formattedDate;
};
