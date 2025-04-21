//script for answers
const wordInput = document.getElementById("word-input");
const gridCells = document.querySelectorAll(".grid .cell");
const answer = "light"; // Replace with your dynamic or static answer
let currentRow = 0;
const maxAttempts = 6;
const wordLength = 5;

// Function for displaying win or lose pop-ups
function showModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.style.display = 'block';
}

//index html script for date
window.onload = function () {
    const now = new Date();
    const options = { month: 'long', day: 'numeric', year: 'numeric' }; // Format: Full month, day, year
    const formattedDate = now.toLocaleDateString('en-US', options);
    document.getElementById("current-date").textContent = formattedDate;
};

// Restrict input to letters only and 5 characters max
wordInput.addEventListener("input", function () {
  this.value = this.value.replace(/[^a-zA-Z]/g, '').toUpperCase().slice(0, wordLength);
});

wordInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const guess = this.value.toLowerCase();

    if (guess.length !== wordLength || !/^[a-zA-Z]+$/.test(guess)) {
      alert("Please enter a valid 5-letter word.");
      return;
    }

    // Place guess into the grid
    const startIndex = currentRow * wordLength;
    for (let i = 0; i < wordLength; i++) {
      gridCells[startIndex + i].textContent = guess[i].toUpperCase();
    }

    // Check against the answer
    if (guess === answer) {
      showModal('winModal');
      wordInput.disabled = true;
      return;
    }

    currentRow++;

    if (currentRow >= maxAttempts) {
      wordInput.disabled = true;
      document.getElementById("correctWord").textContent = answer.toUpperCase();
      showModal('loseModal');
    }

    this.value = "";
  }
});

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
