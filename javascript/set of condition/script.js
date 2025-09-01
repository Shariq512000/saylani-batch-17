// 18 - 24

// (||) OR Operator   // YA
// (&&) AND Operator // Aur

// let age = 32;

// //  TRUE     &&   FALSE
// if(age >= 18 && age <= 24){
//     alert("You are Eligible")
// }else{
//     alert("You are not Eligible")
// }
/// False       False           False       False
// if(9 === 10 || 10 === "10" || 11 == 31 || 13 == 12){
//     alert("")
// }

// if(age <= 24){
//     alert("You are Eligible")
// }else if(age >= 18){
//     alert("You are Eligible")
// }else{
//     alert("You Are Not Eligible")
// }

// weight >= 300
// time <= 6
// gender == male
// age 18 - 24

// let weight = 300;
// let time = 7;
// let gender = "male";
// let age = 22;

//   ///   (False) || (True)
// if((weight >= 300 && time <= 6 && gender == "male" && age >= 18) || (age <= 24)){
//     alert("You Are Eligible")
// }else{
//     alert("You are not Eligible")
// }


// 65 > ya 21 < aur nationality US

let age = 22;
let nationality = "US";

// || 
//           False           &&        TRUE          
if( (age >= 65 || age <= 21) && (nationality == "US") ){
    alert("Condition True")
}else{
    alert("Condition False")
}