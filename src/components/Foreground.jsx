import { useRef } from "react";
import Cards from "./Cards";

const Foreground = () => {
    const ref = useRef(null);
    const data = [
        {
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, suscipit!",
            filesize:".4mb",
            close:true,
            tag:{
                isOpen:true,
                tagTitle:"Download Now..",
                tagColor:"green"
            }
        },
         {
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, suscipit!",
            filesize:".4mb",
            close:false,
            tag:{
                isOpen:true,
                tagTitle:"Download Now..",
                tagColor:"blue"
            }
        },
         {
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, suscipit!",
            filesize:".4mb",
            close:true,
            tag:{
                isOpen:false,
                tagTitle:"Upload",
                tagColor:"green"
            }
        }
    ]
    
  return <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex flex-wrap gap-10 p-5">
   {data.map((item, index) => (
    <Cards  data={item} refrence={ref}/>
   ))}
  </div>;
};

export default Foreground;
