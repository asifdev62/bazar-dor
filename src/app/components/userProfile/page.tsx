
"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ImArrowLeft, ImCross } from "react-icons/im";
import { toast } from "react-toastify";

const UserProfilePage = () => {
    const router = useRouter()
    const { data: session } = authClient.useSession();

    const user = session?.user;

    const [isEditOpen, setIsEditOpen] = useState(false);
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [loading, setLoading] = useState(false);

    if (!user) {
        return (
            <div className="min-h-[70vh] flex items-center justify-center px-4">
                <div className="text-center">
                    <h2 className="text-lg sm:text-xl font-semibold">
                        Please sign in first
                    </h2>
                </div>
            </div>
        );
    }

    const openEditModal = () => {
        setName(user.name || "");
        setImage(user.image || "");
        setIsEditOpen(true);
    };

    const handleUpdateProfile = async () => {
        setLoading(true);

        try {
            const { error } = await authClient.updateUser({
                name,
                image,
            });

            if (error) {
                toast.error("Failed to update profile.");
                console.log(error);
                return;
            }

            toast.success("Profile updated successfully!");
            setIsEditOpen(false);

        } catch (error) {
            console.log(error);
            toast.error("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleSignOut = async () => {
        await authClient.signOut();

        router.push("/signIn");
        router.refresh();
    };

    return (
       <section className="bg-green-50">
        <Link href={"/"} className="flex items-center gap-2 mx-10 my-5">
               <ImArrowLeft className="text-green-700" />
               <h2 className="text-green-700 font-bold">Home</h2>
        </Link>
       
         <div className="min-h-[80vh] flex items-center justify-center px-3 sm:px-5 md:px-6 py-10 sm:py-10">
            

            <div className="w-full max-w-md sm:max-w-lg bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 overflow-hidden">

              
                <div className="bg-green-700 text-white px-4 sm:px-6 py-6 sm:py-8 text-center">

                    <h1 className="text-xl sm:text-2xl font-bold mb-5 sm:mb-6">
                        Profile
                    </h1>

                
                    <div className="flex justify-center">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full ring-4 ring-white overflow-hidden">
                            <Image
                                src={user.image || "/default-avatar.png"}
                                alt={user.name || "User"}
                                width={96}
                                height={96}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                 
                    <h2 className="text-lg sm:text-xl font-semibold mt-4 sm:mt-5 wrap-break-words">
                        {user.name}
                    </h2>

                  
                    <p className="text-xs sm:text-sm text-red-100 mt-1 break-all">
                        {user.email}
                    </p>

                   
                    <button
                        onClick={openEditModal}
                        className="mt-5 bg-white text-green-700 px-4 sm:px-5 py-2 rounded-lg font-semibold text-xs sm:text-sm hover:bg-gray-100 transition"
                    >
                        প্রোফাইল সম্পাদনা করুন
                    </button>
                </div>

                <div className="p-4 sm:p-6">

                    <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-5">
                        অ্যাকাউন্টের তথ্য
                    </h3>

                  
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4 border-b border-gray-300 py-3 sm:py-4">
                        <span className="text-sm text-gray-500 shrink-0">
                            নাম
                        </span>

                        <span className="font-medium text-sm sm:text-base text-left sm:text-right wrap-break-words">
                            {user.name}
                        </span>
                    </div>

                    
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4 border-b border-gray-300 py-3 sm:py-4">
                        <span className="text-sm text-gray-500 shrink-0">
                            ইমেইল
                        </span>

                        <span className="font-medium text-sm text-left sm:text-right break-all">
                            {user.email}
                        </span>
                    </div>

                    
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4 border-b border-gray-300 py-3 sm:py-4">
                        <span className="text-sm text-gray-500 shrink-0">
                           অ্যাকাউন্টের ধরন
                        </span>

                        <span className="font-medium text-sm sm:text-base">
                           ইমেল / গুগল
                        </span>
                    </div>

                  
                    <button
                        onClick={handleSignOut}
                        className="w-full mt-5 sm:mt-6 bg-green-700 hover:bg-green-800 text-white py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition"
                    >
                        সাইন আউট
                    </button>
                </div>
            </div>

          
            {isEditOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-3 sm:px-4 py-4 overflow-y-auto">

                    <div className="bg-white w-full max-w-md rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl my-auto">

                      
                        <div className="flex justify-between items-center gap-4 mb-5 sm:mb-6">

                            <h2 className="text-lg sm:text-xl font-bold">
                                প্রোফাইল সম্পাদনা করুন
                            </h2>

                            <button
                                onClick={() => setIsEditOpen(false)}
                                className="text-lg sm:text-xl text-green-700 hover:text-red-600 transition shrink-0"
                            >
                                <ImCross />
                            </button>
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">
                                নাম
                            </label>

                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2.5 text-sm sm:text-base outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600"
                            />
                        </div>

                       
                        <div className="mb-5 sm:mb-6">
                            <label className="block text-sm font-medium mb-2">
                                প্রোফাইল ছবির URL
                            </label>

                            <input
                                type="text"
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                                className="w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2.5 text-sm sm:text-base outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600"
                                placeholder="https://example.com/image.jpg"
                            />
                        </div>

                      
                        <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-2 sm:gap-3">

                            <button
                                onClick={() => setIsEditOpen(false)}
                                className="w-full sm:w-auto px-5 py-2.5 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-100 transition"
                            >
                                বাতিল
                            </button>

                            <button
                                onClick={handleUpdateProfile}
                                disabled={loading}
                                className="w-full sm:w-auto px-5 py-2.5 bg-green-700 hover:bg-green-800 disabled:bg-red-400 text-white rounded-lg text-sm font-medium transition"
                            >
                                {loading
                                    ? "Updating..."
                                    : "পরিবর্তন সংরক্ষণ করুন"}
                            </button>

                        </div>
                    </div>
                </div>
            )}
        </div>
       </section>
    );
};

export default UserProfilePage;