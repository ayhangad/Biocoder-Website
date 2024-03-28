import React from 'react'
import { useSelectedRoute } from '../../hooks/useSelectedRoute'
import logo from '../../assets/images/Logo.png'
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
const Header = () => {
    const selectedRoute = useSelectedRoute();
    const navigate = useNavigate();
    const goPage = (item) => {
        navigate(item.path)
    }
    return (
        <header >
            <div className="banner">
                <div className="wrapper">
                    <div className="banner-info">
                        <i className="ri-map-pin-2-line"></i>
                        Teknopark Z02, Çiftlikköy/Mersin
                    </div>
                    <div className="banner-divider"></div>
                    <a href="mailto:info@biocoder.com.tr" className="banner-info">
                        <i className="ri-mail-line"></i>
                        info@biocoder.com.tr
                        <i className="ri-arrow-right-up-line"></i>
                    </a>
                    <div className="banner-language">
                        🇹🇷 TR
                        <i className="ri-arrow-down-s-line"></i>
                    </div>

                </div>
            </div>
            <nav className='navbar'>
                <div className="nav-leading">
                    <img src={logo} alt="" />
                </div>
                {
                    navItems.map((item, i) => {
                        return (
                            <a
                                onClick={() => goPage(item)}
                                className={selectedRoute === item.path ? "nav-item nav-active" : 'nav-item'}
                                key={i}
                            >
                                {item.text}
                            </a>
                        )
                    })
                }
                <div className="nav-trailing">
                    <button className="button">
                        <span className="label-wrapper">
                            Giriş yap
                        </span>
                        <i className="ri-arrow-right-up-line"></i>
                    </button>
                </div>
            </nav>

        </header >
    )
}

export default Header