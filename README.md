# Dadaist Poem Generator

This project consists of a **Dadaist poem generator** written in **C++**, combined with a **web-based interface** that allows users to interact with the poem generation system. The generator produces random poems by shuffling words, based on user input. The web interface enables users to learn about the Dadaist movement and explore the creative potential of Dadaist poetry.

## Features

### C++ Poem Generator
- **Random poem generation**: Words are shuffled randomly to create unique poetic lines.
- **Customizable line length**: You can specify how many words each line should have.
- **User interaction**: After each line is generated, the user can choose whether to continue or stop.
- **Text input options**: Choose to manually input text or read from a file.
- **Save poems**: The option to save generated poems to a file for later use.

### Web Interface
- **Interactive Dadaist Poem Generator**: Use the web interface to generate random Dadaist poems directly from your browser.
- **Dadaist Movement Information**: A dedicated page (`despre-curent.html`) explaining the history and principles of Dadaism.
- **Responsive Design**: The site adapts seamlessly to desktop and mobile devices, providing a pleasant experience on both.
- **Poem Generation**: Customize the generated poem’s length and content directly from the web interface.
- **Quote Generator**: Fetches random poetry quotes from an external API and displays the verse, author, and poem title.

## Prerequisites

- A **C++ compiler** (e.g., `g++`) installed on your system to compile the C++ code.
- A **web server** (or use a local server like [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in Visual Studio Code) to run the HTML files.

## How to Run

### Step 1: Clone the Repository
Clone this repository to your local machine using the following command:
```bash
git clone https://github.com/your-username/poem-generator-dada.git
```

### Step 2: Navigate into the Project Directory
Go to the project folder:
```bash
cd poem-generator-dada
```

### Step 3: Compile the C++ Code
To compile the C++ program, use the following command:
```bash
g++ poem_generator.cpp -o poem_generator
```
Alternatively, if you're using the provided `Makefile`, run:
```bash
make
```

### Step 4: Run the C++ Program
Once the program is compiled, run it:
```bash
./poem_generator
```
You will be prompted to select a text input method and will be guided through the poem generation process.

### Step 5: Run the Web Interface
To use the web interface:
1. Open `index.html` in your browser.
2. The interactive Dadaist Poem Generator is ready to use.
3. Visit `despre-curent.html` to learn about the Dadaist movement and its historical context.

### Step 6: Enable Quote Display
The web interface also displays random poetry quotes, along with the author and the title of the poem. These are fetched from the PoetryDB API.

## Example Run (C++ Program)
```
Alege sursa textului pentru poemul dadaist:
1. Introducere manuala
2. Citire din fisier
2
Introdu numele fisierului (inclusiv extensia): sample_text.txt

Cate cuvinte pe linie vrei sa aiba aceasta linie a poemului? 5
Generated Line: word1 word2 word3 word4 word5

Vrei sa continui cu generarea urmatoarei linii? (y/n) y
```

## Saving Poems (C++ Program)
When you decide to save the poem, the program will ask for a filename (e.g., `my_poem.txt`) and save the poem in the current directory.

## Project Structure
```
.
├── LICENSE                # License file for the project
├── README.md              # This file (describes the project)
├── despre-curent.html     # Page explaining the Dadaist movement
├── example.txt            # Example input file for the C++ program/website
├── google6655c7804bcb423a.html  # Google verification file (for site indexing)
├── index.html             # Main HTML page for the web interface
├── poem_dadaist_generator.cpp   # C++ source file for generating poems
├── robots.txt             # File for controlling search engine crawlers
├── script.js              # JavaScript for interactive functionality
├── sitemap.xml            # Sitemap for better SEO and site indexing
└── style.css              # CSS file for styling the website

```

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
