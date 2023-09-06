const vowels = ["a", "o", "i", "e", "u"];

function findVowels(word, vowels) {
  let count = 0;
  const wordSplit = word.split("");

  wordSplit.forEach((element) => {
    if (vowels.includes(element)) {
      count += 1;
    }
  });

  console.log(count);
}

findVowels("Nma gaaaap", vowels);
