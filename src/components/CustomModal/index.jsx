import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import SuccessModal from '../SuccessModal';

export default function Modal({ isOpen, title, closeModal, selectName }) {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [region, setRegion] = useState('');
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  useEffect(() => {
    if (selectName) {
      setRegion(selectName);
    }
  }, [selectName]);

  const closeSuccessModal = () => {
    setIsSuccessModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Логика отправки формы
    console.log({ name, phone, email, region });
  
    // Очистка полей формы
    setName('');
    setPhone('');
    setEmail('');
    setRegion('');
  
    // Закрыть текущее модальное окно
    closeModal();
  
    // Показать SuccessModal через 1 секунду
    setTimeout(() => {
      setIsSuccessModalOpen(true);
    }, 1000);
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    setPhone(value);
  };

  const handleKeyPress = (e) => {
    // Разрешаем только цифры и символ "+"
    if (!/[\d+]/.test(e.key)) {
      e.preventDefault();
    }
  };

  if (!isOpen && !isSuccessModalOpen) return null;

  return (
    <>
      {isOpen && (
        <div className="fixed px-8 inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 animate-fadeIn">
          <div className="bg-black p-8 rounded-3xl shadow-2xl w-full max-w-lg transform scale-110 transition-all duration-500 ease-in-out">
            <h2 className=" text-3xl md:text-4xl font-semibold text-white text-center mb-10 tracking-wide">{title}</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-xl font-medium text-white mb-2">{t('modal.fields.name')}</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="p-4 rounded-lg bg-gray-800 text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-red-600 transition-all"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="phone" className="text-xl font-medium text-white mb-2">{t('modal.fields.phone')}</label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  maxLength={25}
                  onChange={handlePhoneChange}
                  onKeyPress={handleKeyPress}
                  className="p-4 rounded-lg bg-gray-800 text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-red-600 transition-all"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="text-xl font-medium text-white mb-2">{t('modal.fields.email')}</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-4 rounded-lg bg-gray-800 text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-red-600 transition-all"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="region" className="text-xl font-medium text-white mb-2">{t('modal.fields.region')}</label>
                <select
                  id="region"
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  required
                  className="p-4 rounded-lg bg-gray-800 text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-red-600 transition-all"
                >
                  <option value="">{t('modal.fields.selectPlaceholder')}</option>
                  <option value="USA">{t('modal.fields.regions.USA')}</option>
                  <option value="China">{t('modal.fields.regions.China')}</option>
                  <option value="Global">{t('modal.fields.regions.Global')}</option>
                  <option value="Regional">{t('modal.fields.regions.Regional')}</option>
                  <option value="Europe">{t('modal.fields.regions.Europe')}</option>
                </select>
              </div>

              <div className="flex justify-between mt-8">
                <button
                  type="submit"
                  className="bg-red-600 text-white py-3 px-8 rounded-full hover:bg-red-700 transition-all duration-300 transform hover:scale-105"
                >
                  {t('modal.buttons.submit')}
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="bg-gray-800 text-white py-3 px-8 rounded-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
                >
                  {t('modal.buttons.close')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <SuccessModal isOpen={isSuccessModalOpen} closeModal={closeSuccessModal} />
    </>
  );
}
