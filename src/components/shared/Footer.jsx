import React from 'react'
import footerlogo from '../../assets/images/footerlogo.png'
import { useNavigate } from 'react-router-dom'
const navItems = [
    {
        id: 0,
        text: "Ana Sayfa",
        path: "/",
    },
    {
        id: 1,
        text: "Hakkımızda",
        path: "/about",
    },
    {
        id: 2,
        text: "Ürünlerimiz",
        path: "/products",
    },
    {
        id: 3,
        text: "Blog",
        path: "/blog",
    },
    {
        id: 4,
        text: "İletişim",
        path: "/contact",
    }
]

export const Footer = () => {
    const navigate = useNavigate();
    const goPage = (item) => {
        navigate(item.path)
    }
    return (
        <div className='footer'>
            <div className="footer-wrapper">
                <div className="footer-top">
                    <div className="footer-leading">
                        <img src={footerlogo} alt="Biocoder Teknoloji A.Ş. marka logosu" />
                    </div>
                    {
                        navItems.map((item, i) => {
                            return (
                                <a
                                    onClick={() => goPage(item)}
                                    className="footer-nav-item"
                                    key={i}
                                >
                                    {item.text}
                                </a>
                            )
                        })
                    }
                    <div className="footer-trailing">
                        <a target='_blank' href="https://www.linkedin.com/company/biocoder-teknoloji-sanayi-ve-ticaret-anonim-%C5%9Firketi/" className="footer-social">
                            <i className='ri-linkedin-fill'></i>
                        </a>
                        <a target='_blank' href="https://twitter.com/BioCdrTeknoloji" className="footer-social">
                            <i className='ri-twitter-x-fill'></i>
                        </a>
                        <a target='_blank' href="" className="footer-social">
                            <i className='ri-instagram-fill'></i>
                        </a>
                        <a target='_blank' href="https://www.youtube.com/@BioCoderTeknoloji" className="footer-social">
                            <i className='ri-youtube-fill'></i>
                        </a>
                        <a target='_blank' href="https://www.facebook.com/people/BioCoder-Teknoloji-A%C5%9E/61557019755327/?name=xhp_nt__fb__action__open_user" className="footer-social">
                            <i className='ri-facebook-fill'></i>
                        </a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <span className="left">
                        Sektörde 22. yılını kutlayan bir firmayız.
                    </span>
                    <span className="right">
                        Mersin Üniversitesi Teknopark, 33343
                        Teknopark İdari Bina Z02 Çiftlikköy Yenişehir/Mersin
                    </span>
                </div>
            </div>
        </div>
    )
}
