
function leapYear(year){
    if(year % 4 === 0 || (year % 400 === 0 && year % 100 !== 0)){
        return ("It is a leapYear!");
    }
    else{
       return ("It's not a leapYear!");
    }
}
console.log(leapYear(2028));

// -----------------------------
//     OR
// -----------------------------

function leapYeaR(year){
    if(year % 4 === 0 || (year % 400 === 0 && year % 100 !== 0)){
        console.log("It is a leapYear!");
    }
    else{
        console.log("It's not a leapYear!");
    }
}

leapYeaR(2028);


