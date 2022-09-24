import React from 'react'
import data from './Data'
import { useState } from 'react'
import { useEffect } from 'react'

const Product = (props) => {
    const [Data, setData] = useState()

    useEffect(() => {
     console.log(props.phone)
     console.log(data)
        const fetch=(()=>{
            localStorage.clear()
            const Data=data.filter((elem)=>{
                return elem.phoneno==props.phone
            })
            if(Data.length>0){
                localStorage.setItem('phoneno',JSON.stringify(Data))

                setData(Data[0].orders)
            }
    
            console.log(Data)
        })
        fetch()
    }, [])
    

    
  return (
    <div>
        {console.log(data)}
        {console.log(Data)}

        <div className='flex flex-wrap justify-center '>
        {Data && Data.map((elem,index)=>{
            return(

                <div className='h-28 bg-lime-200   w-52 mx-3 my-2 shadow-xl rounded-xl ' key={index}>
                 <h1 className='text-3xl text-center'>Order No :{index+1}</h1>
                 
                 <h1 className='text-2xl text-center'>{elem}</h1>

            </div>
                )
            
        })}

        </div>

    </div>
  )
}

export default Product