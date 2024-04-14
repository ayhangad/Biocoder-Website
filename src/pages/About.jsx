import React from 'react'
import argePhoto from '../assets/images/arge.jpg'
import Button from '../components/shared/Button'

const About = () => {
  return (
    <div>
      <section className="page-header">
        <div>
          <h1>Hakkımızda</h1>
          <p>2004 yılında "En yeni iletişim ve bilgisayar teknolojilerini kullanarak Eğitim Teknolojileri müşterilerine dünya standartlarında çözümler sunmak" ilkesiyle yola çıkan BioCoder Teknoloji</p>
        </div>
      </section>
      <section className="about-us">
        <div className="company-profile">
          <div>
            <i className='ri-profile-line'></i>
            <h3>Şirket profili</h3>
            <p>2004 yılında "En yeni iletişim ve bilgisayar teknolojilerini kullanarak Eğitim Teknolojileri müşterilerine dünya standartlarında çözümler sunmak" ilkesiyle yola çıkan BioCoder Teknoloji</p>
          </div>
          <div className='features'>
            <div>
              <i className='ri-check-line'></i>
              <p>2010 yılından itibaren bölgede lider firma olmuş ve geçen 18 yıllık süreçte Mersin ve Adana illerinde en iyi Eğitim Teknolojileri firmalarından biri olmayı başarmıştır.</p>
            </div>
            <div>
              <i className='ri-check-line'></i>
              <p>2005 yılında geliştirdiğimiz yazılımları kısa sürede oluşturduğumuz bayi ağı Türkiye'nin kullanımına sunmuştur.</p>
            </div>
            <div>
              <i className='ri-check-line'></i>
              <p>2010 yılında yaptığımız Akıllı tahta çalışmaları ile 'Fatih Projesi' nin ortaya çıkmasında öncü olmuştur.</p>
            </div>
            <div>
              <i className='ri-check-line'></i>
              <p>2014 yılında ürettiğimiz saha takip yazılımlarını daha ilerilere götürmek için</p>
            </div>
            <div>
              <i className='ri-check-line'></i>
              <p>2022 Mersin Üniversitesi Teknopark firmasındaki ofisimiz ile Ar-ge alanında çalışmalarımız başlamıştır.</p>
            </div>
            <div>
              <i className='ri-check-line'></i>
              <p>Ar-ge çalışmasını yaptığımız IoT cihazı ile sahadan anlık olarak verileri sağlıklı olarak anında alabiliyor ve analizlerini yapabiliyoruz.</p>
            </div>
          </div>
        </div>
        <div className="vision-mission">
          <div>
            <i className="ri-eye-line"></i>
            <h3>Vizyon</h3>
            <p>BioCoder Teknoloji, teknoloji dünyasında öncü bir rol üstlenmeyi hedefleyerek, güçlü gömülü sistem ekibiyle birlikte geleceğin teknolojik ihtiyaçlarına öncülük eden çözümler geliştirmeyi ve sektördeki standartları belirlemeyi vizyon edinir.</p>
          </div>
          <div>
            <i className="ri-focus-2-line"></i>
            <h3>Misyon</h3>
            <p>BioCoder Teknoloji, endüstri lideri gömülü sistem ekibiyle bir araya gelerek, projelerinizde endüstriyel standartlara uygun, yenilikçi ve güvenilir yazılım çözümleri sunmayı amaçlar.</p>
          </div>
        </div>
        <div className="statistics">
          <div>
            <i className="ri-folder-2-line"></i>
            <span>
              <h4>33+</h4>
              <p>Tamamlanmış Proje</p>
            </span>
          </div>
          <div>
            <i className="ri-user-2-line"></i>
            <span>
              <h4>450+</h4>
              <p>Mutlu Müşteri</p>
            </span>
          </div>
          <div>
            <i className="ri-phone-line"></i>
            <span>
              <h4>1200+</h4>
              <p>Müşteri Hizmetleri</p>
            </span>
          </div>
          <div>
            <i className="ri-file-code-line"></i>
            <span>
              <h4>60+</h4>
              <p>Çözümlenen Projeler</p>
            </span>
          </div>
        </div>
        <div className="ar-ge">
          <img src={argePhoto} alt="" />
          <h3>Ar-Ge</h3>
          <p>Geleceğimiz İçin Projeler Geliştiriyoruz.

            Araştırma; bilinmeyeni bilmeye, öğrenmeye yönelik yapılan bilimsel teknolojik faaliyetlerdir. Geliştirme ise, mevcut bilgiyi ya da teknolojiyi yeni düzenlemelerle daha iyiye doğru yönlendirme faaliyetidir.

            Araştırma-geliştirme bilimsel ve teknik bilgi birikimini artırmak amacıyla sistematik bir temele dayalı olarak yürütülen yaratıcı çaba ve bu bilgi biri­kiminin yeni uygulamalarda kullanılmasıdır.</p>
          <Button type={'button'} innerText={'Neler yapıyoruz?'} />
        </div>
      </section>

    </div>
  )
}

export default About