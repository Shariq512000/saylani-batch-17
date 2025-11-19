let localArr = localStorage.getItem("students")

console.log(localArr)


let students = (localArr) ? JSON.parse(localArr) : [];

// if(localArr){
//     students = JSON.parse(localArr)
// }

console.log(students)

const addUser = () => {
    let studentName = document.getElementById("studentName").value;
    let rollNumber = document.getElementById("rollNumber").value;
    let batch = document.getElementById("batch").value;

    for(let student of students){
        if(rollNumber == student?.rollNumber){
            alert("User Exits With This Roll Number");
            return;
        }
    }


    let user = {studentName,rollNumber,batch}
    students.push(user);
    localStorage.setItem("students", JSON.stringify(students))
    printUser()
}

// let arr = [
//     {"studentName": "Test","rollNumber": "123","batch": "17"},
//     {"studentName": "Test2","rollNumber": "123","batch": "17"},
//     {"studentName": "Test3","rollNumber": "123","batch": "17"},
//     {"studentName": "Test4","rollNumber": "123","batch": "17"},
//     {"studentName": "Test 5","rollNumber": "321","batch": "18"}
// ]

// for(let i of arr){
//     console.log(i)
// }

const printUser = () => {
    let lis = "";
    for(let a of students){
        lis += `<div class="card">
            <div class="title">Student ID Card</div>

            <div class="field"><span class="label">Name:</span> ${a.studentName}</div>
            <div class="field"><span class="label">Roll Number:</span> ${a.rollNumber}</div>
            <div class="field"><span class="label">Batch:</span> ${a.batch}</div>
        </div>`
    }

    document.querySelector(".allUser").innerHTML = lis
}

printUser()


// const setItemOnStorage = () => {
//     let userName = document.getElementById("userName").value
//     // console.log(userName)
//     // sessionStorage
//     localStorage.setItem("userName", userName)

//     // let obj = {}
//     // obj.userName = "Shariq"
//     // obj.userName = "Shariq123"
// }

// let arr = ["1", "2", "3", "4"]
// let obj = {userName: "Shariq", rollNumber: "123"}

// let strArr = JSON.stringify(arr)
// console.log(strArr)

// let parseArr = JSON.parse(strArr)
// console.log(parseArr)


// localStorage.removeItem("userName")

// localStorage.clear()

// let newUser = localStorage.getItem("userName")

// console.log(newUser)