const apiKey = "7e7f88b5bcbc517c3dd3c903ccd28fd1";
const apiUrl =
	" https://api.openweathermap.org/data/2.5/weather?units=metric&q= ";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
console.log(weatherIcon);

async function checkWeather(city) {
	const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

	if (response.status == 404) {
		document.getElementsByClassName(".error").style.display = "none";
	} else {
		let data = await response.json();

		console.log(data);

		document.querySelector(".city").innerHTML = data.name;
		document.querySelector(".temp").innerHTML =
			Math.round(data.main.temp) + "°C";
		document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
		document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

		if (data.weather[0].main == "Clouds") {
			weatherIcon.src = "./assests/clouds.png";
		} else if (data.weather[0].main == "Clear") {
			weatherIcon.src = "./assests/clear.png";
		} else if (data.weather[0].main == "Rain") {
			weatherIcon.src = "./assests/rain.png";
		} else if (data.weather[0].main == "Drizzle") {
			weatherIcon.src = "./assests/drizzle.png";
		} else if (data.weather[0].main == "Mist") {
			weatherIcon.src = "./assests/mist.png";
		}
	}
}

searchBtn.addEventListener("click", () => {
	checkWeather(searchBox.value);
});

