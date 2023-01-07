/*
문제 설명
어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다. 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

제한 조건 :
- 공백은 아무리 밀어도 공백입니다.
- s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
- s의 길이는 8000이하입니다.
- n은 1 이상, 25이하인 자연수입니다.
*/
function solution11(s: string, n: number): string {
  const alphaToNum = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };

  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] != " " && s[i] == s[i].toUpperCase()) {
      const newS = s[i].toLowerCase();
      const changingNum =
        (alphaToNum[newS] + n) % 26 == 0 ? 26 : (alphaToNum[newS] + n) % 26;
      answer += getKeyByValue(alphaToNum, changingNum)?.toUpperCase();
    } else if (s[i] != " " && s[i] == s[i].toLowerCase()) {
      const changingNum =
        (alphaToNum[s[i]] + n) % 26 == 0 ? 26 : (alphaToNum[s[i]] + n) % 26;
      answer += getKeyByValue(alphaToNum, changingNum);
    } else {
      answer += s[i];
    }
  }
  return answer;
}

// 오브젝트와 특정 키에 대한 결과 값을 받아 그 값으로 해당 키를 찾는 함수
type KeyObject = {
  [key: string]: number;
};

function getKeyByValue(object: KeyObject, value: number): string | undefined {
  return Object.keys(object).find((key) => object[key] === value);
}

//// 두번째 풀이 법

function solution(s: string, n: number): string {
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    const text = s[i];
    if (text == " ") {
      answer += " ";
      continue;
    }
    const textArr = upper.includes(text) ? upper : lower;
    let index = textArr.indexOf(text) + n;
    if (index >= textArr.length) index -= textArr.length;
    answer += textArr[index];
  }
  return answer;
}
/*
기억하고 싶은 이유: 

첫 번째 풀이법은 프로그래머스의 코딩테스트는 간신히 통과했지만 억지스러운 코드다.
- 성능 저하 : 2번째 코드에 비해 성능이 3배 느리다.
- 불필요한 객체 생성 : 사실 풀고 나서 알았지만, 숫자 값과 키 값이 사실 인덱스라고 봐도 무방하기에 굳이 객체를 만들 필요가 없다.
- 그럼에도 불구하고 적는 이유 : 
	- 내가 초기에 코드를 작성할 때, 얼마나 비효율적으로 짜는지 기억하기 위해 코드를 적었다.
	- 객체의 값을 알면 객체의 키 값을 출력하는 함수 정의 

두번 째 풀이법 테스트 통과 성능 3분의 1로 줄이기 성공
- 첫 번째 풀이법에 문제점을 여러 개 찾았다 : 불필요한 객체 생성, 그로 인한 여러 조건문 
- 코드 정리 
*/
