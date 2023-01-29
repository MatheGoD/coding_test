/*
문제 설명 : 

두 정수 X, Y의 임의의 자리에서 공통으로 나타나는 정수 k(0 ≤ k ≤ 9)들을 이용하여 만들 수 있는 가장 큰 정수를 두 수의 짝꿍이라 합니다

(단, 공통으로 나타나는 정수 중 서로 짝지을 수 있는 숫자만 사용합니다). 

X, Y의 짝꿍이 존재하지 않으면, 짝꿍은 -1입니다. X, Y의 짝꿍이 0으로만 구성되어 있다면, 짝꿍은 0입니다.

예를 들어, 

X = 3403이고 Y = 13203이라면, X와 Y의 짝꿍은 X와 Y에서 공통으로 나타나는 3, 0, 3으로 만들 수 있는 가장 큰 정수인 330입니다. 

다른 예시로 X = 5525이고 Y = 1255이면 X와 Y의 짝꿍은 X와 Y에서 공통으로 나타나는 2, 5, 5로 만들 수 있는 가장 큰 정수인 552입니다
(X에는 5가 3개, Y에는 5가 2개 나타나므로 남는 5 한 개는 짝 지을 수 없습니다.)

두 정수 X, Y가 주어졌을 때, X, Y의 짝꿍을 return하는 solution 함수를 완성해주세요.
*/

// 첫 번 째 풀이법
// function solution(X, Y) {
//     let aNum = [];
//     for (let i = 0 ; i < X.length ; i++){
//             if(Y.match(X[i])){
//                 let j = Y.indexOf(X[i])
//                 Y = Y.slice(0,j) + Y.slice(j+1,Y.length);
//                 aNum.push(X[i])
//             }

//     }
//     let sorted = aNum.sort((a,b) => b-a)
//     if(sorted[0] == 0){
//       return '0'
//     } else{
//       return sorted.length == 0 ? "-1" : sorted.join('')
//     }
// }

function solution15(X: string, Y: string): string {
  const xArr: number[] = [...Array(10)].fill(0); // (1)
  const yArr: number[] = [...Array(10)].fill(0);

  [...X].forEach((item) => xArr[item]++); // (2)
  [...Y].forEach((item) => yArr[item]++);

  const answer = xArr.map((item, idx) => {
    // (3)
    if (item !== 0 && yArr[idx] !== 0) {
      return String(idx).repeat(Math.min(item, yArr[idx]));
    }
  });

  const result = answer.reverse().join(""); // (4)

  return result ? (+result ? result : "0") : "-1";
}

/*
기억하고 싶은 이유: 

사실 최종 풀이 범을 찾는 데 까지 약 1시간이 넘는 시간이 걸렸다....

첫 번째 방식도 작동은 제대로 하지만..소요 시가이 무척 긴 탓에 떨어진다.

간추리는 과정 동안 여러가지 시도를 해보았고.. 기록을 잊어 중간 단계가 싹 사라진 것이 흠이지만 로직을 조금 더 자세히 설명 하자면 다음과 같다.

1. 우선 숫자가 0 ~ 9까지 총 10개가 존재하기에 10개의 인덱스를 가진 빈 배역 2개를 선언해준다. 

2. 주어진 인자를 ...로 분리해 준 뒤 배열 안에 넣고 각 요소를 인덱스라고 생각하고 그 인덱스의 값들을 하나씩 늘려준다.

3.  X의 요소들로 만들어진 xArr을 맵해주는데 xArr의 요소와 그 요소의 인덱스의 yArr 값이 0 이 아니어야지만 둘 중의 최솟값 만큼 digit이 반복해져서 만들어지겠금 배열을 생성해준다.

4. 만들어진 배열은 오름차순이기에 뒤집어 준 후 합쳐준다.

사실..아직까지 시각 복잡도를 제대로 계산하지 못하는 점의 한계가 있어 둘 차이의 명확한 시간 복잡도는 모르지만..이것 저것 해본 결과 밑에 것이 되는 것으로 봐서는..밑의 시간 복잡도가 확연히 적은 건 맞는 것 같다.

*/
