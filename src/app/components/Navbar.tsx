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
        <nav className='w-full border-y border-gray-200 max-w-full overflow-x-auto'>
            <div className="flex w-max min-w-full items-center gap-4 px-3 py-1 sm:gap-6 sm:px-4">
            {
                data.map(item => <Link key={item.id} href={`/category/${item.slug}`} className='flex shrink-0 items-center gap-1 whitespace-nowrap text-sm font-medium text-gray-700 transition hover:text-green-500 sm:text-base py-1'>
                    <span>{item.icon}</span>
                    <span>{item.nameBn}</span>

                    </Link>)
            }
        </div>
        </nav>
    );
};

export default Navbar;