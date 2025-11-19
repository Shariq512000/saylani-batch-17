// function sum(num1 = 0, num2 = 0){
//     console.log(num1 + num2)
// }

// sum(6,5);

function sum(...numArr){
    // console.log(numArr)
    let total = 0;
    for(let i=0; i < numArr.length; i++){
        total += numArr[i]
    }

    console.log(total);
}

sum(6,5,8,21,56,100,158, 85, 0, 63, 62);