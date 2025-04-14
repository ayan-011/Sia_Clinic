import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
  
 
    const Slider = ()=>{

       
      const [showMenu, setShowMenu] = useState(false);
      const [token, setToken] = useState(true);

    const navigate = useNavigate();
    const [sliderPosition, setSliderPosition] = useState(50);
    const[isDragging, setIsDragging] = useState(false)
  
    const handleMove = (event) => {
  
      if (!isDragging) return;
      const rect = event.currentTarget.getBoundingClientRect();
      const x = Math.max(0, Math.min(event.clientX - rect.left, rect.width));
      const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
  
      setSliderPosition(percent);
    };
  
  
    const handleMouseDown =()=>{
      setIsDragging(true);
    };
     
    const handleMouseUp =()=>{
      setIsDragging(false);
    };

    
  
  
   
    return (
      <>
  
        {/* ----------------------------------------------------------------------1st page */}
        <div className='h-[167vh] bg-gradient-to-br from-[#abcef3] via-[rgb(223,236,250)] to-[#0e4d8d] flex flex-col relative'>
  
  
          {/* ---------------------------------------------------------------------------1 */}
          <div className='flex  justify-between   items-center   p-10'>
            <img src="/logo.png" alt="" className='w-10 h-fit  ' />
  
  
            <div className="gap-12 flex">
  
              <div className="flex gap-16 m-5 ml-[35vw] text-xl items-center">
               
                <span>Treatment</span>

               
                 <div className="flex gap-4">
                  {
                    token
                    ?  <div className="dropdown items-center flex h-fit gap-2 group relative cursor-pointer">
                    <NavLink>Conditions</NavLink>
                    <span class="material-symbols-outlined">keyboard_arrow_down</span>
                      <div className="  absolute top-7 rounded-2xl  right-[-23px] w-40  pt-5 bg-blue-300 text-base font-medium z-20 hidden group-hover:block">
                        <div className="flex flex-col rounded gap-4 p-4 min-w-48">
                        <p className='hover:text-black text-gray-600   cursor-pointer'  >My-Profile</p>
                        <p onClick={()=>setToken(false)} className='hover:text-black  text-gray-600 cursor-pointer'  >LogOut</p>
                         
    
                        </div>
                      </div>
                      </div>
                      :<button 
                      onClick={()=>navigate('login')}
                       className='bg-[#1a5693] hover:bg-[#1c65af] rounded-full w-24 h-10 items-center flex justify-center'>Login</button>
                  }
                 </div>
                
               
              </div>
  
              <button 
              onClick={()=>navigate('appointment')}
              className=" bg-[rgb(26,86,147)] hover:bg-[#1c65af] h-14 w-72 m-5 mt-2 rounded-full flex items-center justify-center space-x-3">
                <span class="material-symbols-outlined text-white" >overview</span>
                <span className=" text-xl text-white ">Make an Appointment</span>
              </button>
  
            </div>
  
  
          </div>
  
          {/* --------------------------------------------------------------------------------2 */}
          <div className="flex items-center  justify-between p-20"  >
  
            <div className="text   w-[43vw] h-fit  flex flex-col gap-y-9   ">
              <span className=' font-bold text-5xl md:text-6xl '>Achieve Remarkable <br /> result through <br /> science with sia clinic</span>
  
              <div className='flex flex-col  '>
                <span className='flex items-center gap-2'><span class="material-symbols-outlined">check_box</span>Lorem ipsum dolor sit amet consectetur.</span>
                <span className='flex items-center gap-2'><span class="material-symbols-outlined">check_box</span>Lorem ipsum dolor sit amet consectetur.</span>
                <span className='flex items-center gap-2'><span class="material-symbols-outlined">check_box</span>Lorem ipsum dolor sit amet consectetur.</span>
                <span className='flex items-center gap-2'><span class="material-symbols-outlined">check_box</span>Lorem ipsum dolor sit amet consectetur.</span>
              </div>
  
              <div className='flex flex-row items-center  '>
                <button className='bg-[#1a5693] hover:bg-[#1c65af] text-white  rounded-full m-4 w-[12vw] h-12 hover:scale-105 transition-all duration-300'>Get Consulation </button>
                <div className="h-10 w-[1px] bg-gray-400 "></div>
  
                <div className="join ml-5">
                  <span className=''>Join our community</span>
                  <div className="pngs flex flex-row gap-2 items-center justify-center">
                    <img src="public/insta.png" alt="" className='w-6' />
                    <img src="public/facebook.png" alt="" className='w-6' />
                    <img src="public/X.png" alt="" className='w-4 h-fit' />
                    <img src="public/twitter.png" alt="" className='w-6' />
                  </div>
  
                </div>
              </div>
  
            </div>
  
            <div className="doctor relative   rounded-[100px] border-b-4 border-r-4 border-white md:h-[85vh] overflow-hidden   ">
              <img src="public/round.png" alt="" className='autoRotate w-40  mt-12 absolute z-0 md:ml-[80px] md:w-60' />
              <img src="public/doctor.png" alt="" className='mt-24 z-10 relative  ml-[-12px]   w-[45vw]  md:mt-[127px] md:w-[70vh] ' />
   
            </div>
  
          </div>
  
          <img src="/round.png" alt="" className=" autoRotate absolute w-40 h-fit top-[120vh] right-[210vh]   "
          />
  
        </div>
  
  
        {/* ---------------------------------------------------------------------card */}
        <div className="box absolute bg-gradient-to-tr from-[#abcef3] via-[rgb(223,236,250)] to-[#0e4d8d]   w-[180vh] h-[80vh] left-1/2 translate-x-[-50%] top-[150%] border-2 border-white rounded-[120px] transform flex flex-row md:w-[160vh] md:h-[70vh] md:items-center overflow-hidden">
  
  
          <img src="/point.png" alt="" className='  w-[60vh] mt-4 h-fit ml-[100vh] md:w-[52vh] md:mt-8' />
  
  
          <div className="text flex w-[90vh] h-fit mt-10 ml-9 mr-[100vh] absolute flex-col gap-6 md:gap-9 md:mt-[-40px]  items-center  ">
            <span className='flex text-4xl justify-center md:text-6xl md:font-medium '>Why choose us</span>
  
            <div className="grid grid-cols-2 gap-4  w-[434px]  md:gap-x-12">
              <div className="w-48 h-40 bg-white flex items-center justify-center flex-col rounded-[50px]   ">
                <span class="material-symbols-outlined md:text-4xl"> volunteer_activism</span>
                <span className='text-sm md:text-lg'>MD sertified doctor's</span></div>
              <div className="w-48 h-40 bg-white flex items-center justify-center flex-col rounded-[50px] ">
                <span class="material-symbols-outlined md:text-4xl">volunteer_activism</span>
                <span className='text-sm  md:text-lg'>MD sertified doctor's</span></div>
              <div className="w-48 h-40 bg-white flex items-center justify-center flex-col rounded-[50px]   ">
                <span class="material-symbols-outlined md:text-4xl">volunteer_activism</span>
                <span className='text-sm  md:text-lg'>MD sertified doctor's</span></div>
              <div className="w-48 h-40 bg-white flex items-center justify-center flex-col rounded-[50px] ">
                <span class="material-symbols-outlined md:text-4xl">volunteer_activism</span>
                <span className='text-sm  md:text-lg'>MD sertified doctor's</span></div>
            </div>
            <img src="/round.png" alt="" className="autoRotate absolute w-40 h-fit  mt-[60vh] mr-[90vh] opacity-25 md:w-56  md:mt-[460px]" />
  
  
          </div>
  
        </div>
  
  
        {/* --------------------------------------------------------------------------------2nd page */}
        <div className="flex h-[195vh] relative md:h-[170vh]">
  
          <div className="flex mt-[80vh] ">
  
            <div className="text   w-[50vw] h-fit mt-[25vh] ml-24    flex flex-col gap-y-9  ">
              <span className='  text-5xl '>Best termanologist in your locality</span>
  
              <div className='flex flex-col text-lg font-medium text-gray-400 '>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore molestias dignissimos quo provident inventore ex id laboriosam quia quidem aspernatur aut natus earum, magnam doloribus, blanditiis quas quibusdam eaque beatae! Neque voluptas rem, dolorem illum explicabo  sdfjkhk asujd k.
              </div>
  
              <div className='flex flex-row items-center  '>
                <button className='bg-[#1a5693] hover:bg-[#1c65af] text-white rounded-full  w-[12vw] h-12 hover:scale-105 transition-all duration-300'>Get Consulation </button>
  
              </div>
  
            </div>
  
            <div className="doctor relative mr-[25vh] rounded-[100px] border-b-4 border-r-4 border-white">
              <img src="/round.png" alt="" className='autoRotate w-32 ml-[9vh] mt-12 absolute z-0' />
  
  
  
              <img src="/doctors.jpg" alt="" className=' mt-28  ml-24  h-[60vh] w-[90vh] rounded-[100px]' />
  
  
  
            </div>
  
          </div>
  
        </div>
  
        {/* --------------------------------------------------------------------------------3rd page */}
        <div className="flex h-[120vh] bg-[#eff1ef] flex-col">
  
          <div className="flex w-full justify-between px-10     h-fit mt-28 md:px-28">
            <span className="font-normal text-5xl md:text-7xl md:font-medium">Our services</span>
            <span className="text-right text-lg font-medium text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Hic totam esse vero rem voluptates sapiente ullam sunt!</span>
          </div>
  
          <div className="cards flex flex-row gap-x-6 mx-auto mt-20">
  
            <div className="flex bg-white h-[60vh] w-[60vh] rounded-[90px] justify-center items-center  relative   overflow-hidden">
              <span className="absolute mb-28 text-[150px] font-medium font-product text-[#e8efc1] opacity-2 ">SKIN</span>
              <img src="skin.png" alt="Skin" className="z-10 ml-32 mt-[122px] rounded-2xl md:w-[60vh] md:mt-[138px] md:ml-48 md:rounded-none" />
              <div className="absolute h-12 w-[50vh] bg-white text-center text-[#a2b631]   mt-64 z-10 items-center flex justify-center text-2xl md:h-16 md:mt-72 md:text-center md:text-3xl  ">view more</div>
            </div>
            <div className="flex bg-white h-[60vh] w-[60vh] rounded-[90px] justify-center items-center  relative   overflow-hidden">
              <span className="absolute mb-28 text-[150px] font-medium font-product text-[#e8efc1] opacity-2 ">HAIR</span>
              <img src="hair.png" alt="Skin" className="z-10 ml-20 mt-[122px] rounded-3xl md:w-[60vh] md:mt-[138px]  " />
              <div className="absolute h-12 w-[50vh] bg-white text-center text-[#a2b631]   mt-64 z-10 items-center flex justify-center text-2xl md:h-16 md:mt-72 md:text-center md:text-3xl">view more</div>
            </div>
            <div className="flex bg-white h-[60vh] w-[60vh] rounded-[90px] justify-center items-center  relative   overflow-hidden">
              <span className="absolute mb-28 text-[150px] font-medium font-product text-[#e8efc1] opacity-2 ">BODY</span>
              <img src="body.png" alt="Skin" className="z-10   mt-[113px] rounded-3xl w-48 md:w-[30vh] md:mt-[159px] " />
              <div className="absolute h-12 w-[50vh] bg-white text-center text-[#a2b631]   mt-64 z-10 items-center flex justify-center text-2xl md:h-16 md:mt-72 md:text-center md:text-3xl">view more</div>
            </div>
            
  
          </div>
  
        </div>
  
        {/* --------------------------------------------------------------------------------4th page */}
        <div className="flex h-fit bg-white flex-col">
        <div className="flex w-full justify-between px-10 h-fit mt-28 ">
            <span className="font-normal text-5xl">Best Dermatologists <br /> in India</span>
            <img src="/round.png" alt="" className=" autoRotate  w-28 h-fit "  />
          </div>
  
          <div className="cards flex flex-row justify-between gap-x-6   w-full p-16">
 
  <div className="flex flex-col">
  <div className="flex bg-[#e1e1e1] h-[50vh] w-[50vh] rounded-[70px] justify-center items-center  relative overflow-hidden" >
    <img src="doctor4th.png" alt="" className='w-64 mt-[50px] md:w-80 md:mt-24' />
    <div className="button bg-[#7db6f8] flex flex-row rounded-xl w-16 absolute justify-center items-center gap-1 text-white mb-56 ml-44  md:rounded-full  ">

    <span class="material-symbols-outlined text-[20px]">thumb_up</span>
    <button className="">96%</button>
  
    </div>
     
  </div>
  <div className='m-2'>
  <span className="flex text-2xl font-medium">Name</span>
  <span className="flex font-medium">Doctor degree name</span>
  </div>
  </div>
   
  <div className="flex flex-col">
  <div className="flex bg-[#e1e1e1] h-[50vh] w-[50vh] rounded-[70px] justify-center items-center  relative overflow-hidden" >
    <img src="doctor4th.png" alt="" className='w-64 mt-[50px] md:w-80 md:mt-24' />
    <div className="button bg-[#7db6f8] flex flex-row rounded-xl w-16 absolute justify-center items-center gap-1 text-white mb-56 ml-44  md:rounded-full  ">

    <span class="material-symbols-outlined text-[20px]">thumb_up</span>
    <button className="">96%</button>
  
    </div>
     
  </div>
  <div className='m-2'>
  <span className="flex text-2xl font-medium">Name</span>
  <span className="flex font-medium">Doctor degree name</span>
  </div>
  </div>
   
  <div className="flex flex-col">
  <div className="flex bg-[#e1e1e1] h-[50vh] w-[50vh] rounded-[70px] justify-center items-center  relative overflow-hidden" >
    <img src="doctor4th.png" alt="" className='w-64 mt-[50px] md:w-80 md:mt-24' />
    <div className="button bg-[#7db6f8] flex flex-row rounded-xl w-16 absolute justify-center items-center gap-1 text-white mb-56 ml-44  md:rounded-full  ">

    <span class="material-symbols-outlined text-[20px]">thumb_up</span>
    <button className="">96%</button>
  
    </div>
     
  </div>
  <div className='m-2'>
  <span className="flex text-2xl font-medium">Name</span>
  <span className="flex font-medium">Doctor degree name</span>
  </div>
  </div>
          </div>
  
          {/* ---VIEW AL DOCTORD button--- */}
  
          <button className='bg-[#1a5693] hover:bg-[#1c65af] w-44 mx-auto mt-24 h-12 font-medium text-lg rounded-3xl text-white hover:scale-105 transition-all duration-300' >View all doctor</button>
  
          <div className="h-[1px] bg-[#7db6f8] mt-12 w-[60vw] mx-auto"></div>
  
        </div>
  
         {/* --------------------------------------------------------------------------------5th page */}
        <div className="h-[130vh] bg-[#fffffe]  md:h-[100vh]">
  
  <div className='flex justify-between px-10 mt-12 relative'>
     <img  src="/round.png" alt=""className="autoRotate absolute w-40 h-fit"style={{ left: '-9vw', top: '-9vh' }}/>
      <span className='flex relative text-5xl font-medium ml-4'>before and after <br /> result</span>
      <span className='w-[25vw] font-medium text-lg text-gray-500'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci voluptatibus maxime  aliquam!
      </span>
  </div>
       
      <div className="result text-zinc-700 ml-[-9px] text-center text-4xl font-medium mt-24 w-screen  absolute"><span className='font-medium text-5xl text-black'>Slide</span> left and right to see the before and After result!</div>
  
      <div className="flex flex-row justify-center gap-6 md:gap-32 md:mt-20">
  
  <div className="cards flex  justify-center mt-44 relative  " onMouseUp={handleMouseUp} >
  
    <div className="card   h-96 w-96  relative select-none"onMouseUp={handleMouseUp}
    onMouseMove={handleMove}
    onMouseDown={handleMouseDown}  >
      
      
  
      <img src="face1.jpg" alt=""  className=' h-[384px] w-[384px] '/>
      <span className='   text-3xl  mt-4'> Client Name: XYZ</span>
      <hr />
      <span className=' text-lg mt-4'> Client Id: ABC</span>
      
      <div className="img2 top-0 left-0 absolute bg-white h-96 w-96  select-none" 
      style={{clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`}}    >
  
      <img src="face2.jpg" alt=""  className=' h-[384px] w-[384px] ' />
      </div>
  
      <div className="absolute w-1 top-0 bottom-0 cursor-ew-resize bg-white"
      style={{left: `calc(${sliderPosition}% - 1px)`}}>
        <div className='absolute bg-white rounded-full h-3 w-3 -left-1 top-[calc(50%-5px)]' />
   
    </div>
  
  </div>
   
  </div>
  <div className="cards flex  justify-center mt-44 relative  " onMouseUp={handleMouseUp} >
  
    <div className="card   h-96 w-96  relative select-none"onMouseUp={handleMouseUp}
    onMouseMove={handleMove}
    onMouseDown={handleMouseDown}  >
      
      
  
      <img src="face1.jpg" alt=""  className=' h-[384px] w-[384px] '/>
      <span className='   text-3xl  mt-4'> Client Name: XYZ</span>
      <hr />
      <span className=' text-lg mt-4'> Client Id: ABC</span>
      
      <div className="img2 top-0 left-0 absolute bg-white h-96 w-96  select-none" 
      style={{clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`}}    >
  
      <img src="face2.jpg" alt=""  className=' h-[384px] w-[384px] ' />
      </div>
  
      <div className="absolute w-1 top-0 bottom-0 cursor-ew-resize bg-white"
      style={{left: `calc(${sliderPosition}% - 1px)`}}>
        <div className='absolute bg-white rounded-full h-3 w-3 -left-1 top-[calc(50%-5px)]' />
   
    </div>
  
  </div>
   
  </div>
  <div className="cards flex  justify-center mt-44 relative  " onMouseUp={handleMouseUp} >
  
    <div className="card   h-96 w-96  relative select-none"onMouseUp={handleMouseUp}
    onMouseMove={handleMove}
    onMouseDown={handleMouseDown}  >
      
      
  
      <img src="face1.jpg" alt=""  className=' h-[384px] w-[384px] '/>
      <span className='   text-3xl  mt-4'> Client Name: XYZ</span>
      <hr />
      <span className=' text-lg mt-4'> Client Id: ABC</span>
      
      <div className="img2 top-0 left-0 absolute bg-white h-96 w-96  select-none" 
      style={{clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`}}    >
  
      <img src="face2.jpg" alt=""  className=' h-[384px] w-[384px] ' />
      </div>
  
      <div className="absolute w-1 top-0 bottom-0 cursor-ew-resize bg-white"
      style={{left: `calc(${sliderPosition}% - 1px)`}}>
        <div className='absolute bg-white rounded-full h-3 w-3 -left-1 top-[calc(50%-5px)]' />
   
    </div>
  
  </div>
   
  </div>
      </div>
   
   
  
   
  
  
  
  
  
        </div>
  
         {/* --------------------------------------------------------------------------------6th page */}
        <div className="flex h-[150vh] bg-[#dbdddb] flex-col md:h-[130vh]">
            <span className=" text-5xl font-medium mt-20 text-center">Trusted by 100K+ clients</span>
  
  
              {/* ----------------------slider 1 */}
              <div className=' flex overflow-hidden gap-4  group'>
            <div className=" animate-loop-scroll flex justify-center mt-[16vh] gap-4 group-hover:paused">
  
               <div className="box w-[75vh] h-[43vh] bg-white relative flex justify-center rounded-2xl md:h-[35vh] md:w-[65vh]  ">
                <img src="/profile.jpg" alt="" className='rounded-full w-20 absolute mt-[-40px] border-4 border-zinc-400 md:w-28' />
                <span className='text-xl mt-12 absolute font-bold text-zinc-800 md:mt-20'>Ayan Saifi</span>
                
                <span className='mt-[130px] absolute mx-5 text-zinc-700'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Au in illum ullam? Voluptatum odit blanditiis, beatae co tur voluptatibus provident suscipit nisi deleniti id. Accusantium dolorum nemo nostrum ape r ipsam?</span>
               </div>
               <div className="box w-[75vh] h-[43vh] bg-white relative flex justify-center rounded-2xl md:h-[35vh] md:w-[65vh] ">
                <img src="/profile.jpg" alt="" className='rounded-full w-20 absolute mt-[-40px] border-4 border-zinc-400 md:w-28' />
                <span className='text-xl mt-12 absolute font-bold text-zinc-800 md:mt-20'>Ayan Saifi</span>
                
                <span className='mt-[130px] absolute mx-5 text-zinc-700'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Au in illum ullam? Voluptatum odit blanditiis, beatae co tur voluptatibus provident suscipit nisi deleniti id. Accusantium dolorum nemo nostrum ape r ipsam?</span>
               </div>
               <div className="box w-[75vh] h-[43vh] bg-white relative flex justify-center rounded-2xl md:h-[35vh] md:w-[65vh] ">
                <img src="/profile.jpg" alt="" className='rounded-full w-20 absolute mt-[-40px] border-4 border-zinc-400 md:w-28' />
                <span className='text-xl mt-12 absolute font-bold text-zinc-800 md:mt-20'>Ayan Saifi</span>
                
                <span className='mt-[130px] absolute mx-5 text-zinc-700'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Au in illum ullam? Voluptatum odit blanditiis, beatae co tur voluptatibus provident suscipit nisi deleniti id. Accusantium dolorum nemo nostrum ape r ipsam?</span>
               </div>
               <div className="box w-[75vh] h-[43vh] bg-white relative flex justify-center rounded-2xl md:h-[35vh] md:w-[65vh] ">
                <img src="/profile.jpg" alt="" className='rounded-full w-20 absolute mt-[-40px] border-4 border-zinc-400 md:w-28' />
                <span className='text-xl mt-12 absolute font-bold text-zinc-800 md:mt-20'>Ayan Saifi</span>
                
                <span className='mt-[130px] absolute mx-5 text-zinc-700'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Au in illum ullam? Voluptatum odit blanditiis, beatae co tur voluptatibus provident suscipit nisi deleniti id. Accusantium dolorum nemo nostrum ape r ipsam?</span>
               </div>
              
              
            </div>
             
  
            <div className=" animate-loop-scroll flex justify-center mt-[16vh] gap-4 group-hover:paused" aria-hidden="true">
  
               <div className="box w-[75vh] h-[43vh] bg-white relative flex justify-center rounded-2xl md:h-[35vh] md:w-[65vh] ">
                <img src="/profile.jpg" alt="" className='rounded-full w-20 absolute mt-[-40px] border-4 border-zinc-400 md:w-28' />
                <span className='text-xl mt-12 absolute font-bold text-zinc-800 md:mt-20'>Ayan Saifi</span>
                
                <span className='mt-[130px] absolute mx-5 text-zinc-700'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Au in illum ullam? Voluptatum odit blanditiis, beatae co tur voluptatibus provident suscipit nisi deleniti id. Accusantium dolorum nemo nostrum ape r ipsam?</span>
               </div>
               <div className="box w-[75vh] h-[43vh] bg-white relative flex justify-center rounded-2xl md:h-[35vh] md:w-[65vh] ">
                <img src="/profile.jpg" alt="" className='rounded-full w-20 absolute mt-[-40px] border-4 border-zinc-400 md:w-28' />
                <span className='text-xl mt-12 absolute font-bold text-zinc-800 md:mt-20'>Ayan Saifi</span>
                
                <span className='mt-[130px] absolute mx-5 text-zinc-700'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Au in illum ullam? Voluptatum odit blanditiis, beatae co tur voluptatibus provident suscipit nisi deleniti id. Accusantium dolorum nemo nostrum ape r ipsam?</span>
               </div>
               <div className="box w-[75vh] h-[43vh] bg-white relative flex justify-center rounded-2xl md:h-[35vh] md:w-[65vh] ">
                <img src="/profile.jpg" alt="" className='rounded-full w-20 absolute mt-[-40px] border-4 border-zinc-400 md:w-28' />
                <span className='text-xl mt-12 absolute font-bold text-zinc-800 md:mt-20'>Ayan Saifi</span>
                
                <span className='mt-[130px] absolute mx-5 text-zinc-700'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Au in illum ullam? Voluptatum odit blanditiis, beatae co tur voluptatibus provident suscipit nisi deleniti id. Accusantium dolorum nemo nostrum ape r ipsam?</span>
               </div>
               <div className="box w-[75vh] h-[43vh] bg-white relative flex justify-center rounded-2xl md:h-[35vh] md:w-[65vh] ">
                <img src="/profile.jpg" alt="" className='rounded-full w-20 absolute mt-[-40px] border-4 border-zinc-400 md:w-28' />
                <span className='text-xl mt-12 absolute font-bold text-zinc-800 md:mt-20'>Ayan Saifi</span>
                
                <span className='mt-[130px] absolute mx-5 text-zinc-700'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Au in illum ullam? Voluptatum odit blanditiis, beatae co tur voluptatibus provident suscipit nisi deleniti id. Accusantium dolorum nemo nostrum ape r ipsam?</span>
               </div>
               
              
            </div>
              </div>
  
              {/* ----------------------slider 2 */}
              <div className=' flex overflow-hidden gap-4  group'>
            <div className=" animate-loop-scroll flex justify-center mt-[16vh] gap-4 group-hover:paused">
  
               <div className="box w-[75vh] h-[43vh] bg-white relative flex justify-center rounded-2xl md:h-[35vh] md:w-[65vh] ">
                <img src="/profile.jpg" alt="" className='rounded-full w-20 absolute mt-[-40px] border-4 border-zinc-400 md:w-28' />
                <span className='text-xl mt-12 absolute font-bold text-zinc-800 md:mt-20'>Ayan Saifi</span>
                
                <span className='mt-[130px] absolute mx-5 text-zinc-700'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Au in illum ullam? Voluptatum odit blanditiis, beatae co tur voluptatibus provident suscipit nisi deleniti id. Accusantium dolorum nemo nostrum ape r ipsam?</span>
               </div>
               <div className="box w-[75vh] h-[43vh] bg-white relative flex justify-center rounded-2xl md:h-[35vh] md:w-[65vh] ">
                <img src="/profile.jpg" alt="" className='rounded-full w-20 absolute mt-[-40px] border-4 border-zinc-400 md:w-28' />
                <span className='text-xl mt-12 absolute font-bold text-zinc-800 md:mt-20'>Ayan Saifi</span>
                
                <span className='mt-[130px] absolute mx-5 text-zinc-700'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Au in illum ullam? Voluptatum odit blanditiis, beatae co tur voluptatibus provident suscipit nisi deleniti id. Accusantium dolorum nemo nostrum ape r ipsam?</span>
               </div>
               <div className="box w-[75vh] h-[43vh] bg-white relative flex justify-center rounded-2xl md:h-[35vh] md:w-[65vh] ">
                <img src="/profile.jpg" alt="" className='rounded-full w-20 absolute mt-[-40px] border-4 border-zinc-400 md:w-28' />
                <span className='text-xl mt-12 absolute font-bold text-zinc-800 md:mt-20'>Ayan Saifi</span>
                
                <span className='mt-[130px] absolute mx-5 text-zinc-700'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Au in illum ullam? Voluptatum odit blanditiis, beatae co tur voluptatibus provident suscipit nisi deleniti id. Accusantium dolorum nemo nostrum ape r ipsam?</span>
               </div>
               <div className="box w-[75vh] h-[43vh] bg-white relative flex justify-center rounded-2xl md:h-[35vh] md:w-[65vh] ">
                <img src="/profile.jpg" alt="" className='rounded-full w-20 absolute mt-[-40px] border-4 border-zinc-400 md:w-28 ' />
                <span className='text-xl mt-12 absolute font-bold text-zinc-800 md:mt-20'>Ayan Saifi</span>
                
                <span className='mt-[130px] absolute mx-5 text-zinc-700'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Au in illum ullam? Voluptatum odit blanditiis, beatae co tur voluptatibus provident suscipit nisi deleniti id. Accusantium dolorum nemo nostrum ape r ipsam?</span>
               </div>
              
              
            </div>
             
  
            <div className=" animate-loop-scroll flex justify-center mt-[16vh] gap-4 group-hover:paused" aria-hidden="true">
  
               <div className="box w-[75vh] h-[43vh] bg-white relative flex justify-center rounded-2xl md:h-[35vh] md:w-[65vh] ">
                <img src="/profile.jpg" alt="" className='rounded-full w-20 absolute mt-[-40px] border-4 border-zinc-400 md:w-28' />
                <span className='text-xl mt-12 absolute font-bold text-zinc-800 md:mt-20'>Ayan Saifi</span>
                
                <span className='mt-[130px] absolute mx-5 text-zinc-700'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Au in illum ullam? Voluptatum odit blanditiis, beatae co tur voluptatibus provident suscipit nisi deleniti id. Accusantium dolorum nemo nostrum ape r ipsam?</span>
               </div>
               <div className="box w-[75vh] h-[43vh] bg-white relative flex justify-center rounded-2xl md:h-[35vh] md:w-[65vh] ">
                <img src="/profile.jpg" alt="" className='rounded-full w-20 absolute mt-[-40px] border-4 border-zinc-400 md:w-28' />
                <span className='text-xl mt-12 absolute font-bold text-zinc-800 md:mt-20'>Ayan Saifi</span>
                
                <span className='mt-[130px] absolute mx-5 text-zinc-700'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Au in illum ullam? Voluptatum odit blanditiis, beatae co tur voluptatibus provident suscipit nisi deleniti id. Accusantium dolorum nemo nostrum ape r ipsam?</span>
               </div>
               <div className="box w-[75vh] h-[43vh] bg-white relative flex justify-center rounded-2xl md:h-[35vh] md:w-[65vh] ">
                <img src="/profile.jpg" alt="" className='rounded-full w-20 absolute mt-[-40px] border-4 border-zinc-400 md:w-28' />
                <span className='text-xl mt-12 absolute font-bold text-zinc-800 md:mt-20'>Ayan Saifi</span>
                
                <span className='mt-[130px] absolute mx-5 text-zinc-700'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Au in illum ullam? Voluptatum odit blanditiis, beatae co tur voluptatibus provident suscipit nisi deleniti id. Accusantium dolorum nemo nostrum ape r ipsam?</span>
               </div>
               <div className="box w-[75vh] h-[43vh] bg-white relative flex justify-center rounded-2xl md:h-[35vh] md:w-[65vh] ">
                <img src="/profile.jpg" alt="" className='rounded-full w-20 absolute mt-[-40px] border-4 border-zinc-400 md:w-28' />
                <span className='text-xl mt-12 absolute font-bold text-zinc-800 md:mt-20'>Ayan Saifi</span>
                
                <span className='mt-[130px] absolute mx-5 text-zinc-700'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Au in illum ullam? Voluptatum odit blanditiis, beatae co tur voluptatibus provident suscipit nisi deleniti id. Accusantium dolorum nemo nostrum ape r ipsam?</span>
               </div>
               
              
            </div>
              </div>
  
        </div>
  
  
          {/* --------------------------------------------------------------------------------7th page */}
        <div className="flex h-[135vh]   flex-col md:h-[120vh]">
            <span className=" text-5xl  font-medium mt-20 text-center text-zinc-700">Questions? We Have Answers.</span>
            <div className="flex justify-center">
            <span className=" text-2xl mt-3  w-[60vw]   text-zinc-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit am c, saepe amet asperiores quis tempore deleniti nulla harum?</span>
            </div>
  
  
            <div className="inputs flex flex-col gap-[8vh] justify-center">
  
            <div className="input flex justify-center mt-32 relative items-center z-0">
              <input className='drop-shadow-xl w-1/2 h-14 border-2 rounded-lg border-zinc-500 px-2 ' type="text" placeholder='What services do you offer in clinic'/>
              <span class="material-symbols-outlined absolute z-10 ml-[90vh] hover:cursor-pointer hover:text-[#7db6f8]">add_circle</span>
            </div>
            <div className="input flex justify-center  relative items-center z-0 ">
              <input className='drop-shadow-xl w-1/2 h-14 border-2 rounded-lg border-zinc-500 px-2 ' type="text" placeholder='What services do you offer in clinic'/>
              <span class="material-symbols-outlined absolute z-10 ml-[90vh] hover:cursor-pointer hover:text-[#7db6f8]">add_circle</span>
            </div>
             <div className="flex justify-center">
              <div className='w-1/2  bg-[#eff1ef] flex flex-col border-2 border-zinc-500 rounded-lg drop-shadow-xl '>
             <span className='  text-xl m-3 mx-4'>Do you want to consultations before Treatments?</span>
             <span className=' mt-[-8px] m-3 mx-4 text-lg  '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab dolorum saepe aperiam temporibus! Voluptas!</span>
  
              </div>
  
             </div>
             <div className="input flex justify-center  relative items-center z-0 ">
              <input className='drop-shadow-xl w-1/2 h-14 border-2 rounded-lg border-zinc-500 px-2 ' type="text" placeholder='What services do you offer in clinic'/>
              <span class="material-symbols-outlined absolute z-10 ml-[90vh] hover:cursor-pointer hover:text-[#7db6f8]">add_circle</span>
            </div>
            <div className="input flex justify-center  relative items-center z-0 ">
              <input className='drop-shadow-xl w-1/2 h-14 border-2 rounded-lg border-zinc-500 px-2 ' type="text" placeholder='What services do you offer in clinic'/>
              <span class="material-symbols-outlined absolute z-10 ml-[90vh] hover:cursor-pointer hover:text-[#7db6f8]">add_circle</span>
            </div>
  
  
  
            </div>
  
  
  
  
        </div>
  
   
  
  
  
        {/* -----------------------------------------------------------------------------------8th page */}
         <div className="h-[100vh] bg-zinc-100 md:h-[90vh]">
         <div className="h-[2px] bg-zinc-700 mt-32"></div>
  
          <div className="flex justify-center mt-32 text-[#62a6f3]">
          <img src="/round.png" alt="" className=" autoRotate relative w-40 h-fit  top-[-70px] left-[-250px] opacity-25" />
          <span className='text-[#3e6592] absolute text-4xl font-bold'>Subscribe To Receive Exclusive  </span>
          <span className='text-[#3e6592] absolute text-4xl font-bold mt-12'>Prices & Offers</span>
          <span className='mt-28 text-2xl absolute font-light'>Lorem ipsum sdfk sdf'sd l;' dolor sit amet consectetur adipisicing elit. Fugiat, officia.</span>
  
          </div>
          
          <div className="input items-center flex justify-center mt-32 w-full h-20 relative  z-0  ">
 
 {/* Search Container */}
 <div className="sm:flex md:flex lg:flex items-center border-none rounded-lg  overflow-hidden  w-1/3 bg-blue-200 backdrop-blur-2xl opacity-80 cursor-pointer    hidden sm:h-8  md:h-10 lg:h-10">
     {/* Search Icon */}
     <div className="px-3 py-2 flex items-center text-gray-500 sm:w-10 md:w-12 lg:w-12">
    
     </div>

     {/* Partition Line */}
     <div className="w-[1px] sm:h-[20px] md:h-[30px]    lg:h-[35px]  bg-zinc-900"></div>

     {/* Input Field */}
     <input
         type="text"
         placeholder="Search"
         className="flex-1 lg:px-5 md:px-2 sm:px-1 outline-none text-black   bg-blue-200  sm:text-sm md:text-base lg:text-base"/>
     {/* Search Button (Now Animates with Input) */}
     <button className="lg:px-5 md:px-1 -ml-20 sm:px-1 py-2   text-white cursor-pointer   hover:bg-zinc-900  sm:text-[11px] md:text-base lg:text-base  bg-[#3e6592]">
         Search
     </button> 
</div>

        
         </div>


            
          
         </div>
  
  
  
  
        
  
  
      </>
    )}
     
export default Slider