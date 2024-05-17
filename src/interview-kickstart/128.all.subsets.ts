/**
 * @param {list_int32} arr
 * @return {list_list_int32}
 */
export function get_all_subsets(arr) {
  let finalResult = [];
  let helper = (result, index, src) => {
    if (index === src.length) {
      finalResult.push(result.slice());
      return;
    }
    result.push(src[index]);
    helper(result, index + 1, src);
    result.pop();
    helper(result, index + 1, src);
  };
  helper([], 0, arr);
  return finalResult;
}
