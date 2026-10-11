"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowDown, FaArrowUp, FaBackward, FaPercentage } from "react-icons/fa";
import { IoCaretDown } from "react-icons/io5";

interface Product {
    id: number;
    slug: string;
    nameBn: string;
    category: string;
    categoryNameBn: string;
    categoryIcon: string;
    unit: string;
    image: string;
    today: number;
    yesterday: number;
    lastWeek: number;
    lastMonth: number;
    change: {
        dir: "up" | "down" | "flat";
        pct: number;
    };
}

const CategoryPage =({
    params,
}: {
    params: Promise<{ slug: string }>;
}) => {
    const [slug, setSlug] = useState("");
    const [products, setProduct] = useState<Product[]>([]);
    const [sortOrder, setSortOrder] = useState("default");

    useEffect(()=>{
        params.then(({slug}) => setSlug(slug));
    }, [params]);

    useEffect(()=>{
        if(!slug) return;

        const getProducts = async () => {
            const res = await fetch("https://openapi.programming-hero.com/api/bazardor/products");

            const data: Product[] = await res.json();
            setProduct(data.filter((product) => product.category === slug));
        };

        getProducts();
    }, [slug]);

    const sortedproducts = [...products].sort((a, b) => {
        if (sortOrder === "low-to-high"){
            return a.today - b.today;
        }
        if(sortOrder === "high-to-low"){
            return b.today - a.today;
        }

        return 0;
    });

    const categoryName = products[0]?.categoryNameBn ?? 'Product';


    return (
       <main className="bg-green-50">
         <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-15 ">

            <div className="mb-8 bg-gray-50  p-2 border-b-2 border-green-500 ">
                <div className="my-3">
                    <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                        {sortedproducts[0]?.categoryIcon} {categoryName}
                    </h1>

                    <p className="mt-2 text-sm text-gray-500">
                        এই ক্যাটাগরির সব পণ্যের আজকের বাজারদর
                    </p>
                </div>
            </div>

                <div className="flex items-center justify-between gap-3">

                      <p className=" text-sm text-gray-600">মোট {products.length} টি পণ্য</p>

                   <div className="flex items-center gap-2">
                     <label htmlFor="price-sort" className="text-sm font-semibold text-gray-700">সাজান:</label>

                  

                    <div className="relative">
                    <select id="price-sort"
                     value={sortOrder} 
                    onChange={(e) => setSortOrder(e.target.value)}
                    className="cursor-pointer appearance-none rounded-lg border border-green-500 bg-white px-3 py-2.5 pl-3 pr-10 text-sm font-medium text-gray-700 outline-none transition hover:green-500 focus:ring-2 focus:ring-green-100 focus:border-green-500">
                        

                        <option value="default">ডিফল্ট</option>
                       

                        <option value="low-to-high">দাম: কম থেকে বেশি</option>

                        <option value="high-to-low">দাম: বেশি থেকে কম</option>
                
                    </select>
                    <IoCaretDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-green-700" size={16}/>
                    </div>
                   </div>
                </div>
            

            {sortedproducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        sortedproducts.map((product) => (
                             <Link key={product.slug} href={`/product/${product.slug}`}>
                            <div className="bg-gray-50 border-b border-green-500 mt-10" key={product.id}>
                                <div className="w-full rounded-6 p-2 shadow-sm">

                                    <div className="flex items-center gap-4">
                                        <div className="flex h-18 w-18 shrink-0 items-center justify-center rounded-[20px] bg-gray-100 text-4xl">
                                            {product.image}
                                        </div>

                                        <div>
                                            <h3 className="text-xl font-bold text-gray-800">
                                                {product.nameBn}
                                            </h3>
                                            <p className="mt-1 text-base text-gray-700">
                                                {product.unit}
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
                                            {product.change.dir === "up" ? (<div className="mb-1 flex shrink-0 items-center gap-2 rounded-full bg-gray-100 px-3 py-2 text-sm font-semibold text-red-600">
                                                <FaArrowUp />
                                                <span>{product.change.pct}</span>
                                                <FaPercentage />
                                            </div>) : (<div className="mb-1 flex shrink-0 items-center gap-2 rounded-full bg-gray-100 px-3 py-2 text-sm font-semibold text-green-600">
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

            ) : (
                <div className="rounded-2xl border border-dashed border-gray-300 py-16 text-center">

                    <h2 className="mt-4 text-lg font-bold text-gray-800">
                        Product Not Found!
                    </h2>

                    <p className="mt-2 text-sm text-gray-500">
                        This Category Not Product
                    </p>
                </div>
            )}
        </section>
         <Link href="/" className='m-10 flex items-center gap-2 text-green-500'>
                <h2>হোম</h2>
                <FaBackward />
            </Link>
       </main>
    );
};

export default CategoryPage;



// 'use client'
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { FaArrowDown, FaArrowUp, FaBackward, FaPercentage } from "react-icons/fa";

// interface Product {
//     id: number;
//     slug: string;
//     nameBn: string;
//     category: string;
//     categoryNameBn: string;
//     categoryIcon: string;
//     unit: string;
//     image: string;
//     today: number;
//     yesterday: number;
//     lastWeek: number;
//     lastMonth: number;
//     change: {
//         dir: "up" | "down" | "flat";
//         pct: number;
//     };
// }

// const CategoryPage = ({
//     params,
// }: {
//     params: Promise<{ slug: string }>;
// }) => {
//     const [slug, setSlug] = useState("");
//     const [products, setProducts] = useState<Product[]>([]);
//     const [sortOrder, setSortOrder] = useState("default");

//     useEffect(() => {
//         params.then(({ slug }) => setSlug(slug));
//     }, [params]);

//     useEffect(() => {
//         if (!slug) return;

//         const getProducts = async () => {
//             const res = await fetch(
//                 "https://openapi.programming-hero.com/api/bazardor/products"
//             );

//             const data: Product[] = await res.json();
//             setProducts(data.filter((product) => product.category === slug));
//         };

//         getProducts();
//     }, [slug]);

//     const sortedProducts = [...products].sort((a, b) => {
//         if (sortOrder === "low-to-high") {
//             return a.today - b.today;
//         }

//         if (sortOrder === "high-to-low") {
//             return b.today - a.today;
//         }

//         return 0;
//     });

//     const categoryName = products[0]?.categoryNameBn ?? "পণ্য";

//     return (
//         <main className="bg-green-50">
//             <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-15 ">

//                 <div className="mb-8 bg-gray-50  p-2 border-b-2 border-green-500 ">
//                     <div className="my-3">
//                         <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
//                             {sortedProducts[0]?.categoryIcon} {categoryName}
//                         </h1>

//                         <p className="mt-2 text-sm text-gray-500">
//                             এই ক্যাটাগরির সব পণ্যের আজকের বাজারদর
//                         </p>
//                     </div>
//                 </div>

//                 <div className="mb-6 flex items-center justify-between gap-3">
//                     <p className="text-sm text-gray-600">
//                         মোট {products.length} টি পণ্য
//                     </p>

//                     <select
//                         value={sortOrder}
//                         onChange={(e) => setSortOrder(e.target.value)}
//                         className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-green-600"
//                     >
//                         <option value="default">ডিফল্ট</option>
//                         <option value="low-to-high">দাম: কম থেকে বেশি</option>
//                         <option value="high-to-low">দাম: বেশি থেকে কম</option>
//                     </select>
//                 </div>

//                 {sortedProducts.length > 0 ? (
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
//                         {
//                             sortedProducts.map((product) => (
//                                 <Link key={product.slug} href={`/product/${product.slug}`}>
//                                     <div className="bg-gray-50 border-b border-green-500 mt-10" key={product.id}>
//                                         <div className="w-full rounded-6 p-2 shadow-sm">

//                                             <div className="flex items-center gap-4">
//                                                 <div className="flex h-18 w-18 shrink-0 items-center justify-center rounded-[20px] bg-gray-100 text-4xl">
//                                                     {product.image}
//                                                 </div>

//                                                 <div>
//                                                     <h3 className="text-xl font-bold text-gray-800">
//                                                         {product.nameBn}
//                                                     </h3>
//                                                     <p className="mt-1 text-base text-gray-700">
//                                                         {product.unit}
//                                                     </p>
//                                                 </div>
//                                             </div>


//                                             <div className="mt-5  items-end justify-between gap-3">
//                                                 <h3>আজকের দাম</h3>
//                                                 <div className='flex justify-between items-center gap-2'>
//                                                     <div className='flex items-center gap-2'>
//                                                         <p className="text-base text-gray-800 font-bold">
//                                                             {product.today}
//                                                         </p>
//                                                         <h3 className="mt-1  font-semibold text-sm">
//                                                             টাকা
//                                                         </h3>
//                                                     </div>
//                                                     {product.change.dir === "up" ? (<div className="mb-1 flex shrink-0 items-center gap-2 rounded-full bg-gray-100 px-3 py-2 text-sm font-semibold text-red-600">
//                                                         <FaArrowUp />
//                                                         <span>{product.change.pct}</span>
//                                                         <FaPercentage />
//                                                     </div>) : (<div className="mb-1 flex shrink-0 items-center gap-2 rounded-full bg-gray-100 px-3 py-2 text-sm font-semibold text-green-600">
//                                                         <FaArrowDown />
//                                                         <span>{product.change.pct}</span>
//                                                         <FaPercentage />
//                                                     </div>
//                                                     )}
//                                                 </div>


//                                             </div>
//                                         </div>
//                                     </div>
//                                 </Link>
//                             ))}
//                     </div>

//                 ) : (
//                     <div className="rounded-2xl border border-dashed border-gray-300 py-16 text-center">

//                         <h2 className="mt-4 text-lg font-bold text-gray-800">
//                             Product Not Found!
//                         </h2>

//                         <p className="mt-2 text-sm text-gray-500">
//                             This Category Not Product
//                         </p>
//                     </div>
//                 )}
//             </section>
//             <Link href="/" className='m-10 flex items-center gap-2 text-green-500'>
//                 <h2>হোম</h2>
//                 <FaBackward />
//             </Link>
//         </main>
//     );
// };

// export default CategoryPage;


