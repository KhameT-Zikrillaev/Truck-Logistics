import React, { useEffect, useState, useRef } from 'react';
import animatetruck from '../../../../assets/images/animate-truck.png';
import { useTranslation } from 'react-i18next';

export default function Index() {
  const { t } = useTranslation();
  const [offset, setOffset] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  const statsRef1 = useRef(null);
  const statsRef2 = useRef(null);
  const statsRef3 = useRef(null);

  const [isInView1, setIsInView1] = useState(false);
  const [isInView2, setIsInView2] = useState(false);
  const [isInView3, setIsInView3] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1280);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setOffset(scrollTop);

      // Проверка, когда карточки видны на экране
      if (statsRef1.current && statsRef1.current.getBoundingClientRect().top < window.innerHeight) {
        setIsInView1(true);
      } else {
        setIsInView1(false);
      }

      if (statsRef2.current && statsRef2.current.getBoundingClientRect().top < window.innerHeight) {
        setIsInView2(true);
      } else {
        setIsInView2(false);
      }

      if (statsRef3.current && statsRef3.current.getBoundingClientRect().top < window.innerHeight) {
        setIsInView3(true);
      } else {
        setIsInView3(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Проверим сразу при загрузке

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isInView1) {
      let count = 0;
      const interval = setInterval(() => {
        if (count < 7) {
          count++;
          setCount1(count);
        } else {
          clearInterval(interval);
        }
      }, 200); // Увеличение числа с интервалом
      return () => clearInterval(interval);
    } else {
      setCount1(0); // Сброс счетчика, если компонент выходит из вида
    }
  }, [isInView1]);

  useEffect(() => {
    if (isInView2) {
      let count = 0;
      const interval = setInterval(() => {
        if (count < 5000) {
          count += 100; // Увеличиваем на 100 для ускоренной анимации
          setCount2(count);
        } else {
          clearInterval(interval);
        }
      }, 50); // Увеличение числа с интервалом
      return () => clearInterval(interval);
    } else {
      setCount2(0); // Сброс счетчика, если компонент выходит из вида
    }
  }, [isInView2]);

  useEffect(() => {
    if (isInView3) {
      let count = 0;
      const interval = setInterval(() => {
        if (count < 100) {
          count++;
          setCount3(count);
        } else {
          clearInterval(interval);
        }
      }, 20); // Увеличение числа с интервалом
      return () => clearInterval(interval);
    } else {
      setCount3(0); // Сброс счетчика, если компонент выходит из вида
    }
  }, [isInView3]);

  return (
    <>
      <div className="py-32">
        <div className="animation-truck w-full" style={{ overflow: 'hidden' }}>
          <img
            className={`w-full ${isMobile ? 'max-w-[60vw]' : 'md:w-[500px]'} ml-auto`}
            src={animatetruck}
            alt=""
            style={{
              transform: `translateX(-${offset * (isMobile ? 0.03 : 0.2)}px)`,
              transition: 'transform 0.1s linear',
            }}
          />
        </div>
        <div className="container text-center pt-[100px] px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-2 xl:gap-16">
            {/* Карточка 1 */}
            <div
              ref={statsRef1}
              className="stat-item relative p-10  transform transition-all duration-500 hover:scale-105 hover:shadow-3xl group"
            >
              <h3 className=" text-3xl md:text-4xl xl:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-black">
                {count1}+ {t('home.HomeFiveSuccessPage.YearsInMarket')}
              </h3>
              <p className="text-xl mt-4 text-gray-800">{t('home.HomeFiveSuccessPage.ExperienceDescription')}</p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-all duration-500"></div>
            </div>
            {/* Карточка 2 */}
            <div
              ref={statsRef2}
              className="stat-item relative p-10  transform transition-all duration-500 hover:scale-105 hover:shadow-3xl group"
            >
              <h3 className=" text-3xl md:text-4xl xl:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-black">
                {count2}+ {t('home.HomeFiveSuccessPage.Reviews')}
              </h3>
              <p className="text-xl mt-4 text-gray-800">{t('home.HomeFiveSuccessPage.HappyClients')}</p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-all duration-500"></div>
            </div>
            {/* Карточка 3 */}
            <div
              ref={statsRef3}
              className="stat-item relative p-10  transform transition-all duration-500 hover:scale-105 hover:shadow-3xl group"
            >
              <h3 className=" text-3xl md:text-4xl xl:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-black">
                {count3}+ {t('home.HomeFiveSuccessPage.Partners')}
              </h3>
              <p className="text-xl mt-4 text-gray-800">{t('home.HomeFiveSuccessPage.TrustUs')}</p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-red-700 transform scale-x-0 group-hover:scale-x-100 transition-all duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
