const sumAll = function() {
    let firstNumber, secondNumber;
    let addedNumber = 0;

    if(typeof arguments[0] !== "number" || arguments[0] < 0 || typeof arguments[1] !== "number" || arguments[1] < 0){
        return 'ERROR'
    }
    else{
        if (arguments[0] < arguments[1]){
            firstNumber = arguments[0];
            secondNumber = arguments[1];
        }
        else {
            firstNumber = arguments[1];
            secondNumber = arguments[0];
        }

        // console.log(firstNumber);
        // console.log(secondNumber);

        for (let i = firstNumber; i <= secondNumber; i++){
            // console.log(i);
            addedNumber += i;
        }

        return addedNumber;
    }
}

module.exports = sumAll

console.log(sumAll(10, "15"));