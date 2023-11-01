
const rest = (first, ...rest) => rest;
rest('a', 'b', 'c', 'd');
//rest is a function, (first, ...rest) are parameters whic hare given to the function,
//this function deconstructs the array into two arrays:
//RESULT:
//['b', 'c', 'd'] as "first" takes the ['a']*/
