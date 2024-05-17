export function getLetterPermutation(inStr) {
  const result = [];
  const helper = (str,n) => {
    if(!n) {
      result.push(str);
      return;
    }
    helper(str+n.charAt(0), n.substring(1));
    if(!Number(n.charAt(0))) {
      helper(str+n.charAt(0).toUpperCase(),n.substring(1))
    } 
  }
  helper('',inStr)
  return result;

}