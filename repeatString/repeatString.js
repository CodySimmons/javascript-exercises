const repeatString = function(inputtedWord, loopCount) {

    let newString = "";

    for (let i = 0; i < loopCount; i++){
        newString += inputtedWord;
    }

    return newString;

}

module.exports = repeatString
