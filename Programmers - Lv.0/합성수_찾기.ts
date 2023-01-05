/*
문제 : 
약수의 개수가 세 개 이상인 수를 합성수라고 합니다. 자연수 n이 매개변수로 주어질 때 n이하의 합성수의 개수를 return하도록 solution 함수를 완성
*/

function solution2(n: number): number {
  const primeNum = (num: number): boolean => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return true;
    }
    return false;
  };

  let count = 0;

  for (let i = 1; i <= n; i++) {
    if (primeNum(i)) count += 1;
  }

  return count;
}

/*
기억하고 싶은 이유 : 
소수를 찾을 때 유용한 에라토스테네의 체를 응용하기!!
*/
