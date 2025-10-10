// for(let i=0; i < 3; i++){

// }

let i = 0;

// while(i < 0){
//     console.log(i)
//     i++
// }

let pass = "abc123"
let isLoop = true
do{
    let userPass = prompt("Enter You Password")
    if(userPass == pass){
        isLoop = false
        alert("Correct Answer")
    }else{
        alert("Wrong Answer")
    }
} while(isLoop)