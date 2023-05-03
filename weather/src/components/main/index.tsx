import axios from "axios";
import useGeolocation from "../../hooks/useGeolocation";
import { REACT_APP_WEATHER_API } from "../../shared/config";
import CenterAlignmentLayout from "../common/layout/justify/center";
import * as S from "./style";
import { useEffect, useState } from "react";

function Main() {
  const location = useGeolocation();
  const [temp, setTemp] = useState<number>(0);
  const [icon, setIcon] = useState<string>("");
  const [wind, setWind] = useState<number>(0);

  const getWeatherData = async (lat: number, lng: number) => {
    try {
      const response: any = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${REACT_APP_WEATHER_API}`
      );
      setTemp(Math.ceil(response.data.main.temp - 273.15));
      setIcon(
        "http://openweathermap.org/img/w/" +
          response.data.weather[0].icon +
          ".png"
      );
      setWind(response.data.wind.speed);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (location.loaded) {
      if (location.coordinates) {
        getWeatherData(location.coordinates.lat, location.coordinates.lng);
      }
    }
  }, [location]);

  return (
    <>
      <CenterAlignmentLayout>
        <S.MainFrame>
          <S.Title>
            현재 내 위치의
            <br />
            날씨는
          </S.Title>
          <S.Icon src={icon} />
          <S.Temperature>{temp}°C</S.Temperature>
          <S.Description color={temp > 25 ? "#F2C0C0" : "#C0CEF2"}>
            {temp > 25 ? (
              <>오늘은 따뜻하고 바람이 {wind}m/s만큼 불어요</>
            ) : (
              <>오늘은 쌀쌀하고 바람이 {wind}m/s만큼 불어요</>
            )}
          </S.Description>
        </S.MainFrame>
      </CenterAlignmentLayout>
    </>
  );
}

export default Main;
