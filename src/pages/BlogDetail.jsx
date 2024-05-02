import React from 'react'
import Button from '../components/shared/Button'
import { useParams, useNavigate } from 'react-router-dom'
import BlogData from '../data/blogs.json'
import ContactPopup from '../components/shared/ContactPopup'
import { useSelectedRoute } from '../hooks/useSelectedRoute'


const BlogDetail = () => {
  const { blogId } = useParams();
  const navigate = useNavigate();
  const blog = BlogData?.sections?.filter((blog) => blog?.sefLink === blogId)[0]
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
          <img src={blog?.image} alt="Ürünün görseli" />
          <div className='product-information'>
            <div>
              <h3>{blog?.title}</h3>
              <p>{blog?.content}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BlogDetail