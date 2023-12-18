
function count(arr, callback) {
let count = 0;
  
arr.forEach(element => {if (callback(element)) {
      count++;}    
  });
  return count;
}
[
  count([1, 2, 3, 4], element => element === 3),
  count([1, 2, 3, 4], element => element > 1),
  count([2, 1, 4, 5, 2, 8], element => element === 2),
  count(['a', 'b'], e => e === 'd'),
  count([], element => element === 'd'),
];
(5) [1, 3, 2, 0, 0]
