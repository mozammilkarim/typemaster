import React from 'react'
import PrimaryButton from './PrimaryButton'
import keyboard from "../../assets/desktop/image-keyboard.jpg";

const Section1 = () => {
  return (
    <div className='px-[100px] mb-[30px] flex justify-between '>
        <div className='flex flex-col max-w-[445px] '>
            <h1 className='font-bold text-6xl text-[#162542] '>Typemaster Keyboard</h1>
            <p className='font-medium text-[#7B8BAD] mt-[24px] mb-[40px]'>Improve your productivity and gaming without breaking the bank. Upgrade to a high quality mechanical typing experience.</p>
            <div className='flex '>
                <PrimaryButton/>
                <h3 className='font-bold px-[16px] text-[#7B8BAD] my-auto'>Release on 5/27</h3>
            </div>
        </div>
        <div className=' '>
            <img src={keyboard} alt="typeMaster Keyboard" className='h-[480px]' />
        </div>
    </div>
  )
}

export default Section1