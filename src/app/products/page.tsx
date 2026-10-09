import React, { Suspense } from 'react';
import AllProduct from '../components/products/AllProduct';
import { FaBackward } from 'react-icons/fa';
import Link from 'next/link';

const page = () => {
    return (
        <div>
            <h2 className="mx-auto mt-6 w-full  px-2 pb-3 text-center text-2xl font-bold leading-relaxed text-gray-800 sm:mt-8 sm:px-4 sm:text-3xl sm:leading-snug lg:mt-10 mb-0">এক নজরে দেখে নিন বাজার দর এর সকল পণ্য</h2>
            <Suspense>
                <AllProduct />
            </Suspense>

              <Link href="/" className='m-10 flex items-center gap-2 text-green-500'>
                <h2>হোম</h2>
                <FaBackward />
            </Link>
        </div>
    );
};

export default page;