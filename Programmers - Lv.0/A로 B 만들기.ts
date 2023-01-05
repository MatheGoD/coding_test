/*
문제 :
문자열 before와 after가 매개변수로 주어질 때, before의 순서를 바꾸어 after를 만들 수 있으면 1을, 만들 수 없으면 0을 return 하도록 solution 함수를 완성해보세요.
*/
type Equal = (a: string, b: string) => number;

const solution4: Equal = (before, after) => {
  const firstWord = before.split("").sort().join("");
  const secondWord = after.split("").sort().join("");
  return firstWord == secondWord ? 1 : 0;
};

/*
기억하고 싶은 이유 :
프로그래머스 역사상 처음 받아보는 9점!!
*/
