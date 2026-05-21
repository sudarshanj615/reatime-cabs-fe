export default function ContactPage() {
  return (
    <div className="bg-[#fffdf3]">
      <section className="py-[88px] bg-[#ffd232] text-[#111] max-[520px]:py-[54px] [&_h1]:max-w-[720px] [&_h1]:m-0 [&_h1]:text-[clamp(42px,6vw,72px)] [&_h1]:leading-none [&_h1]:font-black max-[520px]:[&_h1]:text-[34px] max-[520px]:[&_h1]:leading-[1.06] [&_p]:max-w-[650px] [&_p]:mt-[18px] [&_p]:mb-0 [&_p]:text-[#242424] [&_p]:text-xl [&_p]:leading-[1.6] max-[520px]:[&_p]:text-base max-[520px]:[&_p]:leading-[1.6]">
        <div className="mx-auto w-[min(1200px,calc(100%-40px))] max-[1100px]:w-[min(calc(100%-36px),940px)] max-[520px]:w-[min(calc(100%-24px),100%)]">
          <h1>You can find us here</h1>
          <p>Find help for your ride, driver account, payment, or safety queries.</p>
        </div>
      </section>

      <section className="mx-auto w-[min(1200px,calc(100%-40px))] max-[1100px]:w-[min(calc(100%-36px),940px)] max-[520px]:w-[min(calc(100%-24px),100%)] grid grid-cols-[1.1fr_0.9fr] gap-[52px] py-[72px] max-[1100px]:grid-cols-1 max-[760px]:grid-cols-1 max-[520px]:py-11 max-[520px]:gap-7">
        <form className="grid gap-[18px] rounded-[34px] p-9 bg-white shadow-[0_18px_44px_rgba(0,0,0,0.08)] max-[760px]:p-7 max-[520px]:p-[22px] max-[520px]:rounded-3xl [&_h2]:mt-0 [&_h2]:mb-2 [&_h2]:text-[26px] [&_label]:grid [&_label]:gap-2 [&_label]:font-bold [&_input]:w-full [&_input]:border [&_input]:border-[#eadfbb] [&_input]:rounded-[18px] [&_input]:p-[15px_16px] [&_input]:bg-[#fffdf3] [&_input]:text-[#111] [&_select]:w-full [&_select]:border [&_select]:border-[#eadfbb] [&_select]:rounded-[18px] [&_select]:p-[15px_16px] [&_select]:bg-[#fffdf3] [&_select]:text-[#111] [&_textarea]:w-full [&_textarea]:border [&_textarea]:border-[#eadfbb] [&_textarea]:rounded-[18px] [&_textarea]:p-[15px_16px] [&_textarea]:bg-[#fffdf3] [&_textarea]:text-[#111] [&_textarea]:resize-y [&_button]:w-fit [&_button]:min-h-[54px] [&_button]:border-0 [&_button]:rounded-[18px] [&_button]:px-[34px] [&_button]:bg-[#F2B300] [&_button]:text-black [&_button]:font-black [&_button]:cursor-pointer">
          <h2>Find help for your queries here:</h2>
          <label>
            Name *
            <input placeholder="Enter your name" />
          </label>
          <label>
            Email Address *
            <input type="email" placeholder="Enter your email" />
          </label>
          <label>
            Mobile Number *
            <input placeholder="Enter your mobile number" />
          </label>
          <label>
            You are a *
            <select defaultValue="">
              <option value="" disabled>
                Select account type
              </option>
              <option>Customer</option>
              <option>Driver</option>
              <option>Business partner</option>
            </select>
          </label>
          <label>
            Select Query *
            <select defaultValue="">
              <option value="" disabled>
                Select query
              </option>
              <option>Ride booking</option>
              <option>Payment issue</option>
              <option>Driver onboarding</option>
              <option>Safety support</option>
            </select>
          </label>
          <label>
            Comment *
            <textarea placeholder="Write your message" rows={5} />
          </label>
          <button type="submit">Submit</button>
        </form>

        <aside className="grid gap-6 content-start rounded-[34px] p-9 bg-[#111] text-white shadow-[0_18px_44px_rgba(0,0,0,0.08)] max-[760px]:p-7 max-[520px]:p-[22px] max-[520px]:rounded-3xl [&_h3]:mt-0 [&_h3]:mb-[10px] [&_h3]:text-[#ffd232] [&_h3]:text-lg [&_p]:m-0 [&_p]:text-[#f5edcc] [&_p]:leading-[1.7]">
          <div>
            <h3>Registered Office Address:</h3>
            <p>RealTimeCabs Mobility Pvt Ltd, 3rd Floor, City Arcade, HSR Layout, Bangalore - 560102.</p>
          </div>
          <div>
            <h3>City Office:</h3>
            <p>RealTimeCabs Support Center, MG Road, Bengaluru, Karnataka - 560001.</p>
          </div>
          <div>
            <h3>Corporate Office:</h3>
            <p>RealTimeCabs Tower, Outer Ring Road, Bellandur, Bengaluru, Karnataka - 560103.</p>
          </div>
          <div className="flex flex-wrap gap-3.5 max-[520px]:w-full [&_a]:inline-flex [&_a]:items-center [&_a]:justify-center [&_a]:min-h-[54px] [&_a]:rounded-full [&_a]:px-6 [&_a]:bg-[#ffd232] [&_a]:text-[#111] [&_a]:font-extrabold max-[520px]:[&_a]:w-full">
            <a href="/signin?mode=login&role=user">Customer app</a>
            <a href="/signin?mode=login&role=driver">Captain app</a>
          </div>
        </aside>
      </section>
    </div>
  );
}
