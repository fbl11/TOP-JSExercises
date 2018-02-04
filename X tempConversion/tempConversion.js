var ftoc = function(farenheit) {
  return Math.round((farenheit - 32) / 1.8 * 10) / 10;
};

var ctof = function(celsius) {
  return Math.round((celsius * 1.8 + 32) * 10) / 10;
};

module.exports = {
  ftoc,
  ctof
}
