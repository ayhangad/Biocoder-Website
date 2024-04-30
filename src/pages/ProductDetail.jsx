import React from 'react'
import Button from '../components/shared/Button'
import { useParams, useNavigate } from 'react-router-dom'
import ProductsData from '../data/products.json'
import ContactPopup from '../components/shared/ContactPopup'
import { useSelectedRoute } from '../hooks/useSelectedRoute'


const Products = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = ProductsData?.sections?.filter((product) => product?.sefLink === productId)[0]
  const selectedRoute = useSelectedRoute();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const goPage = (item) => {
    navigate(item.path)
  }


  return (
    <div>
      <ContactPopup isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <section className="product-section">
        <div className="wrapper">
          <img src={product?.image} alt="Ürünün görseli" />
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
            <div className='product-action'>
              <Button
                iconL={'download'}
                type={'button button-secondary'}
                innerText={'Broşürü indir'}
                disabled={true}
              />
              <Button
                type={'button button-secondary'}
                disabled={false}
                innerText={'Videoyu izle'}
                iconL={'play'}
              />
              <Button
                type={'button'}
                disabled={false}
                innerText={'İletişime geç'}
                onClick={() => setIsModalOpen(!isModalOpen)}
              />
            </div>
            {
              product?.otherImages?.map((image, index) => {
                return (
                  <img key={index} src={image} alt="Ürünün diğer görselleri" />
                )
              })
            }

          </div>
        </div>
      </section>
    </div>
  )
}

export default Products