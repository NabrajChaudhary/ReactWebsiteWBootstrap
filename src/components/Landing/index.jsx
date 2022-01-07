import React from 'react'
import Navbar from '../Navbar'
import LandingImage from '../../Image/Watch.png'
import StyleBtn from '../StyleBtn'
import LinkButton from '../LinkButton'
import ColoredButton from '../ColoredButton'
import { HiOutlineShoppingCart } from "react-icons/hi";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";
import SliderNav from '../SliderNav'
const Landing = () => {
    return (
       <header>
           <Navbar/>
           <div className="container  pb-5">
                   <div className="landing_main my-4 py-4">
                <div className="row">
                    <div className="col-xl-4 col-md-12 ">
                        <div className="image-box"><img src={LandingImage} alt="" className='img-fluid w-75 h-75' /></div>
                        
                    </div>
                    <div className="col-xl-8 col-md-12">
                    <div className="landing-page-text">
                        <h1 className='w-100 py-4 px-5'>Way Kambas <span className='text-underlined'> Mini</span> Ebony</h1>
                        <p className="landing-description w-75 px-5"> MATOA Way Kambas - This wood is choosen to represent the Sumatran Rhino's skin which is designed with an overlap effect on its strap to represent Rhino's skin.</p>

                        <div className="px-5 pb-2">
                            <StyleBtn linkTitle='Discover'/>
                        </div>
                        <div className="btn-group px-5 pt-4 d-flex display-inline w-50">
                            <ColoredButton Icon={<HiOutlineShoppingCart/>} linkTitle='Add to cart'/>
                            <LinkButton cName="colored-text mx-2" btnTitle='Cicil'/>
                        </div>
                    </div>
                 
                    </div>
                </div>
                   <div className="slider-nav mt-2 d-flex display-inline ">
                        {/* <LinkButton cName='colored-text py-1' btnTitle={<AiOutlineLeft/>} />
                        <ColoredButton cName='py-1' Icon={<AiOutlineRight/>}/> */}

                                <SliderNav cName="mx-2 colored-text normal-button" SliderTitle={<AiOutlineLeft/>}/>

                                  <SliderNav cName="text-whiten coloredButton" SliderTitle={<AiOutlineRight/>}/>

                    </div>
            </div>
           </div>
        
       </header>
    )
}

export default Landing
