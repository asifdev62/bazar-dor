'use client'
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const UserInfo = () => {
    const handleSignOut =async ()=>{
        await authClient.signOut
    }
    

    const { data: session } = authClient.useSession()

    const user = session?.user
    console.log(user)
    return (
        <div>
            {
                user ? (<div className="flex items-center gap-3">
          <h2 className="text-sm font-semibold text-gray-800">
            {user.name}
          </h2>

          {user.image && (
            <div className="avatar">
              <div className="w-10 overflow-hidden rounded-full">
                <Image
                  src={user.image}
                  alt={user.name || "User photo"}
                  width={40}
                  height={40}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          )}
          </div>
                    ) : (

                    <div className="flex shrink-0 items-center gap-1 sm:gap-2">
                        <Link href="/signIn" className="px-2 py-1 rounded-sm text-sm sm:px-3 sm:py-2">সাইন ইন</Link>

                        <Link href="/signUp" className="bg-green-700 text-white px-2 py-1 rounded-sm text-sm sm:px-3 sm:py-2">সাইন আপ</Link>

                    </div>
                    )}
                </div>
            );
};
export default UserInfo;