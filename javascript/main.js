// Array.splice(index[, deleteCount, elem1 ..., elemN]

let alphabet = ['a','b','c'];
//인덱스 1포함, 마지막 요소까지 모두 삭제
console.log(alphabet.splice(1)); // 'b', 'c'
console.log(alphabet); // 'a'


alphabet = ['a','b','c'];
//1번 index에서 1개만 제거
console.log(alphabet.splice(1,1)); // 'b'
console.log(alphabet); // 'a', 'c'

//인덱스 1 포함하여 1개 요소 삭제 후 그 자리에 d, e 삽입 
console.log(alphabet.splice(1,1,'d','e'));
console.log(alphabet); // 'a' , 'd' , 'e'


alphabet = ['a','b','c','d']
//인덱스 1부터 인덱스 2까지 자른 값 반환
console.log(alphabet.slice(1,3)); // 'b', 'c'

// end 생략됐으므로 인덱스 1부터 끝까지 자른 값 반환
console.log(alphabet.slice(1)); // 'b' , 'c', 'd'

// start, end index가 음수면 배열의 끝에서부터 길이를 나타냄 
console.log(alphabet.slice(-3,-1)); // 'b' 'c' 


alphabet = ['a','b','c','d']
console.log(alphabet.concat('e')); // [ 'a', 'b', 'c', 'd', 'e' ]
console.log(alphabet.concat(['e','f'])); // [ 'a', 'b', 'c', 'd', 'e', 'f' ]
console.log(alphabet.concat(['e','f'],'g'));
/* [
  'a', 'b', 'c',
  'd', 'e', 'f',
  'g'
] */


alphabet = ['a','b','c','d']

//1 ~3 모두 동일한 결과 a,b,c,d
// 1. use for (index)
for (let i = 0; i < alphabet.length; i++){
    console.log(alphabet[i]);
}

//2. use for (element) of
for ( alpha of alphabet ) {
    console.log(alpha);
}

//3. use for (key) in
for ( key in alphabet) {
    console.log(alphabet[key]);
}



alphabet = ['a','b','c','d']

let str = alphabet.join();
console.log(str); // a,b,c,d


//separator : optional
let str_separator = alphabet.join(' and ');
console.log(str_separator); //a and b and c and d


//before
let nums = [1, -1, 4, 0, 10, 20, 12]; 
console.log(nums.sort()); // [-1, 0, 1, 10, 12, 20, 4]


//after
let ascending_order = function (x,y) {return x-y;};
console.log(nums.sort(ascending_order)); // -1,  0,  1, 4, 10, 12, 20

let descending_order = function (x,y) {return y-x;};
console.log(nums.sort(descending_order)); //20, 12, 10, 4, 1,  0, -1

 
nums.forEach(function(i){
    console.log(i);
});

const myArr = [1, 2, 3, 4, 5];

myArr.forEach((currentElement, index, array) => {
    console.log(`요소: ${currentElement}`);
    console.log(`index: ${index}`);
    console.log(array);
});


