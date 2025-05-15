const sampleObject = {
  red: "#FF0000",
  green: "#00FF00",
  white: "#FFFFFF"
};

function hasKey(key) {
  return key in sampleObject;
}
console.log(hasKey("red"));   
console.log(hasKey("blue"));   
console.log(hasKey("white"));