// 겹치는 선분의 길이

// 문제 : 선분 3개가 평행하게 놓여 있습니다. 세 선분의 시작과 끝 좌표가 [[start, end], [start, end], [start, end]] 형태로 들어있는 2차원 배열 lines가 매개변수로 주어질 때, 두 개 이상의 선분이 겹치는 부분의 길이를 return 하도록 solution 함수를 완성해보세요.

function solution(lines) {
  const expan = new Array();

  lines.forEach((a) => {
    const expanding = new Array();
    for (let i = a[0]; i <= a[1]; i++) {
      expanding.push(i);
    }
    expan.push(expanding);
  });

  const fLapped = findOverLapped(expan[0], expan[1]);
  const sLapped = findOverLapped(expan[1], expan[2]);
  const tLapped = findOverLapped(expan[0], expan[2]);
  const sum = fLapped.concat(sLapped).concat(tLapped);

  if (repeated(sum) > 1) {
    const finalLapped = [...new Set(sum)];
    const length = finalLapped.length - 1;

    return length >= 0 ? length : 0;
  } else {
    const fs = fLapped.length > 0 ? fLapped.length - 1 : 0;
    const ss = sLapped.length > 0 ? sLapped.length - 1 : 0;
    const ts = tLapped.length > 0 ? tLapped.length - 1 : 0;
    return fs + ss + ts;
  }
}

function findOverLapped(arr1, arr2) {
  const overLapped = new Array();
  for (let j = 0; j < arr1.length; j++) {
    for (let k = 0; k < arr2.length; k++) {
      if (arr1[j] == arr2[k]) {
        overLapped.push(arr1[j]);
      }
    }
  }
  return overLapped.length > 1 ? overLapped : [];
}

function repeated(arr) {
  const elementCounts = {};
  let repeatedElements = 0;

  for (const element of arr) {
    if (elementCounts[element]) {
      elementCounts[element]++;
    } else {
      elementCounts[element] = 1;
    }
  }

  for (const element in elementCounts) {
    if (elementCounts[element] > 1) {
      repeatedElements += elementCounts[element];
    }
  }

  return repeatedElements;
}

/*
이거 내가 반드시 타입스크립토로 리팩토링 해서 뜯어 고친다..
이게 말이 됩니까..
레벨 0 짜리 문제를 내가 이렇게 풀어야 돼? 아니되오!! 오늘 이거에 너무 많은 시간을 낭비했으니 반드시 뜯어 고친다.
*/
