// console.log("Start Code")
// for(let i=0; i < 5; i++){
//     console.log("Loop is Running")
// }
// console.log("End Code")

let cities = ["Karachi", "Lahore", "Islamabad", "Rawalpindi", "Hydrabad"]
console.log(cities.length);
let userCity = "Karachi";

let isMatched = false

for(let i=0; i < cities.length; i++){
    if(userCity == cities[i]){
        isMatched = true
    }
    // console.log(cities[i])
}

if(isMatched == true){
    alert("Your city is on list")
}else{
    alert("Your city is not on list")
}