var fs = require('fs'); //to require fs

var numArray = []; //to initialize the numArray

function numsToArray(callback) {
    //read the number file
    fs.readFile('numbers.txt', 'utf-8', function(err, fileContents) {
        if (err) {
            console.log(err); //if there's an error reading the file
        }

        numArray = fileContents.split(', '); //add the individual numbers (seperated by commas) to the numArray

        //change the strings into numbers
        for (var i = 0; i < numArray.length; i++) {
            numArray[i] = parseInt(numArray[i]);
        }

        //call the getValues function (below) with numArray
        getValues(numArray);

        //to run a function when this function completes
        callback();

    })
}

//pass in the done function, to be run when numsToArray finishes
numsToArray(done);

//when everything is done, console log the values generated
function done() {
    console.log('Done calculating values:', getValues(numArray));
}

function getValues(array) {

    //initialize an object to hold the values
    var values = {
        high: array[0],
        low: array[0],
        average: 0
    };

    //initialie the sum variable outside of the for loop
    var sum = 0;

    for (var i = 0; i < numArray.length; i++) {

        //store the highest value in the object
        if (numArray[i] > values.high) {
            values.high = numArray[i];
        }

        //store the lowest value in the object
        if (numArray[i] < values.low) {
            values.low = numArray[i];
        }

        //get the sum of the values
        sum += numArray[i];

    }

    //find the average of numArray and round
    values.average = Math.round(sum/numArray.length);

    //console.log(values);

    //running this function returns the values object
    return values;

}
