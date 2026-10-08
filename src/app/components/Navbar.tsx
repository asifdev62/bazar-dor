import Link from 'next/link';
import React from 'react';

const Navbar =async () => {

    const res = await fetch("https://api.abcz.workers.dev/api/bazardor/categories")

    const data = await res.json();
    console.log(data)

    return (
        <nav className='w-full border-y border-gray-200'>
            <div className='flex min-w-max items-center justify-center gap-4 px-2 py-1 sm:gap-6 sm:px-4'>
            {
                data.map(item => <Link key={item.id} href={item.slug} className='flex shrink-0 items-center gap-1 whitespace-nowrap text-sm font-medium text-gray-700 transition hover:text-green-500 sm:text-base py-1'>
                    <span>{item.icon}</span>
                    <span>{item.nameBn}</span>

                    </Link>)
            }
        </div>
        </nav>
    );
};

export default Navbar;