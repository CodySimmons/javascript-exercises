const repeatString = function(inputtedWord, loopCount) {

    if(loopCount<0){
        return 'ERROR';
    }

    let newString = "";

    for (let i = 0; i < loopCount; i++){
        newString += inputtedWord;
    }

    return newString;

}

module.exports = repeatString
