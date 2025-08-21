import type { TButtonProps } from "../types"

const Button = ({label, icon}: TButtonProps) => {
  return (
    <button className='flex justify-center items-center gap-2 px-7 py-4  font-montserrat text-lg leading-none bg-coral-red rounded-full text-white'>
        {label}
        <img src={icon} alt="arrow right icon" className="ml-2 rounded-full w-5 h-5"/>
    </button>
  )
}

export default Button