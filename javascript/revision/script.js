function hello(){
    let userName = document.getElementById("userName").value
    let userCourse = document.getElementById("course").value
    let rollNumber = document.getElementById("rollNumber").value
    // innerText
    // innerHTML
    document.getElementById("result").innerText = `Name: ${userName} \n Roll Number: ${rollNumber} \n Course: ${userCourse}`
}