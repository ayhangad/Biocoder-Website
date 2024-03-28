import React from 'react'

const Products = () => {
  return (
    <div>
      <section className="page-header">
        <div>
          <h1>Ürünlerimiz</h1>
          <p>Firmamız Her Zaman Yenilikçi İşler Peşinde... Biocoder Teknoloji A.Ş Çok Yakında Çalışmasını Yaptığımız Ar-Ge Ürünler Ile Buradayız.</p>
        </div>
      </section>
      <section className="product-section">
        <img src="" alt="" />
        <div className='product-information'>
          <div>
            <h3>Title</h3>
            <p>Short description</p>
          </div>
          <div>
            <span>
              <i className="ri-check-line"></i>
              Isı ve Nem (Kovan İçi ve Dışı)
            </span>
          </div>
          <button className='button'>Broşür için tıklayınız</button>


        </div>
      </section>
    </div>
  )
}

export default Products