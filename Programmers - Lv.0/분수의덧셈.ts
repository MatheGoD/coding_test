/*
문제 : 첫 번째 분수의 분자와 분모를 뜻하는 denum1, num1, 두 번째 분수의 분자와 분모를 뜻하는 denum2, num2가 매개변수로 주어집니다. 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

제한 사항 : 0 <denum1, num1, denum2, num2 < 1,000
*/
type Sum = (a: number, b: number, c: number, d: number) => number[];

const solution1: Sum = (denum1, num1, denum2, num2) => {
  // num이 분모 , denum이 분자 "이름 좀 바꿔 주세요.."
  const answer: number[] = [];
  const commonDenum = num1 * num2;
  const sumNum = num1 * denum2 + num2 * denum1;
  const gcf = findGCF(commonDenum, sumNum);

  answer.push(sumNum / gcf);
  answer.push(commonDenum / gcf);

  return answer;
};

const findGCF = (n1: number, n2: number): number => {
  if (n2 == 0) {
    return n1;
  }
  return findGCF(n2, n1 % n2);
};

/*
기억하고 싶은 이유 : 
예전에는 GCF를 구할 때, 공약수를 직접 구한 후 배열에 넣고 정렬한 다음 최댓값을 찾았지만,
전공 시절 배운 유클리드의 호제법이 생각나서 적용!! 쉬운 문제지만 새로운 알고리즘을 적용했다는 사실에 오~놀라워라! 놀라워!
*/
