var city = prompt("What are the cities in Kyrgyzstan?");
if (city === "Karakol") {
  alert("True");
} else if (city === "Bishkek") {
  alert("True");
} else if (city === "Tokmok") {
  alert("True");
} else if (city === "Osh") {
  alert("True");
} else if (city === "Balykchy") {
  alert("True");
} else {
  alert("We don't know that city");
}

let num = 0;
while (num < 100) {
  console.log(num);
  num++;
}

for (let num = 0; num < 100; num++) {
  console.log(num);
}

var result = 1;
var arr = [2, 3, 4, 5];
for (var i = 0; i < arr.length; i++) {
  result = result * arr[i];
}
alert(result);
