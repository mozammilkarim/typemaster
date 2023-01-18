import React from 'react'
import battery from "../../assets/shared/icon-battery.svg";
import compatible from "../../assets/shared/icon-compatible.svg";
import light from "../../assets/shared/icon-light.svg";
import bluetooth from "../../assets/shared/icon-bluetooth.svg";

const FeatureArray = [
    {
        icon: compatible,
        title: "HIGHLY COMPATIBLE",
        description: "Easy to use and works well with all major computer brands, gaming consoles and mobile devices. Plug & play, no installation or driver needed."
    },
    {
        icon: bluetooth,
        title: "WIRELESSWITH BLUETOOTH",
        description: "Powerful 2.4G RF technology allows you to connect the cordless keyboard from up to 30ft away. Simply plug the unifying receiver into your computer."
    },
    {
        icon: battery,
        title: "HIGH CAPACITY BATTERY",
        description: "Equipped with a long-lasting built-in battery, you’ll never have to spend a dime on replaceable ones. Enjoy 40 hours of usage time between charges."
    },
    {
        icon: light,
        title: "RGB BACKLIT MODES",
        description: "Choose from 4 backlight brightness levels and adjustable breathing speed. Each key glows intensely in the dark and helps you type in low light conditions."
    },
]
const Features = ({ icon, title, description }) => {
    return (
        <div className='flex flex-col xl:w-[255px] w-full'>
            <div className='bg-[#F16718] rounded-2xl p-[22px] xl:h-[65px] xl:w-[65px] flex justify-center items-center'>

                <img src={icon} alt="icon" />
            </div>
            <div className='flex flex-col justify-between items-center h-full'>

                <h2 className='font-[900] text-2xl text-[#162542] mt-[48px] mb-[24px] break-words'>{title}</h2>
                <p className='text-[#7B8BAD] font-medium'>{description}</p>
            </div>
        </div>
    )
}
const FeatureBox = () => {
    return (
        <div className='xl:px-[165px] sm:px-[68px] px-[24px] grid-cols-1 grid sm:grid-cols-2 xl:grid-cols-4 gap-7'>
            {FeatureArray.map((feature, index) => {
                return <Features icon={feature.icon} title={feature.title} description={feature.description} />
            })}
        </div>
    )
}
export default FeatureBox