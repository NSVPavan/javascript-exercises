//c-0/100=f-32/180
const convertToCelsius = function(fahrenheit) {
  return parseFloat(((fahrenheit-32)*100/180).toFixed(1));
};

const convertToFahrenheit = function(celsius) {
  return parseFloat((celsius*180/100+32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
