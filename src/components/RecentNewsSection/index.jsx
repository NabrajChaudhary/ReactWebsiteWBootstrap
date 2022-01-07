import React from 'react'
import UnderlinedHeader from '../UnderlinedHeader'
import handwithWatch from '../../Image/Watchonhand1.png'
import LinkButton from '../LinkButton'

const RecentNewsSection = () => {
    return (
        <div className="recent-news-sec pt-5">
              <div className="container py-5 ">
           <UnderlinedHeader HeaderTitle='Recent News'/>
           <div className="row">
               <div className="col-xl-6 col-md-12 col-sm-12 pt-5">
                   <div className="py-5">
                       <h5>Where to Travel</h5>
                       <h2 className='w-75'>Matoa Where To Travel? Yogyakarta</h2>
                   </div>
                   <LinkButton  cName="colored-text mx-2 py-3 px-5 text-slim" btnTitle='Discover'/>
               </div>
               <div className="col-xl-6 col-md-12 col-sm-12 px-4">
                   <img src={handwithWatch} alt="" className='img-fluid h-75 w-100' />
               </div>
           </div>
                <div className="colorBox"> 
       </div>
       </div>
  
        </div>
     
    )
}

export default RecentNewsSection
