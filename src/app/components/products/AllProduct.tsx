 import Link from 'next/link';
import React from 'react';
 import { FaArrowDown, FaArrowUp, FaPercentage } from 'react-icons/fa';
 
 interface Product {
     id: string,
     category: string,
     slug:string
     today: string,
     image: string,
     nameBn:string,
     unit: string,
     change: {
         dir: string,
         pct: string
     }
 }
 const AllProduct = async () => {
 
     const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products")
 
     const products: Product[] = await res.json();
     console.log(products)
     return (
         <div className='px-15'>
             <div className='mt-15'>
                 <h2 className='text-2xl font-bold text-gray-800'>সব পণ্য</h2>
                 <p className='text-sm text-gray-500 mb-5'>মোট {products.length} পণ্য দেখানো হচ্ছে</p>
             </div>
 
             <div className='grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 '>
 
                 {products.map((product) => (
                    <Link key={product.slug} href={`/product/${product.slug}`}>
                     <div className=' border-b border-green-500 bg-gray-50' key={product.id}>
                         <div className="w-full rounded-6 p-2 shadow-sm">
                            
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
                                    {product.change.dir === "up" ? ( <div className="mb-1 flex shrink-0 items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-red-600">
                                     <FaArrowUp />
                                     <span>{product.change.pct}</span>
                                     <FaPercentage />
                                 </div>) : (<div className="mb-1 flex shrink-0 items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-green-600">
                                     <FaArrowDown />
                                     <span>{product.change.pct}</span>
                                     <FaPercentage />
                                 </div>
                                 )}
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
 
 export default AllProduct;