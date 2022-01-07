import React from 'react'
import ColoredButton from '../ColoredButton';
import SliderNav from '../SliderNav';
import UnderlinedHeader from '../UnderlinedHeader'
import { BsHeart } from "react-icons/bs";


const Items=[
    {
        id:1,
        title:'Singo Maple',
        discount:'20% Off',
        oldPrice:'Rp 1.500.000',
        newPrice:'Rp 1.264.00',
        pImage:'../../Image/watchesItem1.png',
    },
      { id:2,
        title:'Singo Ebony',
        discount:'20% Off',
        oldPrice:'Rp 1.500.00',
        newPrice:'Rp 1.264.00',
        pImage:'../../Image/watchesItem2.png',
    },
      { id:3,
        title:'Rakai Ebony',
        discount:'15% Off',
        oldPrice:'Rp 1.280.000',
        newPrice:'Rp 1.118.000',
        pImage:'../../Image/watchesItem3.png',
    },
      { id:4,
        title:'Way Kambas Mini Maple',
        discount:'10% off',
        oldPrice:'Rp 1.280.00',
        newPrice:'Rp 1.024.00',
        pImage:'../../Image/watchesItem4.png',
    },
];


const MonthlyDealSection = () => {
    return (
       <div className="container py-5">
           
           <UnderlinedHeader HeaderTitle="Monthly Deals"/>
           <div className="row py-5">
               
               
                       {Items.map(({id,title,discount,oldPrice,newPrice,pImage})=>(
                          <div className="col-xl-3 col-md-6 col-sm-12 monthly-card-items py-4" key={id}>
                            <div className="px-4 py-2 bg-card " >
                                      <div className="p-0 m-0">
                                           <img src={pImage} alt='' className='img-fluid w-100 h-100 d-flex justify-content-center'/>
                                           <div className="d-flex justify-content-center flex-column" >
                                                <h5 className='pt-4 pb-0'>{title}</h5>
                              <p className='py-0 m-0'>{discount}</p>
                              <p className='py-1 m-0 discount-price' >{oldPrice}</p>
                              <h4>{newPrice}</h4>
                                           </div>
                                      </div>
                                      <div className="d-flex display-inline btn-group-card">
                                          <SliderNav cName=' colored-text normal-button' SliderTitle={<BsHeart/>}/>
                                         <ColoredButton cName="mx-2" linkTitle='Add to cart'/>
                                      </div>
                                      
                             
                              </div>
                              

                            
                            
                              
                          </div>
                            
                       ))}
                   </div>
            
                {/* <div className="col-xl-3 col-md-6 col-sm-12">
                   <MonthlyItemsCard/>
               </div>
                <div className="col-xl-3 col-md-6 col-sm-12">
                   <MonthlyItemsCard/>
               </div>
                <div className="col-xl-3 col-md-6 col-sm-12">
                   <MonthlyItemsCard/>
               </div> */}
              
           </div>
   
    )
}

export default MonthlyDealSection
