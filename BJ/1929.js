const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const [n, m] = input.split(" ").map(v => Number(v));
    
    var count = 0;
    for (var i=1; i<n+1; i++) {
    count = 0;
    for (var j=1; j<=n/2; j++) {
    
    if ( i % j === 0 ) {
        count ++;
    }
        count +=1;
}   

    if( count == 2 && i >= m) {
    console.log(i);
    }
    
    
}
    process.exit();