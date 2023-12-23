import React, { useState, useEffect } from 'react';
import { IoSearch } from 'react-icons/io5';

import './card.css';
import MainCard from '../Components/main-card';

let getLocalData =  () => {
  let city = localStorage.getItem('myCityName')

  if(city) {
    return city
  } else{
    return "delhi"
  }
}

function Card() {
  // // fetching api.

  let [cityName, setCityName] = useState(getLocalData());

  let [weatherData, setWeatherData] = useState({});

  // data variables for card.

  let getInfo = async () =>{
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=22b6dcc5b569393d079b2f3926b5f798`;

      let res = await fetch(url);

      let data = await res.json();

      // preparing card data.
      const { temp, humidity, pressure } = data.main;

      const weatherMood = data.weather[0].main;

      const name = data.name;

      let wind = data.wind.speed;

      let Speed = wind*3.6

      let windSpeed = Speed.toFixed(2)


      const { country, sunrise, sunset } = data.sys;

      const myWeatherData = {
        temp,
        humidity,
        pressure,
        weatherMood,
        name,
        windSpeed,
        country,
        sunrise,
        sunset
      };

      setWeatherData(myWeatherData);

      console.log(data);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    getInfo();
  }, [cityName]);

  useEffect(() => {
    localStorage.setItem("myCityName", cityName)
  }, [cityName])

  // getting input value from user.
  let search_input = document.querySelector('.search-input');
  function setvalue(e) {
    e.preventDefault();
    setCityName(search_input.value);
  }

  return (
    <>
      <div className="rounded-xl flex justify-center">
        <form className="flex">
          <input placeholder="search..." className="search-input w-60 p-1 rounded-l-md px-2" type="text" />
          <button
            type="submit"
            onClick={setvalue}
            className="w-8 p-2 bg-blue-600 rounded-r-md "
          >
            <IoSearch />
          </button>
        </form>
      </div>

      <MainCard Data={weatherData}/>
    </>
  );
}

export default Card;
