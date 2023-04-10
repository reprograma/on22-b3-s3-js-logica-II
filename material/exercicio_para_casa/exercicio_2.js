// This 'monthNamer' function uses a switch case structure to transform given month numbers into their
// corresponding month names.

// The switch statement is embedded inside an 'if else' structure which checks whether or not the
// 'monthNumber' parameter has received a valid month number.

function monthNamer (monthNumber) {
    
    let month

    if (monthNumber < 1 || monthNumber > 12 || Number.isInteger(monthNumber) == false) {
        console.log ("Please insert a valid month number!")
    } else {
        switch (monthNumber) {
            case 1:
                month = "January"
                return month
            case 2:
                month = "February"
                return month
            case 3:
                month = "March"
                return month
            case 4:
                month = "April"
                return month
            case 5:
                month = "May"
                return month
            case 6:
                month = "June"
                return month
            case 7:
                month = "July"
                return month
            case 8:
                month = "August"
                return month
            case 9:
                month = "September"
                return month
            case 10:
                month = "October"
                return month
            case 11:
                month = "November"
                return month
            case 12:
                month = "December"
                return month
            case 12:
        }
    }
}

//logs:

console.log(monthNamer(-1))
console.log(monthNamer(0))
console.log(monthNamer(1.5))
console.log(monthNamer(3))
console.log(monthNamer(7))
console.log(monthNamer(10))
console.log(monthNamer(12))
console.log(monthNamer(15))