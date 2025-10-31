let obj = {
    name: "shariq",
    rollNumber: 123,
    batch: 18
}

// let str = "Abc"

// str = 20

// obj.id = 864548

// console.log("batch" in obj)

// delete obj.batch

// console.log("batch" in obj)

// console.log(obj.rollNumber)

function getWeatherData(){

    let cityName = document.getElementById("cityName").value

    axios.get(`https://api.weatherapi.com/v1/current.json?key=bb746e4a43ef4044b6071952252710&q=${cityName}`)
    .then(function(response){
        // console.log("response", response.data)
        let apiData = response.data
        let weatherHtml = `
            <div class="topSection">
                <img src="https:${apiData.current.condition.icon}" alt="">
                <h1>${apiData.current.condition.text} (${apiData.current.temp_c}°C)</h1>
            </div>
            <br>
            <div>
                <p>Location: <b>${apiData.location.name}, ${apiData.location.region}, ${apiData.location.country}</b></p>
                <p>Feels Like: <b>${apiData.current.feelslike_c}°C</b></p>
                <p>Wind kph: <b>${apiData.current.wind_kph}</b></p>
                <p>Humidity: <b>${apiData.current.humidity}</b></p>
            </div>
        `
        document.querySelector(".weatherContainer").innerHTML = weatherHtml
    })
    .catch(function(error){
        console.log(error)
    })

    // fetch(`https://api.weatherapi.com/v1/current.json?key=bb746e4a43ef4044b6071952252710&q=${cityName}`)
    // .then(function(res){
    //     return res.json()
    // })
    // .then(function(apiData){
    //     console.log(apiData)
    //     let weatherHtml = `
    //         <div class="topSection">
    //             <img src="https:${apiData.current.condition.icon}" alt="">
    //             <h1>${apiData.current.condition.text} (${apiData.current.temp_c}°C)</h1>
    //         </div>
    //         <br>
    //         <div>
    //             <p>Location: <b>${apiData.location.name}, ${apiData.location.region}, ${apiData.location.country}</b></p>
    //             <p>Feels Like: <b>${apiData.current.feelslike_c}°C</b></p>
    //             <p>Wind kph: <b>${apiData.current.wind_kph}</b></p>
    //             <p>Humidity: <b>${apiData.current.humidity}</b></p>
    //         </div>
    //     `
    //     document.querySelector(".weatherContainer").innerHTML = weatherHtml
    // })
    // .catch(function(error){
    //     console.log(error)
    // })
}