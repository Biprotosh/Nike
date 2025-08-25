import { star } from '../assets/icons'
import type { TProduct } from '../types'

const PopularProductCard = ({name, imgURL, price}:TProduct) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
        <img src={imgURL} alt={name} className='w-[150px] h-[150px] sm:w-[280px] sm:h-[280px]'/>
        <div className='mt-4 flex justify-start gap-2.5'>
            <img src={star} alt="rating" width={16} height={16}/>
            <p className='font-montserrat sm:text-xl leading-normal text-slate-gray'>4.5</p>
        </div>
        <h3 className='mt-2 text-xl sm:text-2xl leading-normal font-semibold font-palanquin'>{name}</h3>
        <p className='mt-2 text-xl sm:text-2xl text-coral-red font-montserrat leading-normal font-semibold'>{price}</p>

    </div>
  )
}

export default PopularProductCard