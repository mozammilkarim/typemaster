
const SecondaryButton = ({ text = "Pre-order now" }) => {
    return (
        <div className="bg-[#E8EFF2] hover:bg-[#162542] text-[#162542] hover:text-white px-[27px] py-[16px] uppercase font-bold text-base w-full rounded-lg">
            {text}
        </div>
    )
}

export default SecondaryButton