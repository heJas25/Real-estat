import React from "react"
import './Value.css'
import { useState } from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion'
import { MdOutlineArrowDropDown } from "react-icons/md";
// import " react-accessible-accordion/dist/fancy-example.css";
import data from '../../utils/accordion'
const Value = () => {
    return (
        <div className="v-wrapper">
            <section className="flexCenter paddings innerWidth v-container">

                <div className="flexCenter v-left">
                    <div className="hero-img">
                        <img src="./value.png" alt="left" />
                    </div>
                </div>
                <div className="flexColStart v-right">
                    <span className="orangeText">Our Values</span>
                    <span className="primaryText">Values We Give To You</span>
                    <span className="secondaryText">Lorem ipsum dolor sit amet<br /> consectetur adipisicing elit. Dolor, repellat.</span>
                    <Accordion
                        className="accordion"
                        allowMultipleExpanded={false}
                        preExpanded={[0]} >
                        {data.map((item, i) => {
                           const [classname,setclassName]=useState(null);
                            return (
                                <AccordionItem className={`accordionItem ${classname}`} key={i} uuid={i}>
                                    <AccordionItemHeading>
                                        <AccordionItemButton className="accordionButton flexCenter">
                                            <AccordionItemState>
                                              {  ({expanded})=>expanded? setclassName("expanded"):setclassName("collapsed")}
                                            </AccordionItemState>
                                            <div className="flexCenter icon">{item.icon}</div>
                                            <span className="primaryText">{item.heading}</span>
                                            <div className="flexCenter icon">
                                                <MdOutlineArrowDropDown size={20}/>
                                            </div>
                                            
                                        </AccordionItemButton>
                                        
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p className="secondaryText">{item.detail}</p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            );

                        })}

                    </Accordion>
                </div>
            </section>
        </div>
    )
}
export default Value