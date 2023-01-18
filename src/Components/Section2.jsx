import React from 'react'
import keyboard1 from "../../assets/desktop/image-phone-and-keyboard.jpg";
import keyboard2 from "../../assets/desktop/image-glass-and-keyboard.jpg";


const Section1 = () => {
    return (
        <div className='mb-[140px] relative lg:px-[165px] pl-[24px] md:pl-[50px]  flex gap-[64px] md:flex-row flex-col justify-between overflow-hidden'>
            <div className='bg-[#7B8BAD] w-[255px] h-[240px] absolute rounded-2xl bottom-0 -left-40 lg:block hidden'>

            </div>
            <div className='flex gap-[30px]'>

                <div className='w-1/3'>
                    <img src={keyboard1} alt="typeMaster Keyboard" className='rounded-2xl xl:rounded-2xl rounded-r-[0] h-[331px] md:h-[425px] lg:h-[480px] w-full md:w-[478px]' />
                </div>
                <div className='w-2/3'>
                    <img src={keyboard2} alt="typeMaster Keyboard" className='rounded-2xl xl:rounded-2xl rounded-r-[0] h-[331px] md:h-[425px] lg:h-[480px] w-full md:w-[478px]' />
                </div>
            </div>
            <div className='flex my-auto sm:flex-row justify-between flex-col md:flex-col md:max-w-[445px] max-w-full  md:ml-[125px] '>
                <h1 className='font-bold text-5xl sm:text-6xl text-[#162542] uppercase'>mechanical wireless Keyboard</h1>
                <p className='font-medium text-[#7B8BAD] mt-[24px] mb-[40px]'>The Typemaster keyboard boasts top-notch build and practical design. It offers a wide variety of switches and keycaps, along with reliable wireless connectivity.</p>
            </div>
        </div>
    )
}

export default Section1