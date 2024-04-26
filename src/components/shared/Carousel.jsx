import { useState, useEffect } from 'react';
import Button from './Button'
import heroData from '../../data/sliderData.json'

const Carousel = () => {
    const [index, setIndex] = useState(0);
    const updateHeroContent = () => {
        setIndex((index + 1) % heroData.length);
    };
    useEffect(() => {
        const interval = setInterval(updateHeroContent, 5000);
        return () => clearInterval(interval);
    }, [index, heroData]);

    const mailButton = () => {
        const mailtoLink = `mailto:info@biocoder.com.tr`;
        window.location.href = mailtoLink;
    };

    return (
        <section className="hero">
            <img src={heroData[index].image} alt=""/>
            <div className="lockup">
                <div className="wrapper">
                    <div className="badge">
                        BİOCODER TEKNOLOJİ A.Ş.
                    </div>
                    <h1 className="lockup-text">
                        {heroData[index] && heroData[index].title}
                    </h1>
                    <p className="lockup-information">
                        {heroData[index] && heroData[index].description}
                    </p>
                    <Button onClick={mailButton} type={'button'} disabled={false} innerText={'İletişime geç'}
                            iconL={'mail'}/>
                </div>
            </div>
            <div className="floating-menu">
                <a href='https://bee.biocoder.com.tr/' target='_blank' className="floating-item jordy-blue-500">
                    <i className='ri-bug-fill'></i>
                    <span>
                        Kovan Takip <i className='ri-arrow-right-up-line'></i>
                    </span>
                </a>
                <a href='https://portal.biocoder.com.tr/Account/Login' target='_blank'
                   className="floating-item jordy-blue-600">
                    <i className='ri-temp-hot-fill'></i>
                    <span>
                        Sıcaklık Nem Takip <i className='ri-arrow-right-up-line'></i>
                    </span>
                </a>
                <a href='http://logistic.biocoder.com.tr/' target='_blank' className="floating-item jordy-blue-700">
                    <i className='ri-map-pin-4-fill'></i>
                    <span>
                        GSM Datalogger <i className='ri-arrow-right-up-line'></i>
                    </span>
                </a>
            </div>
            <div className="slider-arrows">
                <div className="arrow left" onClick={() => updateHeroContent(-1)}>
                    <i className="ri-arrow-left-line"></i>
                </div>
                <div className="arrow right" onClick={() => updateHeroContent(1)}>
                    <i className="ri-arrow-right-line"></i>
                </div>
            </div>
        </section>
    );
};

export default Carousel;
