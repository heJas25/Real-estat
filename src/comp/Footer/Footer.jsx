import React from "react";
import "./Footer.css";
const Footer = () => {
    return (
        <section className="f-wrapper">
            <div className="paddings innerWidth f-container flexCenter">
                <div className="flexColStart f-left">
                    <img src="./logo2.png" alt="" width={120} />
                    <span className="secondaryText">Lorem ipsum dolor sit amet consectetur adipisicing.<br />Lorem ipsum dolor sit.</span>
                </div>
                <div className="flexColStart f-right">
                    <span className="primaryText">Information</span>
                    <span className="secondaryText">145 New York , FL 4875 USA</span>
                    <div className="flexCenter f-menu">
                        <span>Property</span>
                        <span>Services</span>
                        <span>Product</span>
                        <span>About Us</span>
                    </div>
                </div>

            </div>

        </section>
    )
}
export default Footer;