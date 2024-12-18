import React from 'react';
import { FaUsers, FaHeadset, FaGlobe, FaShippingFast } from 'react-icons/fa';
import { useTranslation } from 'react-i18next'; // Импортируем i18n

export default function HomeThreeInfoPage() {
  const { t } = useTranslation(); // Получаем функцию t для перевода

  return (
    <div id="skills" className="container pt-20 mx-auto py-20 px-6 md:px-12 relative overflow-hidden bg-gradient-to-b from-gray-50 to-gray-200">
      {/* Заголовок */}
      <h2 className="text-4xl md:text-6xl font-extrabold text-center text-gray-900 mb-12 tracking-wider">
        {t('home.HomeThreeInfoPage.Title')} {/* Заголовок из файла перевода */}
      </h2>
      <p className="sm:text-xl text-center text-gray-700 mb-16 max-w-3xl mx-auto">
        {t('home.HomeThreeInfoPage.Description')} {/* Описание из файла перевода */}
      </p>

      {/* Карточки */}
      <div className="space-y-16">
        {[
          {
            icon: <FaUsers className="text-6xl text-gray-900" />,
            title: t('home.HomeThreeInfoPage.Card1.Title'),
            description: t('home.HomeThreeInfoPage.Card1.Description'),
          },
          {
            icon: <FaHeadset className="text-6xl text-gray-900" />,
            title: t('home.HomeThreeInfoPage.Card2.Title'),
            description: t('home.HomeThreeInfoPage.Card2.Description'),
          },
          {
            icon: <FaGlobe className="text-6xl text-gray-900" />,
            title: t('home.HomeThreeInfoPage.Card3.Title'),
            description: t('home.HomeThreeInfoPage.Card3.Description'),
          },
          {
            icon: <FaShippingFast className="text-6xl text-gray-900" />,
            title: t('home.HomeThreeInfoPage.Card4.Title'),
            description: t('home.HomeThreeInfoPage.Card4.Description'),
          },
        ].map((item, index) => (
          <div
            key={index}
            className="group relative bg-gradient-to-br from-gray-200 to-gray-300 p-8 md:p-12 rounded-3xl shadow-xl transform hover:-translate-y-4 transition-all duration-700 overflow-hidden"
          >
            {/* Анимация фона с дополнительным размытие */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Плавно расширяющийся фон */}
            <div className="absolute -inset-1 bg-gradient-to-br from-red-500 to-yellow-500 opacity-20 transform scale-110 group-hover:scale-125 transition-all duration-700 ease-out"></div>

            {/* Иконка с эффектом вращения и смещения */}
            <div className="relative z-10 w-28 h-28 bg-gradient-to-br from-red-500 to-orange-500 shadow-lg rounded-full flex items-center justify-center mx-auto group-hover:rotate-45 group-hover:translate-y-6 transition-all duration-700">
              {item.icon}
            </div>

            {/* Заголовок карточки */}
            <h3 className="mt-10 relative z-10 text-2xl font-bold text-center text-gray-900 group-hover:text-white transition-colors duration-500">
              {item.title}
            </h3>

            {/* Описание карточки */}
            <p className="mt-4 relative z-10 text-center text-gray-600 group-hover:text-gray-200 transition-colors duration-500">
              {item.description}
            </p>

            {/* Эффект динамичных кругов с анимацией */}
            <div className="absolute -top-10 -left-10 w-36 h-36 bg-gradient-to-br from-red-500 to-yellow-500 rounded-full opacity-50 blur-xl group-hover:opacity-75 group-hover:blur-3xl transition-all duration-800"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-red-500 to-yellow-500 rounded-full opacity-50 blur-xl group-hover:opacity-75 group-hover:blur-3xl transition-all duration-800"></div>

            {/* Плавное увеличение контента с масштабированием */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-600"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
