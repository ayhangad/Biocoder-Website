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
            <div className="login">
                <Button
                    type={"button button-secondary modal-button"}
                    iconR={"close"}
                    onClick={handleCloseButton}
                />
                <div className="modal-menu">
                    <a href='https://bee.biocoder.com.tr/' target='_blank' className="floating-item jordy-blue-500">
                        <img src="images/honeybee.svg" alt="" />
                        <span>
                            Kovan Takip <i className='ri-arrow-right-up-line'></i>
                        </span>
                    </a>
                    <a href='https://portal.biocoder.com.tr/Account/Login' target='_blank' className="floating-item jordy-blue-600">
                        <img src="images/temperature.svg" alt="" />
                        <span>
                            Sıcaklık Nem Takip <i className='ri-arrow-right-up-line'></i>
                        </span>
                    </a>
                    <a href='http://logistic.biocoder.com.tr/' target='_blank' className="floating-item jordy-blue-700">
                        <img src="images/mappin.svg" alt="" />
                        <span>
                            GSM Datalogger <i className='ri-arrow-right-up-line'></i>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ContactPopup