import { atom } from "recoil";

export const userToken = atom({
  key: "userToken",
  default: {
    accessToken: "",
    refreshToken: "",
    expiredAt: "", // accessToken의 만료 시간
  },
});
