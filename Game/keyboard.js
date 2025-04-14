

// List of letters in the alphabet to create the keyboard
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

// Function to create the keyboard dynamically
function createKeyboard() {
    const keyboardContainer = document.getElementById('keyboard');
   
    alphabet.forEach(letter => {
        const key = document.createElement('div');
        key.classList.add('key');
        key.textContent = letter;
       
        key.addEventListener('click', () => handleKeyClick(letter, key));
        keyboardContainer.appendChild(key);
    });
}

// Function to simulate the behavior of Wordle when a key is clicked
function handleKeyClick(letter, keyElement) {
    // For this example, we will simulate a guess
    // In a real game, you'd need to integrate with a word guess function
    let result = simulateGuess(letter); // Simulate the Wordle result

    // Add color based on Wordle logic (for simplicity, we use random results)
    if (result === 'correct') {
        keyElement.classList.add('correct');
    } else if (result === 'present') {
        keyElement.classList.add('present');
    } else {
        keyElement.classList.add('absent');
    }
}

// Simulating a Wordle-like behavior
// In a real scenario, you would compare with the target word
function simulateGuess(letter) {
    const correctWord = 'APPLE';  // Hardcoded for this example
    const index = correctWord.indexOf(letter);

    if (index !== -1) {
        // If letter exists, check if it's in the correct position
        if (correctWord[index] === letter) {
            return 'correct';
        } else {
            return 'present';
        }
    }

    return 'absent';
}

// Initialize the keyboard when the page loads
document.addEventListener('DOMContentLoaded', createKeyboard);