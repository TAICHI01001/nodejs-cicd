function max(...numbers: number[]): number {
  return Math.max(...numbers);
}
const result1 = max(5, 10, 3, 8, 2);
console.log(result1);

//!=======================================================

function min(...numbers: number[]): number {
  return Math.min(...numbers);
}
const result2 = min(5, 10, 3, 8, 2);
console.log(result2);

function avg(...numbers: number[]): number {
  const total = numbers.reduce((x, y) => x + y, 0)return result3
}
const result3 = avg(5, 10, 3, 8, 2);
