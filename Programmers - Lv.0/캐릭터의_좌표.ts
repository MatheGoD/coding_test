/*
문제 : 
머쓱이는 RPG게임을 하고 있습니다. 

게임에는 up, down, left, right 방향키가 있으며 각 키를 누르면 위, 아래, 왼쪽, 오른쪽으로 한 칸씩 이동합니다. 

예를 들어 [0,0]에서 up을 누른다면 캐릭터의 좌표는 [0, 1], down을 누른다면 [0, -1], left를 누른다면 [-1, 0], right를 누른다면 [1, 0]입니다. 머쓱이가 입력한 방향키의 배열 keyinput와 맵의 크기 board이 매개변수로 주어집니다. 캐릭터는 항상 [0,0]에서 시작할 때 키 입력이 모두 끝난 뒤에 캐릭터의 좌표 [x, y]를 return하도록 solution 함수를 완성해주세요.
*/

function solution6(keyinput: string[], board: number[]): number[] {
  let x = 0;
  let y = 0;

  let xEnd = Math.floor(board[0] / 2);
  let yEnd = Math.floor(board[1] / 2);

  for (let i = 0; i < keyinput.length; i++) {
    if (keyinput[i] === "right" && x + 1 < xEnd) x++;
    if (keyinput[i] === "left" && x - 1 > -xEnd) x--;
    if (keyinput[i] === "up" && y + 1 < yEnd) y++;
    if (keyinput[i] === "down" && y - 1 > -yEnd) y--;
  }
  return [x, y];
}

/*
기억하고 싶은 이유 : 
어떻게 보면 간단한 게임을 만들 때 가장 기본이 되는 코드가 될 발판이 아닐까 싶어 남겨본다.  
*/
