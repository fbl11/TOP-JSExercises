var repeatString = function(string, reps) {
  if (reps < 0) {
    return 'ERROR';
  } else {
    return string.repeat(reps);
  }
}

module.exports = repeatString
