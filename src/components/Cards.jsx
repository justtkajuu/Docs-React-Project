import React from 'react'
import { LuFileSliders } from "react-icons/lu";
import { FiDownload } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { motion } from "motion/react"

const Cards = ({data , refrence}) => {
  return (
     <motion.div drag whileDrag={{scale:1.2}} dragElastic={0.2} dragConstraints={refrence} dragTransition={{bounceStiffness:100, bounceDamping: 30}} className="w-60 h-72 rounded-[30px] bg-zinc-900/90 px-8 py-10 relative overflow-hidden flex-shrink-0">
        <LuFileSliders/>
        <p className='text-sm leading-tight mt-5 font-semibold '>{data.desc}</p>
        <div className='footer absolute bottom-0 w-full left-0'>
            <div className='flex items-center justify-between mb-3 py-3 px-8'>
                <h5>{data.filesize}</h5>
                <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                    {data.close ? <IoClose size='.9em' color='#fff'/> :<FiDownload size='.7em' color='#fff'/>}
                </span>
            </div>
            {data.tag.isOpen && (<div className={`tag w-full py-3 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
              <h3 className='text-sm font-semibold '>{data.tag.tagTitle}</h3>  
            </div>)}
        </div>
     </motion.div>
  )
}

export default Cards