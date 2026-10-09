import Image from 'next/image';;
import BanglaDate from './BanglaDate';

const Banner =async () => {
   
    return (
       <div className='px-4 py-6 sm:py-8 lg:px-15 lg:py-10'>

         <div className='flex flex-col items-center justify-between gap-6 rounded-xl bg-green-50 px-5 py-6 sm:px-8 md:flex-row md:gap-8 lg:px-10'>
            <div className='w-full space-y-4 text-center md:w-3/5 md:text-left'>
                
                <span className='inline-block text-green-600 bg-green-100 rounded-lg text-sm px-3 py-2' ><BanglaDate /></span>

                <h2 className='text-2xl font-bold text-gray-800 sm:text-3xl lg:text-4xl mt-4'>আজকের বাজারের দাম এক নজরে</h2>


                <p className='text-gray-600 text-sm leading-7 sm;text-base'>চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, <br />সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।</p>


                <button className='bg-green-600 rounded-md text-white px-5 py-2 font-semibold text-sm mt-5 transition hover:bg-green-700 sm:text-base'>সব পণ্য দেখুন</button>
                </div>

            <div className='w-full max-w-60 shrink-0 sm:max-w-75 md:w-2/5 md:max-w-none'>
                <Image src="/bazar-hero.png"
                alt='banner-logo'
                width={400}
                height={400}
                className='h-auto w-full object-contain'></Image>
            </div>
        </div>
       </div>
    );
};

export default Banner;