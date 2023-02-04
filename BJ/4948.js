// const fs = require('fs')
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(Number);

const isPrime = (n) => {
    if (n == 1) {
      return false;
    }
    
    for (let i = 2; i <= Math.sqrt(n); i++) {
      
        if (n % i === 0) {
        return false;
      }

      else if(n % i != 0 && i <= 2n){
        if ( i > n ) {
            return true;
        }
      }
    }
}
console.log(nums.split(" ").filter(v => isPrime(v)).length);