function triParInsertion(tableau) {
  let arr = [...tableau];
  let n = arr.length;

  for (let i = 1; i < n; i++) {
    let cle = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > cle) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = cle;
  }
  return arr;
}

let tab2 = [12, 11, 13, 5, 6];
console.log("Avant le tri :", tab2);
console.log("Après le tri  :", triParInsertion(tab2));