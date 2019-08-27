var a = [1,2,3,10,100];
var b = [20, 2, 3, 10];

var ans = [];

for(var i = 0; i < a.length; ++i){
    ans.push(a[i]);
}

console.log(ans);

for(var i = 0; i < b.length; ++i){
    if(ans.indexOf(b[i]) === -1){
        ans.push(b[i]);
    }
}

console.log(ans);