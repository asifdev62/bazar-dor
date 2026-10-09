import { Suspense } from "react";
import Banner from "./components/Banner";
import Marque from "./components/Marque";
import PriceUpProduct from "./components/products/PriceUpProduct";
import PriceDownProduct from "./components/products/priceDownProduct";
import AllProduct from "./components/products/AllProduct";

export default function Home() {
  return (
    <div className="bg-green-50">
     <Suspense>
       <Marque />
      <Banner />
      <PriceUpProduct />
      <PriceDownProduct />
      <AllProduct />
     </Suspense>
    </div>
  );
}
