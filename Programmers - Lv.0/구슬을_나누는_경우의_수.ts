/*
문제 : 머쓱이는 구슬을 친구들에게 나누어주려고 합니다. 구슬은 모두 다르게 생겼습니다. 머쓱이가 갖고 있는 구슬의 개수 balls와 친구들에게 나누어 줄 구슬 개수 share이 매개변수로 주어질 때, balls개의 구슬 중 share개의 구슬을 고르는 가능한 모든 경우의 수를 return 하는 solution 함수를 완성해주세요.
*/

type Cases = (a: number, b: number) => number;

const solution6: Cases = (balls, share) => {
  const numerator = fact(balls);
  const denom1 = fact(share);
  const denom2 = fact(balls - share);
  let answer = Math.round(numerator / (denom1 * denom2));
  return answer;
};

function fact(number: number): number {
  let answers = 1;
  for (let i = number; i >= 1; --i) {
    BigInt((answers *= i));
  }
  return answers;
}

/*
기억하고 싶은 이유 : 
푸는 방식은 알았으나.....
계속 답이 나오지 않아 일일이 몇 가지 테스트를 거쳐 가며 깨달았다....
자바스크립트 내에서 정수를 표현하는 방식이 정해져 있다는 것을..
자바스크립트 내에서는 큰 정수(-1.710^308 to 1.710^308)의 경우 BigInt를 써줘야 하며 그걸 쓸 경우, 
반올림을 해줘야 되는 것을...
*/
