import React from 'react'
import UnderlinedHeader from '../UnderlinedHeader';

const instaImgItems=[
  {id:1,
  instaImg:'./Image/InstagramIng/InstagramImg1.png',},
    {id:2,
  instaImg:'./Image/InstagramIng/InstagramImg2.png',},
    {id:3,
  instaImg:'./Image/InstagramIng/InstagramImg3.png',},
    {id:4,
  instaImg:'./Image/InstagramIng/InstagramImg4.png',},
    {id:5,
  instaImg:'./Image/InstagramIng/InstagramImg5.png',},
]
const InstagramSection = () => {
    return (
        <div className='container py-5'>
            <UnderlinedHeader HeaderTitle='Instagram' cName='pb-4'/> 
            <div className="row m-0 p-0 d-flex justify-content-center">
              {instaImgItems.map(({id,instaImg})=>(
                <div className="col-xl-2 col-md-2 col-sm-4 m-0 p-0" key={id}>
                  <img src={instaImg} alt="" className='img-fluid' />
                </div>
              ))}
                </div>
        </div>
    )
}

export default InstagramSection
