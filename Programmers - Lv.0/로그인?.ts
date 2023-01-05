/*
문제 : 
머쓱이는 프로그래머스에 로그인하려고 합니다. 머쓱이가 입력한 아이디와 패스워드가 담긴 배열 id_pw와 회원들의 정보가 담긴 2차원 배열 db가 주어질 때, 다음과 같이 로그인 성공, 실패에 따른 메시지를 return하도록 solution 함수를 완성해주세요.

아이디와 비밀번호가 모두 일치하는 회원정보가 있으면 "login"을 return합니다.
로그인이 실패했을 때 아이디가 일치하는 회원이 없다면 “fail”를, 아이디는 일치하지만 비밀번호가 일치하는 회원이 없다면 “wrong pw”를 return 합니다.
*/

function solution7(id_pw: string[], db: string[]): string {
  let answer = "";
  for (let i of db) {
    if (id_pw[0] == i[0] && id_pw[1] == i[1]) {
      answer = "login";
      break;
    } else if (id_pw[0] == i[0] && id_pw[1] != i[1]) {
      answer = "wrong pw";
      break;
    } else {
      answer = "fail";
    }
  }
  return answer;
}

/*
기억하고 싶은 이유 : 
반복문을 풀면서 한 번 쯤은 break를 사용해보고 싶었다고 느꼈고 return으로 함수를 종료하는 대신
break문을 활용하여 함수를 마무리했다.
*/
