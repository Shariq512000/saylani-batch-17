function greeting(elementId){
    let userName = document.getElementById(elementId).value
    alert(`Hello ${userName}`)
}

function getCity(){
    let cityName = "";
    let zipCode = document.getElementById("zipCode").value
    if(zipCode == "60608"){
        cityName = "Chicago"
    }else if(zipCode == "68114"){
        cityName = "Omaha"
    }else if(zipCode == "53212"){
        cityName = "Milwaukee"
    }
    document.getElementById("cityName").value = cityName
}