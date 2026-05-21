import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";
import { NavLinks } from "./NavLinks";


export function Navbar() {
 
  return (
    <header className="sticky top-0 z-10 bg-white border-b border-[rgba(0,0,0,0.06)] backdrop-filter-none">
      <div className="flex items-center justify-between gap-6 min-h-[22px] max-[1100px]:gap-[18px] max-[900px]:min-h-[82px] max-[520px]:min-h-[74px] max-[520px]:gap-[10px]">
        <Logo />
        <NavLinks />
        <div className="hidden max-[900px]:block max-[760px]:block">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
