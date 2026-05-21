export default function RegisterLayout({ children }: { children: React.ReactNode }) {
  return <div className="py-16 max-[520px]:py-10 mx-auto w-[min(1200px,calc(100%-40px))] max-[1100px]:w-[min(calc(100%-36px),940px)] max-[520px]:w-[min(calc(100%-24px),100%)]">{children}</div>;
}
