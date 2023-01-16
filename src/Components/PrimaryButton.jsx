const PrimaryButton = ({ text = "Pre-order now" }) => {
   
    return (
        <div className="bg-[#F16718] hover:bg-[#FF9B62] text-white px-[27px] py-[16px] uppercase font-bold text-base w-full rounded-lg">
            {text}
        </div>
    )
}

export default PrimaryButton