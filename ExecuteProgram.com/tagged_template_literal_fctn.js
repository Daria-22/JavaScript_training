function doubleNumbers(strings, ...values) {
    let result = '';
    // Initialize the result string as an empty string
  
    for (let i=0; i<strings.length; i++)   
// Iterate through the `strings` array
{
result += strings[i];
// Append the current string part from `strings` to the result string
if (values[i] !== undefined)
// Check if there's a corresponding value in the `values` array
{
result += values[i]*2;
// If the value exists, double it and append it to the result string
}
}
return result;
}
doubleNumbers`the numbers ${1} and ${2}`;

/*GOAL:
'the numbers 2 and 4'
YOURS:
'the numbers 2 and 4'*/


/*Here's a step-by-step breakdown of how the doubleNumbers function processes the template literal:

Initialize the result string as an empty string.

Start iterating through the strings array, which contains the string parts:

On the first iteration (i = 0), strings[i] is 'the numbers ' and is appended to the result.
On the second iteration (i = 1), strings[i] is ' and ' and is appended to the result.
On the third iteration (i = 2), strings[i] is '', which is an empty string and is appended to the result.
Inside the loop, check if there's a corresponding value in the values array:

On the first iteration (i = 0), values[i] is 1, which is doubled to 2 and appended to the result.
On the second iteration (i = 1), values[i] is 2, which is doubled to 4 and appended to the result.
The loop finishes, and the modified result string, which now contains 'the numbers 2 and 4', is returned.

So, by the end of this process, the output variable contains the string 'the numbers 2 and 4', which is printed to the console.*/