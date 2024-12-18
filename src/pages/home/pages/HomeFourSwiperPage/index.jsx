import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';  // Подключаем стили Swiper
import SwiperCard from './modules/swiperCard';  // Импортируем компонент SwiperCard
import { cardData } from './services/data'; // Импортируем cardData из data.js
import Modal from '../../../../components/CustomModal/index';
import { useTranslation } from 'react-i18next'; // Импортируем i18n

const HomeFourSwiperPage = () => {
  const { t } = useTranslation(); // Получаем функцию t для перевода

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);  // Состояние для хранения выбранной карты

  const openModal = () => setIsOpenModal(true);
  const closeModal = () => setIsOpenModal(false);

  const handleCardClick = (selectName) => {
    setSelectedCard(selectName);  
    openModal();
  };

  return (
    <div className="fourInfoSwiper p-6 md:p-12">
      <Swiper
        spaceBetween={30} // Расстояние между слайдами
        slidesPerView={4} // Показывать 4 слайда одновременно
        loop={true} // Зацикливание слайдераи
        autoplay={{ 
          delay: 1000, // Задержка между слайдами в миллисекундах
          disableOnInteraction: true, // Автопрокрутка не отключается при взаимодействии
        }}
        breakpoints={{
          1920: {
            slidesPerView: 4,
          },
          1440: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 1,
          },
          0: {
            slidesPerView: 1,
          }
        }}
        className="swiper-container"
      >
        {cardData.map((card, index) => (
          <SwiperSlide key={index}>
            <SwiperCard
              title={t(`home.HomeFourSwiperPage.cards.${card.selectName}.title`)}  // Перевод заголовка
              description={t(`home.HomeFourSwiperPage.cards.${card.selectName}.description`)}  // Перевод описания
              image={card.image}  
              onCardClick={() => handleCardClick(card.selectName)}  // Передаем handleCardClick
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Modal 
        isOpen={isOpenModal}  
        closeModal={closeModal} 
        title={t('home.HomeFourSwiperPage.modalTitle')}  // Перевод для модального окна
        selectName={selectedCard}  // Передаем selectedCard в Modal
      />
    </div>
  );
};

export default HomeFourSwiperPage;
