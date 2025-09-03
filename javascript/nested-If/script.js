// age 18 - 24

// let age = 16;

// if(age >= 18 && age <= 24){
//     alert("You Are Eligible");
// }else{
//     alert("You Are Not Eligible")
// }

// email = abc@gmail.com aur pass = 123456

let email = "abc@gmail.com";
let pass  = "1234567";

if(email != "abc@gmail.com" || pass != "123456"){
    // alert("Wrong Email or Password")
    if(email != "abc@gmail.com"){
        alert("Wrong Email")
    }else{
        alert("Wrong Password")
    }
}else{
    alert("You Are Logged In")
}