import { useState } from "react"



const Footer = () => {
  
  return (<>
    <div className="bg-costomGreen absolute h-[80px] flex top-[2790px] sm:top-[2800px] md:top-[2100px] lg:top-[1700px] w-full justify-between">
      <img src="./images/logo.png" className='p-[5px]' />
      <div className="h-full bg-costomGreen flex items-center w-[100px] justify-between gap-[10px]">
        <a className="bg-white flex h-1/2 justify-center items-center rounded-full w-1/2" href="https://www.instagram.com/bidayaagency/?igsh=MWhwbzVwbW8wcmM0Zg%3D%3D" target="_blank"><img src="../images/insta-logo.png" alt="" className="h-2/3"/></a>
        <a className="bg-white flex h-1/2 justify-center items-center rounded-full w-1/2" href="https://www.facebook.com/profile.php?id=61555287795084&_rdc=1&_rdr" target="_blank"><img src="../images/logo-face.png" alt="" className="h-2/3"/></a>
        
        </div>
    </div>
  </>)
}

export default Footer