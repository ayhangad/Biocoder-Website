import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import BlogData from '../data/blogs.json'


const Blog = () => {
  const { blogId } = useParams();
  const navigate = useNavigate();
  const Blog = BlogData?.sections?.filter((blog) => blog?.sefLink === blogId)

  const handleClickButton = (path) => {
    navigate(`/blog/${path}`)
  }
  return (
    <div>
      <section className="page-header">
        <div>
          <h2>Blog</h2>
          <p>2004 yılında "En yeni iletişim ve bilgisayar teknolojilerini kullanarak Eğitim Teknolojileri müşterilerine dünya standartlarında çözümler sunmak" ilkesiyle yola çıkan BioCoder Teknoloji</p>
        </div>
      </section>
      <section className="blog-section">
        {
          BlogData?.sections?.map((blog, index) => {
            return (
              <div className="blog-item">
                <img src={blog?.image} alt="Ürünün görseli" />
                <div className='blog-item-wrapper'>
                  <div>
                    <h4>{blog?.title}</h4>
                    <span>{blog?.date}</span>
                  </div>
                  <button
                    onClick={() => handleClickButton(blog?.sefLink)}
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

export default Blog

// import React from 'react'

// const Blog = () => {
//   return (
//     <div>
//       <section className="page-header">
//         <div>
//           <h2>Blog</h2>
//           <p>2004 yılında "En yeni iletişim ve bilgisayar teknolojilerini kullanarak Eğitim Teknolojileri müşterilerine dünya standartlarında çözümler sunmak" ilkesiyle yola çıkan BioCoder Teknoloji</p>
//         </div>
//       </section>
//       <section className="blog-section">
//         <div className="blog-item">
//           <img src="images/Logo.png" alt="Biocoder Teknoloji A.Ş. marka logosu" />
//           <div className='blog-item-wrapper'>
//             <div>
//               <h4>Move rectangle pencil star export</h4>
//               <span>26 Ocak 2022</span>
//             </div>
//             <button className="button button-secondary">Devamını oku</button>
//           </div>
//         </div>
//         <div className="blog-item">
//           <img src="images/Logo.png" alt="Biocoder Teknoloji A.Ş. marka logosu" />
//           <div className='blog-item-wrapper'>
//             <div>
//               <h4>Move rectangle pencil star export</h4>
//               <span>26 Ocak 2022</span>
//             </div>
//             <button className="button button-secondary">Devamını oku</button>
//           </div>
//         </div>
//         <div className="blog-item">
//           <img src="images/Logo.png" alt="Biocoder Teknoloji A.Ş. marka logosu" />
//           <div className='blog-item-wrapper'>
//             <div>
//               <h4>Move rectangle pencil star export</h4>
//               <span>26 Ocak 2022</span>
//             </div>
//             <button className="button button-secondary">Devamını oku</button>
//           </div>
//         </div>
//         <div className="blog-item">
//           <img src="images/Logo.png" alt="Biocoder Teknoloji A.Ş. marka logosu" />
//           <div className='blog-item-wrapper'>
//             <div>
//               <h4>Move rectangle pencil star export</h4>
//               <span>26 Ocak 2022</span>
//             </div>
//             <button className="button button-secondary">Devamını oku</button>
//           </div>
//         </div>
//         <div className="blog-item">
//           <img src="images/Logo.png" alt="Biocoder Teknoloji A.Ş. marka logosu" />
//           <div className='blog-item-wrapper'>
//             <div>
//               <h4>Move rectangle pencil star export</h4>
//               <span>26 Ocak 2022</span>
//             </div>
//             <button className="button button-secondary">Devamını oku</button>
//           </div>
//         </div>
//         <div className="blog-item">
//           <img src="images/Logo.png" alt="Biocoder Teknoloji A.Ş. marka logosu" />
//           <div className='blog-item-wrapper'>
//             <div>
//               <h4>Move rectangle pencil star export</h4>
//               <span>26 Ocak 2022</span>
//             </div>
//             <button className="button button-secondary">Devamını oku</button>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default Blog