/*
문제 : 

양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.
*/

function solution8(x: number): boolean {
  const xToArr = x.toString().split("");
  let sum = 0;
  for (let i = 0; i < xToArr.length; i++) {
    sum += Number(xToArr[i]);
  }
  return x % sum == 0 ? true : false;
}

/*
기억하고 싶은 이유 :
이상하게...수학적 개념이 들어간 (홀,짝 제외) 문제들은..기록을 하고 싶다.
*/
