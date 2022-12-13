const year = 2022
const holidays = ['01/06', '04/01', '12/25'] // formato MM/DD

// 01/06 es el 6 de enero, jueves. Cuenta.
// 04/01 es el 1 de abril, un viernes. Cuenta.
// 12/25 es el 25 de diciembre, un domingo. No cuenta.

function countHours(year, holidays) {
    const horasExtras = 0
    const esBisiesto = (year) => {
        return (year % 400 === 0) ? true : 
                    (year % 100 === 0) ? false : 
                        (year % 4 === 0)
    }
    const bisisesto = esBisiesto(year)
    return
}
console.log(countHours(year, holidays))