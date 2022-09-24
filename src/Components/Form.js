import React from 'react'
import Product from './Product'
import { useState } from 'react'
import Backdrop from './Backdrop'

const Form = () => {
const [phone, setphone] = useState('')
const [submit, setsubmit] = useState(false)
const [tip, settip] = useState(false)
const [Tip, setTip] = useState(0)
const [data, setdata] = useState()
const [backdrop, setbackdrop] = useState(false)




const fetchhandler=(()=>{
    
    if(submit===true){
        setsubmit(false)
        setTimeout(()=>{

            setsubmit(true)
        },100)
      
    }
    else if(submit===false){
        setsubmit(true)
    }

    const data=JSON.parse(localStorage.getItem('phoneno'))
    setdata(data)

    

    

})

const tiphandler=()=>{
    settip(true)
}



    return (
        <div>

        

        <div className='containe  my-32 h-72 p-4 mx-auto w-4/5 shadow-lg rounded-lg'>
            <h1 className='text-center text-4xl '>Orders</h1>

            {backdrop&& JSON.parse(localStorage.getItem('phoneno'))&&<Backdrop/>}
            

           
            <div className="mb-3">

                <input type="Number" className="form-control rounded-2xl my-3" id="exampleFormControlTextarea1" placeholder="Enter Your Phone No" value={phone} onChange={(e)=>{setphone(e.target.value)}} />
            </div>
            {submit && JSON.parse(localStorage.getItem('phoneno')) && <div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" onClick={tiphandler}/>
  <label className="form-check-label" for="defaultCheck1">
    Add Tip
  </label>
</div>}

{tip && <div className="mb-3">

<input type="Number" className="form-control rounded-2xl my-3" id="exampleFormControlTextarea1" placeholder="Enter Tip Amount" value={Tip} onChange={(e)=>{setTip(e.target.value)}} />
</div>

} 

{/* {tip&&
<div className='justify-center flex'>
            <button className='bg-lime-400 hover:bg-lime-500 text-white font-bold py-2 px-4 rounded-2xl' onClick={tiphandler}>Add Tip</button>
            </div>} */}



           {!tip?  (<div className='justify-center flex'>
            <button className='bg-lime-400 hover:bg-lime-500 text-white font-bold py-2 px-4 rounded-2xl' onClick={fetchhandler}>Fetch</button>
            </div>):(<div className='justify-center flex'>
            <button className='bg-lime-400 hover:bg-lime-500 text-white font-bold py-2 px-4 rounded-2xl' onClick={()=>{setbackdrop(true)}}>Add Address</button>
            </div>)}
            <div className='my-28'>
       {submit&& <Product phone={phone}/>}
            </div>

        </div>
        
        
        </div>
        
    )
}

export default Form