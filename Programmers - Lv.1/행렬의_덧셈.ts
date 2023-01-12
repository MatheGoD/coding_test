/*
문제 : 
행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.
*/

type TwoDArr = number[][];

function sum(arr1: TwoDArr, arr2: TwoDArr, el: number): number[] {
  let arr: number[] = [];
  let sum: number;
  for (let i = 0; i < arr1[el].length; i++) {
    sum = arr1[el][i] + arr2[el][i];
    arr.push(sum);
  }
  return arr;
}

function solution12(arr1: TwoDArr, arr2: TwoDArr): TwoDArr {
  let combinedArr: TwoDArr = [];
  let fstarr = arr1;
  let Sndarr = arr2;
  for (let i = 0; i < fstarr.length; i++) {
    combinedArr.push(sum(fstarr, Sndarr, i));
  }
  return combinedArr;
}

/*
기억하고 싶은 이유 :
이상하게...수학적 개념이 들어간 (홀,짝 제외) 문제들은..기록을 하고 싶다.
*/
