import React from 'react'
import Hero from '../assets/images/Hero.jpg'
import HiveTracMini from '../assets/images/HiveTracMini.png'
import BeeLoggerMini from '../assets/images/BeeLoggerMini.png'
import HeatHumidityMapping from '../assets/images/HeatHumidityMapping.jpg'
import HeatHumiMini from '../assets/images/HeatHumiMini.jpg'
const Home = () => {
    return (
        <>
            <section className='hero'>
                <img src={Hero} alt="" />
                <div className="lockup">
                    <div className="wrapper">
                        <div className="badge">
                            BİOCODER TEKNOLOJİ A.Ş.
                        </div>
                        <h1 className="lockup-text">
                            Profesyonel Çözümlerle Teknolojiyi Yeniden Şekillendirmek.
                        </h1>
                        <p className="lockup-information">
                            BioCoder Teknoloji, güçlü gömülü sistem ekibiyle endüstri standartlarına uygun yazılım geliştirme ve inovatif çözümler sunma konusunda uzmanlaşmıştır.
                        </p>
                        <button className="button">
                            <i className="ri-mail-line"></i>
                            <span className="label-wrapper">
                                İletişime geç
                            </span>
                        </button>
                    </div>
                </div>
                <div className="floating-menu">
                    <a href='https://bee.biocoder.com.tr/' target='_blank' className="floating-item jordy-blue-500">
                        <i className='ri-bug-fill'></i>
                        <span>
                            Kovan Takip <i className='ri-arrow-right-up-line'></i>
                        </span>
                    </a>
                    <a href='https://portal.biocoder.com.tr/Account/Login' target='_blank' className="floating-item jordy-blue-600">
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
            </section>
            <section className='products'>
                <div className="section-header">
                    <h1>
                        Ürünlerimiz
                    </h1>
                    <p>
                        Son yıllarda önemi giderek artan IoT sistemler üzerine uzmanlaşarak bir çok projeye imza atıyoruz.
                    </p>
                </div>
                <div className="product-list">
                    <div className="product-item">
                        <img src={HiveTracMini} alt="" />
                        <div className="product-information">
                            <span>Kovan Takip Sistemi</span>
                            <a href="">Detayları incele</a>
                        </div>
                    </div>
                    <div className="product-item">
                        <img src={HeatHumiMini} alt="" />
                        <div className="product-information">
                            <span>Sıcaklık ve Nem Ölçme Cih..</span>
                            <a href="">Detayları incele</a>
                        </div>
                    </div>
                    <div className="product-item">
                        <img src={BeeLoggerMini} alt="" />
                        <div className="product-information">
                            <span>Kovan Güvenlik Kartı</span>
                            <a href="">Detayları incele</a>
                        </div>
                    </div>
                    <div className="product-item">
                        <img src={HeatHumidityMapping} alt="" />
                        <div className="product-information">
                            <span>Isı ve Nem Haritalaması</span>
                            <a href="">Detayları incele</a>
                        </div>
                    </div>
                </div>
                <div className="see-all-divider">
                    <div className="divider"></div>
                    <button className="button button-secondary">Tümünü gör</button>
                    <div className="divider"></div>
                </div>

            </section>

        </>
    )
}
export default Home;