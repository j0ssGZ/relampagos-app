import { useEffect, useState } from "react";

interface WeatherWidgetProps {
  lat: number;
  lon: number;
  apiKey: string;
}

const WeatherWidget = ({ lat = 42.43, lon = -8.64, apiKey = "2b5194b98a7448f8a1805647252306" }: WeatherWidgetProps) => {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [localTime, setLocalTime] = useState(new Date());

  // Actualiza la hora cada segundo
  useEffect(() => {
    const timer = setInterval(() => setLocalTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lat},${lon}&aqi=no`
    )
      .then(res => res.json())
      .then(data => setWeatherData(data))
      .catch(console.error);
  }, [lat, lon, apiKey]);

  if (!weatherData) return <div>Cargando...</div>;

  const {
    current: { temp_c, condition },
    location: { name: cityName },
  } = weatherData;

  return (
    <div className="weather">
      <span>{Math.round(temp_c)}°C</span>
      <img
          src={`https:${condition.icon}`}
          alt={condition.text}
        />
      <span>{cityName}</span>
      <span>{localTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
    </div>
  )
}

export default WeatherWidget
