import { Suspense } from "react";
import Banner from "./components/Banner";
import Marque from "./components/Marque";
import PriceUpProduct from "./components/products/PriceUpProduct";

export default function Home() {
  return (
    <div>
     <Suspense>
       <Marque />
      <Banner />
      <PriceUpProduct />
     </Suspense>
    </div>
  );
}
