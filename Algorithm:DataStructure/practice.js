const fs = require('fs');
const input =
fs.readFileSync("/dev/stdin").toString().trim().split('\n');
const N = parseInt(input.shift(),10);

let stack = [];
//출력을 명령어 각각일때마다 하면 시간초과 발생
//한 곳에 출력할 것들을 담아놓은다음 \n을 이용해서 출력해야 성공함
let answer = [];

for (let i=0; i < N; i++) {
    switch (input[i]) {
    //push 2 형식이므로 ' ' 공백 구분자로 나눠서 배열 삽입
    
    //pop: 스택에서 가장 위에 있는 정수를 빼고, 그 수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.
    case 'pop' :
        answer.push(stack.pop() || -1);
        break;
    
    //top : 스택의 가장 위에 있는 정수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.
    case 'top':
        answer.push(stack[stack.length-1] || -1);
        break;
    
    //size: 스택에 들어있는 정수의 개수를 출력한다.
    case 'size':
        answer.push(stack.length);
        break;
    
    //empty: 스택이 비어있으면 1, 아니면 0을 출력한다.
    case 'empty':
        if (stack.length === 0) {
            answer.push(1);
        }

        else {
            answer.push(0);
        }
        break;
    
    //push X: 정수 X를 스택에 넣는 연산이다.
    default:
        stack.push(Number(input[i].split(' ')[1]));
        break;
    }
}
console.log(answer.join('\n'));