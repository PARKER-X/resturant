import React from "react";
import './style.css'

const Temp = () => {
    return (<>


        <div className="wrap">
            <div className="search">
                <input
                    type="search"
                    placeholder="search..."
                    autoFocus
                    id="search"
                    className="searchTerm"
                />

                <button
                    className="searchButton"
                    type="button">
                    Search
                </button>
            </div>
        </div>


        {/* Temp Card */}
        <article className="widget">
            <div className="weatherIcon">
                <i className={"wi wi-day-sunny"}></i>
            </div>
            <div className="weatherInfo" >
                <div className="temperature">
                    <span> 25 &deg; </span>
                </div>
            
            <div className="description">
                <div className="weatherCondition">
                    Sunny
                </div>
                <div className="place">
                    Pune, India
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
                        <i className={"wi wi-sunset"}> </i>
                    </p>
                    <p className="extra-info-leftside">
                        20:00 Pm <br/>
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




    </>)
}


export default Temp;