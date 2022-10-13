
var searchBtn = document.querySelector(".btn");
var formSub = document.getElementById("search-city")
console.log(formSub)
var apiKey = "b2679b430f27a003489d800bbcbe3e02"
function getCoordinates(){
    fetch("http://api.openweathermap.org/geo/1.0/direct?q="+formSub.value+"&appid=b2679b430f27a003489d800bbcbe3e02")
    .then(function(response){
      console.log(response)
        return response.json()
    })
    .then(function(data){
console.log(data)
console.log(data[0].lat)
console.log(data[0].lon)
getForcast(data[0].lat, data[0].lon)
})
}

function getForcast(lat,lon){
    fetch("http://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&appid=b2679b430f27a003489d800bbcbe3e02")
    .then
}
searchBtn.addEventListener("click",function(){
    console.log(formSub.value)
    getCoordinates()
})


//http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
// 5 day weather data
// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}