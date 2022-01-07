import React from 'react'
import LinkButton from '../LinkButton';
import SmallHeadingText from '../SmallHeadingText'

const watchItems=[
{   id:1,
    title:'Way Kambas Maple',
    oldPrice:'Rp 1.280.000',
    price:'Rp 1.280.000',
    img:'../../Image/smwartch1.png',
},
{   id:2,
    title:'Way Kambas Maple',
    price:'Rp 1.280.000',
    img:'../../Image/smwartch1.png',
},
{   id:3,
    title:'Way Kambas Maple',
    price:'Rp 1.280.000',
    img:'../../Image/smwartch1.png',
},
];

const SeriesWatchSection = () => {
    return (
        
            <div className="container py-5">
                    <div className="row py-4">
                        <div className="col-xl-4 col-md-6 col-sm-12 p-2 ">
                            <SmallHeadingText cName="smallHeadingText pb-4 d-flex align-items-center" textTitle="Maple Series"
                            />
                           {/* <UnderlinedHeader  HeaderTitle='Testimonials' /> */}
                             <div className="d-flex flex-column py-2 ">
                               {watchItems.map(({id,title,oldPrice,price,img})=>(
                                <div className="d-flex display-inline m-1 align-items-center watchbox-card" key={id}>
                                    <div className="">
                                        <img src={img} alt=""  className='img-fluid w-75 h-75'/>
                                    </div>
                                     <div className="watchItemsText p-1">
                                        <h5>{title}</h5>
                                        <p>{oldPrice}</p>
                                        <h4>{price}</h4>
                                    </div>

                                </div>
                             
                          ))}
                           </div>
                          
                        </div>

                         <div className="col-xl-4 col-md-6 col-sm-12 p-2">
                            <SmallHeadingText cName="smallHeadingText pb-4" textTitle="Maple Series"
                            />
                           {/* <UnderlinedHeader  HeaderTitle='Testimonials' /> */}
                             <div className="d-flex flex-column py-2 ">
                               {watchItems.map(({id,title,oldPrice,price,img})=>(
                                <div className="d-flex display-inline m-1 align-items-center watchbox-card" key={id}>
                                    <div className="">
                                        <img src={img} alt=""  className='img-fluid w-75 h-75'/>
                                    </div>
                                     <div className="watchItemsText p-1">
                                        <h5>{title}</h5>
                                        <p>{oldPrice}</p>
                                        <h4>{price}</h4>
                                    </div>

                                </div>
                             
                          ))}
                           </div>
                          
                        </div>

                         <div className="col-xl-4 col-md-6 col-sm-12 p-2">
                            <SmallHeadingText cName="smallHeadingText pb-4" textTitle="Maple Series"
                            />
                           {/* <UnderlinedHeader  HeaderTitle='Testimonials' /> */}
                             <div className="d-flex flex-column py-2 ">
                               {watchItems.map(({id,title,oldPrice,price,img})=>(
                                <div className="d-flex display-inline m-1 align-items-center watchbox-card" key={id}>
                                    <div className="">
                                        <img src={img} alt=""  className='img-fluid w-75 h-75'/>
                                    </div>
                                     <div className="watchItemsText p-1">
                                        <h5>{title}</h5>
                                        <p>{oldPrice}</p>
                                        <h4>{price}</h4>
                                    </div>

                                </div>
                             
                          ))}
                           </div>
                          
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                      
                        <LinkButton  cName="colored-text my-2 py-2 px-5 text-slim" btnTitle='See More'/>

                    </div>
            </div>
      
    )
}

export default SeriesWatchSection
