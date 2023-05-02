import React from "react";
import * as S from "./style";

interface CenterAlignmentLayoutProps {
  children: React.ReactNode;
}

function CenterAlignmentLayout(props: CenterAlignmentLayoutProps) {
  return <S.CenterFrame>{props.children}</S.CenterFrame>;
}

export default CenterAlignmentLayout;
