import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import './Residancies.css';
import data from "../../utils/slider.json";
import "swiper/css";
import { sliderSettings } from "../../utils/commob";
const Residancies = () => {
    return (
        <section className="r-wrapper">
            <div className="innerWidth paddings r-container">
                <div className="r-head flexColStar">
                    <span className="orangeText">Best Chocies<br /></span><span className="primaryText">Popular Residencies</span>
                </div>
                <Swiper {...sliderSettings}>
                    <SliderButtons />
                    {data.map((card, i) => (
                        <SwiperSlide key={i}>
                            <div className="flexColStart r-card">
                                <img src={card.image} alt="home" />
                                <span className="r-price secondaryText">
                                    <span style={{ color: "orange" }}>$</span><span>{card.price}</span>
                                </span>
                                <span className=" primaryText">{card.name}</span>
                                <span className=" secondaryText">{card.detail}</span>
                            </div>

                        </SwiperSlide>

                    ))}

                </Swiper>
            </div>

        </section>
    )

}
export default Residancies
export const SliderButtons = () => {
    const swipe=useSwiper();
    return (
        <div className="flexCenter r-button">
            <button onClick={() => swipe.slidePrev()}>&lt;</button>
            <button onClick={() => swipe.slideNext()}>&gt;</button>
        </div >
    )
}