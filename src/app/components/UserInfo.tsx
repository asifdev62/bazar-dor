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
                        <div className='flex items-center gap-4'>
                        <div className="avatar">
                            <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
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

                                <h2 className="text-sm font-semibold text-gray-800">
                                    {user.name}
                                </h2>
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