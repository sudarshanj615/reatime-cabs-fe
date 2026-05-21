"use client";

import { FormEvent, useState } from "react";

export default function SettingsPage() {
  const [profile, setProfile] = useState({
    name: "Admin Manager",
    email: "admin@realtimecabs.com",
    phone: "+91 98765 43210",
  });
  const [security, setSecurity] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [appSettings, setAppSettings] = useState({
    appName: "RealTimeCabs",
    supportEmail: "support@realtimecabs.com",
    supportPhone: "+91 98765 00000",
  });
  const [notifications, setNotifications] = useState({
    email: true,
    sms: true,
    driver: false,
  });
  const [message, setMessage] = useState("No changes saved yet.");

  const updateProfile = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("Admin profile updated.");
  };

  const changePassword = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!security.currentPassword || !security.newPassword || !security.confirmPassword) {
      setMessage("Fill all password fields first.");
      return;
    }

    if (security.newPassword !== security.confirmPassword) {
      setMessage("New password and confirmation do not match.");
      return;
    }

    setSecurity({ currentPassword: "", newPassword: "", confirmPassword: "" });
    setMessage("Password changed.");
  };

  const updateApp = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("App settings updated.");
  };

  const saveNotifications = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("Notification preferences saved.");
  };

  const saveAll = () => {
    setMessage("All settings saved.");
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-7 gap-5 max-[768px]:flex-col max-[768px]:items-start [&>h1]:text-[30px] [&>h1]:font-bold [&>h1]:text-[#111827]">
        <div>
          <h1>Settings</h1>
          <p className="text-[#6b7280]">Manage system configuration and preferences</p>
        </div>

        <button className="border-0 outline-none cursor-pointer py-[11px] px-[18px] rounded-[10px] bg-[#2563eb] text-white font-semibold transition duration-200 ease-in hover:bg-[#1d4ed8] hover:-translate-y-px" type="button" onClick={saveAll}>
          Save Changes
        </button>
      </div>

      <div className="mb-5 bg-[#eff6ff] text-[#1d4ed8] py-3.5 px-[18px] rounded-[10px] border border-[#bfdbfe]">{message}</div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-[22px] mt-5">
        <form className="bg-white rounded-[14px] p-[22px] shadow-[0_4px_10px_rgba(0,0,0,0.04)] border border-[#e5e7eb] flex flex-col gap-3.5" onSubmit={updateProfile}>
          <h3>Admin Profile</h3>

          <input
            className="border border-[#e5e7eb] rounded-[10px] py-3 px-3.5 bg-white text-sm w-full min-w-[180px] transition duration-200 ease-in focus:outline-none focus:border-[#2563eb] focus:shadow-[0_0_0_4px_rgba(37,99,235,0.1)]"
            placeholder="Admin Name"
            value={profile.name}
            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
          />
          <input
            className="border border-[#e5e7eb] rounded-[10px] py-3 px-3.5 bg-white text-sm w-full min-w-[180px] transition duration-200 ease-in focus:outline-none focus:border-[#2563eb] focus:shadow-[0_0_0_4px_rgba(37,99,235,0.1)]"
            placeholder="Email Address"
            value={profile.email}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          />
          <input
            className="border border-[#e5e7eb] rounded-[10px] py-3 px-3.5 bg-white text-sm w-full min-w-[180px] transition duration-200 ease-in focus:outline-none focus:border-[#2563eb] focus:shadow-[0_0_0_4px_rgba(37,99,235,0.1)]"
            placeholder="Phone Number"
            value={profile.phone}
            onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
          />

          <button className="border-0 outline-none cursor-pointer py-[11px] px-[18px] rounded-[10px] bg-[#2563eb] text-white font-semibold transition duration-200 ease-in hover:bg-[#1d4ed8] hover:-translate-y-px bg-[#111827] hover:bg-black" type="submit">
            Update Profile
          </button>
        </form>

        <form className="bg-white rounded-[14px] p-[22px] shadow-[0_4px_10px_rgba(0,0,0,0.04)] border border-[#e5e7eb] flex flex-col gap-3.5" onSubmit={changePassword}>
          <h3>Security</h3>

          <input
            className="border border-[#e5e7eb] rounded-[10px] py-3 px-3.5 bg-white text-sm w-full min-w-[180px] transition duration-200 ease-in focus:outline-none focus:border-[#2563eb] focus:shadow-[0_0_0_4px_rgba(37,99,235,0.1)]"
            placeholder="Current Password"
            type="password"
            value={security.currentPassword}
            onChange={(e) =>
              setSecurity({ ...security, currentPassword: e.target.value })
            }
          />
          <input
            className="border border-[#e5e7eb] rounded-[10px] py-3 px-3.5 bg-white text-sm w-full min-w-[180px] transition duration-200 ease-in focus:outline-none focus:border-[#2563eb] focus:shadow-[0_0_0_4px_rgba(37,99,235,0.1)]"
            placeholder="New Password"
            type="password"
            value={security.newPassword}
            onChange={(e) => setSecurity({ ...security, newPassword: e.target.value })}
          />
          <input
            className="border border-[#e5e7eb] rounded-[10px] py-3 px-3.5 bg-white text-sm w-full min-w-[180px] transition duration-200 ease-in focus:outline-none focus:border-[#2563eb] focus:shadow-[0_0_0_4px_rgba(37,99,235,0.1)]"
            placeholder="Confirm Password"
            type="password"
            value={security.confirmPassword}
            onChange={(e) =>
              setSecurity({ ...security, confirmPassword: e.target.value })
            }
          />

          <button className="border-0 outline-none cursor-pointer py-[11px] px-[18px] rounded-[10px] bg-[#2563eb] text-white font-semibold transition duration-200 ease-in hover:bg-[#1d4ed8] hover:-translate-y-px" type="submit">
            Change Password
          </button>
        </form>

        <form className="bg-white rounded-[14px] p-[22px] shadow-[0_4px_10px_rgba(0,0,0,0.04)] border border-[#e5e7eb] flex flex-col gap-3.5" onSubmit={updateApp}>
          <h3>App Settings</h3>

          <input
            className="border border-[#e5e7eb] rounded-[10px] py-3 px-3.5 bg-white text-sm w-full min-w-[180px] transition duration-200 ease-in focus:outline-none focus:border-[#2563eb] focus:shadow-[0_0_0_4px_rgba(37,99,235,0.1)]"
            placeholder="App Name"
            value={appSettings.appName}
            onChange={(e) =>
              setAppSettings({ ...appSettings, appName: e.target.value })
            }
          />
          <input
            className="border border-[#e5e7eb] rounded-[10px] py-3 px-3.5 bg-white text-sm w-full min-w-[180px] transition duration-200 ease-in focus:outline-none focus:border-[#2563eb] focus:shadow-[0_0_0_4px_rgba(37,99,235,0.1)]"
            placeholder="Support Email"
            value={appSettings.supportEmail}
            onChange={(e) =>
              setAppSettings({ ...appSettings, supportEmail: e.target.value })
            }
          />
          <input
            className="border border-[#e5e7eb] rounded-[10px] py-3 px-3.5 bg-white text-sm w-full min-w-[180px] transition duration-200 ease-in focus:outline-none focus:border-[#2563eb] focus:shadow-[0_0_0_4px_rgba(37,99,235,0.1)]"
            placeholder="Support Phone"
            value={appSettings.supportPhone}
            onChange={(e) =>
              setAppSettings({ ...appSettings, supportPhone: e.target.value })
            }
          />

          <button className="border-0 outline-none cursor-pointer py-[11px] px-[18px] rounded-[10px] bg-[#2563eb] text-white font-semibold transition duration-200 ease-in hover:bg-[#1d4ed8] hover:-translate-y-px bg-[#111827] hover:bg-black" type="submit">
            Update App
          </button>
        </form>

        <form className="bg-white rounded-[14px] p-[22px] shadow-[0_4px_10px_rgba(0,0,0,0.04)] border border-[#e5e7eb] flex flex-col gap-3.5" onSubmit={saveNotifications}>
          <h3>Notifications</h3>

          <label className="flex items-center gap-[10px] text-[#111827]">
            <input
              type="checkbox"
              checked={notifications.email}
              onChange={(e) =>
                setNotifications({ ...notifications, email: e.target.checked })
              }
            />
            Email notifications
          </label>

          <label className="flex items-center gap-[10px] text-[#111827]">
            <input
              type="checkbox"
              checked={notifications.sms}
              onChange={(e) =>
                setNotifications({ ...notifications, sms: e.target.checked })
              }
            />
            SMS alerts for bookings
          </label>

          <label className="flex items-center gap-[10px] text-[#111827]">
            <input
              type="checkbox"
              checked={notifications.driver}
              onChange={(e) =>
                setNotifications({ ...notifications, driver: e.target.checked })
              }
            />
            Driver alerts
          </label>

          <button className="border-0 outline-none cursor-pointer py-[11px] px-[18px] rounded-[10px] bg-[#2563eb] text-white font-semibold transition duration-200 ease-in hover:bg-[#1d4ed8] hover:-translate-y-px" type="submit">
            Save Preferences
          </button>
        </form>
      </div>

      <div className="bg-white rounded-[14px] p-[22px] shadow-[0_4px_10px_rgba(0,0,0,0.04)] border border-[#e5e7eb] mt-6">
        <h3>System Information</h3>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-5">
          <div>
            <p className="text-[#6b7280]">Version</p>
            <strong>v1.0.0</strong>
          </div>

          <div>
            <p className="text-[#6b7280]">Environment</p>
            <strong>Production</strong>
          </div>

          <div>
            <p className="text-[#6b7280]">Database</p>
            <strong>Connected</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
