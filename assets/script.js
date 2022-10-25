
var searchBtn = document.querySelector(".btn");
var formSub = document.getElementById("search-city")
// console.log(formSub)
var apiKey = "b2679b430f27a003489d800bbcbe3e02"
function getCoordinates(){
    fetch("http://api.openweathermap.org/geo/1.0/direct?q="+formSub.value+"&appid=b2679b430f27a003489d800bbcbe3e02")
    .then(function(response){
    //   console.log(response)
        return response.json()
    })
    .then(function(data){

getForcast(data[0].lat, data[0].lon)
})
}

function getForcast(lat,lon){
    fetch("http://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&appid=b2679b430f27a003489d800bbcbe3e02&units=imperial")
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        console.log(data.list[0].main.temp)
        console.log(data.list[0].main.humidity)
        console.log(data.list[0].wind.speed)
        let currenTemp = document.getElementById('currenTemp')
        currenTemp.textContent=data.list[0].main.temp;
        let windSpeed = document.getElementById('windSpeed')
        windSpeed.textContent=data.list[0].wind.speed;
        let humidity = document.getElementById('currentHumidity')
        humidity.textContent=data.list[0].main.humidity;
        console.log(data.list[6].main.temp)
// Day One of Five Weather Information
        let tempOne = document.createElement('p');
        tempOne.textContent="temp: "+data.list[6].main.temp;
        var dayOne = document.getElementById('day1');
        dayOne.appendChild(tempOne);

        let humidOne = document.createElement('p');
        humidOne.textContent="humidity: "+data.list[6].main.humidity;
        dayOne.appendChild(humidOne);

        let windOne = document.createElement('p');
        windOne.textContent="windspeed "+data.list[6].wind.speed;
        dayOne.appendChild(windOne);
// Day Two of Five Information
        let tempTwo = document.createElement('p');
        tempTwo.textContent="temp: "+data.list[14].main.temp;
        var dayTwo = document.getElementById('day2');
        dayTwo.appendChild(tempTwo);

        let humidTwo = document.createElement('p');
        humidTwo.textContent="humidity: "+data.list[14].main.humidity;
        dayTwo.appendChild(humidTwo);

        let windTwo = document.createElement('p');
        windTwo.textContent="windspeed "+data.list[14].wind.speed;
        dayTwo.appendChild(windTwo);
// Day Three of Five Information        
        let tempThree = document.createElement('p');
        tempThree.textContent="temp: "+data.list[22].main.temp;
        var dayThree = document.getElementById('day3');
        dayThree.appendChild(tempThree);

        let humidThree = document.createElement('p');
        humidThree.textContent="humidity: "+data.list[22].main.humidity;
        dayThree.appendChild(humidThree);

        let windThree = document.createElement('p');
        windThree.textContent="windspeed "+data.list[22].wind.speed;
        dayThree.appendChild(windThree);
// Day Four of Five Information
        let tempFour = document.createElement('p');
        tempFour.textContent="temp: "+data.list[30].main.temp;
        var dayFour = document.getElementById('day4');
        dayFour.appendChild(tempFour);

        let humidFour = document.createElement('p');
        humidFour.textContent="humidity: "+data.list[30].main.humidity;
        dayFour.appendChild(humidFour);

        let windFour = document.createElement('p');
        windFour.textContent="windspeed "+data.list[30].wind.speed;
        dayFour.appendChild(windFour);
// Day Five of Five Information
        let tempFive = document.createElement('p');
        tempFive.textContent="temp: "+data.list[38].main.temp;
        var dayFive = document.getElementById('day5');
        dayFive.appendChild(tempFive);

        let humidFive = document.createElement('p');
        humidFive.textContent="humidity: "+data.list[38].main.humidity;
        dayFive.appendChild(humidFive);

        let windFive = document.createElement('p');
        windFive.textContent="windspeed "+data.list[38].wind.speed;
        dayFive.appendChild(windFive);
    })
    
}

searchBtn.addEventListener("click",function(){
    // console.log(formSub.value)
    getCoordinates()
})


//http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
// 5 day weather data
// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}