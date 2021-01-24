const leapYears = function(year) {
    if (year % 4 === 0){
        if (year % 100 === 0){
            return (year % 400 === 0 ?  true : false);
        }
        else {return true}
    }
    else {return false}
}

module.exports = leapYears

console.log(leapYears(2004))