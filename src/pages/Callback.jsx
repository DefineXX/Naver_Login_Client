import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import api from "../api/axios";

const Callback = () => {
  const location = useLocation();
  const socialProvider = "NAVER";

  const queryParams = new URLSearchParams(location.search);
  const AUTH_CODE = queryParams.get("code");

  useEffect(() => {
    if (AUTH_CODE) {
      console.log("Authorization Code:", AUTH_CODE);

      // 애플리케이션 서버로 Auth Code 전달
      const sendAuthCodeToServer = async () => {
        try {
          const response = await api.post("/auth/login", {
            social_provider: socialProvider,
            authorization_code: AUTH_CODE,
          });

          console.log(response.data);
        } catch (error) {
          console.error("Fetching access token failed: ", error);
        }
      };

      sendAuthCodeToServer();
    }
  }, [AUTH_CODE]);

  return (
    <>
      <h1>Processing Social Login...</h1>
    </>
  );
};

export default Callback;
