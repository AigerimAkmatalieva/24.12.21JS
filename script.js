function callFriend(friendsName = " Bakyt") {
  console.log("pick up the phone");
  console.log("Type in the number of" + friendsName);
  console.log("Press call");
  console.log("Wait for answer");
}

function calculateSquarArea(a, b) {
  console.log(a * b);
}

function calculateCylinderVolume(r, h) {
  return 3.14 * r * r * h;
}

var volume = calculateCylinderVolume(3, 4);
console.log(volume);
