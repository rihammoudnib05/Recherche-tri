function triABulles(tableau) {
  let arr = [...tableau];
  let nomber = arr.length;
  
  for (let i = 0; i < nomber - 1; i++) {
    for (let j = 0; j < nomber - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

let tab1 = [37, 60, 25, 16, 22, 11, 77];
console.log("Avant le tri :", tab1);
console.log("Après le tri  :", triABulles(tab1));