import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Introbg from '../../../../assets/images/Intro-bg.jpg';
import Modal from '../../../../components/CustomModal';

export default function Index() {
  const { t } = useTranslation(); // Используем хук для получения функции t
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => setIsOpenModal(true);
  const closeModal = () => setIsOpenModal(false);

  return (
    <>
      <div
        className="intropage flex justify-center items-center h-screen p-2  md:p-8 relative"
        style={{
          backgroundImage: `url(${Introbg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed', // Параллакс эффект
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 80px))', // Урезание верхней части фона
        }}
      >
        <div className="container flex justify-between items-center w-full relative z-10">
          {/* Левая часть с текстом */}
          <div className="left-content flex-1 text-left text-white p-10 bg-black bg-opacity-50 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-500">
            <h1 className="text-3xl md:text-7xl font-extrabold leading-tight mb-6 text-shadow-lg animate__animated animate__fadeInLeft animate__delay-1s">
              {t('home.HomeFirstIntroPage.Title')}
            </h1>
            <div className="line w-48 h-1 bg-gradient-to-r from-yellow-400 to-red-600 mb-8 animate__animated animate__fadeInLeft animate__delay-1.5s"></div>
            <p className="text-2xl opacity-90 mb-10 max-w-2xl mx-auto text-shadow-lg animate__animated animate__fadeInLeft animate__delay-2s">
              {t('home.HomeFirstIntroPage.Description')}
            </p>
            <button
              onClick={openModal}
              className="  px-6 py-3  md:px-10 md:py-5 bg-gradient-to-r from-red-500 to-yellow-500 text-white font-semibold text-xl rounded-full shadow-xl hover:scale-110 transition-all duration-300 transform animate__animated animate__fadeInLeft animate__delay-2.5s"
            >
              {t('home.HomeFirstIntroPage.ButtonText')}
            </button>
          </div>
        </div>
      
      </div>
      <Modal isOpen={isOpenModal} title={t('home.HomeFirstIntroPage.ModalTitle')} closeModal={closeModal} />
    </>
  );
}
