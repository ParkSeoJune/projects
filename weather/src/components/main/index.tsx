import useGeolocation from "../../hooks/useGeolocation";
import { REACT_APP_WEATHER_API } from "../../shared/config";
import CenterAlignmentLayout from "../common/layout/justify/center";
import * as S from "./style";
import { useEffect, useState } from "react";

function Main() {
  const location = useGeolocation();
  const [weather, setWeather] = useState<any>();

  const getWeatherData = async (lat: number, lng: number) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${REACT_APP_WEATHER_API}`
      );
      const data = await response.json();
      setWeather(data);
      console.log(data);
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
          <S.Temperature>27°C</S.Temperature>
          <S.Description color="#F2C0C0">
            따뜻하고 바람이 안부는 날이네요!
          </S.Description>
        </S.MainFrame>
      </CenterAlignmentLayout>
    </>
  );
}

export default Main;
