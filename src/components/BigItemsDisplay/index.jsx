import React from 'react'
import StyleBtn from '../StyleBtn'


const BigItemsData = [
    {id:1,
    title:'Luxurious',
    spanText:'Eyewear',
    itemDesc:' See the beauty of exotic world with the luxurious glasses.',
    itemImg:'./Image/BigItemImage/Image1.png',
},
  {id:2,
    title:'Comfortable',
    spanText:'Watches',
    itemDesc:'Feels the balancing function and beauty in our wooden watches.',
    itemImg:'./Image/BigItemImage/Image2.png',
},
]

const BigItemsDisplay = () => {
    return (
        <div className='py-5 mt-5'>
            <div className="container row m-auto">
                   

                {BigItemsData.map(({id,title,spanText,itemDesc,itemImg})=>(
                    <div className="col-xl-6 col-md-6 col-sm-12" key={id}>
                             
                    <div className="bg-white py-4 px-4 m-1" >
                        <h2 className="card-item-heading">{title} &nbsp;
                        <span className='text-bold'>{spanText}</span></h2>
                        <p className='card-item-description w-75'>{itemDesc}</p>
                        <div className="d-flex justify-content-between">
                            <div className="">
                                <StyleBtn linkTitle="Discover Now"/>
                                
                            </div>
                            <img src={itemImg} alt=""className='img-fluid h-50 w-75' />
                        </div>
            
                    </div>
                     </div>
                ))}
                       
</div>
            
        </div>
    )
}

export default BigItemsDisplay
