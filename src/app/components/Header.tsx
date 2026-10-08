
import Image from "next/image";


const Header = () => {

  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full"
  })

  return (
    <header className="w-full px-4 sm:px-6 lg:px-10 xl:px-20">

      <div className="flex items-center justify-between gap-3 py-4">

        <div className="flex min-w-0 items-center gap-2">

          <div className="bg-green-700 w-10 h-10 rounded-xl flex shrink-0 items-center justify-center sm:h-12 sm:w-12 sm:rounded-2xl">
            <Image
              src="/logo-icon.png"
              alt="Logo"
              width={20}
              height={20}
            />
          </div>

          <div className="min-w-0">
            <h2 className="text-base font-bold sm:text-xl ">বাজার দর</h2>

            <h2 className="text-sm text-gray-600 sm:text-sm">{date}</h2>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-1 sm:gap-2">
          <button className="px-2 py-1 rounded-sm text-sm sm:px-3 sm:py-2">সাইন ইন</button>

          <button className="bg-green-700 text-white px-2 py-1 rounded-sm text-sm sm:px-3 sm:py-2">সাইন আপ</button>

        </div>
      </div>
    </header>
  );
};

export default Header;