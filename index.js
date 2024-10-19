const apiKey="1e20e594ca350f8d5adb53a52a56d7fd";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q= ";
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");

async function checkweather(city) {
    const response=await fetch(apiUrl+city+`&appid=${apiKey}`);
   
   if(response.status==404){
    document.querySelector(".error").style.display="block";
    document.querySelector(".weather").style.display="none";
   } else{
    let data= await response.json();

    document.querySelector(".city").innerHTML= data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+ "%";
    document.querySelector(".wind1").innerHTML=data.wind.speed+"km/h";
 if (data.weather[0].main=="Clouds"){
    weatherIcon.src="img/cloudy.png";
 }
 else if(data.weather[0].main=="Clear"){
    weatherIcon.src="img/sun.png";
 }
 else if(data.weather[0].main=="Rain"){
    weatherIcon.src="img/rain.png";
 }
 else if(data.weather[0].main=="Storm"){
    weatherIcon.src="img/storm.png";
 }
 else if(data.weather[0].main=="Drizzle"){
    weatherIcon.src="img/drizzle.png";
 }
 else if(data.weather[0].main=="Mist"){
    weatherIcon.src="img/mist.png";
 }
 else if(data.weather[0].main=="Snow"){
    weatherIcon.src="img/snow.png";
 }
 document.querySelector(".weather").style.display="block";
 document.querySelector(".error").style.display="none";
}
   }
    
   
searchBtn.addEventListener("click",()=>{
    checkweather(searchBox.value);
});
