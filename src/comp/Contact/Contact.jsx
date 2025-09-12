import React from "react";
import './Contact.css';
import { MdCall } from "react-icons/md";
import{BsFillChatDotsFill}from "react-icons/bs"
import{HiChatBubbleBottomCenter }from"react-icons/hi2"
const Contact = () => {
    return (
        <section className="c-wipper">
            <div className="innerWidth flexCenter paddings c-container">

                <div className="flexColStart c-left">
                    <span className="orangeText ">Our Contact</span>
                    <span className="primaryText">Easy to Contact</span>
                    <span className="secondaryText">Lorem ipsum, dolor sit amet consectetur adipisicing.</span>
                    <div className="flexColStart contactModes">
                        <div className="flexStart row">
                            <div className="flexColStart mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <MdCall size={25} />

                                    </div>
                                    <div className="flexColStart details">
                                        <span className="primeryText">Call</span>
                                        <span className="secondaryText">06 75 97 26 65</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Call Now</div>

                            </div>
                            <div className="flexColStart mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25} />

                                    </div>
                                    <div className="flexColStart details">
                                        <span className="primeryText">Chat</span>
                                        <span className="secondaryText">06 75 97 26 65</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Chat Now</div>

                            </div>
                        </div>
                        <div className="flexStart row">
                            <div className="flexColStart mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <MdCall size={25} />

                                    </div>
                                    <div className="flexColStart details">
                                        <span className="primeryText"> Video Call</span>
                                        <span className="secondaryText">06 75 97 26 65</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Video Call Now</div>

                            </div>
                            <div className="flexColStart mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <HiChatBubbleBottomCenter size={25} />

                                    </div>
                                    <div className="flexColStart details">
                                        <span className="primeryText">Message</span>
                                        <span className="secondaryText">06 75 97 26 65</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Message Now</div>

                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="c-right">
                    <div className="hero-img">
                        <img src="./contact.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>


    )
}
export default Contact;