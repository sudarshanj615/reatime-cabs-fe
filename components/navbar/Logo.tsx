import Image from "next/image";
import Link from "next/link";
import { appConfig } from "@/constants/appConfig";

export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center -mt-5"
      aria-label={`${appConfig.name} home`}
    >
      <Image
        src="/logo/cablogosvg.svg"   
        alt={`${appConfig.name} logo`}
        width={400}
        height={120}
        priority
        className="w-24 h-auto object-contain -translate-y-1"
      />
    </Link>
  );
}

export default Logo;