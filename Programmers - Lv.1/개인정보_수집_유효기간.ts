/*
고객의 약관 동의를 얻어서 수집된 1~n번으로 분류되는 개인정보 n개가 있습니다. 

약관 종류는 여러 가지 있으며 각 약관마다 개인정보 보관 유효기간이 정해져 있습니다. 당신은 각 개인정보가 어떤 약관으로 수집됐는지 알고 있습니다. 수집된 개인정보는 유효기간 전까지만 보관 가능하며, 유효기간이 지났다면 반드시 파기해야 합니다.

예를 들어, A라는 약관의 유효기간이 12 달이고, 2021년 1월 5일에 수집된 개인정보가 A약관으로 수집되었다면 해당 개인정보는 2022년 1월 4일까지 보관 가능하며 2022년 1월 5일부터 파기해야 할 개인정보입니다.

당신은 오늘 날짜로 파기해야 할 개인정보 번호들을 구하려 합니다.

모든 달은 28일까지 있다고 가정합니다.

Example 

Input
today : "2022.05.19"
terms : ["A 6","B 12","C 3"]
privacies : ["2021.05.02 A","2021.07.01 B","2022.02.19 C","2022.02.20 C"]

Output
[1,3]
*/

function solution14(today: string, terms: string[], privacies: string[]) {
  const answer: number[] = [];
  const termsArr = terms.map((el) => el.split(" "));
  const privaciesArr = privacies.map((el) => el.split(" "));

  const todayToDays = conversion(today);
  privaciesArr.forEach((el) => {
    let comparison = 0;
    for (let i = 0; i < terms.length; i++) {
      if (el[1] === termsArr[i][0]) {
        comparison = conversion(el[0]) + Number(termsArr[i][1]) * 28;
      }
    }
    if (comparison <= todayToDays) {
      answer.push(privaciesArr.indexOf(el) + 1);
    }
  });
  return answer;
}

function conversion(n: string) {
  const arr = n.split(".");
  return Number(arr[0]) * 12 * 28 + Number(arr[1]) * 28 + Number(arr[2]);
}

/*
기억하고 싶은 이유: 

입코딩으로 이 문제를 푸는데 걸린 시간은 약 5~10분으로 굉장히 짧았지만..30분동안 이 문제를 잡고 있었다.

그 이유는 처참하게도 1년에 52주 1달에 28일이라는 가정하에 문제를 풀어서 답이 맞지 않았던 것..

한 달에 28일이라는 것은 1달에 4주 즉 1년에 48주라는 것인데..주의력 결핍..항상 이게 문제다...

정신 차리자..문제를 보고 또 보고 어떤 문제를 풀더라도 항상 특이점을 메모하는 것이 중요하다.

Keep in Mind Bro...
*/
