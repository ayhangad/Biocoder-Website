import React from 'react'
import Button from '../components/shared/Button'
import ProductsData from '../data/products.json'
import { useNavigate } from 'react-router-dom'
import Carousel from "../components/shared/Carousel.jsx";
const Home = () => {
    const navigate = useNavigate();


    return (

        <>
            <Carousel />
            <section className='products'>
                <div className="section-header">
                    <h1>
                        Ürünlerimiz
                    </h1>
                    <p>
                        Son yıllarda önemi giderek artan IoT sistemler üzerine uzmanlaşarak bir çok projeye imza
                        atıyoruz.
                    </p>
                </div>
                <div className="product-list">

                    {
                        ProductsData?.sections?.slice(0, 4).map((product, index) => {
                            return (
                                // eslint-disable-next-line react/jsx-key
                                <div className="product-item">
                                    <img src={product?.image} alt=""/>
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