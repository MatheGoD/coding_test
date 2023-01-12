/*
문제 : 
정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.
*/

function solution14(numbers: number[]): number[] {
  const sumList: number[] = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i != j) {
        sumList.push(numbers[i] + numbers[j]);
      }
    }
  }
  const unique = new Set(sumList.sort((a, b) => a - b));
  const answer = Array.from(unique);
  return answer;
}

/*
기억하고 싶은 이유 :
1. 자료구조 Set을 이용한 Unique 값 정리
2. 이 상황에서, Set에서 Array로 변경하는 방법에는 3가지가 있다고 한다
   - const answer = [n for (n of unique)];
   - const answer = [...unique];
   - const answer = Array.from(unique)
   3가지 방법 중 3번째 방법을 택한 이유는 1번의 방법의 경우 "deprecated"되진 않았지만 너무 old verison이라고 하며,
   2번째 방법은 3번째 방법보다 성능이 떨어진다고 해서 3번째 방법을 택했다. 

   하지만 검색 결과 둘 다 O(n)의 Time Complexity를 갖는 것으로 판명 되었다..하하
*/
