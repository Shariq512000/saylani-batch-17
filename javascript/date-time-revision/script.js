let today = new Date();

let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "Octuber", "November", "December"]

let dayOfWeek = today.getDay();
let numberOfMonth = today.getMonth()
let date = today.getDate();
let year = today.getFullYear()
let hour = today.getHours();
let minutes = today.getMinutes();
let seconds = today.getSeconds();
let miliseconds = today.getMilliseconds();
let time = today.getTime();

// console.log(dayOfWeek, date)

// console.log(miliseconds)



// "01 Octuber 2025 12:06:06"

// if(){}else{}

console.log(`${(date < 10) ? `0${date}` : date} ${months[numberOfMonth]} ${year} ${hour}:${minutes}:${seconds}`)


// console.log(time);


// if(hour === 0){
//     console.log("12 am")
// }else if(hour > 12){
//     console.log(hour - 12 + "pm")
// }else if(hour == 12){
//     console.log("12 pm")
// }else{
//     console.log(hour + "am")
// }