import LoginButton from "../assets/naver-login.svg";
import "./Home.css";

const Home = () => {
  const CLIENT_ID = import.meta.env.VITE_NAVER_CLIENT_ID;
  const CALLBACK_URL = import.meta.env.VITE_NAVER_REDIRECT_URL;
  const STATE_STRING = "test";

  const request_baseURL = "https://nid.naver.com/oauth2.0/authorize";
  const requestURL = `${request_baseURL}?response_type=code&client_id=${CLIENT_ID}&state=${STATE_STRING}&redirect_uri=${CALLBACK_URL}`;

  const handleLoginBtnClick = () => {
    window.location.href = requestURL;
  };

  return (
    <div className="home-container">
      <img
        onClick={handleLoginBtnClick}
        src={LoginButton}
        alt="Naver-Login-Button"
        className="login-btn"
      />
    </div>
  );
};

export default Home;
