import React from 'react'
import Hero from '../assets/images/Hero.jpg'
const Home = () => {
    return (
        <>
            <div className='hero'>
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
                        <div className="button">
                            <i className="ri-mail-line"></i>
                            <span className="label-wrapper">
                                İletişime geç
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='products'>
                Works
            </div>

        </>
    )
}
export default Home;