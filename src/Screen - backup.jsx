import React from "react";
import "./style.css";

export const Screen = () => {
  return (
    <div className="screen">
      <div className="image-container">
        <img
          src="DESKTOP.png"
          alt="마이클리닉매니저 공동인증서 등록 이벤트"
          className="desktop-image"
        />
        <img
          src="MOBILE.png"
          alt="마이클리닉매니저 공동인증서 등록 이벤트"
          className="mobile-image"
        />
      </div>
    </div>
  );
};