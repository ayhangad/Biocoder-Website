import React from 'react'
import Hero from '../assets/images/Hero.jpg'
import Button from '../components/shared/Button'
import ProductsData from '../data/products.json'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
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
                        <Button type={'button'} disabled={false} innerText={'İletişime geç'} iconL={'mail'} />

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

                    {
                        ProductsData?.sections?.slice(0, 4).map((product, index) => {
                            return (
                                <div className="product-item">
                                    <img src={product?.image} alt="" />
                                    <div className="product-information">
                                        <span>{product?.title}</span>
                                        <a href={"/products/" + product.sefLink}>Detayları incele</a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="see-all-divider">
                    <div className="divider"></div>
                    <Button
                        type={'button button-secondary'}
                        innerText={'Tümünü gör'}
                        onClick={() => navigate(`/products`)}
                    />
                    <div className="divider"></div>
                </div>

            </section>

        </>
    )
}
export default Home;