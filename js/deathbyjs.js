//STEP 1
// function alphabetical() {
//     let word = prompt("Enter a word");
//     let letters = word.split("").sort();
//     return letters.join("");
// }
// console.log(alphabetical());

//STEP 2
// function titleCase() {
//     let text = prompt("Enter a sentence");
//     let words = text.split(" ");
//     let capitalizedWords = words.map( word => word[0].toUpperCase() + word.slice(1));
//     return capitalizedWords.join(" ");
// }
// console.log(titleCase());

//STEP 3
// function vowels() {
//     let text = prompt("Enter a word or sentence")
//     let vowels = text.match(/[aeiou]/gi);
//     return vowels.length;
// }
// console.log(vowels());

//STEP 4
// function generatePassword() {
//     let len = parseInt(prompt("Enter password length"));
//     let password = "";
//     for (let i = 0; i < len;) {
//         let char = Math.floor(Math.random() * 122);
//         if ((char >= 48 && char <= 57) || (char >=65 && char <= 90) || (char >= 97 && char <= 122)) {
//             password += String.fromCharCode(char);
//             i++;
//         }
//     }
//     return `Your password is: ${password}`;
// }
// console.log(generatePassword());

//STEP 5
// function longestCountryName() {
//     // GET LIST OF COUNTRIES
//     let countries = prompt("Enter a list of country names separated by commas");

//     // CREATE ARRAY OF COUNTRY NAMES WITHOUT LEADING OR TRAILING SPACES
//     let countryNames = countries.split(",");
//     let countryNamesClean = countryNames.map(country => country.trim());

//     // CREATE ARRAY OF LENGTH OF NAMES
//     let countryNamesLength = countryNamesClean.map(countryName => countryName.length);

//     // FIND MAXIMUM LENGTH
//     let max = Math.max(...countryNamesLength);

//     // USE INDEX OF MAXIMUM LENGTH TO GET CORRESPONDING COUNTRY NAME
//     let longestName = countryNamesClean[countryNamesLength.indexOf(max)];
//     return longestName;
// }
// console.log(longestCountryName());