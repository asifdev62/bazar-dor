
import MarqueeText from "react-marquee-text"
import { TbCurrencyTaka } from "react-icons/tb";
import {
  FiTrendingUp,
  FiTrendingDown,
  FiMinus,
} from "react-icons/fi";

interface Headline{
    nameBn:string,
    id:string,
    today:string,
    unit:string,
    category:string,
    change:{
         pct: string,
          dir:string
    }
         
}
const Marque = async () => {

    const res = await fetch("https://api.api-store.workers.dev/api/bazardor/products")

    const headlines:Headline[] = await res.json();
    console.log(headlines)
    return (
        <div className=" w-full overflow-hidden border-y border-gray-200 bg-white">

            <MarqueeText direction="right" duration={10}>
                <div className="flex min-h-10 items-center gap-3 px-3 sm:gap-6 sm:px-4 lg:gap-8">
                    {
                        headlines.map((headline) => {
                            const isUp = headline.change.dir === "up";
                            const isDown = headline.change.dir === "down";

                            return (
                        <div key={headline.id}
                        className="flex shrink-0 items-center gap-1.5 whitespace-nowrap text-xs sm:gap-2 sm:text-sm">
                            
                            <span className="font-semibold text-gray-800">{headline.nameBn}</span>

                             <span className="flex items-center font-bold text-gray-900">
                                    <TbCurrencyTaka
                                     className="text-base sm:text-lg" />
                                    {headline.today}

                                    <span className="ml-1 text-[10px] font-normal text-gray-500 sm:text-xs">
                                        /{headline.unit}
                                    </span>
                                </span>

                            <span className={`flex items-center gap-1 font-semibold ${
                                isUp ? "text-green-600":
                                isDown ? "text-red-600" :
                                "text-gray-600"

                            }`}>

                                {isUp ? (
                                        <FiTrendingUp
                                        size={15} />
                                    ) : isDown ? (
                                        <FiTrendingDown size={15} />
                                    ) : (
                                        <FiMinus size={15} />
                                    )}

                                    {headline.change.pct}%
                                </span>
                            <span className="text-gray-300">•</span>

                        </div>
                )
                })}
        </div>
        </MarqueeText >
        </div >
    );
};

export default Marque;



