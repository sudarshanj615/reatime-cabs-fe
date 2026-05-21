"use client";

import Image from "next/image";
import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="py-[72px] bg-[url('/logo/signinbg.jpg')] bg-cover bg-center bg-no-repeat max-[760px]:py-12">
      <section className="w-[min(1120px,calc(100%-40px))] mx-auto grid grid-cols-[1.05fr_0.95fr] gap-14 items-center max-[1100px]:grid-cols-1 max-[760px]:grid-cols-1 max-[760px]:gap-8 max-[520px]:w-[min(100%-24px,100%)]">

        {/* LEFT SIDE */}
        <div className="grid gap-5 [&>h1]:m-0 [&>h1]:text-[46px] [&>h1]:leading-[1.08] [&>h1]:font-bold max-[760px]:[&>h1]:text-[34px] [&>p]:max-w-[560px] [&>p]:m-0 [&>p]:text-[#5d5d5d] [&>p]:text-lg [&>p]:leading-[1.7] [&>p]:font-medium max-[520px]:[&>p]:text-base max-[520px]:[&>p]:leading-[1.6]">
  <h1>Welcome to RealTimeCabs</h1>
  <p>Book rides or drive with us</p>
</div>

        {/* RIGHT CARD */}
        <div className="grid gap-5 border border-[#f0df9e] bg-[rgba(255,255,255,0.1)] backdrop-blur-none rounded-[15px] p-[30px] text-white flex flex-col min-w-[350px] shadow-[0_18px_50px_rgba(15,15,15,0.12)] [&>h2]:m-0 [&>h2]:text-[28px] [&>p]:m-0 max-[760px]:p-6 max-[520px]:p-5 max-[520px]:rounded-[22px]">

          {/* CENTERED LOGO */}
          <div className="flex justify-center">
            <Link href="/">
              <Image
                src="/logo/cablogosvg.svg"
                alt="Logo"
                width={160}
                height={80}
                priority
                className="mb-5 cursor-pointer object-contain"
              />
            </Link>
          </div>

          {children}
        </div>

      </section>
    </div>
  );
}
