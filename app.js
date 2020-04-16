function divisible(number) {
    //CHECKS IF THE NUMBER IS AN INTEGER
  if (Number.isInteger(number)) {
    //initailises the array to be returned
    let arr = [];

    // pushes all the values in the array
    for (let i = 1; i <= number; i++) {
      arr.push(i);
      // breaks at the given parameter
      if (i === number) {
        break;
      }
    }

    // uses a filter method on each of the items
    arr.filter((i, u) => {
      if (i % 2 === 0) {
        arr[u] = "yu";
      }
      if (i % 3 === 0) {
        arr[u] = "gi";
      }
      if (i % 5 === 0) {
        arr[u] = "oh";
      }
      if (i % 2 === 0 && i % 3 === 0) {
        arr[u] = "yu-gi";
      }
      if (i % 2 === 0 && i % 5 === 0) {
        arr[u] = "yu-oh";
      }
      if (i % 3 === 0 && i % 5 === 0) {
        arr[u] = "gi-oh";
      }
      if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
        arr[u] = "yu-gi-oh";
      }
    });
    console.log(arr);
    return arr;
  }

  return console.log("INPUT A NUMBER");
}

divisible(100);
