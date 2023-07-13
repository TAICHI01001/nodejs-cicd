export function max(numbers: number[]): number {
  return Math.max(...numbers);
}
const result1 = max([5, 10, 3, 8, 2]);
console.log(result1);

//!=======================================================

export function min(numbers: number[]): number {
  return Math.min(...numbers);
}
const result2 = min([5, 10, 3, 8, 2]);
console.log(result2);

//TODO======================================================

export function avg(numbers: number[]): number {
  const sum = numbers.reduce((r, n) => {
    return r + n;
  });

  return sum / numbers.length;
}
const result3 = avg([5, 10, 3, 8, 2]);
console.log(result3);
