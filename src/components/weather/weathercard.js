import React from "react";

const WeatherCard = ({tempInfo}) => {

    const  {
        temp, humidity, pressure, weathermood, name, speed, country, sunset
    } = tempInfo;

    return (
        <>
        <article className="widget">
            <div className="weatherIcon">
                <i className={"wi wi-day-sunny"}></i>
            </div>
            <div className="weatherInfo" >
                <div className="temperature">
                    <span> {temp} &deg; </span>
                </div>
            
            <div className="description">
                <div className="weatherCondition">
                    {weathermood}
                </div>
                <div className="place">
                    {name},{country}
                </div>
            </div>
            </div>

            <div className="date">
                {new Date().toLocaleString()}
            </div>

        {/* Four column section for Extra Information*/}
        <div className="extra-temp">
            <div className="temp-info-minmax">
                {/* 1st section */}
                <div className="two-sided-section">
                    <p>
                        <i className={"wi wi-humidity"}> </i>
                    </p>
                    <p className="extra-info-leftside">
                        {humidity} <br/>
                        sunset 
                    </p>
                </div>

                {/* 2nd section */}
                <div className="two-sided-section">
                    <p>
                        <i className={"wi wi-sunset"}> </i>
                    </p>
                    <p className="extra-info-leftside">
                        20:00 Pm <br/>
                        sunset 
                    </p>
                </div>                
            </div>

            <div className="weather-extra-info">
            <div className="two-sided-section">
                    <p>
                        <i className={"wi wi-sunset"}> </i>
                    </p>
                    <p className="extra-info-leftside">
                        20:00 Pm <br/>
                        sunset 
                    </p>
                </div>
                
                <div className="two-sided-section">
                    <p>
                        <i className={"wi wi-sunset"}> </i>
                    </p>
                    <p className="extra-info-leftside">
                        20:00 Pm <br/>
                        sunset 
                    </p>
                </div>

            </div>

        </div>

        </article>
        </>
    )
}

export default WeatherCard;