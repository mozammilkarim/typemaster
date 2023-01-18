import React from 'react'
import PrimaryButton from './PrimaryButton'
import keyboard from "../../assets/desktop/image-keyboard.jpg";

const Section1 = () => {
  return (
    <div className='relative lg:px-[165px] pl-[24px] md:pl-[50px] mb-[30px] flex gap-[64px] md:flex-row flex-col justify-between overflow-hidden'>
        <div className='bg-[#7B8BAD] w-[255px] h-[240px] absolute rounded-2xl -right-40 lg:block hidden'>

        </div>
        <div className='flex my-auto flex-col max-w-[445px] lg:mr-[125px] '>
            <h1 className='font-bold text-5xl sm:text-6xl text-[#162542] '>Typemaster Keyboard</h1>
            <p className='font-medium text-[#7B8BAD] mt-[24px] mb-[40px]'>Improve your productivity and gaming without breaking the bank. Upgrade to a high quality mechanical typing experience.</p>
            <div className='flex '>
                <PrimaryButton/>
                <h3 className='font-bold px-[16px] text-[#7B8BAD] my-auto'>Release on 5/27</h3>
            </div>
        </div>
        <div className=''>
            <img src={keyboard} alt="typeMaster Keyboard" className='rounded-2xl xl:rounded-2xl rounded-r-[0] h-[331px] md:h-[425px] lg:h-[480px] w-full md:w-[478px]' />
        </div>
    </div>
  )
}

export default Section1