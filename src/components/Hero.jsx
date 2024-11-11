import React, { useEffect,useState } from 'react'
import { GoArrowLeft,GoChevronRight  } from "react-icons/go";
import { FaHouse } from "react-icons/fa6";
import { MdVilla ,MdBedroomChild   } from "react-icons/md";
import { MdErrorOutline } from "react-icons/md";
import { TbBackground } from "react-icons/tb";
import { FaPlus,FaMinus  } from "react-icons/fa";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { fbq } from 'react-facebook-pixel';

const Hero = () => {
  
  const [Form,setForm]=useState(1)
  const [transition1,setTransition1]=useState(false)
  const [transition2,setTransition2]=useState(false)
  const [transition3,setTransition3]=useState(false)
  const [transition4,setTransition4]=useState(false)
  const [transition5,setTransition5]=useState(false)
  const [transition6,setTransition6]=useState(false)

  const [selected1,setSlected1]=useState(true)
  const [selected2,setSlected2]=useState(true)
  const [selected3,setSlected3]=useState(true)
  const [selected4,setSlected4]=useState(true)
  const [selected5,setSlected5]=useState(true)
  const [selected6,setSlected6]=useState(true)
  const [selected7,setSlected7]=useState(true)
  const [selected8,setSlected8]=useState(true)
  const [selected9,setSlected9]=useState(true)
  const [selected10,setSlected10]=useState(true)

  const [enteredname,setEnteredname]=useState('')
  const [enteredphone,setEnteredphone]=useState('')
  const [Email,setEmail]=useState('');
  const [userInt,setUserInt]=useState('');
  const Loc=["Hamria","Basatine","Toulal","Rwamzine","Zitoune","Toulal doha","Berj-moulay-omar","Merjane","Camilia","Mensour"]
  const [userLoc,setUserLoc]=useState([])
  const [userType,setUserType]=useState('')

  const [toggleName,settoggleName]=useState(false)
  const [togglePhone,settogglePhone]=useState(false)

  const [roomsNum,setRoomsNum]=useState('')
  const [bathRoomNum,setBathRoomNum]=useState(0)
  const [space,setSpace]=useState('')

  const [contact,setContact]=useState(false)
  const showContact=()=>{
    contact?setContact(false):setContact(true)
    if(document.body.style.overflow=='hidden'){document.body.style.overflow=''}
    else if(document.body.style.overflow==''){document.body.style.overflow='hidden'}
  }


  const checkIfName=(event)=>{
    const name=event.target.value
    setEnteredname(name)
  }
  const checkIfPhone=(event)=>{
    const phone=event.target.value
    setEnteredphone(phone)
  }
    
  
    
  
  const checkInitial=()=>{
    if (!enteredname&&enteredphone){
      settoggleName(true)
      settogglePhone(false)
    }
    else if(!enteredphone&&enteredname){
      settogglePhone(true)
      settoggleName(false)
    }
    else if(!enteredname&&!enteredphone){
      settoggleName(true)
      settogglePhone(true)

    }
    
  }
  

  const nextForm=()=>{
    setForm(Form+1)
    setTransition1(false)
    if (Form==1){setTransition1(false)}
    if(Form==2){setTransition2(true)}
    if(Form==3){setTransition3(true)}
    if(Form==4){setTransition4(true)}
    if(Form==5){setTransition5(true)}
    if(Form==6){setTransition6(true)}

  }
  const prevForm=()=>{
    setForm(Form-1)
    setSlected1(true)
    setSlected2(true)
    setSlected3(true)
    setSlected4(true)
    setSlected5(true)
    setSlected6(true)
    setSlected7(true)
    setSlected8(true)
    setSlected9(true)
    setSlected10(true)
    
    if (Form==2){setTransition1(true)}
    if (Form==3){setTransition2(false)}
    if(Form==4){setTransition3(false)}
    if(Form==5){setTransition4(false)}
    if(Form==6){setTransition5(false)}

  }
  const toggleLoc1=()=>{
    if(selected1){
      setSlected1(false)
      setUserLoc([...userLoc,Loc[0]])
    }else{
      setSlected1(true)
      setUserLoc(userLoc.filter(i=>i!=Loc[0]))
    }

  }
  
  const toggleLoc2=()=>{
    if(selected2){
      setSlected2(false)
      setUserLoc([...userLoc,Loc[1]])
    }else{
      setSlected2(true)
      setUserLoc(userLoc.filter(i=>i!=Loc[1]))
    }

  }
  
  const toggleLoc3=()=>{
    if(selected3){
      setSlected3(false)
      setUserLoc([...userLoc,Loc[2]])
    }else{
      setSlected3(true)
      setUserLoc(userLoc.filter(i=>i!=Loc[2]))
    }

  }
  
  const toggleLoc4=()=>{
    if(selected4){
      setSlected4(false)
      setUserLoc([...userLoc,Loc[3]])
    }else{
      setSlected4(true)
      setUserLoc(userLoc.filter(i=>i!=Loc[3]))
    }

  }
  
  const toggleLoc5=()=>{
    if(selected5){
      setSlected5(false)
      setUserLoc([...userLoc,Loc[4]])
    }else{
      setSlected5(true)
      setUserLoc(userLoc.filter(i=>i!=Loc[4]))
    }

  }
  
  const toggleLoc6=()=>{
    if(selected6){
      setSlected6(false)
      setUserLoc([...userLoc,Loc[5]])
    }else{
      setSlected6(true)
      setUserLoc(userLoc.filter(i=>i!=Loc[5]))
    }

  }
  
  const toggleLoc7=()=>{
    if(selected7){
      setSlected7(false)
      setUserLoc([...userLoc,Loc[6]])
    }else{
      setSlected7(true)
      setUserLoc(userLoc.filter(i=>i!=Loc[6]))
    }
  }
  const toggleLoc8=()=>{
    if(selected8){
      setSlected8(false)
      setUserLoc([...userLoc,Loc[7]])
    }else{
      setSlected8(true)
      setUserLoc(userLoc.filter(i=>i!=Loc[7]))
    }
  }
  const toggleLoc9=()=>{
    if(selected9){
      setSlected9(false)
      setUserLoc([...userLoc,Loc[8]])
    }else{
      setSlected9(true)
      setUserLoc(userLoc.filter(i=>i!=Loc[8]))
    }
  }
  const toggleLoc10=()=>{
    if(selected10){
      setSlected10(false)
      setUserLoc([...userLoc,Loc[9]])
    }else{
      setSlected10(true)
      setUserLoc(userLoc.filter(i=>i!=Loc[9]))
    }
  }

  const [newUserData,setNewUserData]=useState({
    Name:'',
    Phone:'',
    Email:'',
    userInterest:'',
    Location:[],
    Type:'',
    Rooms:'',
    Bedrooms:'',
    Space:'',
    Time:''
  })
  
  let [insertData,setInsertData]=useState(false)
  const [cont,setCont]=useState(0)
  useEffect(()=>{
    const addUser=()=>{
      fetch(`https://script.google.com/macros/s/AKfycbw7yWUbGHHC5vIDmptM1P8FWVB0DZWL-H5gdYmcRgOq4i_-UyRgHYCUVvgMjTVtyDDHmA/exec?Name=${newUserData.Name}&&Phone=${newUserData.Phone}&&Email=${newUserData.Email}&&userInterest=${newUserData.userInterest}&&Location=${newUserData.Location}&&Type=${newUserData.Type}&&Rooms=${newUserData.Rooms}&&Bedrooms=${newUserData.Bedrooms}&&Space=${newUserData.Space}&&Time=${newUserData.Time}`, {
        method: 'POST',
        mode:'no-cors',
      })
    }
    if(insertData==true){
      document.getElementById('Lead').innerHTML="Submit <img height='1' width='1' style='display:none' src='https://www.facebook.com/tr?id=1709461889796244&ev=Lead&noscript=1'/>"
      addUser()
      setInsertData(false)
    }
    
  },[cont])
  let [insertData1,setInsertData1]=useState(false)
  const [cont1,setCont1]=useState(0)
  useEffect(()=>{
    const addUser1=()=>{
      fetch(`https://script.google.com/macros/s/AKfycbw7yWUbGHHC5vIDmptM1P8FWVB0DZWL-H5gdYmcRgOq4i_-UyRgHYCUVvgMjTVtyDDHmA/exec?Name=${newUserData.Name}&&Phone=${newUserData.Phone}&&Email=${newUserData.Email}&&Time=${newUserData.Time}`, {
        method: 'POST',
        mode:'no-cors',
      })
    }
    if(insertData1==true){
      addUser1()
      setInsertData1(false)
    }
    
  },[cont1])

  

  return (<>
  <section className="bg-cover h-screen bg-center bg-customBeige bg-[url('./images/bg3.jpg')] sm:bg-[url('./images/bg3.jpg')] md:bg-[url('./images/bg2.jpg')] lg:bg-[url('./images/bg.jpg')] flex md:max-w-full justify-center">
  <div className='p-[5px] w-full h-[100px] absolute left-0 bg-black shadow-lg shadow-slate-700 opacity-20 '></div><img src="../images/logo.png" className='p-[5px] w-[100px] h-[100px] absolute left-0' />
  <button className=" absolute flex h-[50px] justify-center items-center rounded-full w-[160px] right-2 top-[25px] text-black text-[25px] bg-white hover:scale-105 transition duration-300 ease-in-out  " onClick={showContact}><p className="">Contact us </p></button>
    <div className={contact?'absolute w-full bg-black bg-opacity-80 flex justify-center items-center z-10':'hidden'} style={{ height: `${window.visualViewport.height+20}px`,top:`${window.scrollY-20}px`}}>
          <div className='h-[300px] w-[300px] bg-white flex flex-col rounded-xl'>
            <FaXmark onClick={showContact} size={'30px'} style={{margin:'5px'}}/>
            
            <div className='h-full flex items-center flex-col top-0 gap-[0px]'>
              <FaPhone size={'60px'} style={{top:'60px',backgroundColor:'green',borderRadius:'20px',padding:'10px',color:'white',cursor: 'pointer'}}/>
              <p className='p-[10px] font-open-sans text-center'>Vous pouvez nous contacter sur ce numero pour plus d'information.</p>
              <a className='text-white bg-lime-600 bg-opacity-90 rounded-lg relative w-[295px] h-[80px] text-[40px] flex justify-center items-center m-[5px]'>+212632692024</a>
            </div>
          </div>     
    </div>
  <p className='rounded-xl text-[30px] w-[97%] top-[280px] leading-10 sm:leading-none lg:leading-snug font-Pacifico absolute bg-opacity-40 text-center sm:text-[50px]  md:text-[50px] md:left-[1%] md:top-[180px] md:w-[550px] lg:w-[700px] lg:top-[160px] lg:text-[50px] lg:left-[40px] bg-black shadow-lg shadow-slate-700 text-white'>Our company – Your home your dream your investment</p>
  <div className='overflow-hidden absolute flex flex-col rounded-xl justify-center items-center w-[95%] h-[400px] top-[400px] sm:top-[450px] md:top-[350px] md:w-[55%] md:left-[0%] lg:left-[3%] lg:w-[550px] lg:top-[360px]'>
    <form action='#' className={`${Form==1?'bg-opacity-90 absolute flex flex-col bg-costomGreen rounded-xl justify-center items-center w-full h-full ':'-translate-x-[600px] duration-1000 lg:w-3/4 '}${transition1?'translate-x-[00px] duration-1000 ':''}`}>
      <div className='w-11/12 flex flex-col items-center justify-center h-full'>
          <div className='w-full h-1/3 flex justify-center flex-col '>
            <label className=' text-[23px]'>Nom</label>
            <input type="text" value={enteredname} onChange={checkIfName} className='border-black rounded-lg px-2 w-full h-[60px] text-[25px] flex border-b-2' placeholder='Nom et Prenom'/>
            <label className={toggleName?'text-[15px] w-[80%] text-red-700 flex mr-[50px]':'hidden'}><MdErrorOutline size={'15px'} style={{marginTop:'2px',marginRight:'2px'}}/> entrer votre nom</label>
          </div> 
        
          <div className='w-full h-1/3 flex justify-center flex-col '> 
            <label className=' text-[23px]'>Telephone</label> 
              <input type="number" value={enteredphone} onChange={checkIfPhone} placeholder='Numero de Telephone' className='border-black rounded-lg  w-full h-[60px] text-[25px] flex border-b-2 p-2'/>
            <label className={togglePhone?'text-[14px] sm:text-[15px] w-[80%] text-red-700 flex mr-[50px] ':'hidden'}><MdErrorOutline size={'15px'} style={{marginTop:'2px',marginRight:'2px'}}/>entrer un numero de telephone</label>

          </div>
          
          <div className='w-full h-1/3 flex justify-center flex-col'>
            <label className='text-[23px]'>Email</label>
            <input type="email" className='border-black rounded-lg px-2 w-full h-[60px] text-[25px] flex border-b-2' value={Email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email (facultatif)'/>
          </div>
      </div>
      <button className='border-gray-700 border-[1px] text-black rounded-full p-[5px] mb-[10px] w-[90%] bg-white text-[25px] h-2/12' onClick={()=>enteredname&&enteredphone?(nextForm(),setInsertData1(true),setCont1(cont1+1),setNewUserData({Name:enteredname,Phone:enteredphone,Email:Email,Time:new Date()})):checkInitial()} type='button'>Suivant</button>
    </form>
    <form action='#' className={`${Form==2?'gap-2 bg-opacity-90 absolute flex flex-col bg-costomGreen rounded-xl justify-center items-center w-full h-full -translate-x-[500px]':' w-full h-full gap-2 bg-opacity-90 absolute flex flex-col bg-costomGreen rounded-xl justify-center items-center lg:w-3/4 translate-x-[780px] duration-1000 '}${transition2?'-translate-x-[300px] duration-500 opacity-0':'translate-x-[00px] duration-1000'}`}>
      <button className=' w-[90px] rounded-lg absolute top-2 left-2 ' type='button' onClick={prevForm}><GoArrowLeft color='white' size={25} strokeWidth={1}/></button>
        <label className=' mb-[5px] text-white text-[29px] sm:text-[32px] mt-[15px]'>Qu'est-ce qui vous intéresse</label>
        <button className='bg-white w-[95%] h-1/5 rounded-xl flex justify-between pl-2 pr-2 items-center text-[30px] border-gray-700 border-[1px]' type='button' onClick={()=>{nextForm();setUserInt("Acheter")}} >Acheter <GoChevronRight color='black' size={35} strokeWidth={1}/></button>
        <button className='bg-white w-[95%] h-1/5 rounded-xl flex justify-between pl-2 pr-2 items-center text-[30px] border-gray-700 border-[1px]' type='button' onClick={()=>{nextForm();setUserInt("Vendre")}}>Vendre <GoChevronRight color='black' size={35} strokeWidth={1}/></button>
        <button className='bg-white w-[95%] h-1/5 rounded-xl flex justify-between pl-2 pr-2 items-center text-[30px] border-gray-700 border-[1px]' type='button' onClick={()=>{nextForm();setUserInt("Louer")}}>Louer <GoChevronRight color='black' size={35} strokeWidth={1}/></button>
    </form>
    <form action='#' className={`${Form==3?'gap-2 bg-opacity-90 absolute flex flex-col bg-costomGreen rounded-xl justify-center items-center w-full h-full -translate-x-[500px]':'gap-2 bg-opacity-90 absolute flex flex-col bg-costomGreen rounded-xl justify-center items-center w-[300px] h-[250px] lg:w-3/4 translate-x-[780px] duration-1000 '} ${transition3?'-translate-x-[300px] duration-500 opacity-0':'translate-x-[00px] duration-1000'}`}>
      <button className=' w-[90px] rounded-lg absolute top-2 left-2 ' type='button' onClick={prevForm}><GoArrowLeft color='white' size={25} strokeWidth={1}/></button>
        <label className='  text-white mt-[25px] text-[27px] sm:text-[32px]'>Choisissez votre emplacement</label>
        <div className='flex flex-col overflow-auto w-11/12 ml-[22px] gap-[7px] scrollbar-custom h-full'>
          <button className={selected1?'border-white border-2 text-white rounded-2xl mr-5 p-[11px] duration-300 text-[32px]':'bg-white border-4 text-black rounded mr-5 p-[11px] duration-300 text-[32px]'} type='button' onClick={toggleLoc1}>Hamria</button>
          <button className={selected2?'border-white border-2 text-white rounded-2xl mr-5 p-[11px] duration-300 text-[32px]':'bg-white border-4 text-black rounded mr-5 p-[11px] duration-300 text-[32px]'} type='button' onClick={toggleLoc2}>Basatine</button>
          <button className={selected3?'border-white border-2 text-white rounded-2xl mr-5 p-[11px] duration-300 text-[32px]':'bg-white border-4 text-black rounded mr-5 p-[11px] duration-300 text-[32px]'} type='button' onClick={toggleLoc3}>Toulal</button>
          <button className={selected4?'border-white border-2 text-white rounded-2xl mr-5 p-[11px] duration-300 text-[32px]':'bg-white border-4 text-black rounded mr-5 p-[11px] duration-300 text-[32px]'} type='button' onClick={toggleLoc4}>Rwamzin</button>
          <button className={selected5?'border-white border-2 text-white rounded-2xl mr-5 p-[11px] duration-300 text-[32px]':'bg-white border-4 text-black rounded mr-5 p-[11px] duration-300 text-[32px]'} type='button' onClick={toggleLoc5}>Zitoune</button>
          <button className={selected6?'border-white border-2 text-white rounded-2xl mr-5 p-[11px] duration-300 text-[32px]':'bg-white border-4 text-black rounded mr-5 p-[11px] duration-300 text-[32px]'} type='button' onClick={toggleLoc6}>Toulal Doha</button>
          <button className={selected7?'border-white border-2 text-white rounded-2xl mr-5 p-[11px] duration-300 text-[32px]':'bg-white border-4 text-black rounded mr-5 p-[11px] duration-300 text-[32px]'} type='button' onClick={toggleLoc7}>Berj-moulay-omar</button>
          <button className={selected8?'border-white border-2 text-white rounded-2xl mr-5 p-[11px] duration-300 text-[32px]':'bg-white border-4 text-black rounded mr-5 p-[11px] duration-300 text-[32px]'} type='button' onClick={toggleLoc8}>Marjane</button>
          <button className={selected9?'border-white border-2 text-white rounded-2xl mr-5 p-[11px] duration-300 text-[32px]':'bg-white border-4 text-black rounded mr-5 p-[11px] duration-300 text-[32px]'} type='button' onClick={toggleLoc9}>Camilia</button>
          <button className={selected10?'border-white border-2 text-white rounded-2xl mr-5 p-[11px] duration-300 text-[32px]':'bg-white border-4 text-black rounded mr-5 p-[11px] duration-300 text-[32px]'} type='button' onClick={toggleLoc10}>Mensour</button>
        </div>
        <button className='border-gray-700 border-[1px] text-black rounded-full p-[5px] mb-[10px] w-[90%] bg-white h-[60px] text-[25px]' type='button' onClick={nextForm}>Next</button>
    </form>
    <form action='#' className={`${Form==4?'gap-2 bg-opacity-90 absolute flex flex-col bg-costomGreen rounded-xl items-center w-full h-full -translate-x-[500px]':' w-full h-full gap-2 bg-opacity-90 absolute flex flex-col bg-costomGreen rounded-xl justify-center items-center lg:w-3/4 translate-x-[780px] duration-1000 '} ${transition4?'-translate-x-[300px] duration-500 opacity-0':'translate-x-[00px] duration-1000'}`}>
      <button className=' w-[90px] rounded-lg absolute top-2 left-2 ' type='button' onClick={()=>{prevForm();setUserLoc([])}}><GoArrowLeft color='white' size={25} strokeWidth={1}/></button>
        <label className=' mb-[30px] text-white mt-[50px] text-[29px] sm:text-[32px]'>Qu'est-ce que tu cherches?</label>
        <div className='flex flex-col overflow-auto mb-[0px] ml-[22px] gap-[10px] scrollbar-custom h-11/12 w-full'>
          <button className='border-white border-2 text-white rounded mr-5 p-[5px] flex h-1/4 text-[28px]' type='button' onClick={()=>{nextForm();setUserType("Appartment")}}><FaHouse style={{marginRight:'24%',marginTop:'7px', marginLeft:'20px'}} /> Appartment</button>
          
          <button className='border-white border-2 text-white rounded mr-5 p-[5px] flex h-1/4 text-[28px]' type='button' onClick={()=>{nextForm();setUserType("Villa")}}><MdVilla  style={{marginRight:'32%',marginTop:'7px', marginLeft:'20px'}}/>Villa</button>
          <button className='border-white border-2 text-white rounded mr-5 p-[5px] flex h-1/4 text-[28px]' type='button' onClick={()=>{nextForm();setUserType("Studio")}}><MdBedroomChild  style={{marginRight:'30%',marginTop:'7px', marginLeft:'20px'}}/>Studio</button>
          <button className='border-white border-2 text-white rounded mr-5 p-[5px] flex h-1/4 text-[28px]' type='button' onClick={()=>{nextForm();setUserType("Terain")}}><TbBackground   style={{marginRight:'30%',marginTop:'7px', marginLeft:'20px'}}/>Terain</button>
        </div>
        
    </form>
    
    <form action='#' className={`${Form==5?'gap-2 bg-opacity-90 absolute flex flex-col bg-costomGreen rounded-xl items-center w-full h-full -translate-x-[500px]' :'gap-2 bg-opacity-90 absolute flex flex-col bg-costomGreen rounded-xl justify-center items-center w-[300px] h-[250px] lg:w-3/4 translate-x-[780px] duration-1000 '} ${transition5?'-translate-x-[300px] duration-500 opacity-0':'translate-x-[00px] duration-1000'}`}>
      <button className=' w-[90px] rounded-lg absolute top-2 left-2 ' type='button' onClick={prevForm}><GoArrowLeft color='white' size={25} strokeWidth={1}/></button>
        <label className='text-white text-[40px] mt-[40px]'>Combien?</label>
        <div className='flex flex-col overflow-auto w-full mb-[10px] ml-[22px] gap-[4px] scrollbar-custom items-center'>
          <div className='mb-[10px] mt-[3px] flex '> 
            <label className=' text-white mr-[45px] text-[30px] ml-[-45px]'>Chambres ?</label>
            <div type="text" className='w-[100px] rounded flex justify-between items-center' placeholder='ex:1'><button className=' w-1/4' onClick={()=>bathRoomNum>0?setBathRoomNum(bathRoomNum-1):''} type='button'><FaMinus   size={'30px'} strokeWidth={1.5}/></button><label className=' w-2/4 flex items-center justify-center text-[37px] text-white h-[0px]'>{bathRoomNum}</label><button className='w-1/4' type='button' onClick={()=>bathRoomNum<10?setBathRoomNum(bathRoomNum+1):''}><FaPlus   size={'30px'} strokeWidth={1.5}/></button></div>
          </div>
          <div className='mb-[10px] mt-[3px] flex '>
          <label className=' text-white mr-[75px] text-[30px]' >Budget?</label>
            <input className='w-[160px] rounded pl-[5px] ml-[10px] mr-[15px]' type='number' placeholder='ex:1000000dh' value={roomsNum} onChange={(e)=>setRoomsNum(e.target.value)}/>
          </div>
          <div className='mb-[10px] mt-[3px] flex'>
            <label className=' text-white mr-[75px] text-[30px]' >Espace?</label>
            <input className='w-[160px] rounded pl-[5px] ml-[10px] mr-[15px]' type='number' placeholder='ex:150m^2' value={space} onChange={(e)=>setSpace(e.target.value)}/>
          </div>
          <button id='Lead' className='border-gray-700 border-[1px] text-black rounded-full p-[5px] mb-[10px] w-[90%] bg-white h-[60px] text-[25px] mt-5 mr-[15px]' type='button' onClick={()=>{setInsertData(true);setCont(cont+1);setNewUserData({Name:enteredname,Phone:enteredphone,Email,userInterest:userInt,Location:userLoc,Type:userType,Rooms:roomsNum,Bedrooms:bathRoomNum,Space:space,Time:new Date()});nextForm();fbq('track', 'Lead');}}>
            Submit
          </button>
        </div>
    </form>
    <form action='#' className={`${Form==6?'gap-2 bg-opacity-90 absolute flex flex-col bg-white rounded-xl items-center w-full h-full -translate-x-[500px]' :'gap-2 bg-opacity-90 absolute flex flex-col bg-costomGreen rounded-xl justify-center items-center w-[300px] h-[250px] lg:w-3/4 translate-x-[780px] duration-1000 '} ${transition6?'-translate-x-[300px] duration-500 opacity-0':'translate-x-[00px] duration-1000'}`}>
    <button className=' w-[90px] rounded-lg absolute top-2 left-2 ' type='button' onClick={prevForm}><GoArrowLeft color='black' size={25} strokeWidth={1}/></button>
      <IoCheckmarkCircleSharp color='green' size={95} strokeWidth={1} style={{position:'absolute',top:'30px'}}/>
      <h1 className='absolute top-[130px] text-[50px] font-extrabold'>Merci,</h1>
      <p className='absolute top-[185px] text-[20px] p-[20px] text-center'>nous avons reçu vos informations, nous vous répondrons dans les plus brefs délais. vous pouvez consulter le reste de notre site Web pour plus de détails.</p>
      
    </form>
  </div>

  
  </section>
  
  
  </>
  )
}

export default Hero