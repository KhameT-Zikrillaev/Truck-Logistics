import React, { useState } from 'react';
import CustomModal from '../CustomModal';
import { useTranslation } from 'react-i18next';
import flagusa from '../../assets/images/flag-usa.jpeg';
import flagru from '../../assets/images/flag-rus.png';

export default function Navbar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => setIsOpenModal(true);
  const closeModal = () => setIsOpenModal(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const LanguageSelector = () => {
    const { i18n } = useTranslation();
    return (
      <div className="flex items-center gap-2">
        <button
          onClick={() => {
            i18n.changeLanguage('ru');
            toggleMenu(false);
          }}
          className={`w-8 h-8 rounded-full overflow-hidden border-2 ${i18n.language === 'ru' ? 'border-rose-500' : 'border-transparent'}`}
        >
          <img src={flagru} alt="RU" className="w-full h-full object-cover" />
        </button>
        <button
          onClick={() => {
            i18n.changeLanguage('en');
            toggleMenu(false);
          }}
          className={`w-8 h-8 rounded-full overflow-hidden border-2 ${i18n.language === 'en' ? 'border-rose-500' : 'border-transparent'}`}
        >
          <img src={flagusa} alt="EN" className="w-full h-full object-cover" />
        </button>
      </div>
    );
  };

  return (
    <nav className="navbar fixed top-0 left-0 w-full bg-white shadow-md z-50 border-b-2 border-gray-300">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/" className="text-3xl font-semibold text-red-600 flex items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-truck" viewBox="0 0 16 16">
            <path d="M11 1a2 2 0 0 1 2 2v1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-2v1a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h2V3a2 2 0 0 1 2-2h7zM3 3v2h10V3H3zM2 5v7h12V5H2zM12 12v-1h2a1 1 0 0 0 1-1V6H2v5a1 1 0 0 0 1 1h2v1h7z" />
          </svg>
          <span>{t('navbar.title')}</span>
        </a>
        <div className="hidden md:flex ml-4">
          <LanguageSelector />
        </div>
        <div className="hidden md:flex space-x-4 lg:space-x-8">
          <a href="#about" className="text-gray-700 relative group px-4 py-2 rounded-lg font-medium tracking-wide transition-all duration-300 transform hover:scale-110 hover:translate-y-1">
            {t('navbar.menu.about')}
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#skills" className="text-gray-700 relative group px-4 py-2 rounded-lg font-medium tracking-wide transition-all duration-300 transform hover:scale-110 hover:translate-y-1">
            {t('navbar.menu.skills')}
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#contact" className="text-gray-700 relative group px-4 py-2 rounded-lg font-medium tracking-wide transition-all duration-300 transform hover:scale-110 hover:translate-y-1">
            {t('navbar.menu.contact')}
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <button onClick={openModal} className="text-white bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
            {t('navbar.menu.contactUs')}
          </button>
        </div>
        <button className="md:hidden flex flex-col items-center justify-center w-12 h-12 focus:outline-none relative group" onClick={toggleMenu} aria-label="Toggle Menu">
          <span className={`block w-8 h-1 bg-gray-800 rounded transition-transform duration-500 ease-in-out transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-8 h-1 bg-gray-800 rounded transition-opacity duration-300 ease-in-out my-1 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-8 h-1 bg-gray-800 rounded transition-transform duration-500 ease-in-out transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white rounded-lg shadow-md transform scale-95 transition-all duration-500 ease-in-out">
          <a href="#about" onClick={() => toggleMenu(false)} className="block px-6 py-3 text-gray-800 hover:bg-gray-100 transition-colors duration-300">{t('navbar.menu.about')}</a>
          <a href="#skills" onClick={() => toggleMenu(false)} className="block px-6 py-3 text-gray-800 hover:bg-gray-100 transition-colors duration-300">{t('navbar.menu.skills')}</a>
          <a href="#contact" onClick={() => toggleMenu(false)} className="block px-6 py-3 text-gray-800 hover:bg-gray-100 transition-colors duration-300">{t('navbar.menu.contact')}</a>
          <div className="flex justify-between p-2">
            <button onClick={() => { openModal(); toggleMenu(true); }} className="block px-6 py-3 text-white bg-red-600 hover:bg-red-700 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
              {t('navbar.menu.contactUs')}
            </button>
            <LanguageSelector />
          </div>
        </div>
      )}
      <CustomModal isOpen={isOpenModal} title={t('navbar.modal.title')} closeModal={closeModal} />
    </nav>
  );
}
