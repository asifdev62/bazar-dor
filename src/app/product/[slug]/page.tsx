

import Link from "next/link";
import { FaArrowDown, FaArrowRight, FaArrowUp, FaPercentage } from "react-icons/fa";

export const instant = false;

interface Market {
    marketName: string;
    division: string;
    min: number;
    max: number;
    avg: number;
}

interface Product {
    id: number;
    slug: string;
    nameBn: string;
    category: string;
    categoryNameBn: string;
    categoryIcon: string;
    image: string;
    unit: string;
    today: number;
    yesterday: number;
    lastWeek: number;
    lastMonth: number;
    change: {
        dir: string;
        pct: number;
    };
    markets?: Market[];
}

const ProductDetails = async ({
    params,
}: {
    params: Promise<{ slug: string }>;
}) => {
    const { slug } = await params;

    const res = await fetch(
        "https://api.abcz.workers.dev/api/bazardor/products"
    );

    if (!res.ok) {
        throw new Error("পণ্যের তথ্য লোড করা যায়নি");
    }

    const products: Product[] = await res.json();

    const product = products.find((item) => item.slug === slug);

    if (!product) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-white p-5">
                <div className="rounded-xl bg-white p-8 text-center shadow-sm">
                    <h1 className="text-xl font-bold text-gray-800">
                        পণ্য পাওয়া যায়নি!
                    </h1>

                    <Link
                        href="/"
                        className="mt-4 inline-block text-sm text-green-700 hover:underline"
                    >
                        ← হোম পেজে ফিরে যাও
                    </Link>
                </div>
            </main>
        );
    }

    const priceChange = product.today - product.yesterday;

    return (
        <main className="min-h-screen bg-green-50 px-3 py-6 text-gray-800 sm:px-6 lg:px-10">
            <div className="mx-auto max-w-5xl">

            
                <div className="mb-5 flex flex-wrap items-center gap-2 text-xs text-gray-500">
                    <Link href="/" className="hover:text-green-700">
                        হোম
                    </Link>

                    <FaArrowRight />


                    <Link
                        href={`/category/${product.category}`}
                        className="hover:text-green-700"
                    >
                        {product.categoryNameBn}
                    </Link>

                    <FaArrowRight />


                    <span className="text-gray-700">
                        {product.nameBn}
                    </span>
                </div>


                <section className="mb-4 flex flex-col justify-between gap-4 rounded-xl border border-gray-300 bg-white/80 p-4 sm:flex-row sm:items-center sm:p-5 b">
                    <div className="flex items-center gap-4">
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-white text-3xl">
                            {product.image || product.categoryIcon}
                        </div>

                        <div>
                            <h1 className="text-xl font-bold sm:text-2xl">
                                {product.nameBn}
                            </h1>

                            <p className="mt-1 text-xs text-gray-500">
                                প্রতি {product.unit} · {product.categoryNameBn}
                            </p>

                            <p
                                className={`mt-2 text-xs font-medium ${priceChange > 0
                                    ? "text-red-500"
                                    : priceChange < 0
                                        ? "text-green-600"
                                        : "text-gray-500"
                                    }`}
                            >
                                {priceChange > 0
                                    ? `গতকালের তুলনায় আজ দাম বেড়েছে ৳${priceChange}`
                                    : priceChange < 0
                                        ? `গতকালের তুলনায় আজ দাম কমেছে ৳${Math.abs(priceChange)}`
                                        : "গতকালের তুলনায় আজ দাম অপরিবর্তিত"}
                            </p>
                        </div>
                    </div>


                    <div className="rounded-xl bg-green-50  px-6 py-3 text-center sm:min-w-28 border border-gray-200">
                        <p className="text-xs text-gray-500">
                            আজকের দাম
                        </p>

                        <p className="text-2xl font-bold">
                            ৳{product.today}
                        </p>

                        <p className="text-xs text-gray-500">
                            টাকা / {product.unit}
                        </p>


                        <div className='flex justify-between items-center gap-2 '>
                            <div className='flex items-center'>
                            </div>
                            {product.change.dir === "up" ? (<div className="mb-1 flex shrink-0 items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-red-600">
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
                </section>

                <section className="mb-4 rounded-xl border border-gray-300 bg-white/80 p-4 sm:p-5">
                    <h2 className="mb-4 text-sm font-bold">
                        দামের সারসংক্ষেপ
                    </h2>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">

                        
                        <div className="rounded-xl border border-gray-300 p-4">
                            <p className="text-xs text-gray-500">
                                গতকালের দাম
                            </p>

                            <p className="mt-1 text-xl font-bold text-green-600">
                                ৳{product.yesterday}
                            </p>

                            <p className="text-xs text-gray-500">
                                প্রতি {product.unit}
                            </p>
                        </div>

                        
                        <div className="rounded-xl border border-gray-300 p-4">
                            <p className="text-xs text-gray-500">
                                গত সপ্তাহের দাম
                            </p>

                            <p className="mt-1 text-xl font-bold text-red-500">
                                ৳{product.lastWeek}
                            </p>

                            <p className="text-xs text-gray-500">
                                প্রতি {product.unit}
                            </p>
                        </div>

                        <div className="rounded-xl border border-gray-300 p-4">
                            <p className="text-xs text-gray-500">
                                গত মাসের দাম
                            </p>

                            <p className="mt-1 text-xl font-bold">
                                ৳{product.lastMonth}
                            </p>

                            <p className="text-xs text-gray-500">
                                প্রতি {product.unit}
                            </p>
                        </div>

                    </div>
                </section>

                
                <section className="rounded-xl border border-[#e2ebe3] bg-white/80 p-3 sm:p-5">
                    <h2 className="mb-4 text-sm font-bold">
                        বাজারভিত্তিক এলাকাভেদে দাম
                    </h2>

                    {product.markets && product.markets.length > 0 ? (
                        <div className="overflow-x-auto">
                            <table className="w-full min-w-140 border-collapse text-left text-xs">

                                <thead>
                                    <tr className="border-y border-[#e5ebe5] text-gray-500">
                                        <th className="px-3 py-3 font-medium">
                                            বাজার
                                        </th>

                                        <th className="px-3 py-3 font-medium">
                                            বিভাগ
                                        </th>

                                        <th className="px-3 py-3 text-right font-medium">
                                            সর্বনিম্ন
                                        </th>

                                        <th className="px-3 py-3 text-right font-medium">
                                            সর্বোচ্চ
                                        </th>

                                        <th className="px-3 py-3 text-right font-medium">
                                            গড়
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {product.markets.map((market, index) => (
                                        <tr
                                            key={`${market.marketName}-${index}`}
                                            className="border-b border-gray-200 even:bg-[#f0f5f0] hover:bg-green-50"
                                        >
                                            <td className="px-3 py-3 font-medium">
                                                {market.marketName}
                                            </td>

                                            <td className="px-3 py-3">
                                                {market.division}
                                            </td>

                                            <td className="px-3 py-3 text-right">
                                                ৳{market.min}
                                            </td>

                                            <td className="px-3 py-3 text-right">
                                                ৳{market.max}
                                            </td>

                                            <td className="px-3 py-3 text-right font-semibold">
                                                ৳{market.avg}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>

                            </table>
                        </div>
                    ) : (
                        <p className="rounded-lg bg-[#f0f5f0] p-4 text-sm text-gray-500">
                            এই পণ্যের বাজারভিত্তিক দামের তথ্য পাওয়া যায়নি।
                        </p>
                    )}
                </section>

                {/* Back Button */}
                <div className="mt-5">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 rounded-lg border border-[#d5e2d6] bg-white px-4 py-2 text-sm font-medium transition hover:bg-green-50"
                    >
                        ← আরও পণ্য দেখুন
                    </Link>
                </div>

            </div >
        </main >
    );
};

export default ProductDetails;


