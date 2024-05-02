import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import ProductsData from '../data/products.json'


const Products = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const filteredProduct = ProductsData?.sections?.filter((product) => product?.sefLink === productId)

  const handleClickButton = (path) => {
    navigate(`/products/${path}`)
  }
  return (
    <div>
      <section className="page-header">
        <div>
          <h2>Ürünlerimiz</h2>
          <p>Firmamızın Ar-Ge merkezi tarafından geliştirilen ürünler. Ürünlerimizin her türlü saha koşullarında testleri yapılmıştır.</p>
        </div>
      </section>
      <section className="blog-section">
        {
          ProductsData?.sections?.map((product, index) => {
            return (
              <div className="blog-item">
                <img src={product?.image} alt="Ürünün görseli" />
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