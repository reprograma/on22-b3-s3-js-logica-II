//
//

function monthNamer (monthNumber) {
    
    let month

    if (monthNumber < 1 || monthNumber > 12 || Number.isInteger(monthNumber) == false) {
        console.log ("Please insert a valid month number!")
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
        console.log(month)
    }
}

//

monthNamer(-1)
monthNamer(0)
monthNamer(1.5)
monthNamer(3)
monthNamer(7)
monthNamer(10)
monthNamer(12)
monthNamer(15)
