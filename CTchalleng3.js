function triParSelection(tableau) {
  let arr = [...tableau];
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    if (minIdx !== i) {
      let temp = arr[i];
      arr[i] = arr[minIdx];
      arr[minIdx] = temp;
    }
  }
  return arr;
}

let tab3 = [64, 25, 12, 22, 11];
console.log("Avant le tri :", tab3);
console.log("Après le tri  :", triParSelection(tab3));