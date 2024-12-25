// Helper function: Split text into words and preserve punctuation
function splitTextIntoWords(text) {
    const words = [];
    let word = '';
    for (const char of text) {
        if (/\w/.test(char)) {
            word += char;
        } else {
            if (word) words.push(word);
            word = '';
            if (/\p{P}/u.test(char)) words.push(char);
        }
    }
    if (word) words.push(word);
    return words;
}

// Helper function: Shuffle an array of words
function shuffleWords(words) {
    for (let i = words.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [words[i], words[j]] = [words[j], words[i]];
    }
}

// Helper function: Generate a single poem line
function generatePoemLine(words, wordsPerLine) {
    const line = [];
    for (let i = 0; i < wordsPerLine && words.length > 0; i++) {
        const randomIndex = Math.floor(Math.random() * words.length);
        line.push(words.splice(randomIndex, 1)[0]);
    }
    return line.join(' ');
}

// Main function: Generate the entire poem
function generatePoem() {
    const textInput = document.getElementById('textInput').value.trim();
    const wordsPerLineInput = document.getElementById('wordsPerLine').value;
    const output = document.getElementById('output');

    if (!textInput) {
        output.innerHTML = '<p class="error">Textul este gol! Introdu text pentru a genera poemul.</p>';
        return;
    }

    const wordsPerLine = parseInt(wordsPerLineInput);
    if (isNaN(wordsPerLine) || wordsPerLine <= 0) {
        output.innerHTML = '<p class="error">Numărul de cuvinte pe linie trebuie să fie un număr pozitiv!</p>';
        return;
    }

    const words = splitTextIntoWords(textInput);
    shuffleWords(words);

    output.innerHTML = '';
    while (words.length > 0) {
        const line = generatePoemLine(words, wordsPerLine);
        const lineDiv = document.createElement('div');
        lineDiv.className = 'line';
        lineDiv.textContent = line;
        output.appendChild(lineDiv);
    }
}

// Save the generated poem to a text file
function savePoem() {
    const output = document.getElementById('output');
    const lines = Array.from(output.getElementsByClassName('line')).map(line => line.textContent);

    if (lines.length === 0) {
        alert('Nu există niciun poem de salvat!');
        return;
    }

    const poemBlob = new Blob([lines.join('\n')], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(poemBlob);
    link.download = 'poem_dadaist.txt';
    link.click();
}

// Optional: Add event listeners for buttons (if not added directly in HTML)
document.getElementById('generateButton')?.addEventListener('click', generatePoem);
document.getElementById('saveButton')?.addEventListener('click', savePoem);
