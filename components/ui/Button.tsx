type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export function Button({ className = "", variant = "primary", ...props }: ButtonProps) {
  return <button className={`mt-[10px] inline-flex min-h-[52px] cursor-pointer items-center justify-center gap-2 rounded-[10px] border-0 bg-[#F2B300] p-[10px] font-bold text-[#0a0101] shadow-[0_8px_18px_rgba(248,189,16,0.28)] transition duration-300 disabled:cursor-default disabled:opacity-70 max-[520px]:w-full ${variant === "secondary" ? "bg-[#F5B800] text-white shadow-none" : ""} ${className}`} {...props} />;
}
