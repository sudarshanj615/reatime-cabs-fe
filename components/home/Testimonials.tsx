export function Testimonials() {
  return (
    <div className="grid grid-cols-4 gap-[18px] rounded-[34px] p-[34px] bg-[#111] text-white max-[900px]:grid-cols-1 max-[760px]:grid-cols-1 max-[520px]:p-6 max-[520px]:rounded-3xl [&_div]:text-center [&_span]:block [&_span]:text-[#ffd232] [&_span]:text-[44px] [&_span]:leading-none [&_span]:font-black max-[520px]:[&_span]:text-4xl [&_p]:mt-[10px] [&_p]:mb-0 [&_p]:text-[#f6f0d6]">
      <div>
        <span>10M+</span>
        <p>demo rides planned</p>
      </div>
      <div>
        <span>100+</span>
        <p>city-ready workflows</p>
      </div>
      <div>
        <span>24/7</span>
        <p>support-first design</p>
      </div>
      <div>
        <span>5</span>
        <p>ride categories</p>
      </div>
    </div>
  );
}
