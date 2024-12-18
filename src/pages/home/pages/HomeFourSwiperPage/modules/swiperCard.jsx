import React from 'react';
import { useTranslation } from 'react-i18next'; // Импортируем i18n

export default function SwiperCard({ title, description, image, onCardClick }) {
  const { t } = useTranslation(); // Получаем функцию t для перевода

  return (
    <div className="swiper-card  relative p-6 rounded-3xl shadow-xl overflow-hidden bg-gradient-to-t from-gray-800 via-gray-600 to-gray-400 text-white">
      {/* Верхний эффект для карточки */}
      <div className="absolute  top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-600 via-black-600 to-red-600"></div>

      {/* Контейнер для контента */}
      <div className="relative z-10 " >
        {/* Заголовок карточки */}
        <h3 className="text-4xl xl:h-[110px]  font-extrabold  mb-4 text-shadow-xl leading-tight">{title}</h3>

    

        {/* Изображение */}
        <div className="relative w-full h-64 mb-6 overflow-hidden rounded-xl">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-xl transform hover:scale-110 transition-all duration-500 ease-in-out"
          />
        </div>
    {/* Описание */}
    <p className="text-lg mb-6  xl:h-[110px]  text-opacity-90">{description}</p>
        {/* Дополнительная информация или кнопка */}
        <div className="mt-4 flex items-center" >
          <button onClick={onCardClick} className="relative px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-gray-900 via-gray-800 to-black rounded-lg shadow-inner shadow-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r hover:from-black hover:via-gray-900 hover:to-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2">
            <span className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-700 opacity-30 rounded-lg transition-all duration-300 group-hover:opacity-50"></span>
            <span className="relative">{t('home.HomeFourSwiperPage.learnMore')}</span> {/* Перевод текста кнопки */}
          </button>
        </div>
      </div>

      {/* Эффект при наведении на карточку */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black opacity-30 hover:opacity-50 transition-opacity duration-300"></div>

      {/* Легкая анимация появления */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-20 hover:opacity-50 transition-opacity duration-300"></div>
      
    </div>
  );
}
