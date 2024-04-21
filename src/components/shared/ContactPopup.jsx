import React from 'react'
import { useSelectedRoute } from '../../hooks/useSelectedRoute'
import logo from '../../assets/images/Logo.png'
import { useNavigate } from 'react-router-dom'
import Button from './Button'

const ContactPopup = ({ isModalOpen, setIsModalOpen }) => {
    const selectedRoute = useSelectedRoute();
    const navigate = useNavigate();

    const handleCloseButton = () => {
        setIsModalOpen(false)
    }


    return (
        <div className={`${isModalOpen && "show"} modal-shade`}>
            <div className="wrapper">
                <Button
                    type={"button button-secondary modal-button"}
                    iconR={"close"}
                    onClick={handleCloseButton}
                />
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
            </div>
        </div>
    )
}

export default ContactPopup