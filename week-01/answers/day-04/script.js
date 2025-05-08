let score = 85;

// if-else
if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else {
  console.log("F");
}

// switch
switch (Math.floor(score / 10)) {
  case 10:
  case 9:
    console.log("A"); break;
  case 8:
    console.log("B"); break;
  case 7:
    console.log("C"); break;
  default:
    console.log("F");
}

// for loop
for (let i = 1; i <= 5; i++) {
  console.log(i);
}