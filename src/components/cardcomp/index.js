import {useState,useEffect} from 'react';
import "./styles.css"
import { FaTemperatureHigh,FaTemperatureLow } from "react-icons/fa";
import { RiTempHotLine } from "react-icons/ri";
import { ImMeter2 } from "react-icons/im"
import { WiRaindrop } from "react-icons/wi"

const Card = () => {

    const [city,setCity] = useState(null);
    const [search,setSearch] = useState("Kolkata")

    useEffect(() => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid= ` \\paste your api id
        const fetchApi = async () =>
        {
            const response = await fetch(url);
            const final = await response.json();
            setCity(final.main);
            
        }

        fetchApi();
    },[search])

    return(
        <>

            <div className="text">
                <h1>The Ultimate Weather Guide</h1>
            </div>
            <div className="box">
                <div className="header">
                    <input type="search" placeholder="Enter city" className="search-box" onChange={(event) => setSearch(event.target.value) } />
                </div>

                {!city? (<p> No Data Found </p>) :
                    (
                        <div>   
                            <div className="main-body">
                                <h1 className="location">City - {search} </h1>
                                <br />
                                <br />
                                <h4 className="temperature"> <RiTempHotLine /> Temperature - {city.temp} °C </h4>
                                <h4 className="min"> <FaTemperatureLow /> Min_Temp: {city.temp_min} °C  </h4>
                                <h4 className="max"> <FaTemperatureHigh /> Max_Temp: {city.temp_max} °C</h4>
                                <h4 className="pressure"> <ImMeter2 /> Pressure: {city.pressure}  </h4>
                                <h4 className="humidity"> <WiRaindrop /> Humidity: {city.humidity}   </h4>
                            </div>


                            <div className="footer">

                            </div>
                        </div>
                    )

                }

                
            </div>
        </>
    )
}

export default Card
