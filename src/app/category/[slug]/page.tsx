export const instant = false;
import { FaArrowDown, FaArrowUp, FaPercentage } from "react-icons/fa";

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

const CategoryPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  const res = await fetch(
    "https://api.abcz.workers.dev/api/bazardor/products",
    
    {
        next: {revalidate: 300}
    }
  );

  const products: Product[] = await res.json();


  const filteredProducts = products.filter(
    (product) => product.category === slug
  );

  const categoryName = filteredProducts[0]?.categoryNameBn ?? "Product"

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
    
      <div className="mb-8 bg-green-50 rounded-2xl p-2 border-b-2 border-green-500 rounded-b-none">
        <div className="my-5-2">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
          {filteredProducts[0]?.categoryIcon} {categoryName}
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          এই ক্যাটাগরির সব পণ্যের আজকের বাজারদর
        </p>
        </div>
      </div>

  
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                filteredProducts.map((product)=>(
                        <div className="bg-gray-50 border-b border-green-500" key={product.id}>
                               <div className="w-full rounded-6 p-2 shadow-sm">
                                  
                                   <div className="flex items-center gap-4">
                                       <div className="flex h-18 w-18 shrink-0 items-center justify-center rounded-[20px] bg-white text-4xl">
                                           {product.image}
                                       </div>
       
                                       <div>
                                           <h3 className="text-xl font-bold text-gray-800">
                                               {product.category}
                                           </h3>
                                           <p className="mt-1 text-base text-gray-700">
                                               {product.unit}
                                           </p>
                                       </div>
                                   </div>
       
                                   
                                   <div className="mt-5  items-end justify-between gap-3">
                                       <h3>Today price</h3>
                                       <div className='flex justify-between items-center gap-2'>
                                           <div className='flex items-center gap-2'>
                                                 <p className="text-base text-gray-800 font-bold">
                                            {product.today}
                                           </p>
                                           <h3 className="mt-1  font-semibold text-sm[#202820]">
                                               TK
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
  );
};

export default CategoryPage;


