// console.log("Start Code")
// for(let i=0; i < 5; i++){
//     console.log("Loop is Running")
// }
// console.log("End Code")

let cities = ["Karachi", "Lahore", "Islamabad", "Rawalpindi", "Hydrabad"]
console.log(cities.length);
let userCity = "Hydrabad";

let isMatched = false

for(let i=0; i < cities.length; i++){
    console.log(cities[i])
    if(userCity == cities[i]){
        isMatched = true;
        break;
    }
}

if(isMatched == true){
    alert("Your city is on list")
}else{
    alert("Your city is not on list")
}