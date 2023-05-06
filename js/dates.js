//STEP 1
function daysInMonth() {
    let months = [
       'January',
       'February',
       'March',
       'April',
       'May',
       'June',
       'July',
       'August',
       'September',
       'October',
       'November',
       'December'
     ];
   
     let year = parseInt(prompt("Enter year"));    
     let month = prompt("Enter month");
     let monthNumber = months.indexOf(month) + 1;
     let numberOfDays = new Date(year, monthNumber, 0).getDate(); 
     console.log(`The number of days in ${month} in ${year} is ${numberOfDays}.`);
   }
 daysInMonth();
//STEP 2

//STEP 3

//STEP 4

//STEP 5
