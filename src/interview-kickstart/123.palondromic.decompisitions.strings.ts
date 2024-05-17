/**
 * @param {str} s
 * @return {list_str}
 * input "s": "abracadabra"
 * output: ["a|b|r|a|c|ada|b|r|a", "a|b|r|aca|d|a|b|r|a", "a|b|r|a|c|a|d|a|b|r|a"]
 */
export function generate_palindromic_decompositions(s) {
  let result = [];
  const helper = (partial, sArr, index, last) => {
    if (index === sArr.length) {
      if (arePalindrome(partial.slice().join('')))
        result.push(partial.slice().join(''));
      return;
    }
    partial.push(sArr[index]);
    helper(partial, sArr, index + 1,[...last,sArr[index]]);
    partial.pop();
    if (partial.length && arePalindrome(partial.slice().join(''))) {
      partial.push('|');
      partial.push(sArr[index]);
      helper(partial, sArr, index + 1,[...last,sArr[index]]);
      partial.pop();
      partial.pop();
    }
  };

  helper([], [...s], 0, []);
  return result;
}

const isPalindrome = p => {
  let s = 0,
    e = p.length - 1,
    status = true;
  while (s < e) {
    if (p[s] === p[e]) {
      s++;
      e--;
    } else {
      status = false;
      break;
    }
  }
  return status;
};

const arePalindrome = pa => {
  pa = pa.split('|');
  for (let p of pa) {
    let status = isPalindrome(p);
    if (!status) return false;
  }
  return true;
};
