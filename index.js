// Code your solutions in this file

//["Guadalupe", "Ollie", "Aki"]

function writeCards(arr) {
  let thankYouArr = [];
  for (let i = 0; i < arr.length; i++) {
    thankYouArr.push(`Thank you, ${arr[i]}, for the wonderful surprise gift!`);
  }
  return thankYouArr;
}
console.log(writeCards(["Guadalupe", "Ollie", "Aki"]));

function countDown(num) {
  let i = num;
  while (i >= 0) {
    console.log(i);
    i--;
  }
}

countDown(10);
