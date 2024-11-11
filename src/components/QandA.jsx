import { useState } from "react";
import { FaChevronDown,FaChevronUp } from "react-icons/fa6";

const QandA = () => {
const [showQuetion1,setShowQuetion1]=useState(false)
const [showQuetion2,setShowQuetion2]=useState(false)
const [showQuetion3,setShowQuetion3]=useState(false)
const [showQuetion4,setShowQuetion4]=useState(false)
const toggleButton1=()=>{
    showQuetion1?setShowQuetion1(false):setShowQuetion1(true)
    setShowQuetion2(false)
    setShowQuetion3(false)
    setShowQuetion4(false)
}
const toggleButton2=()=>{
    showQuetion2?setShowQuetion2(false):setShowQuetion2(true)
    setShowQuetion1(false)
    setShowQuetion3(false)
    setShowQuetion4(false)
}
const toggleButton3=()=>{
    showQuetion3?setShowQuetion3(false):setShowQuetion3(true)
    setShowQuetion2(false)
    setShowQuetion1(false)
    setShowQuetion4(false)
}
const toggleButton4=()=>{
    showQuetion4?setShowQuetion4(false):setShowQuetion4(true)
    setShowQuetion2(false)
    setShowQuetion3(false)
    setShowQuetion1(false)
}

  return (
    <div className='absolute top-[2320px] sm:top-[2450px] md:top-[1740px] lg:top-[1340px] w-full flex flex-col gap-[5px] items-center justify-center '>
        <div className="w-full h-full flex flex-col bg-orange-100 max-w-[1300px] pt-[15px] pb-[15px] rounded-xl">
        <div className="w-full flex flex-col gap-[5px] ">
        <button className='bg-orange-200 m-[5px] rounded-2xl p-[4px] flex justify-between h-[80px] sm:h-[60px] items-center text-[30px]' onClick={toggleButton1}>Quels services proposez-vous ?{showQuetion1?<FaChevronUp size={'22px'} style={{marginRight:'10px'}}/>:<FaChevronDown size={'22px'} style={{marginRight:'10px'}}/>}</button>
        <p className={showQuetion1?'ml-[10px]':'hidden'}>Nous proposons des services d'achat, de vente, de location et de gestion de biens immobiliers.</p>
        </div>
        <div className="w-full flex flex-col gap-[5px] ">
        <button className='bg-orange-200 m-[5px] rounded-2xl p-[4px] flex justify-between h-[80px] sm:h-[60px]  items-center text-[25px] md:text-[30px]' onClick={toggleButton2}>Quelles sont les étapes pour acheter une maison ?{showQuetion2?<FaChevronUp size={'22px'} style={{marginRight:'10px'}}/>:<FaChevronDown size={'22px'} style={{marginRight:'10px'}}/>}</button>
        <p className={showQuetion2?'ml-[10px] ':'hidden'}> Nous vous accompagnons dans toutes les étapes : recherche, visite, offre, financement, et signature de l'acte de vente.</p>
        </div><div className="w-full flex flex-col gap-[5px] ">
        <button className='bg-orange-200 m-[5px] rounded-2xl p-[4px] flex justify-between h-[80px] sm:h-[60px] items-center text-[30px]' onClick={toggleButton3}>Quels sont les frais d'agence ?{showQuetion3?<FaChevronUp size={'22px'} style={{marginRight:'10px'}}/>:<FaChevronDown size={'22px'} style={{marginRight:'10px'}}/>}</button>
        <p className={showQuetion3?'ml-[10px]':'hidden'}>Les frais varient en fonction des services. Contactez-nous pour un devis personnalisé.</p>
        </div><div className="w-full flex flex-col gap-[5px] ">
        <button className='bg-orange-200 m-[5px] rounded-2xl p-[4px] flex justify-between h-[80px] sm:h-[60px] items-center text-[23px] md:text-[30px]' onClick={toggleButton4}>Comment puis-je prendre rendez-vous pour une visite ?
        {showQuetion4?<FaChevronUp size={'22px'} style={{marginRight:'10px'}}/>:<FaChevronDown size={'22px'} style={{marginRight:'10px'}}/>}</button>
        <p className={showQuetion4?'ml-[10px]':'hidden'}>Vous pouvez prendre rendez-vous en ligne ou par téléphone selon vos disponibilités.</p>
        </div>
        </div>
    </div>
  )
}

export default QandA