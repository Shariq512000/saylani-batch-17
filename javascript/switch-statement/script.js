
let dayOfWeek = "Wed"

// if(dayOfWeek == "Sat" || dayOfWeek == "Sun"){
//     alert("Weekend")
// }else if(dayOfWeek == "Fri"){
//     alert("Friday")
// }else{
//     alert("Weekdays")
// }

switch(dayOfWeek){
    case "Sat":
        alert("Weekend")
        break;
    case "Sun":
        alert("Weekend")
        break;
    case "Fri":
        alert("Friday")
        break;
    default:
        alert("weekdays")
}