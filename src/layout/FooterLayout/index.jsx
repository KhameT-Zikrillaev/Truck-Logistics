import React, { useState } from 'react';
import './FooterLayout.css';
import { FaHome, FaInfoCircle, FaServicestack, FaPhoneAlt, FaInstagram, FaFacebook, FaTwitter, FaNewspaper } from 'react-icons/fa';
import Modal from '../../components/CustomModal';
import { useTranslation } from 'react-i18next';

const FooterLayout = () => {
  const { t } = useTranslation();
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => setIsOpenModal(true);
  const closeModal = () => setIsOpenModal(false);

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section card">
          <h4><FaHome /><span className='ml-2'>{t('footer.title.Home')}</span></h4>
          <ul>
            <li><FaInfoCircle /><a href="#about">{t('footer.title.AboutUs')}</a></li>
            <li><FaServicestack /><a href="#skills">{t('footer.title.OurAdvantage')}</a></li>
            <li className='cursor-pointer' onClick={openModal}><FaNewspaper />{t('footer.title.ContactUs')}</li>
          </ul>
        </div>
        <div className="footer-section card">
          <h4><FaPhoneAlt/><span className='ml-2'>{t('footer.title.Contacts')}</span></h4>
          <a href="tel:+998947820092">{t('footer.title.Phone')}</a>
          
          <div className="social-icons">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 {t('footer.title.CompanyRights')}</p>
      </div>
      <Modal isOpen={isOpenModal} title={t('footer.title.ContactUs')} closeModal={closeModal} />
    </footer>
  );
};

export default FooterLayout;
