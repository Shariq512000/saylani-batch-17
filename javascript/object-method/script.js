// let plan1 = {
//     name: "Basic",
//     price: 3.99,   // per month
//     space: 100,
//     data: 1000,
//     pages: 10,
//     calcAnnual: function(discountVal){
//         let currentDate = new Date();
//         let bestPrice = this.price
//         if(currentDate.getMonth() == 10 || currentDate.getMonth() == 7){
//             bestPrice = bestPrice * discountVal
//         }

//         console.log(bestPrice * 12)
//     }
// }


// plan1.calcAnnual(0.85);

function Plan(name, price, space, data, pages){
    this.name = name,
    this.price = price,
    this.space = space,
    this.data = data,
    this.pages = pages
}

Plan.prototype.calcAnnual = function(discountVal){
    let currentDate = new Date();
    let bestPrice = this.price
    if(currentDate.getMonth() == 6 || currentDate.getMonth() == 7){
        if(this.name == "Professional"){
            bestPrice = bestPrice * 0.8
        }else if(this.name == "Ultimate"){
            bestPrice = bestPrice * 0.75
        }else{
            bestPrice = bestPrice * 0.85
        }
    }

    return bestPrice * 12;
}

let plan1 = new Plan("Basic", 3.99, 100, 1000, 10);
let plan2 = new Plan("Professional", 5.99, 500, 5000, 50);
let plan3 = new Plan("Ultimate", 9.99, 2000, 20000, 500);

console.log(plan2.calcAnnual(0.8))