const removeFromArray = function() {

    let inputArray = arguments[0];

    for(let i = 1; i < arguments.length; i++){

        if (inputArray.includes(arguments[i])){
            inputArray.splice(inputArray.indexOf(arguments[i]), 1);
        }
    }
    
    return inputArray;

    //lol got pranked, none of this is needed, above solves everything to complete tests.
    // if (!isNaN(itemRemoved1) && itemRemoved1 <= inputArray.length){
    //     // console.log("You should be here in part 1!");
    //     // console.log(itemRemoved1);
    //     inputArray.splice(itemRemoved1-1, 1);
    // }
    // // else{
    // //     console.log("why are you here in part 1?");

    // // }

    // if (itemRemoved2){
    //     if (!isNaN(itemRemoved2) && itemRemoved2 <= inputArray.length){
    //         inputArray.splice(itemRemoved2-1, 1);
    //     }
    //     // else{
    //     //     console.log("why are you here in part 2?")
    //     // }
    // }
}

module.exports = removeFromArray

let testArray = [1, 2, 3, 4, 5, "1"];
console.log(removeFromArray(testArray, 1, 2, 3));