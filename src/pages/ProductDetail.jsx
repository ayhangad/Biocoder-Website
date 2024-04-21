import React from 'react'
import Button from '../components/shared/Button'
import { useParams, useNavigate } from 'react-router-dom'
import ProductsData from '../data/products.json'


const Products = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = ProductsData?.sections?.filter((product) => product?.sefLink === productId)[0]


  return (
    <div>
      <section className="product-section">
        <div className="wrapper">
          <img src={product?.image} alt="" />
          <div className='product-information'>
            <div>
              <h3>{product?.title}</h3>
              <p>{product?.description}</p>
            </div>
            <div>
              {
                product?.features?.map((feature, index) => {
                  return (
                    <span key={index}>
                      <i className="ri-check-line"></i>
                      {feature}
                    </span>
                  )
                })
              }
            </div>
            <Button
              type={'button'}
              innerText={product?.buttonText}
              disabled={true}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products