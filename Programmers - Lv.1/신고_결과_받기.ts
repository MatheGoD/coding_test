/*
신입사원 무지는 게시판 불량 이용자를 신고하고 처리 결과를 메일로 발송하는 시스템을 개발하려 합니다. 무지가 개발하려는 시스템은 다음과 같습니다.

각 유저는 한 번에 한 명의 유저를 신고할 수 있습니다.

신고 횟수에 제한은 없습니다. 서로 다른 유저를 계속해서 신고할 수 있습니다.
한 유저를 여러 번 신고할 수도 있지만, 동일한 유저에 대한 신고 횟수는 1회로 처리됩니다.
k번 이상 신고된 유저는 게시판 이용이 정지되며, 해당 유저를 신고한 모든 유저에게 정지 사실을 메일로 발송합니다.

유저가 신고한 모든 내용을 취합하여 마지막에 한꺼번에 게시판 이용 정지를 시키면서 정지 메일을 발송합니다.
다음은 전체 유저 목록이 ["muzi", "frodo", "apeach", "neo"]이고, k = 2(즉, 2번 이상 신고당하면 이용 정지)인 경우의 예시입니다.

Input 
id_list = ["con","ryan"]
report = ["ryan con","ryan con","ryan con","ryan con"]
k = 3

Output
[0,0]
*/

function solution15(id_list: string[], report: string[], k: number): number[] {
  const reported = new Map<string, number>();
  const mail = new Map<string, number>();
  const reportArr = report.map((el) => el.split(" "));

  id_list.forEach((el) => {
    reported.set(el, 0);
    mail.set(el, 0);
  });

  const finalReport = [...new Set(reportArr.map(JSON.stringify))].map(
    JSON.parse
  );

  finalReport.forEach((el) => reported.set(el[1], reported.get(el[1])! + 1));

  const bannedId = [...reported.entries()]
    .filter((el) => el[1] >= k)
    .map((el) => el[0]);

  finalReport.forEach((el) => {
    if (bannedId.includes(el[1])) {
      mail.set(el[0], mail.get(el[0])! + 1);
    }
  });

  return [...mail.values()];
}

/*
기억하고 싶은 이유: 

우선 성공적으로 Map과 Set의 자료구조를 응용했다는 점을 지적하고 싶다.

처음 Lv.1을 시작했을 때만 하더라도...Map과 Set은 모르고 단순한 for문의 무한 반복만 일어나고 있었는데..

어느샌가 나도 모르게 Map과 Set과 같은 자료구조를 적절히 사용하여 문제를 풀고 있던 것이었다.

기분이 좋다..

아!! 한가지 더

JSON.stringify && JSON.parse를 사용한 이유는 다음과 같다.

Set 자료구조는 본래 원시 데이터만 받아 중복되는 것을 제거하는데 처음에 배열을 넣고 돌려보니 제대로 인식을 하지 못해 중복을 걸러내지 못해 방법을 찾아본 결과 JSON.stringify로 JSON STRING문자열로 인식하게 해준 뒤 다시 JSON.parse로 Object(Array) 형태로 바꿔주었다.

앞으로 자료구조를 쓰게 되면 어떤 타입의 인자를 받는지 인식을 제대로 하고 상황에 맞춰 적용해야 겠다.
*/
