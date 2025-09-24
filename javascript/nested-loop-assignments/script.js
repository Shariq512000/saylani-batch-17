// 1
// 12
// 123
// 1234
// 12345


// i = 3 , j = 3

// var          can redeclear and reassign
// let          cannot redeclear but can reassign
// const        cannot redeclear and reassign

// var newVar = "";
// var newVar = "";
// newVar = "";

// const pi = 3.142;
// const pi = "";

// let newVar = "Declear";
// newVar = "Reassign"


let str = "It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien was writing the trilogy, which contains, with the weird applicability available, World War II only to poetry and myth, the essential notion that the good gray wizard can understand the evil magi precisely because he is just, World War II enough like them to grasp their minds and motives in ways that they cannot grasp his.";

// str = str.replaceAll("World War II", "the Second World War")

// let firstIndex = str.indexOf("World War II")

// if(firstIndex != -1){
//     str = str.slice(0, firstIndex) + "the Second World War" + str.slice(firstIndex+12)
// }

// console.log(str)

let j = 0;

for(let i=0; i < str.length; i++){
    if(str.slice(i , i+12) == "World War II"){
        j++
        if(j == 3){
            str = str.slice(0, i) + "the Second World War" + str.slice(i+12)
        }
        // console.log(i)
    }
}

console.log(j)
console.log(str)


// let arr = ["1", "2", "3", "4", "5", "6", "7", "8"]

// console.log(arr.slice(3))


// for(let i=1; i <= 5; i++){
//     let str = "";
//     for(let j=1; j <= i; j++){
//         str = str + j
//     }
//     console.log(str)
// }

// let cities = ["Karachi", "Lahore", "Islamabad"];
// let messages = ["City Of Light", "Capital Of Punjab", "Capital Of Pakistan"]
// let userCity = prompt("Enter City Name");

// for(let i=0; i < cities.length; i++){
//     if(userCity.toLowerCase() == cities[i].toLowerCase()){
//         alert(messages[i])
//     }
// }
