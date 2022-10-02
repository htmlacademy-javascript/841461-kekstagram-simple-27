/* developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/randomath.random The maximum is inclusive and the minimum is inclusive */
function getRandomIntInclusive(min, max) {
  min = Math.abs(Math.ceil(min));
  max = Math.abs(Math.floor(max));
  return Math.floor(Math.random() * (max - min + 1) + min);
}
getRandomIntInclusive();

/* At first we get quantity of symbols of current coment */
function getCurrentStringLength(currentString) {

  const stringArr = Array.from(currentString);
  const stringLength = stringArr.length;

  return stringLength;
}
const currentComentLength = getCurrentStringLength();

/* The second: we check validity of quantity of symbols */
function isStringLengthValid(maxComentLength) {
  return currentComentLength <= maxComentLength ? true : false;
}
const validComent = isStringLengthValid();
