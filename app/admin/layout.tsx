import AdminSidebar from "@/components/admin/AdminSidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#f5f7fb] max-[900px]:flex-col">
      <AdminSidebar />

      <main className="flex-1 p-7 overflow-x-auto max-[768px]:p-[18px]">
        {children}
      </main>
    </div>
  );
}
