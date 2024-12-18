import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Aboutleftbg from "../../../../assets/images/About-left-bg.png";

export default function HomeSecondAboutPage() {
  const { t } = useTranslation(); // Используем хук для перевода
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newScale = 1 + scrollY * 0.0002;
      setScale(newScale);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="about" className="container pt-20 overflow-hidden mx-auto flex flex-col md:flex-row items-center justify-between p-6">
      {/* Left Side - Image */}
      <div className="about-image md:w-1/2 mb-4 md:mb-0">
        <img
          className="w-[80%] ml-12"
          src={Aboutleftbg}
          alt="About Us"
          style={{
            transform: `scale(${scale})`,
            transition: "transform 0.1s ease-out", // Плавное увеличение
          }}
        />
      </div>

      {/* Right Side - Text */}
      <div className="about-text md:w-1/2 md:pl-8 pt-4 md:pt-0">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          {t("home.HomeSecondAboutPage.Title")}
        </h2>
        <p className="text-lg text-gray-600 mb-4">
          {t("home.HomeSecondAboutPage.Description1")}
        </p>
        <p className="text-lg text-gray-600 mb-4">
          {t("home.HomeSecondAboutPage.Description2")}
        </p>
        <p className="text-lg text-gray-600 mb-4">
          {t("home.HomeSecondAboutPage.Description3")}
        </p>
        <div className="border-t-2 border-red-600 my-4"></div> {/* Decorative line */}
        <p className="text-lg text-gray-600">
          {t("home.HomeSecondAboutPage.ContactText")}
        </p>
      </div>
    </div>
  );
}
