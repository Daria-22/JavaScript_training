function hasPositiveNumbers(numbers) 
  {let sawPositiveNumber = false;
  numbers.forEach(n => {
    if (n > 0) {
      sawPositiveNumber = true;
    }
  });
  return sawPositiveNumber;
}
const results =
[
    hasPositiveNumbers([]),
    hasPositiveNumbers([-2, -1, 0]),
    hasPositiveNumbers([-1, 0, 100]),
    hasPositiveNumbers([50]),
  ];

  console.log(results);