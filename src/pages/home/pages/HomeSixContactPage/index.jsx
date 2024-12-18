import React from 'react'
import { FiMapPin, FiEdit3, FiPackage, FiPhone } from 'react-icons/fi'
import contactbg from '../../../../assets/images/contact-bg.jpg'
import { useTranslation } from 'react-i18next'

export default function HomeSixContactPage() {
  const { t } = useTranslation()

  return (
    <div 
      className="relative bg-cover bg-center min-h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${contactbg})` }}
    >
      {/* Затемнённый слой */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>

      {/* Форма с блуром */}
      <div className="relative backdrop-blur-lg bg-white/10 border border-white/20 rounded-lg p-12 max-w-2xl w-full text-white">
        <h2 className="text-3xl font-bold mb-8 text-center drop-shadow-lg">
          {t('home.HomeSixContactPage.Title')}
        </h2>
        <form className="space-y-8">
          {/* Поле "Откуда" */}
          <div className="flex items-center border-b border-white/50 pb-2">
            <FiMapPin className="text-yellow-500 mr-4 text-2xl" />
            <input
              type="text"
              placeholder={t('home.HomeSixContactPage.From')}
              className="w-full px-2 py-3 bg-transparent text-white placeholder-gray-300 text-lg focus:outline-none"
            />
          </div>

          {/* Поле "Куда" */}
          <div className="flex items-center border-b border-white/50 pb-2">
            <FiEdit3 className="text-yellow-500 mr-4 text-2xl" />
            <input
              type="text"
              placeholder={t('home.HomeSixContactPage.To')}
              className="w-full px-2 py-3 bg-transparent text-white placeholder-gray-300 text-lg focus:outline-none"
            />
          </div>

          {/* Поле "Название груза" */}
          <div className="flex items-center border-b border-white/50 pb-2">
            <FiPackage className="text-yellow-500 mr-4 text-2xl" />
            <input
              type="text"
              placeholder={t('home.HomeSixContactPage.CargoName')}
              className="w-full px-2 py-3 bg-transparent text-white placeholder-gray-300 text-lg focus:outline-none"
            />
          </div>

          {/* Поле "Телефон" */}
          <div className="flex items-center border-b border-white/50 pb-2">
            <FiPhone className="text-yellow-500 mr-4 text-2xl" />
            <input
              type="tel"
              placeholder={t('home.HomeSixContactPage.Phone')}
              className="w-full px-2 py-3 bg-transparent text-white placeholder-gray-300 text-lg focus:outline-none"
            />
          </div>

          {/* Кнопка */}
          <button
            type="submit"
            className="w-full py-4 bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg rounded transition duration-300"
          >
            {t('home.HomeSixContactPage.SubmitButton')}
          </button>
        </form>
      </div>
    </div>
  )
}
