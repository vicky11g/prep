export function get_subsets(arr) {
  let result = [];
  arr = [...arr].sort();
  let helper = (sl, ar, i) => {
    if (i >= ar.length) {
      result.push([...sl].join(''));
      return;
    }
    let ct = 0;
    for (let j = i; j < ar.length; j++) {
      if (ar[j] != ar[i]) break;
      ct++;
    }
    helper(sl, ar, i + ct);

    for (let j = 0; j < ct; j++) {
      sl.push(ar[i]);
      helper(sl, ar, i + ct);
    }
    for (let j = 0; j < ct; j++) {
      let c = sl.pop();
    }
  };
  helper([], arr, 0);
  return result;
}
