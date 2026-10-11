import Link from 'next/link';

interface Items{
    id: string,
    slug: string,
    nameBn: string,
    icon:string
}
const Navbar =async () => {

    const res = await fetch("https://openapi.programming-hero.com/api/bazardor/categories")


    const data:Items[] = await res.json();
    console.log(data)

    return (
        <nav className='w-full border-y border-gray-200 '>
            <div className="mx-auto flex max-w-7xl items-center gap-4 overflow-x-auto
                   px-4 py-1 sm:gap-6 sm:px-6 lg:justify-center lg:px-8
                   [scrollbar-none] [&::-webkit-scrollbar]:hidden">
            {
                data.map(item => <Link key={item.id} href={`/category/${item.slug}`} className='flex shrink-0 items-center gap-1 whitespace-nowrap py-1
                       text-sm font-medium text-gray-700 transition
                       hover:text-green-500 sm:text-base'>
                    <span>{item.icon}</span>
                    <span>{item.nameBn}</span>

                    </Link>)
            }
        </div>
        </nav>
    );
};

export default Navbar;