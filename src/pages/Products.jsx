import React from 'react'
import HiveTracMini from '../assets/images/HiveTracMini.png'
import BeeLoggerMini from '../assets/images/BeeLoggerMini.png'
import HeatHumidityMapping from '../assets/images/HeatHumidityMapping.jpg'
import HeatHumiMini from '../assets/images/HeatHumiMini.jpg'

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
        <div className="wrapper">
          <img src={HiveTracMini} alt="" />
          <div className='product-information'>
            <div>
              <h3>Loggbee Kovan Takip Sistemi</h3>
              <p>Cihaz Mersin Teknopark Ar-Ge Ofisimizde YıCihaz Mersin Teknopark Ar-Ge Ofisimizde Yıllar Süren Çalışmalar ve Tecrübe Sonucu Üretilmiştir.llar Süren Çalışmalar ve Tecrübe Sonucu Üretilmiştir.</p>
            </div>
            <div>
              <span>
                <i className="ri-check-line"></i>
                Isı ve Nem (Kovan İçi ve Dışı)
              </span>
              <span>
                <i className="ri-check-line"></i>
                Hava Kalitesi (Oksijen ve Diğer Gazların Oranı)
              </span>
              <span>
                <i className="ri-check-line"></i>
                Ses Kalitesi (Kovandaki Translate İşlemi)
              </span>
              <span>
                <i className="ri-check-line"></i>
                2G/3G/4G Haberleşme
              </span>
              <span>
                <i className="ri-check-line"></i>
                GPRS Konum Takibi
              </span>
              <span>
                <i className="ri-check-line"></i>
                Hareket Modulü
              </span>
              <span>
                <i className="ri-check-line"></i>
                Ağırlık Takip (Zaman Grafikli)
              </span>
              <span>
                <i className="ri-check-line"></i>
                Kamera ile Online İzleme ve Kayıt
              </span>
            </div>
            <button className='button'>Broşür için tıklayınız</button>
          </div>
        </div>
      </section>
      <section className="product-section">
        <div className="wrapper">
          <img src={HiveTracMini} alt="" />
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
              <span>
                <i className="ri-check-line"></i>
                Hava Kalitesi (Oksijen ve Diğer Gazların Oranı)
              </span>
              <span>
                <i className="ri-check-line"></i>
                Ses Kalitesi (Kovandaki Translate İşlemi)
              </span>
              <span>
                <i className="ri-check-line"></i>
                2G/3G/4G Haberleşme
              </span>
              <span>
                <i className="ri-check-line"></i>
                GPRS Konum Takibi
              </span>
              <span>
                <i className="ri-check-line"></i>
                Hareket Modulü
              </span>
              <span>
                <i className="ri-check-line"></i>
                Ağırlık Takip (Zaman Grafikli)
              </span>
              <span>
                <i className="ri-check-line"></i>
                Kamera ile Online İzleme ve Kayıt
              </span>
            </div>
            <button className='button'>Broşür için tıklayınız</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products