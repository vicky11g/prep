import { selectionSort } from './101.selection.sort';
import { bubbleSort } from './102.bubble.sort';
import { insertionSort } from './103.insertion.sort';
import { mergeSort } from './103.merge.sort';
import { quickSort } from './104.quick.sort';
import { heapSort } from './105.heap.sort';
import { countingSort } from './106.counting.sort';
import { dutch_flag_sort } from './111.dutch.flag.sort';
import { sortInterval } from './112.interval.array.sort';
import { sort_array } from './113.sort.char.';
import { merge_k_lists } from './114.merg.ksorted.linkedlist';
import { getKthLargest } from './116.kth.largest';
import { kth_largest } from './118.kth.largest.instream';
import { online_median } from './119.median.of.input.stream';
import { find_intersection } from './120.intersection.of.3.sorted.array';
import { nearest_neighbours } from './121.nearest.neighbours';
import { getLetterPermutation } from './122.letter.case.permutation';
import { generate_palindromic_decompositions } from './123.palondromic.decompisitions.strings';
import { how_many_bsts } from './124.count.bst.with.n.nodes';
import { fibbonacci } from './125.fibbonacci';
import { find_all_possibilities } from './126.wildcard.string';
import { get_permutations } from './127.pemutations.duplicate.values';
import { get_all_subsets } from './128.all.subsets';
import { get_all_valid_combinations } from './129.generate.parentheses';
import { get_subsets } from './131.subsets.with.duplicate';
import { get_words_from_phone_number } from './132.words.from.phone.numbers';
import { getAllBinary } from './133.all.binary.fo.n.size';
import { generate_all_combinations } from './134.subsets.sum.equal.to';
import { find_all_arrangements } from './130.n.qeen.problem';

const _run = () => {
  // console.log(heapSort([5, 3, 1, 1, 3, 5, 0, 9]));
  // console.log(dutch_flag_sort(["R", "B", "G"]))
  // console.log(sortInterval([[1, 5],
  // [10, 15], [8, 10], [5, 8]]))
  // console.log(sort_array(["a", "s", "d", "f", "g", "*", "&", "!", "z", "y"]))
  // console.log(
  //   merge_k_lists([
  //     [1, 13, 22, 23],
  //     [2, 12, 14],
  //     [3, 11, 15, 21],
  //     [4, 10, 16],
  //     [5, 9, 17, 20],
  //     [6, 8, 18],
  //     [7, 19],
  //   ]),
  // );
  // console.log(getKthLargest([3,2,1,5,6,4], 2));
  // console.log(kth_largest(2, [1000000000],[100000000]))
  // console.log(online_median([3,8,5,2]))
  // console.log(
  //   find_intersection([1, 2, 2, 2, 9], [1, 1, 2, 2], [1, 1, 1, 2, 2, 2]),
  // );
  // console.log(
  //   nearest_neighbours(1, 1, 1, [
  //     [0, 0],
  //     [1, 0]
  //   ]),
  // );
  // console.log(getLetterPermutation('a1b2'))
  // console.log(generate_palindromic_decompositions('abracadabra'));
  // console.log(how_many_bsts(5));
  //  console.log(fibbonacci(7));
  // console.log(find_all_possibilities('1?0?'));
  // console.log(get_permutations([1,2,2]));
  // console.log(get_all_subsets(['(',')','(',')']));
  // console.log(get_all_valid_combinations(3));
  // console.log(get_subsets('aaba'))
  // console.log(get_words_from_phone_number('10'));
  // console.log(getAllBinary(3));
  // console.log(generate_all_combinations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],300));
  console.log(find_all_arrangements(3));
};
_run();
