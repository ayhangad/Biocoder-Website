import React from 'react'
const Carousel = ({ data = [] }) => {
    console.log(data)
    return (
        <div className="carousel">
            <div className="carousel-inner">
                {data.map((item, index) => (
                    <div key={index} className="carousel-item">
                        fdsfsd
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Carousel