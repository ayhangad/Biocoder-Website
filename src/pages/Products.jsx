import React from 'react'
import HiveTracMini from '../assets/images/HiveTracMini.png'
import BeeLoggerMini from '../assets/images/BeeLoggerMini.png'
import HeatHumidityMapping from '../assets/images/HeatHumidityMapping.jpg'
import HeatHumiMini from '../assets/images/HeatHumiMini.jpg'
import GsmDataLogger from '../assets/images/gsmDataLogger.jpg'

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
      <section className="product-section product-right">
        <div className="wrapper">
          <img src={HeatHumiMini} alt="" />
          <div className='product-information'>
            <div>
              <h3>Loggbee Sıcaklık ve Nem Ölçme Cihazı</h3>
              <p>Cihazı Mersin Teknopark Ar-Ge ofisimizde geliştirilmiştir ve geliştirmeye devam ediyoruz.</p>
            </div>
            <div>
              <span>
                <i className="ri-check-line"></i>
                Ortam sıcaklığı için sıcaklık ve nem sensörleri vardır.
              </span>
              <span>
                <i className="ri-check-line"></i>
                Özel tasarım LCD ekran ile wifi bağlantısı, tarih, saat ve sıcaklık bilgisini ekranda gösterir.
              </span>
              <span>
                <i className="ri-check-line"></i>
                Web yazılımında maksimum ve minimum değer tanımlaması yapılabilir.
              </span>
              <span>
                <i className="ri-check-line"></i>
                Geliştirdiğimiz üründe sıcaklık ve nem uyarılarını eş zamanlı olarak 3 kişiye gönderebilir.
              </span>
              <span>
                <i className="ri-check-line"></i>
                Eczanelerin istediği aylık çizelge web ortamında pdf ve excel olarak alınabilir
              </span>
              <span>
                <i className="ri-check-line"></i>
                Sms ve mail bildirimi mevcut.
              </span>
              <span>
                <i className="ri-check-line"></i>
                Web üzerinden izleme, geriye dönük rapor alabilme, gün içinde en yüksek ve en düşük değeri öğrenme, grafik şeklinde takip edebilebilme özelliği mevcut.
              </span>
              <span>
                <i className="ri-check-line"></i>
                Android ve IOS için uygulama geliştiriliyor. 1 Temmuz’da aktif olarak kullanıma açılacaktır.
              </span>
              <span>
                <i className="ri-check-line"></i>
                Kalibrasyonu TÜRKAK yetkilendirilmiş laboratuvarlarında yapılmıştır
              </span>
              <span>
                <i className="ri-check-line"></i>
                TÜRKAK sertifikası ile birlikte ürün teslim edilecektir.
              </span>
              <span>
                <i className="ri-check-line"></i>
                Nem ölçüm aralığı: 0 ~ 100% <br /> RHNem ölçüm doğruluğu: ± 2 % <br />
                Sıcaklık ölçüm aralığı: -40 ~ 125 C
              </span>
              <span>
                <i className="ri-check-line"></i>
                En önemli özelliklerinden biri de eczanenizdeki klimayı cihaza tanıtabiliyoruz ve sıcaklık belli bir değerin üstüne veya altına düştüğünde cihaz klimayı otomatik olarak açıp kapatabiliyor.
              </span>
            </div>
            <button className='button'>Çok yakında</button>
          </div>
        </div>
      </section>
      <section className="product-section">
        <div className="wrapper">
          <img src={BeeLoggerMini} alt="" />
          <div className='product-information'>
            <div>
              <h3>Kovan Güvenlik Kartı</h3>
            </div>
            <div>
              <span>
                <i className="ri-check-line"></i>
                Kovan Güvenlik Kartı ile kovanlarınız güvende.
              </span>
              <span>
                <i className="ri-check-line"></i>
                Kovanda hırsızlık, yabani hayvan saldırısı olduğunda veya kovan sıcaklığı aşırı yükseldiğinde size bildirim gelecektir.
              </span>
              <span>
                <i className="ri-check-line"></i>
                Cihaz bal petek çıtası içinde gizlenmiş şekildedir.
              </span>
              <span>
                <i className="ri-check-line"></i>
                Hareket algıladığında cihaz hemen size bildirim ve mail gönderir.
              </span>
              <span>
                <i className="ri-check-line"></i>
                Ardından size kovanın konumunu gönderir.
              </span>
              <span>
                <i className="ri-check-line"></i>
                Cihaz hareket algılamaya devam ettikçe size yeni konum bilgisi gelir.
              </span>
              <span>
                <i className="ri-check-line"></i>
                Gönderilen tüm konumlar kayıt altındadır.
              </span>
              <span>
                <i className="ri-check-line"></i>
                Cihaza takılı olan pilin yeterliliği bildirim sıklığına göre 1-3 ay aralığındadır.
              </span>
              <span>
                <i className="ri-check-line"></i>
                Sim kart sisteme dahil şeklinde teslim edilir.
              </span>
              <span>
                <i className="ri-check-line"></i>
                Bal sezonundan sonra müşterilere ve toptancılara arılarınızın hangi bölgede konakladığını belgeleyebilirsiniz.
              </span>
              <span>
                <i className="ri-check-line"></i>
                Kovan Güvenlik Kartı ile sizin olaya zamanında müdahale etme şansınız olur ve olası kayıplar önlenmiş olur.
              </span>
            </div>
            <button className='button'>
              <i className='ri-phone-line'></i>
              <span className="label-wrapper">
                Arayın - 0 850 44 11 477
              </span>
            </button>
          </div>
        </div>
      </section>
      <section className="product-section product-right">
        <div className="wrapper">
          <img src={HeatHumidityMapping} alt="" />
          <div className='product-information'>
            <div>
              <h3>Isı ve Nem Haritalaması</h3>
              <p>Ecza depolarına Sıcaklık (Isı) Haritalaması yapıyoruz. Sağlık Bakanlığının yeni yönetmeliği gereği rafları dolu ve çalışan ecza depoları için yılda 1 defa 7 gün olmak üzere Isı haritalaması istenmektedir. Isı haritalamasında kalibrasyon testinden geçmiş datalogger ile belli aralıklarla sıcaklık kaydının tutulması istenmektedir.</p>
            </div>
            <div>
              <span>
                <i className="ri-check-line"></i>
                Sıcaklık haritalaması için istenen sıcaklık değerleri (15°C - 25°C) arasıdır.
              </span>
              <span>
                <i className="ri-check-line"></i>
                Soğuk Zincir depolar için (2°C - 8°C)
              </span>
              <span>
                <i className="ri-check-line"></i>
                Depoda bulunan Ortam, Buzdolabı, Soğuk Oda, Karantina, Mal Kabul, Red Alan v.b alanlar için ayrı ayrı haritalama yapılması gereklidir.
              </span>
              <span>
                <i className="ri-check-line"></i>
                Deponun büyüklüğüne göre değişen sayılarda dataloggerlar yerleştirilir.
              </span>
              <span>
                <i className="ri-check-line"></i>
                7 gün kayıttan sonra dataloggerlar toplanır ve bunlar Mersin Teknopark Ar-Ge ofisimizde geliştirdiğimiz yazılım ile raporlanır.
              </span>
              <span>
                <i className="ri-check-line"></i>
                Bu raporlarda sıcaklık değişiklikleri 2D ve 3D olarak grafikler şeklinde raporlanır.
              </span>
              <span>
                <i className="ri-check-line"></i>
                Rapor sonunda dosyalar dijital ortamda ve basılı olarak dosya istenen şekilde size teslim edilir.
              </span>
              <span>
                <i className="ri-check-line"></i>
                Datalogger cihazlarını ve Isı haritalama yazılımını Mersin Teknopark ofisimizde geliştiriyoruz.
              </span>
            </div>
            <button className='button'>
              <i className='ri-phone-line'></i>
              <span className="label-wrapper">
                Arayın - 0 850 44 11 477
              </span>
            </button>
            <div>
              <p>15/06/2022 tarihinde Resmi Gazetede yayımlanarak yürürlüğe giren Ecza Ticarethaneleri ve Ecza Ticarethanelerinde Bulundurulan Ürünler Hakkında Yönetmelik doğrultusunda yeni hazırlanan Beşeri Tıbbi Ürünler İçin İyi Dağıtım Uygulamaları Kılavuzu 08/08/2022 tarihinde TİTCK internet sitesinde yayımlanarak yürürlüğe girmiştir.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="product-section">
        <div className="wrapper">
          <img src={GsmDataLogger} alt="" />
          <div className='product-information'>
            <div>
              <h3>GSM Datalogger</h3>
            </div>
            <div>
              <span>
                <i className="ri-check-line"></i>
                Hassas Sıcaklık Kontrolü: M2M lojistikte kargo takibi, değerli malzemelerinizin taşıma süreci boyunca maruz kaldığı sıcaklık dalgalanmalarını hassas bir şekilde izler. Bu, özellikle ilaç, gıda ve diğer hassas ürünler için kritik önem taşır.
              </span>
              <span>
                <i className="ri-check-line"></i>
                Nem Seviyesi İzleme: Kargo içindeki nem seviyesini sürekli olarak izleyerek, özellikle elektronik eşyalar, tekstil ve diğer nemden etkilenebilecek ürünlerin kalitesini korur. Bu, ürünlerin hasar görmesini önler.
              </span>
              <span>
                <i className="ri-check-line"></i>
                Anlık Uyarı Sistemi: Sıcaklık veya nemde anormal bir değişiklik tespit edildiğinde, sistem otomatik olarak bir uyarı gönderir. Bu sayede, olası problemlere hızlı bir şekilde müdahale ederek kargonuzun güvenliğini sağlarsınız.
              </span>
              <span>
                <i className="ri-check-line"></i>
                Kalite Güvencesi: Kargo sıcaklık ve nem takibi, ürünlerinizin taşıma sırasında uygun koşullarda tutulmasını sağlar. Bu da müşteri memnuniyetini artırarak, kalite standartlarınızı yükseltir.
              </span>
              <span>
                <i className="ri-check-line"></i>
                Uzaktan İzleme ve Yönetim: M2M teknolojisi sayesinde, kargonuzun sıcaklık ve nem durumunu uzaktan izleyebilir ve gerektiğinde müdahale edebilirsiniz. Bu, operasyonlarınızı daha etkili hale getirir.
              </span>
            </div>
            <div>
              <p>Kargo sıcaklık ve nem takibi, M2M lojistikte önemli bir güvenlik unsuru olup, lojistik süreçlerinizi daha kontrollü ve güvenilir hale getirir. Değerli kargolarınızın kalitesini korumak ve müşteri memnuniyetini en üst düzeye çıkarmak için M2M teknolojisiyle entegre edilen bu çözüm, lojistik operasyonlarınıza değer katmaktadır.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products