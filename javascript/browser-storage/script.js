// localStorage.setItem("key", "value123")
// localStorage.setItem("key1", "value123")

// console.log(localStorage.getItem("key1"))

// localStorage.removeItem("key1")

// localStorage.clear()

let localArr = localStorage.getItem("students");

let students = (localArr) ? JSON.parse(localArr) : [];

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

const deleteUser = (rollNumber) => {
    let newArr = students.filter(eachStudent => eachStudent.rollNumber != rollNumber)
    students = newArr;
    localStorage.setItem("students", JSON.stringify(students))
    printUser()
}

const printUser = () => {
    let lis = "";
    for(let a of students){
        lis += `<div class="card">
            <div class="title">
                <h6>Student ID Card </h6>
                <div class="actionBtn">
                    <button>Edit</button>
                    <button onclick="deleteUser(${a.rollNumber})">Delete</button>
                </div>
            </div>

            <div class="field"><span class="label">Name:</span> ${a.studentName}</div>
            <div class="field"><span class="label">Roll Number:</span> ${a.rollNumber}</div>
            <div class="field"><span class="label">Batch:</span> ${a.batch}</div>
        </div>`
    }

    document.querySelector(".allUser").innerHTML = lis
}

printUser()


// let arr = [{rollNumber: 2}, {rollNumber: 4}, {rollNumber: 3}, {rollNumber: 1}]

// let filteredArr = arr.filter((eachItem) => eachItem.rollNumber != 3);
// [
//     {rollNumber: 2},
//     {rollNumber: 4},
//     {rollNumber: 1}
// ]
// console.log(filteredArr)

// arr.splice(2, 1)

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