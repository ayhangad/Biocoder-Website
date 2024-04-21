import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import ProductsData from '../data/products.json'


const Products = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const filteredProduct = ProductsData?.sections?.filter((product) => product?.sefLink === productId)

  console.log(ProductsData?.sections)

  const handleClickButton = (path) => {
    navigate(`/products/${path}`)
  }
  return (
    <div>
      <section className="page-header">
        <div>
          <h1>Ürünlerimiz</h1>
          <p>Firmamız Her Zaman Yenilikçi İşler Peşinde... Biocoder Teknoloji A.Ş Çok Yakında Çalışmasını Yaptığımız Ar-Ge Ürünler Ile Buradayız.</p>
        </div>
      </section>
      <section className="blog-section">
        {
          ProductsData?.sections?.map((product, index) => {
            return (
              <div className="blog-item">
                <img src={product?.image} alt="" />
                <div className='blog-item-wrapper'>
                  <div>
                    <h4>{product?.title}</h4>
                    <span>{product?.description}</span>
                  </div>
                  <button
                    onClick={() => handleClickButton(product?.sefLink)}
                    className="button button-secondary">Devamını oku</button>
                </div>
              </div>
            )
          })
        }
      </section>
    </div>
  )
}

export default Products