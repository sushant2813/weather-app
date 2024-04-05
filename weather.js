const input_box = document.querySelector('.input-box');
const searchbtn = document.querySelector('#searchbtn')
const weather_img = document.querySelector('.weather-img');
const weather_temp = document.querySelector('.weather-temp');
const discription = document.querySelector('.discription');
const humidity = document.getElementById('humidity');
const wind_speed= document.getElementById('wind-speed');
const location_not_found = document.querySelector('.location-not-found');
const weather_body = document.querySelector('.weather-body');
 async function checkweather(city){
    const api_key = "5c506f0fbc776216df77daaf5eaf09bf"

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const weather_data = await fetch(`${url}`).then(response => response.json());
    if(weather_data.cod === `404`){
      location_not_found.style.display = "flex";
      weather_body.style.display = "none";
      console.log("error");
      return;
  }

  console.log("run");
  location_not_found.style.display = "none";
  weather_body.style.display = "flex";

    
    
    weather_temp.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    discription.innerHTML = `${weather_data.weather[0].description}`;

    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;
    
    switch(weather_data.weather[0].main){
      case 'Clouds':
          weather_img.src = "https://media.istockphoto.com/id/884015038/photo/over-head-shot-of-rain-cloud-weather-change.webp?b=1&s=170667a&w=0&k=20&c=fW10n8itp7qn7hE1hEUMRAERAl3QctMRbUKuLUnkOks="
          break;
      case 'Clear':
          weather_img.src = "https://clarksvillenow.sagacom.com/files/2020/10/shutterstock_206307496.jpg";
          break;
      case 'Rain':
          weather_img.src = "https://media.istockphoto.com/id/503284599/photo/rainy-weather.jpg?s=170667a&w=0&k=20&c=vk3Sf9Ao145LqXffGGe-TIJ52pO7FfYmlDAprwV6_m0=";
          break;
      case 'Mist':
          weather_img.src = "data:image/jpeg;base64,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";
          break;
     
}
 }
searchbtn.addEventListener('click',()=>{
   checkweather(input_box.value);
 
})

