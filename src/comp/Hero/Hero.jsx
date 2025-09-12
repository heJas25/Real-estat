import React from "react";
import "./Hero.css";
import { HiLocationMarker } from 'react-icons/hi';
import CountUp from "react-countup";
import { motion } from "framer-motion";
const Hero = () => {
    return (
        <section className="hero-wrapper">
            <div className="flexCenter innerWidth paddings hero-container">

                <div className=" flexColStar hero-left">
                    <div className="hero-title">
                        <div className="orange-cyrcle"></div>
                        <motion.h1
                            initial={{ y: "2rem", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 2, type: "spring" }}


                        >Discaver<br /> Most Suitable<br />  Propreity </motion.h1>
                    </div>
                    <div className=" flexColStar hero-des">
                        <span className="secondaryText"> find what suit you easly with us so dont have to worry<br /></span>
                        <span className="secondaryText" >you w'ont find any dificulties with your searches </span>
                    </div>
                    <div className=" flexCenter nav-bar">
                        <HiLocationMarker color="var(--blue)" size={25} />
                        <input type="text" />
                        <button className="button">scearch</button>
                    </div>
                    <div className="flexCenter stats">
                        <div className="flexStart stat">
                            <span>

                                <span className="A">+</span>
                            </span>
                            <span className="secondaryText">
                                Premium Products
                            </span>
                        </div>
                        <div className="flexStart stat">
                            <span>
                                <CountUp start={2000} end={2100} duration={4} />
                                <span className="A">+</span>
                            </span>
                            <span className="secondaryText">
                                Happy Costumers
                            </span>
                        </div>
                        <div className="flexStart stat">
                            <span>
                                <CountUp end={27} />
                                <span className="A">+</span>
                            </span>
                            <span className="secondaryText"> Award Winning
                            </span>
                        </div>
                    </div>
                </div>
                <div className=" flexCenter hero-right">
                    <motion.div className="hero-img"
                        initial={{ x: "7rem", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 2, type: "spring" }}>
                        <img src="./hero-image.png" />
                    </motion.div>
                </div>
            </div>
        </section>



    )
}
export default Hero;