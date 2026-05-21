import Link from "next/link";

export function DriverLoginForm() {
  return (
    <div className="bg-white border border-[#f0df9e] rounded-3xl p-6 shadow-[0_12px_32px_rgba(12,12,12,0.1)] max-[520px]:p-5 max-[520px]:rounded-[20px] grid gap-[18px]">
      <h1>Driver Login</h1>
      <input className="w-full min-h-[54px] border border-[#eadfbb] rounded-[10px] p-[10px] bg-[rgba(255,255,255,0.2)] text-[#080808] mt-[5px] outline-none focus:border-[#ffd232] focus:shadow-[0_0_0_3px_rgba(248,189,16,0.22)] max-[520px]:w-full" type="email" placeholder="Driver email" />
      <input className="w-full min-h-[54px] border border-[#eadfbb] rounded-[10px] p-[10px] bg-[rgba(255,255,255,0.2)] text-[#080808] mt-[5px] outline-none focus:border-[#ffd232] focus:shadow-[0_0_0_3px_rgba(248,189,16,0.22)] max-[520px]:w-full" type="password" placeholder="Password" />
      <button className="inline-flex items-center justify-center gap-2 min-h-[52px] border-0 rounded-[10px] p-[10px] bg-[#F2B300] text-[#0a0101] font-bold cursor-pointer mt-[10px] transition duration-300 shadow-[0_8px_18px_rgba(248,189,16,0.28)] max-[520px]:w-full disabled:cursor-default disabled:opacity-70">Login as Driver</button>
      <p className="text-sm text-[rgba(255,255,255,0.7)] mb-[15px]">
        New driver? <Link href="/signin?mode=signup&role=driver">Create driver account</Link>
      </p>
    </div>
  );
}
