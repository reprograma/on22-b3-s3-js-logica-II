// This 'monthNamer' function uses a switch case structure to transform given month numbers into their
// corresponding month names.

// The switch statement is embedded inside an 'if else' structure which checks whether or not the
// 'monthNumber' parameter has received a valid month number.

function monthNamer (monthNumber) {
    
    let month

    if (monthNumber < 1 || monthNumber > 12 || Number.isInteger(monthNumber) == false) {
      month = "Please insert a valid month!"
      return month
    } else {
        switch (monthNumber) {
            case 1:
                month = "January"
                break
            case 2:
                month = "February"
                break
            case 3:
                month = "March"
                break
            case 4:
                month = "April"
                break
            case 5:
                month = "May"
                break
            case 6:
                month = "June"
                break
            case 7:
                month = "July"
                break
            case 8:
                month = "August"
                break
            case 9:
                month = "September"
                break
            case 10:
                month = "October"
                break
            case 11:
                month = "November"
                break
            case 12:
                month = "December"
                break
            case 12:
        }
      return month    
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