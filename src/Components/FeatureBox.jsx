import React from 'react'
import battery from "../../assets/shared/icon-battery.svg";
import compatible from "../../assets/shared/icon-compatible.svg";
import light from "../../assets/shared/icon-light.svg";
import bluetooth from "../../assets/shared/icon-bluetooth.svg";
import phone from "../../assets/shared/pattern-square.svg";

const FeatureArray=[
    {
        icon:phone,
        title:"HIGHLY COMPATIBLE",
        description:"Easy to use and works well with all major computer brands, gaming consoles and mobile devices. Plug & play, no installation or driver needed."
    },
    {
        icon:bluetooth,
        title:"WIRELESSWITH BLUETOOTH",
        description:"Powerful 2.4G RF technology allows you to connect the cordless keyboard from up to 30ft away. Simply plug the unifying receiver into your computer."
    },
    {
        icon:battery,
        title:"HIGH CAPACITY BATTERY",
        description:"Equipped with a long-lasting built-in battery, you’ll never have to spend a dime on replaceable ones. Enjoy 40 hours of usage time between charges."
    },
    {
        icon:light,
        title:"RGB BACKLIT MODES",
        description:"Choose from 4 backlight brightness levels and adjustable breathing speed. Each key glows intensely in the dark and helps you type in low light conditions."
    },
]
const Features = ({icon,title,description}) => {
  return (
    <div className='flex flex-col max-w-[255px]'>
        <div className='bg-[#F16718] rounded-2xl p-[22px]'>

        <img src={icon} alt="icon" />
        </div>
        <h2 className='font-[900] text-2xl text-[#162542] mt-[48px] mb-[24px]'>{title}</h2>
        <p className='text-[#7B8BAD] font-medium'>{description}</p>
    </div>
  )
}
const FeatureBox=()=>{
    return (
        <div className='flex sm:flex-row flex-col gap-2 justify-center items-center'>
            {FeatureArray.map((feature,index)=>{
                return <Features icon={feature.icon} title={feature.title} description={feature.description}/>
            })}
        </div>
    )
}
export default FeatureBox