export function fibbonacci(num) {
  let m = {};
  // return helper(num);
  // return helper_memoized(num, 0, 1);
  // let r = helper_memoized_aux_space(num, m);
  // console.log(m);
  return fibItr(num);
}

let helper = n => {
  console.log(n);

  if (n === 0 || n === 1) return 1;
  return helper(n - 1) + helper(n - 2);
};

let helper_memoized = (n, b1, b2) => {
  console.log(n, b1, b2);
  if (n === 0) return b1;
  return helper_memoized(n - 1, b2, b1 + b2);
};

let helper_memoized_aux_space = (n, m) => {
  if (m[n]) return m[n];

  if (n === 0) return 0;
  if (n === 1) return 1;
  m[n] = helper_memoized_aux_space(n - 1, m) + helper_memoized_aux_space(n - 2, m);
  return m[n]
};
// 
let fibItr = (n) => {
  let last = 1, second_last = 0;
  if (n === 1 || n === 0) return 1;
  for (let i = 2; i <= n; i++) {
    let t = second_last + last;
    second_last = last;
    last = t;
    console.log(last,i);
  }
  return last;
}