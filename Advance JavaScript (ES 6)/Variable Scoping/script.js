let a = "new var 1"
const b = "new var 2"
var c = "new var 3"

function test(){
    let a = "var 1"
    const b = "var 2"
    var c = "var 3"
    function test2(){
        let d = "new var 4"
        console.log("inner function", a);
    }
    // test2();
    return test2
}
let e = test();
e();
console.log(a)
console.log(b)
console.log(c)