import useGeolocation from "../../hooks/useGeolocation";
import CenterAlignmentLayout from "../common/layout/justify/center";
import * as S from "./style";

function Main() {
  const location = useGeolocation();

  return (
    <>
      <CenterAlignmentLayout>
        <S.MainFrame>
          {location.loaded
            ? JSON.stringify(location)
            : "Location data not available yet."}
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
