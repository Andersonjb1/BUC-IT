// ——— Set today’s date on index.html ———
function initDate() {
    const dateEl = document.getElementById("current-date");
    if (!dateEl) return;
  
    const now = new Date();
    const opts = { month: 'long', day: 'numeric', year: 'numeric' };
    dateEl.textContent = now.toLocaleDateString('en-US', opts);
  }
  
  // ——— Initialize game input handlers on game.html ———
  function initGameInput() {
    const grid = document.querySelector('.grid');
    if (!grid) return;               // bail if not on game.html
  
    const cells    = Array.from(grid.querySelectorAll('.cell'));
    const ROWS     = 6, COLS = 5;
    let currentRow = 0, currentCol = 0;
  
    // Place a letter in the next empty cell
    function handleLetter(letter) {
      if (currentCol < COLS) {
        const idx = currentRow * COLS + currentCol;
        cells[idx].textContent = letter;
        currentCol++;
      }
    }
  
    // Remove last letter in the row
    function handleBackspace() {
      if (currentCol > 0) {
        currentCol--;
        const idx = currentRow * COLS + currentCol;
        cells[idx].textContent = '';
      }
    }
  
    // On‑screen keyboard: any element with class="key"
    document.querySelectorAll('.key').forEach(btn => {
      btn.addEventListener('click', () => {
        const key = btn.textContent.trim();
        if (key === '⌫') {
          handleBackspace();
        } else if (/^[A-Z]$/.test(key)) {
          handleLetter(key);
        }
        // you could add an ENTER handler here if needed
      });
    });
  
    // Physical keyboard input
    document.addEventListener('keydown', e => {
      if (e.key === 'Backspace' || e.key === 'Delete') {
        e.preventDefault();
        handleBackspace();
      } else if (/^[a-zA-Z]$/.test(e.key)) {
        e.preventDefault();
        handleLetter(e.key.toUpperCase());
      }
    });
  }
  
  // ——— Wire everything up on window load ———
  window.onload = function () {
    initDate();
    initGameInput();
  };