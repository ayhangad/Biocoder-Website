import React from 'react'
const Home = () => {
    return (
        <>
            <section className='hero'>
                <img src="../src/assets/images/Hero.jpg" alt="" />
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
            </section>
        </>
    )
}
export default Home;