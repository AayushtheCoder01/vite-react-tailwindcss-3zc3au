import React, { useState, useEffect } from 'react';
import { FaCloud } from 'react-icons/fa6';
import { IoPartlySunnyOutline } from 'react-icons/io5';
import { WiSunrise } from 'react-icons/wi';
import { WiHumidity } from 'react-icons/wi';
import { IoRainyOutline } from 'react-icons/io5';
import { WiStrongWind } from 'react-icons/wi';
import { IoSearch } from 'react-icons/io5';

function MainCard({ Data }) {
  const {temp,
    humidity,
    pressure,
    weatherMood,
    name,
    windSpeed,
    country,
    sunrise,
    sunset} = Data

    let sec = sunrise
    let date = new Date(sec * 1000)
    let timeStr = `${date.getHours()}:${date.getMinutes()} AM`

  return (
    <>
      <div className="flex justify-center m-0 my-7">
        <div className="card flex-col bg-white p-0 flex justify-center rounded-lg w-9/12 sm:w-6/12 h-auto flex flex-wra">
          <div className="image p-7 flex justify-center">
          <IoPartlySunnyOutline size="7rem" />
          </div>

          {/* maindata */}
          <div className="data flex text-white">
            <div className="temp flex justify-center items-center w-1/3 p-1 bg-black">
              <h2 className="text-xl sm:text-3xl p-5">{Math.ceil(Data.temp - 273)}℃</h2>
            </div>

            <div className="sky flex justify-center w-1/3 p-1 bg-black">
              <h2 className="text-xl sm:text-3xl p-5"> {weatherMood} <br/>
                 <span className="place-span">{name}, {country}</span>
              </h2>
            </div>

            <div className="main-time flex justify-center items-center w-1/3 p-1 bg-blue-500">
              <h2 className="text-xl p-5 sm:text-3xl">IST</h2>
            </div>
          </div>

          {/* moredata */}
          <div className="more-data flex flex-wrap p-5">
            <div className="sunrise flex justify-center w-3/12 p-1">
              <WiSunrise color="skyblue" size="2rem" />
              <h2 className="px-1 text-md ">{timeStr} <br/></h2>
            </div>

            <div className="humidity flex justify-center w-3/12 p-1">
              <WiHumidity color="skyblue" size="2rem" />
              <h2 className="px-2 text-md">{humidity} <br/> hdy</h2>
            </div>

            <div className="pressuer flex justify-center w-3/12 p-1">
              <IoPartlySunnyOutline color="skyblue" size="1.8rem" />
              <h2 className="px-2 text-md">{pressure} <br/> psr</h2>
            </div>

            <div className="wind flex justify-center w-3/12 p-1">
              <WiStrongWind size="2rem" color="skyblue" />
              <h2 className="px-2 text-md">{windSpeed*3.6} K/hr <br/> speed</h2>
            </div>
          </div>
        </div>
      </div>
      <div />
    </>
  );
}

export default MainCard;
