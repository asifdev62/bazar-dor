
'use client'
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaEnvelope, FaLock, } from "react-icons/fa";
import { LiaSignInAltSolid } from "react-icons/lia";
import { toast } from "react-toastify";

const SignUp = () => {
    const router = useRouter()

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()

        const formData = new FormData(e.currentTarget)

        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        console.log({ email, password })

        const user = Object.fromEntries(formData.entries())
        console.log(user)

        const { data, error } = await authClient.signIn.email({
            email: email,
            password: password
        })

        if (error) {
            console.log(error)
            toast.error(error.message || "সাইন ইন ব্যর্থ হয়েছে!")
            return;
        }

        if (data) {
            console.log(data)
            router.push("/")
            toast.success("সাইন ইন সফল হয়েছে!")
        };
    }

        return (
            <main className="flex min-h-screen items-center justify-center bg-green-50 px-5 py-10">
                <div className="w-full max-w-md">


                    <div className="rounded-3xl border border-green-100 bg-white p-5 shadow-xl shadow-green-900/10 sm:p-8">

                        {/* Header */}
                        <div className="mb-7 text-center">
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-600 text-3xl">
                                <Image src="/logo-icon.png"
                                    alt="logo"
                                    width={30}
                                    height={30}></Image>
                            </div>

                            <h2 className="text-2xl font-extrabold text-gray-800 sm:text-3xl">
                                সাইন ইন
                            </h2>

                            <p className="mt-2 text-sm leading-6 text-gray-500">
                                বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
                            </p>
                        </div>

                        <form onSubmit={onSubmit} className="space-y-4">


                            {/* Email */}
                            <div>
                                <label className="mb-2 block text-sm font-semibold text-gray-700">
                                    ইমেইল অ্যাড্রেস
                                </label>

                                <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 transition focus-within:border-green-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-green-100">
                                    <FaEnvelope className="shrink-0 text-gray-400" />

                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="example@email.com"
                                        autoComplete="email"
                                        required
                                        className="w-full bg-transparent py-3 text-sm text-gray-800 outline-none placeholder:text-gray-400"
                                    />
                                </div>
                            </div>



                            {/* Password */}
                            <div>
                                <label className="mb-2 block text-sm font-semibold text-gray-700">
                                    পাসওয়ার্ড
                                </label>

                                <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 transition focus-within:border-green-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-green-100">
                                    <FaLock className="shrink-0 text-gray-400" />

                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="কমপক্ষে ৮ অক্ষরের পাসওয়ার্ড"
                                        autoComplete="new-password"
                                        minLength={8}
                                        required
                                        className="w-full bg-transparent py-3 text-sm text-gray-800 outline-none placeholder:text-gray-400"
                                    />
                                </div>
                            </div>

                            {/* Submit */}

                            <button
                                type="submit"
                                className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 py-3.5 font-bold text-white shadow-lg shadow-green-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-700 hover:shadow-xl active:translate-y-0"
                            >
                                সাইন ইন
                                <LiaSignInAltSolid className="transition-transform duration-300 group-hover:translate-x-1 text-xl" />
                            </button>


                        </form>

                        {/* Footer */}
                        <p className="mt-6 text-center text-sm text-gray-500">
                            অ্যাকাউন্ট নেই?{" "}
                            <a
                                href="/login"
                                className="font-bold text-green-700 transition hover:text-green-900 hover:underline"
                            >
                                সাইন আপ করুন
                            </a>
                        </p>
                    </div>

                    <p className="mt-5 text-center text-xs text-gray-400">
                        আপনার তথ্য নিরাপদে সংরক্ষণ করা হবে।
                    </p>

                </div>
            </main>

        );
    };

    export default SignUp;




