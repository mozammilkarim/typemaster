const PrimaryButton = ({ text = "Pre-order now" }) => {
   
    return (
        <div className="bg-[#F16718] hover:bg-[#FF9B62] break-keep text-white px-[11px] sm:px-[27px] py-[11px] sm:py-[16px] uppercase font-bold text-base  rounded-lg">
            {text}
        </div>
    )
}

export default PrimaryButton