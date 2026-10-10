import { Suspense } from "react";
import Banner from "./components/Banner";
import Marque from "./components/Marque";
import PriceUpProduct from "./components/products/PriceUpProduct";
import PriceDownProduct from "./components/products/priceDownProduct";
import AllProduct from "./components/products/AllProduct";

export default function Home() {
  return (
   <main className="min-h-screen w-full min-w-0 overflow-x-clip bg-green-50">
     <div className="bg-green-50">

      <section className="w-full main-w-0">
            <Suspense>
               <Marque />
            </Suspense>
      </section>

      <section className="w-full min-w-0 px-3 py-4 sm:px-5 sm:py-6 md:px-6 lg:px-10 xl:px-20">
        <Suspense>
           <Banner />
        </Suspense>
      </section>

    <section className="w-full min-w-0 px-3 py-4 sm:px-5 sm:py-6 md:px-6 lg:px-10 xl:px-20">
       <Suspense>
      <PriceUpProduct />
      <PriceDownProduct />
      <AllProduct />
     </Suspense>
    </section>
    </div>
   </main>
  );
}




