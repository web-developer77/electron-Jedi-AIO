import React from 'react';
import WalmartGroup from './WalmartGroup';

const Walmart =({walmart,activeWalmart,setActive,setWalmart}:any)=>{
    console.log(walmart);
    return (
        <div className='flex items-center flex-wrap WalmartContent profile-gap'>
            {
                walmart.map((item:any, i:any)=>(
                    <WalmartGroup 
                        key={item.id}
                        idx ={i}
                        walmartGroup ={item}
                        active={item.id===activeWalmart.id}
                        setActive ={setActive}

                    />
                ))
            }
        </div>
    )
}

export default Walmart;