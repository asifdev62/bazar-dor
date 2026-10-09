import { Suspense } from "react";
import Banner from "./components/Banner";
import Marque from "./components/Marque";

export default function Home() {
  return (
    <div>
     <Suspense>
       <Marque />
      <Banner />
     </Suspense>
    </div>
  );
}
