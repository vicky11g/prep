export function getAllBinary(n) {
  let result = [];
  let m = {};

  let helper = (r, i) => {
    if(m[[...r].join('')]) return;
    else m[[...r].join('')]=1;
    if (i === n) {
      result.push(r.slice().join(''));
      return;
    }
    for (let j = i; j < n; j++) {
      r.push('0');
      helper(r, i + 1);
      r.pop();
      r.push('1');
      helper(r, i + 1);
      r.pop();
    }
  }
  helper([], 0);
  return result;
}