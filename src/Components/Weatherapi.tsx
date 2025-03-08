import { error } from "console";
import { useEffect, useState} from "react";

export function Weather(){
    interface WeatherData{
        date:String;
        temperatureC: number;
        temperatureF: number;
        summary: string;
    }
    const [Weather, setWeather] = useState<WeatherData[]>([]);

    
    useEffect(() => {
        fetch("https://localhost:7115/weatherforecast")
        .then(response => response.json())
        .then(data => setWeather(data))
        .catch(error => console.error("Error fetching data", error));

    }, []);
    
    return(
        <div>
            <h1> Weather over the next few days!</h1>
            <ul>
                {Weather.map((item, index) => (
                <li key = {index}>
                    {item.date} : {item.temperatureC}°C ({item.summary})
                </li>
                
                ))}
            </ul>
        </div>

    )
}