import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const MainBanner = () => {
  return (
    <div className='relative'>
        <img src={assets.main_banner_bg} alt="Main Banner" className='w-full hidden md:block'/>
        <img src={assets.main_banner_bg_sm} alt="Main Banner" className='w-full md:hidden'/>
             <div className='absolute inset-0 flex flex-col items-center justify-end pb-10 px-6 text-center md:items-start md:justify-center md:pb-0 md:px-4 md:text-left md:pl-18 lg:pl-24'>
            <h1 className='text-3xl md:text-4xl text-center md:text-left max-w-72 md:max-w-80 lg:max-w-105 leading-tight lg:leading-15'>Freshness You can Trust, savings You will Love!</h1>
        
        <div className='mt-6 flex items-center gap-4 font-medium'>
            <Link to={'/products'} className='group flex items-center gap-2 px-7 md:px-9 py-3 bg-[#4fbf8b] hover:bg-[#43ab7b] transition rounded text-white cursor-pointer'> Shop now
            <img className='hidden transition group-focus:translate-x-1 md:block' src={assets.white_arrow_icon} alt="arrow" />
            </Link>

            <Link to={'/products'} className='group flex items-center gap-2 px-9 py-3 cursor-pointer'> Explore deals
            <img className='hidden transition group-focus:translate-x-1 md:block' src={assets.black_arrow_icon} alt="arrow" />
       </Link>
        </div>
        </div>
    </div>
  )
}

export default MainBanner