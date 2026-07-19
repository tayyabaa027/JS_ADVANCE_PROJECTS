
const cityInput = document.querySelector("input");
const btn = document.querySelector("button");
const cityNAME = document.querySelector(".city");
const temp = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const APIkey = "a2c0a6e4a5b0c3bb6700ac5bbdf1d0a3";
const parent=document.querySelector("#parent");
const weatherIcon = document.querySelector(".weathericon");

async function weathercheck(city) {
    try {
        
        const APIurl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${APIkey}`;

        const response = await fetch(APIurl);

        // Check if the response is successful
        if (!response.ok) {
            throw new Error("City not found!");
        }
        parent.style.height="530px";
        const data = await response.json();
        temp.innerHTML = Math.round(data.main.temp) + "°C";
        cityNAME.innerHTML = data.name;
        humidity.innerHTML = data.main.humidity + "%";
        wind.innerHTML = data.wind.speed + " km/h";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "img/clouds.png";
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "img/clear.png";
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "img/rain.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "img/drizzle.png";
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "img/mist.png";
        }

    } catch (error) {
        parent.style.height="450px";
        cityNAME.innerHTML = error.message;
        temp.innerHTML = "";

    }
}

btn.addEventListener("click", () => {
    weathercheck(cityInput.value);

});