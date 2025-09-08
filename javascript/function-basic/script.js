
// TOTAL NUMBER OF EXAM
// OBTAINED NUMBER OF EXAM

function hello(){
    let totalMath = Number(document.getElementById("totalMath").value);
    let obtainMath = Number(document.getElementById("obtainMath").value);
    let totalPhysics = Number(document.getElementById("totalPhysics").value);
    let obtainPhysics = Number(document.getElementById("obtainPhysics").value);
    let totalChemistry = Number(document.getElementById("totalChemistry").value);
    let obtainChemistry = Number(document.getElementById("obtainChemistry").value);

    let totalMarks = totalMath + totalPhysics + totalChemistry;
    let obtainedMarks = obtainMath + obtainPhysics + obtainChemistry;

    let percentage = (obtainedMarks / totalMarks) * 100;

    let grade = "";

    if(percentage >= 80){
        grade = "A+";
    }else if(percentage >= 70){
        grade = "A";
    }else if(percentage >= 60){
        grade = "B";
    }else if(percentage >= 50){
        grade = "C";
    }else if(percentage >= 40){
        grade = "D";
    }else if(percentage >= 33){
        grade = "E";
    }else{
        grade = "F"
    }

    // document.getElementById("result").innerHTML

    // alert("Total Marks Of Exam " + totalMarks + "\n" + "Obtained Marks " + obtainedMarks + "\n" + "Percentage " + percentage + "%" + "\n" + "Grade " + grade);
    let resultStr = `Total Marks Of Exam ${totalMarks} \n Obtained Mark ${obtainedMarks} \n Percentage ${percentage} \n Grade ${grade}`
    // alert(resultStr)

    document.getElementById("result").innerText = resultStr
}