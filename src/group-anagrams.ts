// Given an array of strings, S of length N.
// Find and group the anagrams together.
// Input: ["eat", "bat", "tea", "ten", "ate", "net"]
// Output: [
// ["eat","tea","ate"],
// ["bat"],
// ["ten", "net"]
// ]

class GroupAnagrams {
  driver(input: string[]) {
    const res = [];
    const stat = {};
    for (const item of input) {
      const k = item
        .split('')
        .sort()
        .join();
      if (!stat[k]) {
        stat[k] = [];
      }
      stat[k].push(item);
    }
    console.log(stat);
  }

  withArray(input: string[]) {
    let chArray = new Array(26).fill(0);
  }
}

const ga = new GroupAnagrams();
const input = ['eat', 'bat', 'tea', 'ten', 'ate', 'net'];
ga.driver(input);
