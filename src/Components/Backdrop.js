import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const Backdrop = () => {
    const [locality, setlocality] = useState('')
    const [houseno, sethouseno] = useState('')
    const [state, setstate] = useState('')
    const [city, setcity] = useState('')
    const [alert, setalert] = useState(false)

    const submithandler=(async()=>{
        const data=JSON.parse(localStorage.getItem('phoneno'))
        const phone=data[0].phoneno
        console.log(phone,data)
        const res= await axios.post('/addaddress',{locality,houseno,state,city,phone})
        console.log(res)
        if(res.data.Success==="true"){

            setalert(true)
            localStorage.clear()
            setTimeout(()=>{
                window.location.reload()

            },1000)
        }
        




    })
  return (
    <div>


<div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  
  <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

  <div className="fixed inset-0 z-50 overflow-y-auto">
    <div className="flex flex-col min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        {alert && <div className="alert alert-success" role="alert">
  <h1>Adress Submited for Delivery</h1>
</div>}
        <div className='flex justify-center'>
            <h1 className='text-4xl font-bold'>Enter Adress</h1>
        </div>

    <div className="mb-3 my-3">
  <label for="exampleFormControlInput1" className="form-label text-2xl font-bold">Locality</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Locality" onChange={(e)=>{setlocality(e.target.value)}}/>
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label text-2xl font-bold">House No</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="House No" onChange={(e)=>{sethouseno(e.target.value)}}/>
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label text-2xl font-bold">City</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="City" onChange={(e)=>{setcity(e.target.value)}}/>
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label text-2xl font-bold">State</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="State" onChange={(e)=>{setstate(e.target.value)}}/>
</div>
<div className='justify-center flex'>
            <button className='bg-lime-400 hover:bg-lime-500 text-white font-bold py-2 px-4 rounded-2xl' onClick={submithandler}>Submit</button>
            </div>
     
      
    </div>
  </div>
</div>

        
    </div>
  )
}

export default Backdrop