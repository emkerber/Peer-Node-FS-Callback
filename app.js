var fs = require('fs');

var numArray = [];

//read the number file and change numbers to array
function numsToArray(callback) {
    fs.readFile('numbers.txt', 'utf-8', function(err, fileContents) {
        if (err) {
            console.log(err);
        }

        numArray = fileContents.split(', ');

        for (var i = 0; i < numArray.length; i++) {
            numArray[i] = parseInt(numArray[i]);
        }

        getValues(numArray);

        callback();

    })
}

numsToArray(done);

function done() {
    console.log('Done calculating values:', getValues(numArray));
}

function getValues(array) {

    var values = {
        high: array[0],
        low: array[0],
        average: 0
    };

    var sum = 0;

    for (var i = 0; i < numArray.length; i++) {

        if (numArray[i] > values.high) {
            values.high = numArray[i];
        }

        if (numArray[i] < values.low) {
            values.low = numArray[i];
        }

        sum += numArray[i];

    }

    values.average = Math.round(sum/numArray.length);

    //console.log(values);

    return values;

}
