const reverseString = function(userString) {
    let stringArray = [];

    for (let i = userString.length; i >= 0; i--){
        stringArray.push(userString.substr(i, 1));
        // console.log(i);
        // console.log(userString.substr(i, 1))
    }

    return stringArray.join('');

}

// console.log(reverseString("Handlebar"));

module.exports = reverseString
