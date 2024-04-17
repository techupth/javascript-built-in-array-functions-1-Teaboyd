let words = ["apple", "cat", "dog", "elephant"];

function get5CharWords(word) {
  // Start coding here
  return word.length >= 5;
}

const result = words.filter(get5CharWords);

console.log(result); // Output: ["apple", "elephant"]
