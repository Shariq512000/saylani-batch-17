let userName = "Shariq";

console.log(userName);
try {
    // console.log(age);
    if(userName?.length == 0){
        throw "Enter User Name"
    }
    // if(userName?.length == 0){
    //     throw "Enter Valid Email"
    // }
} catch (error) {
    // console.log("Error Block" , error);
    alert(error)
}
console.log("Test Line 5")
console.log("Test Line 6")
console.log("Test Line 7")