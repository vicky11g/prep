/**
 * @param {int32} n
 * @return {int64}
 */
export function how_many_bsts(n) {
  let m = {};
  console.log(helper(n, m));
  return itr_helper(n);
}

const helper = (c, m) => {
  if (m[c]) return m[c];
  if (c === 0 || c === 1) return 1;
  let count = 0;
  for (let i = 1; i <= c; i++) {
    count = count + helper(i - 1, m) * helper(c - i, m);
  }
  m[c] = count;
  return count;
};

const itr_helper = n => {
  let m = {};
  for (let i = 0; i <= n; i++) m[i] = i == 0 ? 1 : 0;
  console.log(m);
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      console.log(m);

      m[i] = m[i] +( m[j] * m[i - j-1]);
    }
  }
  return m;
};
