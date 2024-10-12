# poem-generator-dada

This project is a Dadaist poem generator written in C++. It creates random poems based on user-provided text, using a mix of word shuffling and interactive user input for line-by-line poem generation.

##Features
- **Random poem generation**: Words are shuffled randomly to create unique poetic lines.
- **Customizable line length**: You can specify how many words each line should have.
- **User interaction**: After each line is generated, the user can decide whether to continue or stop.
- **Text input options**: Choose to manually input text or read from a file.
- **Save poems**: Save the generated poem to a file for later use.

## Prerequisites
- A C++ compiler (e.g., `g++`) installed on your system.

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

### Step 3: Compile the Code
Compile the C++ source file using `g++`:
```bash
g++ poem_generator.cpp -o poem_generator
```

Alternatively, if you are using the provided `Makefile`, run:
```bash
make
```

### Step 4: Run the Program
Run the compiled program:
```bash
./poem_generator
```

The program will prompt you to choose a text input method and guide you through the poem generation process.

### Step 5: Follow the Instructions
After running the program, you will be asked to:
- Choose whether you want to manually input text or load it from a file.
- Decide how many words per line you want for each line of the poem.
- Continue or stop after each line is generated.
- Optionally save the poem to a text file at the end.

## Example Run
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

## Saving Poems
When you choose to save the poem, you will be prompted to enter a filename (e.g., `my_poem.txt`). The poem will be saved in the current directory.

## Project Structure
```
.
├── poem_generator.cpp   # The main C++ source file for generating poems
├── Makefile             # (Optional) Makefile to compile the project
├── README.md            # This file
└── examples/            # (Optional) Folder containing example input files or poems
```

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

