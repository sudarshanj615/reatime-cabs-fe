import Link from "next/link";

export default function AdminDashboard() {
  return (
    <div className="admin-dashboard">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-7 gap-5 max-[768px]:flex-col max-[768px]:items-start [&>h1]:text-[30px] [&>h1]:font-bold [&>h1]:text-[#111827]">
        
        <h1>Dashboard</h1>

        <div className="flex items-center gap-4 flex-wrap max-[768px]:w-full">

          {/* CREATE ACCOUNT BUTTON */}
          <Link href="/admin/users/create">
            <button className="border-0 outline-none cursor-pointer py-[11px] px-[18px] rounded-[10px] bg-[#facc15] text-black font-semibold transition duration-200 ease-in hover:bg-[#eab308] hover:-translate-y-px">
              Create New Account
            </button>
          </Link>

          {/* CREATE RIDE BUTTON */}
          <Link href="/admin/rides/create">
            <button className="border-0 outline-none cursor-pointer py-[11px] px-[18px] rounded-[10px] bg-[#facc15] text-black font-semibold transition duration-200 ease-in hover:bg-[#eab308] hover:-translate-y-px">
              Create New Ride
            </button>
          </Link>

          {/* GENERATE REPORT BUTTON */}
          <button className="border-0 outline-none cursor-pointer py-[11px] px-[18px] rounded-[10px] bg-[#facc15] text-black font-semibold transition duration-200 ease-in hover:bg-[#eab308] hover:-translate-y-px">
            Generate Report
          </button>

          {/* PROFILE */}
          <div className="w-[42px] h-[42px] rounded-full bg-[linear-gradient(135deg,#2563eb,#60a5fa)]" />

        </div>
      </div>

      {/* KPI CARDS */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5 mb-6 max-[768px]:grid-cols-1">
        
        <div className="bg-white rounded-[14px] p-6 shadow-[0_4px_10px_rgba(0,0,0,0.04)] border border-[#e5e7eb]">
          <p className="text-[#6b7280] mb-[10px] text-sm">Total Users</p>
          <h2 className="text-[28px] font-bold text-[#111827]">1,248</h2>
        </div>

        <div className="bg-white rounded-[14px] p-6 shadow-[0_4px_10px_rgba(0,0,0,0.04)] border border-[#e5e7eb]">
          <p className="text-[#6b7280] mb-[10px] text-sm">Active Rides</p>
          <h2 className="text-[28px] font-bold text-[#111827]">86</h2>
        </div>

        <div className="bg-white rounded-[14px] p-6 shadow-[0_4px_10px_rgba(0,0,0,0.04)] border border-[#e5e7eb]">
          <p className="text-[#6b7280] mb-[10px] text-sm">Drivers Online</p>
          <h2 className="text-[28px] font-bold text-[#111827]">42</h2>
        </div>

        <div className="bg-white rounded-[14px] p-6 shadow-[0_4px_10px_rgba(0,0,0,0.04)] border border-[#e5e7eb]">
          <p className="text-[#6b7280] mb-[10px] text-sm">Revenue Today</p>
          <h2 className="text-[28px] font-bold text-[#111827]">₹18,540</h2>
        </div>
      </div>

      {/* LOWER GRID */}
      <div className="grid grid-cols-[2fr_1fr] gap-[22px] max-[900px]:grid-cols-1">

        {/* RECENT RIDES */}
        <div className="bg-white rounded-[14px] p-[22px] shadow-[0_4px_10px_rgba(0,0,0,0.04)] border border-[#e5e7eb]">
          
          <h3 className="mb-[18px] text-lg font-bold text-[#111827]">
            Recent Rides
          </h3>

          <table className="w-full border-collapse max-[768px]:min-w-[750px] [&_thead]:bg-[#f9fafb] [&_th]:text-left [&_th]:p-[15px] [&_th]:text-sm [&_th]:text-[#6b7280] [&_th]:border-b [&_th]:border-[#e5e7eb] [&_td]:p-[16px_15px] [&_td]:border-b [&_td]:border-[#f3f4f6] [&_td]:text-[#374151] [&_td]:text-sm [&_tr:hover]:bg-[#fafafa]">

            <thead>
              <tr>
                <th>Ride ID</th>
                <th>User</th>
                <th>Driver</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>#RIDE1021</td>
                <td>Aman</td>
                <td>Raj</td>
                <td>
                  <span className="py-1.5 px-3 rounded-full text-xs font-semibold bg-[#dbeafe] text-[#0284c7]">
                    Ongoing
                  </span>
                </td>
              </tr>

              <tr>
                <td>#RIDE1022</td>
                <td>Neha</td>
                <td>Vikram</td>
                <td>
                  <span className="py-1.5 px-3 rounded-full text-xs font-semibold bg-[#dcfce7] text-[#16a34a]">
                    Completed
                  </span>
                </td>
              </tr>

              <tr>
                <td>#RIDE1023</td>
                <td>John</td>
                <td>Mike</td>
                <td>
                  <span className="py-1.5 px-3 rounded-full text-xs font-semibold bg-[#fef3c7] text-[#b45309]">
                    Pending
                  </span>
                </td>
              </tr>

            </tbody>
          </table>
        </div>

        {/* ALERTS PANEL */}
        <div className="bg-white rounded-[14px] p-[22px] shadow-[0_4px_10px_rgba(0,0,0,0.04)] border border-[#e5e7eb]">

          <h3 className="mb-[18px] text-lg font-bold text-[#111827]">
            System Alerts
          </h3>

          <div className="flex flex-col gap-3.5">

            <div className="p-3.5 rounded-[10px] text-sm font-medium bg-[#fff7ed] text-[#c2410c]">
              ⚠ High ride cancellation rate in Mumbai zone
            </div>

            <div className="p-3.5 rounded-[10px] text-sm font-medium bg-[#fee2e2] text-[#b91c1c]">
              ❌ 5 drivers reported offline unexpectedly
            </div>

            <div className="p-3.5 rounded-[10px] text-sm font-medium bg-[#dcfce7] text-[#16a34a]">
              ✅ Payment gateway working normally
            </div>

            <div className="p-3.5 rounded-[10px] text-sm font-medium bg-[#dbeafe] text-[#0284c7]">
              ℹ Peak traffic expected at 6–9 PM
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}