import React from 'react';
import UnderlinedHeader from '../UnderlinedHeader';
import testimonialImg from '../../Image/testimonial.png'
import TestimonialArrowControlller from '../TestimonialArrowController';
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";


const TestimonialSection = () => {
    return (
        <div className='testimonial-sec'>
            <div className="container py-5 ">
            
           <div className="row">
                  <div className="col-xl-6 col-md-12 col-sm-12 px-4">
                   <img src={testimonialImg} alt="" className='img-fluid h-75 w-100' />
                   <div className="controller d-flex display-inline">
                        <TestimonialArrowControlller cName="testimonial-controller-black" ControllerIcon={<HiOutlineArrowSmLeft/>}/>
                        <TestimonialArrowControlller cName="testimonial-controller-gray" ControllerIcon={<HiOutlineArrowNarrowRight/>}/>
                   </div>
               </div>
               <div className="col-xl-6 col-md-12 col-sm-12 px-5">
                   <UnderlinedHeader HeaderTitle='Testimonials' cName="d-flex px-2 "/>
                   <div className="pb-5">
                      
                     <p className='py-4 text-justify px-2'>Loving my new KAILI watch from @matoa_id, the first ever Indonesian watch local brand that uses wood as their main material. Like any other Matoa products, KAILI is inspired by Indonesian heritage.</p>

                     <div className="testimonialDetails py-4">
                         <h3>Gita Savitri</h3>
                         <h5>Content Creator/Influncer</h5>
                     </div>
               </div>
            
           </div>
            
 
       </div>
          
        </div>
         <div className="colorBoxSecond"> </div>
        </div>
    )
}

export default TestimonialSection
