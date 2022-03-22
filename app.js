function mySort(myArray) {
  let arrayLength = myArray.length;
  a = 0;
  while (a < arrayLength) {
    for (i = 0; i < arrayLength; i++) {
      console.log(myArray[i]);
      if (i === 0) {
        if (myArray[0] <= myArray[1]) {
          console.log("Number", myArray[i], " stays.");
        } else {
          console.log("Number", myArray[i], " moves +1");
          let moveAway = myArray[i];
          let moveTo = myArray[i + 1];

          myArray[i + 1] = moveAway;
          myArray[i] = moveTo;
        }
      } else if (i === arrayLength - 1) {
        if (myArray[i] >= myArray[i - 1]) {
          console.log("Number", myArray[i], " stays");
        } else {
          console.log("Number", myArray[i], " moves -1");
          let moveAway = myArray[i];
          let moveTo = myArray[i - 1];

          myArray[i - 1] = moveAway;
          myArray[i] = moveTo;
        }
      } else {
        if (myArray[i] <= myArray[i + 1] && myArray[i] >= myArray[i - 1]) {
          console.log("Number", myArray[i], " stays.");
        } else if (myArray[i] < myArray[i - 1]) {
          console.log("Number", myArray[i], " moves -1");
          let moveAway = myArray[i];
          let moveTo = myArray[i - 1];

          myArray[i - 1] = moveAway;
          myArray[i] = moveTo;
        } else if (myArray[i] > myArray[i + 1]) {
          console.log("Number", myArray[i], " moves +1");
          let moveAway = myArray[i];
          let moveTo = myArray[i + 1];
          myArray[i + 1] = moveAway;
          myArray[i] = moveTo;
        }
      }
    }
    console.log("Number of iterations", a + 1);
    a++;
  }
  console.log(myArray);
}

mySort([1, 4, 5, 3, 2, 9, 11]);

//Enter a numbers and the program will sort it from smallest to the largest one.
