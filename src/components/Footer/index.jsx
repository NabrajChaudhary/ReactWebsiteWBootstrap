import React from 'react'
import footerLogo from '../../Image/footerlogo.png';
import LinedHeader from '../LinedHeader';
import { AiFillInstagram } from "react-icons/ai";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";

const footerImgOne=[
    {id:1,
    footerImg:'./Image/FooterImg/FooterImg1.png',},
      {id:2,
    footerImg:'./Image/FooterImg/FooterImg2.png',},
      {id:3,
    footerImg:'./Image/FooterImg/FooterImg3.png',},
      {id:4,
    footerImg:'./Image/FooterImg/FooterImg4.png',},
      {id:5,
    footerImg:'./Image/FooterImg/FooterImg5.png',},
]

const footerImgTwo=[
    {id:6,
    footerImg:'./Image/FooterImg/FooterImg6.png',},
      {id:7,
    footerImg:'./Image/FooterImg/FooterImg7.png',},
      {id:8,
    footerImg:'./Image/FooterImg/FooterImg8.png',},
      {id:9,
    footerImg:'./Image/FooterImg/FooterImg9.png',},
      {id:10,
    footerImg:'./Image/FooterImg/FooterImg10.png',},
]
const Footer = () => {
    return (
       <>
       <footer>
           <div className=" py-5 topFooter">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        {footerImgOne.map(({id,footerImg,title})=>(
                            <div className="col-xl-2" key={id}>
                                <img src={footerImg} alt="" className='img-fluid w-75 h-75' />
                                <h2>{title}</h2>
                            </div>
                        ))}
                    </div>
                    <div className="row d-flex justify-content-center">
                        {footerImgTwo.map(({id,footerImg,title})=>(
                            <div className="col-xl-2 d-flex items-align-center" key={id}>
                                <img src={footerImg} alt="" className='img-fluid h-75 w-75' />
                                <h2>{title}</h2>
                            </div>
                        ))}
                    </div>
                </div>
           </div>
           <div className="bottomFooter py-5">
               <div className="container">
                   <div className="row">
                       <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                           <div className="flex">
                               <img src={footerLogo} alt=""  className='img-fluid'/>
                           </div>
                           <div className="addressBox py-3  text-white">
                               <h4>Address</h4>
                               <ul className='mx-0 px-0'>
                                   <li>Store & Office</li>
                                   <li>Ji. Setrasari Kulon IIII, No. 10-12,</li>
                                   <li>Sukarna, Sukasari, Bandung,</li>
                                   <li>Jawa Barat, Indonesia 40152</li>
                               </ul>
                           </div>
                            <div className="addressBox pb-2 text-white">
                               <h4>Office Hour</h4>
                               <ul className='mx-0 px-0'>
                                   <li>Monday - Sunday</li>
                                   <li>10.00 - 18.00</li>
                               </ul>
                           </div>
                          
                       </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 footerMenu text-white">
                            <LinedHeader lineHeaderText="Get in touch"/>
                            <ul className=' mx-0 px-0 pr-4'>
                                <li className='d-flex justify-content-between w-75 font-big d-inline-block'>Phone 
                                <span className='text-left'>022-20277564</span>
                                </li>
                                <li className='d-flex justify-content-between w-75 font-big'>Service<br/>Center
                                 <span className=''>0811-233-8899</span>
                                </li>
                                  <li className='d-flex justify-content-between w-75 font-big'>Customer<br/>Service
                                 <span className=''>0811-235-9988</span>
                                </li>
                                 <li className='d-flex justify-content-start w-75'>
                                 <span className='p-2 m-2 logo-icon '><TiSocialFacebook/></span>
                                 <span className='p-2 m-2 logo-icon  '><AiFillInstagram/></span>
                                 <span className='p-2 m-2 logo-icon'><TiSocialTwitter/></span>
                                 <span className='p-2 m-2 logo-icon'><TiSocialYoutube/></span>
                                </li>
                            </ul>
                        </div>
                         <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12  footerMenu text-white">
                              <LinedHeader lineHeaderText="Useful link"/>
                              <ul className='mx-0 px-0'> 
                                   <li>Warrenty & Complaints</li>
                                  <li>Orders & Shipping</li>
                                  <li>Tracking Orders</li>
                                  <li>About Us</li>
                                  <li>Repair</li>
                                  <li>Terms</li>
                                  <li>FAQ</li>
                              </ul>
                         </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 footerMenu text-white">
                             <LinedHeader lineHeaderText="Campaign"/>
                              <ul className='mx-0 px-0'> 
                                   <li>Mengenal Arti Cukup</li>
                                  <li>Tell Your Difference</li>
                                  <li>Waykambas</li>
                                  <li>Rebrand</li>
                                  <li>Gallery</li>
                                  <li>Singo</li>
                                  <li>Rakai</li>
                              </ul>
                        </div>
                      

                      


                   </div>

               </div>
           </div>
       </footer>
       </>
    )
}

export default Footer
