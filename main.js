function findWord(word) {
  const arr = word.split("");
  console.log(arr);
  let obj = {};
  arr.forEach((letter) => {
    if (!Object.keys(obj).includes(letter)) {
      obj[letter] = 1;
    } else {
      obj[letter] = obj[letter] + 1;
    }
  });
  console.log(obj);
}

findWord("nmagap");
