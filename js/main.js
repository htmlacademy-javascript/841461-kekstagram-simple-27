
function getRandomIntInclusive(min, max) {
  if (typeof min == "number" && typeof max == "number" && Math.sign(min) === 1 && Math.sign(max) === 1) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  return NaN;
}
getRandomIntInclusive();

function isStringLengthValid(currentComment, maxComentLength) {
  return currentComment.length <= maxComentLength;
}
isStringLengthValid();
