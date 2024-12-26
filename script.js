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
    const output = document.getElementById('poemPreview');
    const textInput = document.getElementById('manualText').value.trim();
    const wordsPerLineInput = document.getElementById('wordCountInput').value;

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

    const spinner = document.createElement('div');
    spinner.classList.add('spinner');
    output.appendChild(spinner);

    setTimeout(() => {
        output.innerHTML = '';
        while (words.length > 0) {
            const line = generatePoemLine(words, wordsPerLine);
            const lineDiv = document.createElement('div');
            lineDiv.className = 'line';
            lineDiv.textContent = line;
            output.appendChild(lineDiv);
        }
        spinner.remove();
    }, 2000); // Simulate time taken for generation (e.g., 2 seconds)
}

// Save the generated poem to a text file
function savePoem() {
    const output = document.getElementById('poemPreview');
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

// Fetch a random quote from the PoetryDB API and show author and title
function fetchRandomPoetryQuote() {
    const quoteElement = document.getElementById('quoteText');
    const authorElement = document.getElementById('quoteAuthor');
    const titleElement = document.getElementById('quoteTitle');
    
    fetch('https://poetrydb.org/random')
        .then(response => response.json())
        .then(data => {
            const poem = data[0];
            const randomVerse = poem.lines[Math.floor(Math.random() * poem.lines.length)];
            quoteElement.textContent = `"${randomVerse}"`;
            authorElement.textContent = `- Autor: ${poem.author || "Necunoscut"}`;
            titleElement.textContent = `Titlu: ${poem.title || "Necunoscut"}`;
        })
        .catch(error => {
            console.error('Eroare la preluarea citatului:', error);
            quoteElement.textContent = 'Nu am putut să preiau un citat de poezie.';
            authorElement.textContent = '';
            titleElement.textContent = '';
        });
}

// Event listeners for buttons
document.getElementById('generateFromManual')?.addEventListener('click', generatePoem);
document.getElementById('generateFromFile')?.addEventListener('click', function() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (!file) {
        alert('Vă rugăm să selectați un fișier!');
        return;
    }

    const reader = new FileReader();
    reader.onload = function(event) {
        const text = event.target.result;
        document.getElementById('manualText').value = text;
        generatePoem();
    };
    reader.readAsText(file);
});

document.getElementById('downloadPoem')?.addEventListener('click', savePoem);

// Fetch a random poetry quote when the page loads
fetchRandomPoetryQuote();
