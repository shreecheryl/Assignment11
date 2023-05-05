//STEP 1
// function nameLength() {
//     let name = prompt("What is your name?");
//     alert(name.length);
// }
// nameLength();

//STEP 2
// function characterAt() {
//     let name = prompt("What is your name?");
//     let position = prompt(`Select a number between 1 and ${name.length}`);
//     let letter = name.charAt(position - 1);
//     alert(`The letter at position ${position} in your name is ${letter}`);
// }
// characterAt();

//STEP 3
// function fullName() {
//     let firstName = prompt("What is your first name?");
//     let lastName = prompt("What is your last name?");
//     let firstLast = firstName.concat(" ", lastName);
//     alert(`Your name is: ${firstLast}`);
// }
// fullName();

//STEP 4
// function findFox() {
//     let text = "The quick brown fox jumps over the lazy dog";
//     alert(text.indexOf("fox"));
// }
// findFox();

//STEP 5
// function findLastFox() {
//     let text = "The quick brown fox jumps over the lazy fox";
//     alert(text.lastIndexOf("fox"));
// }
// findLastFox();

//STEP 6
// function replacement() {
//     let text = "The quick brown fox jumped over the lazy dog";
//     let fullName = prompt("What is your full name?");
//     alert(text.replace("the lazy dog", fullName));
// }
// replacement()

//STEP 7
// function findWord() {
//     let text = ("The quick brown fox jumps over the lazy dog").toLowerCase();
//     let word = prompt("What word are you looking for?").toLowerCase();
//     if (text.includes(word)) {
//         alert(`\"${text}\" contains the word \"${word}\"`);
//     } else {
//         alert(`\"${text}\" does not contain the word \"${word}\"`);
//     }
// }
// findWord();

//STEP 8
// function extractString() {
//     let old_string = "The quick brown fox jumps over the lazy dog";
//     let subString = "the lazy dog";
//     let firstNumber = old_string.indexOf(subString);
//     let secondNumber = firstNumber + subString.length;
//     let new_string = old_string.slice(firstNumber, secondNumber);
//     alert(new_string.toUpperCase());
// }
// extractString();

//STEP 9
// function trimLower() {
//     let text = " THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ";
//     text = text.trim().toLowerCase();
//     alert(text);
// }
// trimLower()

//STEP 10
// function capitalize() {
//     let text = "the quick brown fox jumps over the lazy dog";
//     text = text.charAt(0).toUpperCase() + text.slice(1);
//     alert(text);
// }
// capitalize();