#include <iostream>
#include <fstream>
#include <vector>
#include <sstream>
#include <algorithm>
#include <random>
#include <ctime>
#include <cctype>

using namespace std;

// Function to split text into words and separate punctuation
vector<string> splitTextIntoWords(const string& text) {
    vector<string> words;
    string word;

    for (size_t i = 0; i < text.size(); ++i) {
        if (isalnum(text[i])) {
            word += text[i]; // Add letters and digits to the word
        } else {
            if (!word.empty()) {
                words.push_back(word); // Add the completed word
                word.clear();
            }
            if (ispunct(text[i])) {
                if (!words.empty()) {
                    // Attach the punctuation to the last word in the list
                    words.back() += text[i];
                } else {
                    // If there's no word, add the punctuation separately
                    words.push_back(string(1, text[i]));
                }
            }
        }
    }

    if (!word.empty()) {
        words.push_back(word); // Add the last word if any
    }

    return words;
}

// Function to shuffle the word vector
void shuffleWords(vector<string>& words) {
    random_device rd;
    mt19937 g(rd());
    shuffle(words.begin(), words.end(), g);  // Use shuffle from C++11
}

// Function to generate a random line of the poem
void generatePoemLine(vector<string>& words, int wordsPerLine, ostream& output) {
    int wordCount = 0;
    vector<string> lineWords;

    // Check if there are enough words left for the current line
    while (wordCount < wordsPerLine && !words.empty()) {
        // Choose a random word from the list
        random_device rd;
        mt19937 g(rd());
        uniform_int_distribution<> dist(0, words.size() - 1);

        int randomIndex = dist(g);
        string selectedWord = words[randomIndex];

        lineWords.push_back(selectedWord);
        words.erase(words.begin() + randomIndex); // Remove the word from the list

        wordCount++;
    }

    // Display the generated line
    for (const auto& word : lineWords) {
        output << word << " ";
    }
    output << endl;
}

// Function to save the generated poem to a file
void savePoemToFile(const vector<string>& poemLines, const string& filename) {
    ofstream outFile(filename);
    if (!outFile.is_open()) {
        cerr << "Eroare la deschiderea fisierului pentru salvare!" << endl;
        return;
    }

    // Write each line of the poem to the file
    for (const auto& line : poemLines) {
        outFile << line << endl;
    }
    outFile.close();
    cout << "Poemul a fost salvat cu succes in fisierul: " << filename << endl;
}

// Function to provide the user with the option to change each line of the poem
bool interactivePoemGeneration(vector<string>& words) {
    vector<string> poemLines; // Vector to store the generated lines
    bool continueGenerating = true;

    // Shuffle the words initially to maintain overall randomness
    shuffleWords(words);

    while (continueGenerating && !words.empty()) {
        // Ask the user how many words per line they want
        int wordsPerLine;
        cout << "\nCate cuvinte pe linie vrei sa aiba aceasta linie a poemului? ";
        cin >> wordsPerLine;
        cin.ignore(); // Ignore newline left in the buffer

        stringstream currentLine;
        generatePoemLine(words, wordsPerLine, currentLine); // Generate a random line
        cout << currentLine.str() << endl; // Display the generated line

        poemLines.push_back(currentLine.str()); // Save the generated line

        // Ask the user if they want to continue or stop
        if (!words.empty()) {
            cout << "\nVrei sa continui cu generarea urmatoarei linii? (y/n) ";
            char choice;
            cin >> choice;
            cin.ignore(); // Ignore newline left in the buffer
            if (choice == 'n' || choice == 'N') {
                continueGenerating = false;
            }
        }
    }

    // Display the complete generated poem
    cout << "\nPoemul complet generat:\n";
    for (const auto& line : poemLines) {
        cout << line << endl;
    }

    // Provide options to the user
    bool repeatMenu = true;
    while (repeatMenu) {
        cout << "\nOptiuni:\n";
        cout << "1. Genereaza un poem nou\n";
        cout << "2. Salveaza poemul intr-un fisier\n";
        cout << "3. Opreste programul\n";

        int choice;
        cin >> choice;
        cin.ignore(); // Ignore newline left in the buffer

        switch (choice) {
            case 1:
                cout << "Incepem un nou poem...\n";
                return true; // Restarts the program from main to generate a new poem
            case 2: {
                string filename;
                cout << "Introdu numele fisierului pentru salvare (inclusiv extensia .txt): ";
                getline(cin, filename);
                savePoemToFile(poemLines, filename); // Save the complete poem to a file
                break;
            }
            case 3:
                cout << "Programul se opreste.\n";
                return false; // Stops the program, no new poem is generated
            default:
                cout << "Optiune invalida!\n";
                break;
        }
    }

    return false;
}

int main() {
    bool running = true;

    while (running) {
        srand(time(0)); // Initialize the random number generator

        string text;
        int choice;

        cout << "Alege sursa textului pentru poemul dadaist: \n";
        cout << "1. Introducere manuala\n";
        cout << "2. Citire din fisier\n";
        cin >> choice;
        cin.ignore(); // Ignore newline left in the buffer

        if (choice == 1) {
            // Read text from the user
            cout << "Introdu textul din care sa se genereze poemul dadaist:\n";
            getline(cin, text);
        } else if (choice == 2) {
            // Read text from a file
            string filename;
            cout << "Introdu numele fisierului (inclusiv extensia): ";
            getline(cin, filename);
            ifstream file(filename);
            if (!file.is_open()) {
                cerr << "Eroare la deschiderea fisierului!" << endl;
                continue;
            }
            stringstream buffer;
            buffer << file.rdbuf();
            text = buffer.str();
            file.close();
        } else {
            cout << "Optiune invalida!" << endl;
            continue;
        }

        // Split the text into words
        vector<string> words = splitTextIntoWords(text);

        if (words.empty()) {
            cout << "Textul este gol sau invalid!" << endl;
            continue;
        }

        // Interactive real-time poem generation
        running = interactivePoemGeneration(words);
    }

    return 0;
}
