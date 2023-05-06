//STEP 1
// function daysInMonth() {
//     let months = [
//        'january',
//        'february',
//        'march',
//        'april',
//        'may',
//        'june',
//        'july',
//        'august',
//        'september',
//        'october',
//        'november',
//        'december'
//      ];
   
//      let year = parseInt(prompt("Enter year"));    
//      let month = prompt("Enter month").toLowerCase();
//      let monthNumber = months.indexOf(month) + 1;
//      let numberOfDays = new Date(year, monthNumber, 0).getDate(); 
//      console.log(`The number of days in ${month} of ${year} is ${numberOfDays}.`);
//    }
//  daysInMonth();

//STEP 2
// function getMonthName () {
//     const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
//     let enteredDate = prompt("Enter a date in this format: mm/dd/yyyy");
//     let d = new Date(enteredDate);
//     console.log(months[d.getMonth()]);
// }
// getMonthName();

//STEP 3
// function isWeekend() {
//     let enteredDate = prompt("Enter a date in this format: mm/dd/yyyy");
//     let d = new Date(enteredDate).toString();
//     console.log(d);
//     if (d[0] === "S") {
//         console.log("This is a weekend day!");
//     } else {
//         console.log("This day is during the week.");
//     }
// }
// isWeekend();

//STEP 4
// function getYeterday() {
//     const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//     let enteredDate = prompt("Enter a date in this format: mm/dd/yyyy");
//     let d = new Date(enteredDate);
//     let yesterday = days[d.getDay() - 1];
//     console.log(yesterday);
// }
// getYeterday();

//STEP 5
// function currentDay() {
//     const d = new Date();
//     console.log(d.toString()[0]);
// }
// currentDay();