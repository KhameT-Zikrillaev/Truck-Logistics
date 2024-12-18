import React from 'react';
import './SiteLoading.css'; // Подключение стилей
import TruckImage from '../../assets/images/Truck.png'; // Импорт изображения грузовика

const SiteLoading = () => {
  return (
    <div className="fixed inset-0 bg-black z-[9999] flex items-center justify-center overflow-hidden">
      {/* Фоновая анимация */}
      <div className="background-animation"></div>
      
      {/* Контейнер с грузовиком и шариками */}
      <div className="loading-container">
        <img
          src={TruckImage}
          alt="Truck"
          className="truck-image"
        />
        <div className="flex space-x-6 balls-container">
          {/* Три шарика */}
          <div className="ball ball-left"></div>
          <div className="ball ball-center"></div>
          <div className="ball ball-right"></div>
        </div>
      </div>
    </div>
  );
};

export default SiteLoading;
