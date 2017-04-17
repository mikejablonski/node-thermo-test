var max31855 = require('max31855');

var thermoSensor = new max31855();
thermoSensor.readTempC(function(temp) {
    //console.log('Temp in degrees celsius: ', temp);
    console.log('Temp in degrees farenhet: ', temp * 9 / 5 + 32);
});
