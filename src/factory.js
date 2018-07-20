var makeRandomList = function (size, min = 1, max = 100) {

  var result = new Array(size);
  var diff = max - min;
  for (var i = 0; i < size; ++i) {
    result[i] = min + Math.floor(Math.random() * (diff));
  }

  return result;

};

// http://stackoverflow.com/questions/962802#962890
function shuffle(array) {
  var tmp, current, top = array.length;
  if (top)
    while (--top) {
      current = Math.floor(Math.random() * (top + 1));
      tmp = array[current];
      array[current] = array[top];
      array[top] = tmp;
    }
  return array;
}