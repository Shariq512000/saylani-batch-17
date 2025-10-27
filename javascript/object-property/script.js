let obj = {
    name: "Basic",
    data: 1000,
    pages: 10
}

delete obj.data

let isProperty = "name" in obj

// obj.name = "Professional"
// obj.pages = 10

console.log(isProperty)

// fetch(`https://api.weatherapi.com/v1/current.json?key=bb746e4a43ef4044b6071952252710&q=karachi`)
// .then(function(res){
//     return res.json()
// }).then(function(data){
//     console.log(data)
// })
// .catch(function(error){
//     console.log(error)
// })

`<div>
</div>`