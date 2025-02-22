
const SearchBar = document.querySelector(".search-input");
const SearchBtn = document.querySelector(".search-iocn-btn");
const weatherData = document.querySelector(".container");
const searchMessImg = document.querySelector(".front-details");
const cityName = document.querySelector(".city-name");
const currentDate = document.querySelector(".current-date");
const weatherImg = document.querySelector(".weatherImg");
const tempInformation = document.querySelector(".tempInfo");
const weatherCon = document.querySelector(".weatherCondition");
const humidityCheck = document.querySelector(".humidity");
const windCheck = document.querySelector(".wind");


SearchBtn.addEventListener("click", () => {
    if (SearchBar.value != "") {
        console.log(SearchBar.value);
        checkWeather(SearchBar.value);
        SearchBar.value = '';
        SearchBar.blur();
    }

})

SearchBar.addEventListener('keydown', (event) => {
    if (event.key == 'Enter' && SearchBar.value != "") {
        console.log(SearchBar.value);
        checkWeather(SearchBar.value);
        SearchBar.value = '';
        SearchBar.blur();
    }
})
const APIkey = `dec814c2a62f0792312291e5ffd69a6d`;
async function FetchDataInfo( city) {

    // const APIurl = `https://api.openweathermap.org/data/2.5/${nextDayInfo}?q=${city}&appid=${APIkey}&units=metric`;
    const APIurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`;

    const response = await fetch(APIurl);
    return response.json();

}
// weather function 
async function checkWeather(city) {
    const data = await FetchDataInfo( city);

    weatherData.style.display = "block";
    searchMessImg.style.display = "none";

    displayData(data);
    watherImg(data);
    // console.log(data)
    currentDate.textContent = getCurrentDate();   
}
// current date function
function getCurrentDate() {
    const currentDate = new Date();
    const options = {
        day: '2-digit',
        month: ' short'
    }
    return currentDate.toLocaleDateString(options);
}
// print the data of the weather
function displayData(data) {
    cityName.textContent = data.name;
    tempInformation.textContent = Math.round(data.main.temp) + "°C";
    humidityCheck.textContent = data.main.humidity + "%";
    windCheck.textContent = data.wind.speed + "km/h";
    weatherCon.textContent = data.weather[0].main;
}

// weather image functin
function watherImg(data) {
    if (data.weather[0].main == "Clouds") {
        weatherImg.src = "/img/Weather_img/cloudy.png";
    }
    else if (data.weather[0].main == "Haze") {
        weatherImg.src = "img/Weather_img/haze.png";
    }
    else if(data.weather[0].main == "Smoke") {
        weatherImg.src = "img/Weather_img/smoke.png";
    }
    else if (data.weather[0].main == "Clear") {
        weatherImg.src = "img/Weather_img/clear.png";
    }
    else if (data.weather[0].main == "Mist") {
        weatherImg.src = "img/Weather_img/mist.png";
    }
    else if (data.weather[0].main == "Rain") {
        weatherImg.src = "img/Weather_img/rain.png";
    }
    else if (data.weather[0].main == "Snow") {
        weatherImg.src = "img/Weather_img/snow.png";
    }
}