function foo(arg) {
    let a = 0;
    function bar() {
        let b = 10;
        var c = 20;
        console.log('arg: '+arg);
        console.log(a);
    }
    bar();
}
console.log(foo('hello'));