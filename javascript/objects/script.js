// let plan1Name = "Basic";
// let plan1Price = 3.99;
// let plan1Space = 100;
// let plan1Data = 1000;
// let plan1Pages = 10;
// let plan2Name = "Basic";
// let plan2Price = 3.99;
// let plan2Space = 100;
// let plan2Data = 1000;
// let plan2Pages = 10;
// let plan3Name = "Basic";
// let plan3Price = 3.99;
// let plan3Space = 100;
// let plan3Data = 1000;
// let plan3Pages = 10

let plan = {
    name: "Basic",
    price: 3.99,
    space: 100,
    data: 1000,
    pages: 10,
    discountedMonth: [6, 7, 11]
}

let plan2 = {
    name: "Professional",
    price: 5.99,
    space: 500,
    data: 5000,
    pages: 50,
    discountedMonth: [6, 7, 11]
}

let plan3 = {
    name: "Ultimate",
    price: 9.99,
    space: 2000,
    data: 20000,
    pages: 500,
    discountedMonth: [6, 7, 11]
}

let plans = [plan, plan2, plan3];

// let lis = ""

let date = new Date();
let currentMonth = date.getMonth();

// for(let i = 0; i < plans.length; i++){
//     let currentPrice = plans[i].price
//     if(currentMonth)
//     // console.log(`The Cost Of ${plans[i].name} Plan is $${plans[i].price} per month`)
//     lis += `<li>The Cost Of ${plans[i].name} Plan is $${currentPrice} per month</li>`
// }

// document.getElementById("plans").innerHTML = lis

// console.log(lis)

// alert(`The Cost Of ${plan3.name} Plan is $${plan3.price} per month`)