import React from 'react'
import contactFormImage from '../assets/images/contactformimage.jpg'

const Contact = () => {
  return (
    <div>
      <section className="page-header">
        <div>
          <h1>İletişim</h1>
          <p>2004 yılında "En yeni iletişim ve bilgisayar teknolojilerini kullanarak Eğitim Teknolojileri müşterilerine dünya standartlarında çözümler sunmak" ilkesiyle yola çıkan BioCoder Teknoloji</p>
        </div>
      </section>
      <section className="contact-section">
        <div className="contact-form">
          <div className='form'>
            <span>
              <h3>İletişimde kalın</h3>
              <p>Beraber hayata geçirmek istediğiniz projelerin detaylarını, bizim hakkımızdaki görüşlerinizi ve herhangi bir konudaki düşüncelerinizi bize yazmaktan çekinmeyin.</p>
            </span>
            <form action="" id='contact-form-id'>
              <label htmlFor="full-name">
                Tam adınız*
                <input id='full-name' type="text" placeholder='İsim Soyisim' />
              </label>
              <label htmlFor="mail-address">
                Mail adresi*
                <input id='mail-address' type="email" placeholder='isim@örnek.com' />
              </label>
              <label htmlFor="message">
                Size nasıl yardımcı olabiliriz?*
                <textarea type="text" form='contact-form-id' placeholder='Proje detayları, görüşleriniz, düşünceleriniz..' />
              </label>
              <input type="submit" className='button' value="Gönder" />
            </form>
          </div>
          <div className='contact-image'>
            <img src={contactFormImage} alt="" />
          </div>
        </div>
        <div className="contact-informations">
          <div>
            <i className="ri-map-pin-2-fill"></i>
            <span>Teknopark İdari Bina Z02 Çiftlikköy/Mersin</span>
          </div>
          <div>
            <i className="ri-mail-fill"></i>
            <span>info@biocoder.com.tr</span>
          </div>
        </div>
        <div className='contact-map' >
          <iframe width="100%" height="500" frameborder="0" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=+(Biocoder%20Teknoloji)&amp;t=&amp;z=20&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
          </iframe>
        </div>
      </section>
    </div>
  )
}

export default Contact