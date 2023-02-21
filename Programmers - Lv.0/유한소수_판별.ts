/*
문제 : 
소수점 아래 숫자가 계속되지 않고 유한개인 소수를 유한소수라고 합니다. 분수를 소수로 고칠 때 유한소수로 나타낼 수 있는 분수인지 판별하려고 합니다. 유한소수가 되기 위한 분수의 조건은 다음과 같습니다.

기약분수로 나타내었을 때, 분모의 소인수가 2와 5만 존재해야 합니다.
두 정수 a와 b가 매개변수로 주어질 때, a/b가 유한소수이면 1을, 무한소수라면 2를 return하도록 solution 함수를 완성해주세요.
*/

// function solution(a, b) {
//   const factorsB = [];
//   const primes = [];
//   const arr = [];
//   const gcf = gcd(a, b);
//   const resizedB = b / gcf;
//   if (resizedB == 1) {
//     return 1;
//   }
//   for (let i = 1; i <= resizedB; i++) {
//     if (resizedB % i == 0) {
//       factorsB.push(i);
//     }
//   }
//   for (let j = 0; j < factorsB.length; j++) {
//     if (primes(factorsB[j])) {
//       primes.push(factorsB[j]);
//     }
//   }
//   for (let k = 0; k < primes.length; k++) {
//     if (!(primes[k] == 2) && !(primes[k] == 5)) {
//       arr.push(primes[k]);
//     }
//   }
//   if (arr.length > 0) {
//     return 2;
//   } else {
//     return 1;
//   }
// }

// function primes(divisor) {
//   for (let i = 2; i <= Math.sqrt(divisor); i++) {
//     if (divisor % i === 0) return true;
//   }
//   return false;
// }

// function gcd(x, y) {
//   x = Math.abs(x);
//   y = Math.abs(y);
//   while (y) {
//     var t = y;
//     y = x % y;
//     x = t;
//   }
//   return x;
// }

function solution18(a: number, b: number): number {
  let gcd = (x: number, y: number) => (y === 0 ? x : gcd(y, x % y));
  let reducedB = b / gcd(a, b);
  return reducedB === 1 || [2, 5].some((n) => reducedB % n === 0) ? 1 : 2;
}

/*
이거 내가 반드시 타입스크립토로 리팩토링 해서 뜯어 고친다..
이게 말이 됩니까..
레벨 0 짜리 문제를 내가 이렇게 풀어야 돼? 아니되오!! 오늘 이거에 너무 많은 시간을 낭비했으니 반드시 뜯어 고친다.



리팩토링 완료!!!!!!!!!!

아자자자자자자자자 화살표 함수가 확실히 더 간단하고 재귀 함수를 쓰니 빠르게 해결이 되었다!


*/
