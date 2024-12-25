# poem-generator-dada

This project is a Dadaist poem generator written in C++, combined with a web-based interface to interact with the poem generation system. It creates random poems based on user-provided text, using a mix of word shuffling and interactive user input for line-by-line poem generation. The web interface allows users to explore and learn more about the Dadaist movement, and interact with the poem generator.

## Features

### C++ Poem Generator
- **Random poem generation**: Words are shuffled randomly to create unique poetic lines.
- **Customizable line length**: You can specify how many words each line should have.
- **User interaction**: After each line is generated, the user can decide whether to continue or stop.
- **Text input options**: Choose to manually input text or read from a file.
- **Save poems**: Save the generated poem to a file for later use.

### Web Interface
- **Interactive Dadaist Poem Generator**: Use the web interface to interact with the poem generator in real-time.
- **About the Dadaist Movement**: A dedicated page (`despre-curent.html`) explaining the principles and history of Dadaism.
- **Responsive Design**: The website is designed to work seamlessly on both desktop and mobile devices.
- **Poem Generation**: Generate Dadaist poems directly from your browser with options to customize the poem's length and content.

## Prerequisites
- A C++ compiler (e.g., `g++`) installed on your system.
- A web server (for running the HTML files), or you can use a local server like [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in Visual Studio Code.

## How to Run

### Step 1: Clone the Repository
To get started, clone this repository to your local machine:
```bash
git clone https://github.com/your-username/poem-generator-dada.git
```

### Step 2: Navigate into the Project Directory
Move into the cloned directory:
```bash
cd poem-generator-dada
```

### Step 3: Compile the C++ Code
Compile the C++ source file using `g++`:
```bash
g++ poem_generator.cpp -o poem_generator
```

Alternatively, if you are using the provided `Makefile`, run:
```bash
make
```

### Step 4: Run the C++ Program
Run the compiled C++ program:
```bash
./poem_generator
```

The program will prompt you to choose a text input method and guide you through the poem generation process.

### Step 5: Run the Web Interface
To run the web interface:
1. Open `index.html` in your browser or set up a local server to serve the files.
2. Use the interactive Dadaist Poem Generator on the page.
3. Visit `despre-curent.html` to learn about the Dadaist movement.

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
When you choose to save the poem, you will be prompted to enter a filename (e.g., `my_poem.txt`). The poem will be saved in the current directory.

## Project Structure
```
.
├── poem_generator.cpp   # The main C++ source file for generating poems
├── Makefile             # (Optional) Makefile to compile the project
├── README.md            # This file
├── index.html           # The main HTML page for the web interface
├── despre-curent.html   # The page explaining the Dadaist movement
├── script.js            # JavaScript for interactive functionality
└── examples/            # (Optional) Folder containing example input files or poems
```

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

