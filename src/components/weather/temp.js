import React, { useEffect, useState } from "react";
import WeatherCard from "./weathercard";
import './style.css'

// 1dfaebdfebce65c1015963e4cce4f87c


// https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=1dfaebdfebce65c1015963e4cce4f87c

const Temp = () => {

    const [searchValue, setsearchValue] = useState("Mumbai");
    const [tempInfo, setTempInfo] = useState("");

    const getWeatherInfo = async () => {
        try{
            let url = 
            `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=1dfaebdfebce65c1015963e4cce4f87c`

            const res = await fetch(url);
            const data = await res.json();
            

            const {temp,humidity, pressure} = data.main;
            const {main:weathermood} = data.weather[0];
            const {name} = data;
            const {speed}= data.wind;
            const {country, sunset} = data.sys;

            const myNewWeatherInfo = {
                temp, humidity, pressure, weathermood, name, speed, country, sunset
            };

            setTempInfo(myNewWeatherInfo);
            // console.log(temp)
            // console.log(data);
        }
        catch(error){
            console.log(error);
        }
    };

    useEffect(() =>{
        getWeatherInfo();
    })
    return (<>


        <div className="wrap">
            <div className="search">
                <input
                    type="search"
                    placeholder="search..."
                    autoFocus
                    id="search"
                    className="searchTerm"
                    value = { searchValue }
                    onChange = {(e) => setsearchValue(e.target.value)}

                />

                <button
                    className="searchButton"
                    onClick={getWeatherInfo}
                    type="button">
                    Search
                </button>
            </div>
        </div>


        {/* Temp Card */}
        
< WeatherCard tempInfo={tempInfo} />



    </>)
}


export default Temp;