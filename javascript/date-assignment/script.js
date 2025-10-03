

// 1 January 2047

//2035-01-01

// let today = new Date();
// let eventDate = new Date("2047-01-01");

// // console.log(eventDate.getFullYear())

// let msToday = today.getTime();
// let msEvent = eventDate.getTime();

// let diffMs = msEvent - msToday

// console.log("diffMs", diffMs)

// let diffSec = diffMs / 1000

// console.log("diffSec", diffSec)

// let diffMin = diffSec / 60

// console.log("diffMin", diffMin);

// let diffHour = diffMin / 60;

// console.log("diffHour", diffHour)

// let diffDay = diffHour / 24

// console.log("diffDay", Math.floor(diffDay))


function checkBirthday(){
    let userBirthday = document.getElementById("birthday").value; // 5 Dec 2025 // 3 Oct 2025
    let userDateObj = new Date(userBirthday);
    let today = new Date()
    let todayDate = today.getDate();
    let todayMonth = today.getMonth();
    let userDate = userDateObj.getDate();
    let userMonth = userDateObj.getMonth();
    // if(userMonth > todayMonth){

    // }
    // console.log(today.getFullYear() - userDateObj.getFullYear())
}