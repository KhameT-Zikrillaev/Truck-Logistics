import React from 'react';
import { HiLocationMarker, HiPhone, HiMail } from 'react-icons/hi';
import rightimg from '../../../../assets/images/container.png';
import { useTranslation } from 'react-i18next';

const HomeSevenLocationpage = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="relative pt-24 overflow-hidden p-8 bg-gradient-to-r from-red-900 via-purple-700 to-black text-white">
      {/* Плавный черный градиент сверху */}
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black to-transparent z-0"></div>

      {/* Фон с картинкой */}
      <div className="absolute inset-0 bg-fixed bg-cover bg-center z-0 opacity-60 blur-md"
        style={{ backgroundImage: `url(${rightimg})`, transform: 'scale(1.0)' }}>
      </div>

      {/* Плавный черный градиент снизу */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black to-transparent z-0"></div>

      <div className="container relative z-10 flex flex-col gap-16">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left">
          <h2 className="text-5xl font-extrabold mb-6 tracking-wide animate__animated animate__fadeIn animate__delay-1s">
            {t('home.HomeSevenLocationPage.Title')}
          </h2>
          <p className="text-lg mb-6 opacity-90 max-w-lg mx-auto lg:mx-0 animate__animated animate__fadeIn animate__delay-2s">
            {t('home.HomeSevenLocationPage.Description')}
          </p>
          <div className="flex flex-col items-center lg:items-start text-lg mb-6">
            <div className="flex items-center text-lg mb-4 hover:scale-105 transition-transform animate__animated animate__fadeIn animate__delay-3s">
              <HiLocationMarker className="mr-4 text-3xl text-red-300 hover:text-red-400 transition-all" />
              <span>{t('home.HomeSevenLocationPage.Address')}</span>
            </div>
            <div className="flex items-center text-lg mb-4 hover:scale-105 transition-transform animate__animated animate__fadeIn animate__delay-4s">
              <HiPhone className="mr-4 text-3xl text-red-300 hover:text-red-400 transition-all" />
              <span>{t('home.HomeSevenLocationPage.Phone')}</span>
            </div>
            <div className="flex items-center text-lg hover:scale-105 transition-transform animate__animated animate__fadeIn animate__delay-5s">
              <HiMail className="mr-4 text-3xl text-red-300 hover:text-red-400 transition-all" />
              <span>{t('home.HomeSevenLocationPage.Email')}</span>
            </div>
          </div>
        </div>

        <div className="max-w-[600px] w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11124.373512923074!2d69.27503732136644!3d41.31846823101674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef206f9a95a65%3A0x681c1d1d4a35b070!2z0JvQsNC60L7QstCw!5e0!3m2!1sru!2s!4v1637404567831!5m2!1sru!2s"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeSevenLocationpage;
