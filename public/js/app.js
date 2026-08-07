const searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click", getWeather);


// Search when Enter key is pressed

document.getElementById("city").addEventListener("keypress", function(event){

    if(event.key === "Enter"){

        event.preventDefault();

        getWeather();

    }

});



async function getWeather(){

    const city = document.getElementById("city").value;

    if(city===""){

        alert("Enter city");

        return;

    }

  

    try{

        const response = await fetch(`/api/weather?city=${city}`);

        const data = await response.json();


        document.getElementById("temperature").textContent =
            `${Math.round(data.main.temp)}°`;

        document.getElementById("cityName").textContent =
            `${data.name}, ${data.sys.country}`;

        document.getElementById("description").textContent =
            data.weather[0].description;

        document.getElementById("humidity").textContent =
            `${data.main.humidity}%`;

        document.getElementById("wind").textContent =
            `${data.wind.speed} m/s`;

        document.getElementById("feelsLike").textContent =
            `${Math.round(data.main.feels_like)}°`;

        document.getElementById("pressure").textContent =
`           ${data.main.pressure} hPa`;

            // Live Conditions
document.getElementById("liveHumidity").innerHTML =
data.main.humidity+"%";

document.getElementById("liveWind").innerHTML =
data.wind.speed+" m/s";

document.getElementById("liveFeels").innerHTML =
Math.round(data.main.feels_like)+"°";

document.getElementById("livePressure").innerHTML =
data.main.pressure+" hPa";

// Visibility
document.getElementById("visibility").innerHTML =
(data.visibility/1000).toFixed(1)+" km";

// Sunrise
const sunrise = new Date(data.sys.sunrise*1000);

document.getElementById("sunrise").innerHTML =
sunrise.toLocaleTimeString([],{
hour:"2-digit",
minute:"2-digit"
});

// Sunset
const sunset = new Date(data.sys.sunset*1000);

document.getElementById("sunset").innerHTML =
sunset.toLocaleTimeString([],{
hour:"2-digit",
minute:"2-digit"
});

        document.getElementById("weatherIcon").src =
        `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;

        changeBackground(data.weather[0].main);

        saveRecent(data.name);
        loadForecast(data.name);

        function updateClock(){

    const now = new Date();

    const options = {

        weekday:"long",

        year:"numeric",

        month:"long",

        day:"numeric"

    };

    const date = now.toLocaleDateString("en-US",options);

    const time = now.toLocaleTimeString();

    document.getElementById("dateTime").innerHTML=

    `${date}<br>${time}`;

}

function saveRecent(city){

    let recent = JSON.parse(localStorage.getItem("recent")) || [];

    recent = recent.filter(item => item !== city);

    recent.unshift(city);

    recent = recent.slice(0,5);

    localStorage.setItem("recent", JSON.stringify(recent));

    loadRecent();

}

function loadRecent(){

    const list = document.getElementById("recentList");

    list.innerHTML = "";

    const recent = JSON.parse(localStorage.getItem("recent")) || [];

    recent.forEach(city=>{

        const li = document.createElement("li");

        li.textContent = city;

        li.onclick = ()=>{

            document.getElementById("city").value = city;

            getWeather();

        };

        list.appendChild(li);

    });

}


async function loadForecast(city){

    const response = await fetch(`/api/forecast?city=${city}`);

    const data = await response.json();
    loadWeeklyForecast(data);

    const container = document.getElementById("hourlyForecast");

    container.innerHTML = "";

    data.list.slice(0,5).forEach(item=>{

        const hour = new Date(item.dt_txt).toLocaleTimeString([],{

            hour:"numeric"

        });

        container.innerHTML += `

        <div class="hour-card">

            <h4>${hour}</h4>

            <img src="https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png">

            <p>${Math.round(item.main.temp)}°C</p>

        </div>

        `;

    });

}

function loadWeeklyForecast(data){

    const container = document.getElementById("weeklyForecast");

    container.innerHTML = "";

    const dailyData = [];

    data.list.forEach(item=>{

        if(item.dt_txt.includes("12:00:00")){

            dailyData.push(item);

        }

    });

    dailyData.slice(0,5).forEach(day=>{

        const date = new Date(day.dt_txt);

        const dayName = date.toLocaleDateString("en-US",{

            weekday:"short"

        });

        container.innerHTML += `

        <div class="day-card">

            <h4>${dayName}</h4>

            <img src="https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png">

            <p>${Math.round(day.main.temp)}°C</p>

        </div>

        `;

    });

}

const weatherCard = document.querySelector(".current-weather");

weatherCard.animate(
[
    {
        opacity:0,
        transform:"translateY(25px)"
    },
    {
        opacity:1,
        transform:"translateY(0)"
    }
],
{
    duration:700,
    easing:"ease-out"
});

const card = document.querySelector(".current-weather");

card.animate(
[
    {opacity:0,transform:"translateY(20px)"},
    {opacity:1,transform:"translateY(0)"}
],
{
    duration:600
});

function changeBackground(weather){

    document.body.classList.remove(
        "sunny",
        "cloudy",
        "rainy",
        "snowy"
    );

    switch(weather){

        case "Clear":
            document.body.classList.add("sunny");
            break;

        case "Clouds":
            document.body.classList.add("cloudy");
            break;

        case "Rain":
        case "Drizzle":
        case "Thunderstorm":
            document.body.classList.add("rainy");
            break;

        case "Snow":
            document.body.classList.add("snowy");
            break;

        default:
            document.body.classList.add("cloudy");

    }

}

updateClock();

setInterval(updateClock,1000);

    }

    catch(error){

        alert("City not found");

    }

}

loadRecent();

