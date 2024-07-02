const apikey="216ea3c8ab4ee4c57501caacb1d66da4";
const api="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox=document.querySelector(".searchbar input");
const searchbutton=document.querySelector(".searchbar  button");
const weathericon=document.querySelector(".weather-icon")
async function  checkweather(city)
{
	const response = await fetch(api + city +`&appid=${apikey}`);
	var data = await response.json();
	
	document.querySelector(".city").innerHTML=data.name;
	document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +"°c";
	document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
	document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";

    if(data.weather[0].main=="Clouds"){
		weathericon.src="cloudy.png";
	}
	else if(data.weather[0].main=="Clear"){
		weathericon.src="clear.png";
	}
	else if(data.weather[0].main=="Rain"){
		weathericon.src="rainy.png";
	}
    else if(data.weather[0].main=="Drizzle"){
		weathericon.src="drizzle.png";
	}
    else if(data.weather[0].main=="Mist"){
		weathericon.src="misty.png";
	}
	else if(data.weather[0].main=="Snow"){
		weathericon.src="snowy.png";
	}
	document.querySelector(".weather").style.display="block";
}



searchbutton.addEventListener("click",()=>{
	checkweather(searchbox.value);
})
