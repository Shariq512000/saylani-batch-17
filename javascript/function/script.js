// function timeCheck(){
//     let newTime = new Date();
//     let currentHours = newTime.getHours();
//     let currentMinutes = newTime.getMinutes();
//     alert(`${currentHours} : ${currentMinutes}`)
// }

////            parameter
// function greeting(user){
//     alert(`Hello ${user}!`)
// }

// ///      Argument
// greeting("Shariq");

///////////////////  Default Parameter
// function addition(value1 = 0, value2 = 0){
//     // console.log(value1 + value2);
//     let result = value1 + value2
//     return result
// }

// function getTax(salary){
//     return salary * 0.3
// }

// let person1Name = "Abc";
// let person1 = getTax(1000)
// let person2Name = "Def";
// let person2 = getTax(3000)

// console.log("person1", person1)
// console.log("person2", person2)

// shipment=5
//Order 50 > 3 percent of remaining amout
//Order 100>= free shipment

function getTotalAmount(userOrder, voucherAmout = 0){
    let grandTotal;
    if(userOrder <= 50){
        grandTotal = userOrder + 5;
    }else if(userOrder >= 100){
        grandTotal = ((userOrder - 50) * 0.03) + userOrder
    }else{
        grandTotal = ((userOrder - 50) * 0.03) + 5 + userOrder
    }
    return grandTotal - voucherAmout;
}

// let order1 = [5, 4.6, 7.8, 16, 82, 5]


function getPriceOfOrder(orders){
    let orderTotal = 0;
    
    for(let i = 0; i < orders.length; i++){
        orderTotal += orders[i]
    }

    return orderTotal
}

// console.log("orderTotal", orderTotal)

let totalOrder1 = getPriceOfOrder([5, 4.6, 7.8, 16, 82, 5])

let order1 = getTotalAmount(totalOrder1)
let order2 = getTotalAmount(156);
let order3 = getTotalAmount(40);

console.log(`${order1}$`)
console.log(`${order2}$`)
console.log(`${order3}$`)
