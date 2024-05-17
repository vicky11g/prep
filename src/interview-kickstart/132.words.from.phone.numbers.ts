/**
 * 
 * Given a seven-digit phone number, return all the character combinations that can 
 * be generated according to the following mapping:
 * @param {str} phone_number
 * @return {list_str}
 * input "phone_number": "1234567"
 * [
"adgjmp",
"adgjmq",
"adgjmr",
"adgjms",
"adgjnp",
...
"cfilns",
"cfilop",
"cfiloq",
"cfilor",
"cfilos"
]

First string "adgjmp" in the first line comes from the first characters mapped to 
digits 2, 3, 4, 5, 6 and 7 respectively. Since digit 1 maps to nothing, nothing is 
appended before 'a'. Similarly, the fifth string "adgjnp" generated from first 
characters of 2, 3, 4, 5 second character of 6 and first character of 7. 
All combinations generated in such a way must be returned in the lexicographical 
order.
 */
export function get_words_from_phone_number(phone_number) {
  // Write your code here.
  let result = [];
  let oneMap = {};
  // Remove digits 0 and 1 as they map to no characters
  phone_number = phone_number.replace(/0|1/g, '');
  let m = {
    1: '',
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };
  let st = {};
  let helper = (num, i, res) => {
    console.log(res)
    if (st[res.slice().join('')]) return;
    else st[res.slice().join('')] = 1;
    if (i === num.length) {
      result.push(res.slice().join(''));
      return;
    }
    for (let k = i; k < num.length; k++) {
      for (let j = 0; j < m[num[i]].length; j++) {
        res.push(m[num[i]][j]);
        helper(num, i + 1, res);
        res.pop();
      }
    }
  };
  helper(phone_number, 0, []);
  return result.length ? result : result[""];
}
