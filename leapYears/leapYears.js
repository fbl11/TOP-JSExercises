var leapYears = function(year) {
  // return !(year % 4 !== 0 || (year % 4 === 0 && year % 100 === 0 && year % 400 !== 0));
  // return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0); //De Morgan
  return year % 4 === 0 && !(year % 100 === 0 && year % 400 !== 0); //De Morgan
};

module.exports = leapYears
