import React from 'react';
import { useTranslation } from 'react-i18next';

export default function SuccessModal({ isOpen, closeModal }) {
  const { t } = useTranslation();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 animate-fadeIn">
      <div className="bg-black p-8 rounded-3xl shadow-2xl w-full max-w-sm transform scale-110 transition-all duration-500 ease-in-out">
        <h2 className="text-3xl font-bold text-white text-center mb-4 tracking-wide">
          {t('successModal.title')}
        </h2>
        <p className="text-lg text-gray-300 text-center mb-8">
          {t('successModal.message')}
        </p>
        <button
          onClick={closeModal}
          className="block w-full py-3 bg-red-600 text-white font-semibold text-lg rounded-full hover:bg-red-700 transition-all duration-300 transform hover:scale-105"
        >
          {t('successModal.closeButton')}
        </button>
      </div>
    </div>
  );
}
