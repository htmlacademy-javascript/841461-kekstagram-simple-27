/* developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/randomath.random The maximum is inclusive and the minimum is inclusive */
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min < 0 || max < 0) {
    return NaN;
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
}
getRandomIntInclusive();

/* The second: we check validity of quantity of symbols */
function isStringLengthValid(currentString, maxComentLength) {
  const stringArr = Array.from(currentString);
  const stringLength = stringArr.length;
  return  stringLength <= maxComentLength;
}
isStringLengthValid();
