'use client'
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaUser } from 'react-icons/fa';

const UserInfo = () => {


    const { data: session } = authClient.useSession()

    const user = session?.user
    console.log(user)
    return (
        <div>
            {
                user ? (
                     <Link href={"/components/userProfile"}>
                        <div className='flex items-center gap-3'>
                        <div className="avatar">
                            <div className="w-10 rounded-full ring-2 ring-green-500 ring-offset-2">
                                {user.image ? (
                                    <Image
                                        src={user.image}
                                        alt="Profile"
                                        width={96}
                                        height={96}
                                        className="h-full w-full rounded-full object-cover"
                                    />
                                ) : (
                                    <div className="flex h-28 w-28 items-center justify-center rounded-full bg-green-100">
                                        <FaUser className="text-4xl text-green-700" />
                                    </div>
                                )}
                                   </div>
                                </div>

                               <div>
                                 <h2 className="text-sm font-semibold text-gray-800">
                                    {user.name}
                                </h2>
                                <p className='text-xs text-gray-600'>ব্যবহারকারীর প্রোফাইল</p>
                               </div>
                                </div>
                                </Link>
                           
                            )  : (

                            <div className="flex shrink-0 items-center gap-1 sm:gap-2">
                                <Link href="/signIn" className="px-2 py-1 rounded-sm text-sm sm:px-3 sm:py-2">সাইন ইন</Link>

                                <Link href="/signUp" className="bg-green-700 text-white px-2 py-1 rounded-sm text-sm sm:px-3 sm:py-2">সাইন আপ</Link>

                            </div>
                )}
                        </div>
                        );
};
                        export default UserInfo;






// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { FaUser, FaChevronDown } from "react-icons/fa";
// import { FiLogOut } from "react-icons/fi";
// import { signOut } from "@/lib/auth-client";
// import { useRouter } from "next/navigation";

// interface User {
//   name: string;
//   email: string;
//   image?: string | null;
// }

// interface UserInfoProps {
//   user: User;
// }

// const UserInfo = ({ user }: UserInfoProps) => {
//   const [open, setOpen] = useState(false);
//   const router = useRouter();

//   const handleSignOut = async () => {
//     await signOut();
//     setOpen(false);
//     router.push("/sign-in");
//     router.refresh();
//   };

//   return (
//     <div className="relative">
//       {/* Profile Button */}
//       <button
//         onClick={() => setOpen(!open)}
//         className="flex items-center gap-2 rounded-lg px-2 py-1.5 hover:bg-gray-100"
//       >
//         <div className="h-9 w-9 overflow-hidden rounded-full ring-2 ring-green-500 ring-offset-2">
//           {user.image ? (
//             <Image
//               src={user.image}
//               alt="Profile"
//               width={36}
//               height={36}
//               className="h-full w-full object-cover"
//             />
//           ) : (
//             <div className="flex h-full w-full items-center justify-center bg-green-100">
//               <FaUser className="text-green-700" />
//             </div>
//           )}
//         </div>

//         <span className="max-w-24 truncate text-sm font-medium text-gray-800">
//           {user.name}
//         </span>

//         <FaChevronDown
//           className={`text-xs text-gray-500 transition-transform ${
//             open ? "rotate-180" : ""
//           }`}
//         />
//       </button>

//       {/* Dropdown Card */}
//       {open && (
//         <>
//           <button
//             aria-label="Close profile menu"
//             onClick={() => setOpen(false)}
//             className="fixed inset-0 z-40 cursor-default"
//           />

//           <div className="absolute right-0 top-full z-50 mt-3 w-72 rounded-2xl border border-gray-100 bg-white p-5 shadow-xl">
//             {/* User Information */}
//             <div className="border-b border-gray-100 pb-4">
//               <h2 className="truncate text-base font-semibold text-gray-800">
//                 {user.name}
//               </h2>

//               <p className="mt-1 truncate text-sm text-gray-500">
//                 {user.email}
//               </p>
//             </div>

//             {/* Profile Link */}
//             <Link
//               href="/profile"
//               onClick={() => setOpen(false)}
//               className="mt-3 flex items-center gap-3 rounded-lg px-1 py-2.5 text-sm text-gray-700 transition hover:bg-green-50 hover:text-green-700"
//             >
//               <FaUser className="text-green-600" />
//               আমার প্রোফাইল
//             </Link>

//             {/* Sign Out */}
//             <button
//               onClick={handleSignOut}
//               className="flex w-full items-center gap-3 rounded-lg px-1 py-2.5 text-sm text-red-500 transition hover:bg-red-50"
//             >
//               <FiLogOut size={17} />
//               সাইন আউট
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default UserInfo;