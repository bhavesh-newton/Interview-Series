function test() {
    var x = 10;
    if(true) {
        var x = 20;
        console.log(x);
    }
    console.log(x);
}
test();