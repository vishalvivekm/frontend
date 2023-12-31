async function sumOfSquares(numbers) {
  const squares = numbers.map((number) => number * number);
  const sum = squares.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return sum;
}
 

async function calculateSum(arrayOfNumbers) {
  try {
   const sum = await sumOfSquares(arrayOfNumbers)
    console.log(sum);
  } catch (error) {
    console.log(error)
  }
}

calculateSum([1,2,3,4,5])

