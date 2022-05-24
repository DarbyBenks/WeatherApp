
    document.getElementById('weather-form').addEventListener('submit', (e)=> {
        e.preventDefault()
        const inputLocation = document.getElementById('name-input').value;
        const weatherApp = `http://api.weatherstack.com/current?access_key=bcf0b630713da760447ab2d08ce91546&query=${inputLocation}&units=f&hourly=1&interval=1`

        document.getElementById("weather-elements").innerHTML = ""
        console.log(weatherApp)

        fetch(weatherApp)
        .then(resp => resp.json())
        .then(renderInformation)


        document.getElementById('weather-form').reset()

    })
    

   function renderInformation(data){
       const infoDiv = document.getElementById("weather-elements")

       const renderedLocation = document.createElement('h1')
       renderedLocation.id = 'location-name';
       renderedLocation.textContent = data.location.name;
       console.log(renderedLocation.textContent)

       const locationTime = document.createElement('h2')
       locationTime.id = 'location-time';
       locationTime.textContent = data.location.localtime;
       console.log(locationTime.textContent)

       const locationTemp = document.createElement('h3')
       locationTemp.id = 'location-temp'
       locationTemp.textContent = (`${data.current.temperature} Degrees Fahrenheit`)
       console.log(locationTemp.textContent)

       const localImage = document.createElement('img')
       localImage.src = data.current.weather_icons
       localImage.id = "location-icon"

       const weatherDesc = document.createElement('h3')
       weatherDesc.id = "weatherDesc"
       weatherDesc.textContent = data.current.weather_descriptions
       console.log(weatherDesc.textContent)

       const locationHumidity = document.createElement('h3')
       locationHumidity.id = "location-Humidity"
       locationHumidity.textContent = (`Current Humidity: ${data.current.humidity}`)
       console.log(locationHumidity.textContent)

       const locationPrecip = document.createElement('h3')
       locationPrecip.id = 'location-precip'
       locationPrecip.textContent = `Current Precipitation: ${data.current.precip}`
       console.log(locationPrecip.textContent)

       const uvIndex = document.createElement('h3')
       uvIndex.id = "location-uv"
       uvIndex.textContent = `Current UV Index: ${data.current.uv_index}`
       console.log(uvIndex.textContent)
       

       infoDiv.append(renderedLocation, locationTime, locationTemp, localImage, weatherDesc, locationHumidity, locationPrecip, uvIndex)
      
   }


// function renderFutureContent(){
//     const inputLocationForecast = document.getElementById('location-name').value;
//     const futureForecast = `http://api.weatherbit.io/v2.0/forecast/daily?city=${inputLocationForecast}&country=United_States&key=19010eb58084408ea613b9838ef578f1`
//     fetch(futureForecast)
//         .then(resp => resp.json())
//         .then(renderFutureForecast)

// }

// function renderFutureForecast(data){
//     console.log(data)
// }