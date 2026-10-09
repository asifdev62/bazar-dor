import Link from 'next/link';
import React from 'react';
import { FaArrowUp, FaPercentage } from 'react-icons/fa';

interface Product {
    id: string,
    category: string,
    slug:string,
    today: string,
    nameBn: string,
    image: string,
    unit: string,
    change: {
        dir: string,
        pct: string
    }
}
const PriceUpProduct = async () => {

    const res = await fetch("https://api.api-store.workers.dev/api/bazardor/products")

    const products: Product[] = await res.json();
    console.log(products)
    return (
        <div className='px-15'>
            <div className='flex items-center gap-2'>
                <FaArrowUp className='text-red-500' />
                <h2 className='text-xl font-bold text-gray-800 py-5'>আজ দাম বেড়েছে</h2>
            </div>

            <div className='grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>

                {products.filter((product) => product.change.dir === "up").slice(0, 6).map((product) => (
                    <Link key={product.slug} href={`/product/${product.slug}`}>
                    <div key={product.id}>
                        <div className="w-full rounded-6  bg-gray-50 border-b border-green-500 p-2 shadow-sm">
                           
                            <div className="flex items-center gap-4">
                                <div className="flex h-18 w-18 shrink-0 items-center justify-center rounded-[20px] bg-white text-4xl">
                                    {product.image}
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-gray-800">
                                        {product.nameBn}
                                    </h3>
                                    <p className="mt-1 text-base text-gray-700">
                                        প্রতি কেজি
                                    </p>
                                </div>
                            </div>

                            
                            <div className="mt-5  items-end justify-between gap-3">
                                <h3>আজকের দাম</h3>
                                <div className='flex justify-between items-center gap-2'>
                                    <div className='flex items-center gap-2'>
                                          <p className="text-base text-gray-800 font-bold">
                                     {product.today}
                                    </p>
                                    <h3 className="mt-1  font-semibold text-sm">
                                        টাকা
                                    </h3>
                                    </div>
                                     <div className="mb-1 flex shrink-0 items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-red-500">
                                    <FaArrowUp />
                                    <span>{product.change.pct}</span>
                                    <FaPercentage />
                                </div>
                                </div>

                               
                            </div>
                        </div>
                    </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default PriceUpProduct;