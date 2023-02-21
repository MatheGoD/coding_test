/*
JadenCase란 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열입니다. 

단, 첫 문자가 알파벳이 아닐 때에는 이어지는 알파벳은 소문자로 쓰면 됩니다. (첫 번째 입출력 예 참고)

문자열 s가 주어졌을 때, s를 JadenCase로 바꾼 문자열을 리턴하는 함수, solution을 완성해주세요.
*/

//my first trial
function solution16(s: string) {
  let answer: string[] = [];
  const sArr = s.toLowerCase().split(" ");

  sArr.forEach((el) => {
    answer.push(el.replace(el[0], el[0].toUpperCase()));
  });
  return answer.join(" ");
}

//my second trial
function solution17(s: string) {
  let answer: string[] = [];
  const sArr = s.toLowerCase().split(" ");

  sArr.forEach((el) => {
    if (/[a-z]/i.test(el)) {
      answer.push(el.replace(el[0], el[0].toUpperCase()));
    } else {
      answer.push(el);
    }
  });
  return answer.join(" ");
}

/*
기억하고 싶은 이유: 

문제의 난이도는 쉬웠지만...첫 번째 함수에서 런타임오류가 떴다..

forEach가 일반적인 for Loop보다 성능이 약간 떨어진다는 것을 알기에 한 번 바꿔보았지만 여전히 런타임 에러가 발생해서 여러가지 생각을 해보았다.

혹시..모든 문자를 검증 없이 전부 replace를 해보려고하는 시도 때문은 아닐까? 그래서 만약 단어의 첫번째 문자가 숫자라면 바로 push를 해버리는 조건문 분기를 만들어 적용했더니 런타임을 통과했다.

아무래도 런타임 에러의 원인은 replace이었던것 같다..효율성을 따지고 보면 분기점에서 바로 걸러주는 것이 더 나은 것 같다.
*/
