import React from 'react'

const Appointment = () => {
  return (
     <div className="flex  flex-col bg-zinc-700 h-screen text-white"> 
      <nav className="h-16 w-full items-center flex  px-10  ">
        <a href="/" className=''>Sia</a>
      </nav>
      <div className="h-[1px] bg-zinc-600 w-full"> </div>

      <div className="middle flex relative flex-row  ">

        <div className=" flex items-center   w-full mt-20">

        <div className="strip h-[120px] bg-[#c6def7] opacity-40    w-full absolute"> </div>
         
      
        <div className="border-[#c6def7]  rounded-3xl   border-2 h-[440px] w-96 m-12 ml-[115px] flex  absolute">
        <img src="/appdoctor.png" alt="" className='  '  />
        </div>
        
        <div className="entry bg-zinc-800 rounded-lg h-[470px] w-[520px]   relative ml-[125vh] mt-8 flex  items-center flex-col drop-shadow-2xl shadow-xl text-black "> 
          <div className="inputs mt-6  flex flex-row  w-fit">
            <input type="text" placeholder='Search by doctors name' className='flex h-[37px] px-2 w-[260px] outline-none'/>
            <div className=" h-1 w-[1px]"></div>
            <input type="text" placeholder='Search by department' className='flex h-[37px] px-2 w-[190px] outline-none' />
          </div>
          <div className=" h-40   mt-7 w-[450px] rounded-lg border-[1px] border-zinc-500 flex flex-row">
            <div className="L w-1/2 m-4 flex flex-col">
            <span className='text-white'>Dr. Izharul Hasan (Prp Treatment In Delhi)</span>
            <span className='text-zinc-400 text-[12px]'>Unani General Physician, Unani Preventive Medicine Specialist</span>
            <span className='text-zinc-400 text-[12px]'>Fees : ₹ 1500</span>
            <span className='text-zinc-400 text-[12px]'>11 Yrs of Experience</span>
            </div>  
              
              <div className="R">
                <button className='bg-blue-600 hover:bg-blue-700 w-40 text-white h-10 rounded-lg m-4'>Book Appointment</button>
              </div>
            </div>
          <div className=" h-40   mt-7 w-[450px] rounded-lg border-[1px] border-zinc-500 flex flex-row">
            <div className="L w-1/2 m-4 flex flex-col">
            <span className='text-white'>Dr. Izharul Hasan (Prp Treatment In Delhi)</span>
            <span className='text-zinc-400 text-[12px]'>Unani General Physician, Unani Preventive Medicine Specialist</span>
            <span className='text-zinc-400 text-[12px]'>Fees : ₹ 1500</span>
            <span className='text-zinc-400 text-[12px]'>11 Yrs of Experience</span>
            </div>  
              
              <div className="R">
                <button className='bg-blue-600 hover:bg-blue-700 w-40 text-white h-10 rounded-lg m-4'>Book Appointment</button>
              </div>
            </div>
           
        </div>
        </div>


      </div>
        

        

        
     </div>
  )
}

export default Appointment