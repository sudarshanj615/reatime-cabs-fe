export function DriverRegisterForm() {
  return (
    <div className="bg-white border border-[#f0df9e] rounded-3xl p-6 shadow-[0_12px_32px_rgba(12,12,12,0.1)] max-[520px]:p-5 max-[520px]:rounded-[20px] grid gap-[18px]">
      <h1>Driver Registration</h1>
      <input className="w-full min-h-[54px] border border-[#eadfbb] rounded-[10px] p-[10px] bg-[rgba(255,255,255,0.2)] text-[#080808] mt-[5px] outline-none focus:border-[#ffd232] focus:shadow-[0_0_0_3px_rgba(248,189,16,0.22)] max-[520px]:w-full" placeholder="Driver name" />
      <input className="w-full min-h-[54px] border border-[#eadfbb] rounded-[10px] p-[10px] bg-[rgba(255,255,255,0.2)] text-[#080808] mt-[5px] outline-none focus:border-[#ffd232] focus:shadow-[0_0_0_3px_rgba(248,189,16,0.22)] max-[520px]:w-full" type="email" placeholder="Email address" />
      <input className="w-full min-h-[54px] border border-[#eadfbb] rounded-[10px] p-[10px] bg-[rgba(255,255,255,0.2)] text-[#080808] mt-[5px] outline-none focus:border-[#ffd232] focus:shadow-[0_0_0_3px_rgba(248,189,16,0.22)] max-[520px]:w-full" placeholder="Phone number" />
      <input className="w-full min-h-[54px] border border-[#eadfbb] rounded-[10px] p-[10px] bg-[rgba(255,255,255,0.2)] text-[#080808] mt-[5px] outline-none focus:border-[#ffd232] focus:shadow-[0_0_0_3px_rgba(248,189,16,0.22)] max-[520px]:w-full" placeholder="Vehicle number" />
      <select className="w-full min-h-[54px] border border-[#eadfbb] rounded-[10px] p-[10px] bg-[rgba(255,255,255,0.2)] text-[#080808] mt-[5px] outline-none focus:border-[#ffd232] focus:shadow-[0_0_0_3px_rgba(248,189,16,0.22)] max-[520px]:w-full" defaultValue="">
        <option value="" disabled>
          Vehicle type
        </option>
        <option>Mini</option>
        <option>Auto</option>
        <option>Bike</option>
        <option>Scooty</option>
        <option>SUV</option>
      </select>
      <input className="w-full min-h-[54px] border border-[#eadfbb] rounded-[10px] p-[10px] bg-[rgba(255,255,255,0.2)] text-[#080808] mt-[5px] outline-none focus:border-[#ffd232] focus:shadow-[0_0_0_3px_rgba(248,189,16,0.22)] max-[520px]:w-full" type="password" placeholder="Password" />
      <button className="inline-flex items-center justify-center gap-2 min-h-[52px] border-0 rounded-[10px] p-[10px] bg-[#F2B300] text-[#0a0101] font-bold cursor-pointer mt-[10px] transition duration-300 shadow-[0_8px_18px_rgba(248,189,16,0.28)] max-[520px]:w-full disabled:cursor-default disabled:opacity-70">Register Driver</button>
    </div>
  );
}
