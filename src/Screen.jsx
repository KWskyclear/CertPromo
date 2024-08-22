import React, { useState, useEffect } from "react";
import "./style.css";

export const Screen = () => {
  const [isVisible, setIsVisible] = useState(false);
  const linkUrl = "https://myclinicmanager.ai"; // 실제 링크 URL을 입력하세요
  const buttonLinkUrl = "https://myclinicmanager.ai"; // 버튼 클릭 시 이동할 URL

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="screen">
      <div className="image-container">
        <a href={linkUrl} target="_blank" rel="noopener noreferrer">
          <img
            src="/DESKTOP.png"
            alt="마이클리닉매니저 공동인증서 등록 이벤트"
            className="desktop-image"
          />
        </a>
        <a href={linkUrl} target="_blank" rel="noopener noreferrer">
          <img
            src="/MOBILE.png"
            alt="마이클리닉매니저 공동인증서 등록 이벤트"
            className="mobile-image"
          />
        </a>
      </div>
      {isVisible && (
        <a 
          href={buttonLinkUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="floating-button"
        >
          이벤트 참여하기
        </a>
      )}
    </div>
  );
};