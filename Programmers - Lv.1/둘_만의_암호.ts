/*
문제 설명 : 두 문자열 s와 skip, 그리고 자연수 index가 주어질 때, 다음 규칙에 따라 문자열을 만들려 합니다. 암호의 규칙은 다음과 같습니다.

문자열 s의 각 알파벳을 index만큼 뒤의 알파벳으로 바꿔줍니다.
index만큼의 뒤의 알파벳이 z를 넘어갈 경우 다시 a로 돌아갑니다.
skip에 있는 알파벳은 제외하고 건너뜁니다.

예를 들어 s = "aukks", skip = "wbqd", index = 5일 때, a에서 5만큼 뒤에 있는 알파벳은 f지만 [b, c, d, e, f]에서 'b'와 'd'는 skip에 포함되므로 세지 않습니다. 따라서 'b', 'd'를 제외하고 'a'에서 5만큼 뒤에 있는 알파벳은 [c, e, f, g, h] 순서에 의해 'h'가 됩니다. 나머지 "ukks" 또한 위 규칙대로 바꾸면 "appy"가 되며 결과는 "happy"가 됩니다.

두 문자열 s와 skip, 그리고 자연수 index가 매개변수로 주어질 때 위 규칙대로 s를 변환한 결과를 return하도록 solution 함수를 완성해주세요.
*/

function solution16(s: string, skip: string, index: number): string {
  let answer = "";
  const sArr: number[] = [];
  const skipArr: number[] = [];

  for (let i = 0; i < s.length; i++) {
    sArr.push(s.charCodeAt(i) % 97);
  }

  for (let i = 0; i < skip.length; i++) {
    skipArr.push(skip.charCodeAt(i) % 97);
  }

  for (let i = 0; i < sArr.length; i++) {
    for (let k = 0; k < index; k++) {
      do {
        sArr[i]++;
        if (sArr[i] == 26) sArr[i] = 0;
      } while (skipArr.includes(sArr[i]));
    }
    answer += String.fromCharCode(sArr[i] + 97);
  }

  return answer;
}

/*
기억하고 싶은 이유: 

기존이라면 a~z까지 직접 객체 또는 배열을 생성하고 그에 상응하는 값을 대입해 로직을 작성했다면..

charCodeAt의 존재를 진행하고 있던 프로젝트를 통해 알게 되어 한 번 써보았다.

코드가 훨씬 간결해보이는데다가 뭔가 컴퓨터에 대해서 한 발자국 더 알게 된 것 같아 기분이 좋다.

앞으로도 자주 이용해봐야겠다. 


*/
