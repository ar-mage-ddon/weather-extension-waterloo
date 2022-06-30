var key = config.APIKey;

async function fetchData() {
    const res=await fetch ("https://api.openweathermap.org/data/2.5/weather?id=6176823&appid=" + key);
    const record=await res.json();
    document.getElementById("temperature").innerHTML=Math.round((record.main['temp']-273.15)*100)/100 + "°C"
    document.getElementById("feelsLike").innerHTML=Math.round((record.main['feels_like']-273.15)*100)/100 + "°C";
    document.getElementById("humidity").innerHTML=record.main['humidity']+"%";
    document.getElementById("description").innerHTML=record.weather[0]['description'];
}  
fetchData();