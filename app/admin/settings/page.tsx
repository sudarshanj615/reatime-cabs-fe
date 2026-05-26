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

    if (
      !security.currentPassword ||
      !security.newPassword ||
      !security.confirmPassword
    ) {
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
    <div className="min-h-screen bg-[#fffdf3] px-6 py-6">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-7 gap-5 max-[768px]:flex-col max-[768px]:items-start">
        <div>
          <h1 className="text-[30px] font-bold text-[#111827]">Settings</h1>
          <p className="text-[#6b7280]">
            Manage system configuration and preferences
          </p>
        </div>

        <button
          className="cursor-pointer py-[11px] px-[18px] rounded-[10px] bg-[#facc15] text-black font-semibold hover:bg-[#eab308] hover:-translate-y-px transition"
          type="button"
          onClick={saveAll}
        >
          Save Changes
        </button>
      </div>

      {/* MESSAGE */}
      <div className="mb-5 bg-[#eff6ff] text-[#6b7280] py-3.5 px-[18px] rounded-[10px] border border-[#bfdbfe]">
        {message}
      </div>

      {/* GRID */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-[22px] mt-5">

        {/* PROFILE */}
        <form
          className="bg-white rounded-[14px] p-[22px] border border-[#e5e7eb] flex flex-col gap-3.5"
          onSubmit={updateProfile}
        >
          <h3>Admin Profile</h3>

          <input
            className="border border-[#e5e7eb] rounded-[10px] py-3 px-3.5 text-sm focus:outline-none focus:border-[#2563eb]"
            value={profile.name}
            onChange={(e) =>
              setProfile({ ...profile, name: e.target.value })
            }
          />

          <input
            className="border border-[#e5e7eb] rounded-[10px] py-3 px-3.5 text-sm focus:outline-none focus:border-[#2563eb]"
            value={profile.email}
            onChange={(e) =>
              setProfile({ ...profile, email: e.target.value })
            }
          />

          <input
            className="border border-[#e5e7eb] rounded-[10px] py-3 px-3.5 text-sm focus:outline-none focus:border-[#2563eb]"
            value={profile.phone}
            onChange={(e) =>
              setProfile({ ...profile, phone: e.target.value })
            }
          />

          <button
            className="cursor-pointer py-[11px] px-[18px] rounded-[10px] bg-[#111827] text-white font-semibold hover:bg-black hover:-translate-y-px transition"
            type="submit"
          >
            Update Profile
          </button>
        </form>

        {/* SECURITY */}
        <form
          className="bg-white rounded-[14px] p-[22px] border border-[#e5e7eb] flex flex-col gap-3.5"
          onSubmit={changePassword}
        >
          <h3>Security</h3>

          <input
            type="password"
            placeholder="Current Password"
            className="border border-[#e5e7eb] rounded-[10px] py-3 px-3.5 text-sm"
            value={security.currentPassword}
            onChange={(e) =>
              setSecurity({ ...security, currentPassword: e.target.value })
            }
          />

          <input
            type="password"
            placeholder="New Password"
            className="border border-[#e5e7eb] rounded-[10px] py-3 px-3.5 text-sm"
            value={security.newPassword}
            onChange={(e) =>
              setSecurity({ ...security, newPassword: e.target.value })
            }
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="border border-[#e5e7eb] rounded-[10px] py-3 px-3.5 text-sm"
            value={security.confirmPassword}
            onChange={(e) =>
              setSecurity({ ...security, confirmPassword: e.target.value })
            }
          />

          <button
            className="cursor-pointer py-[11px] px-[18px] rounded-[10px] bg-[#111827] text-white font-semibold hover:bg-black hover:-translate-y-px transition"
            type="submit"
          >
            Change Password
          </button>
        </form>

        {/* APP SETTINGS */}
        <form
          className="bg-white rounded-[14px] p-[22px] border border-[#e5e7eb] flex flex-col gap-3.5"
          onSubmit={updateApp}
        >
          <h3>App Settings</h3>

          <input
            className="border border-[#e5e7eb] rounded-[10px] py-3 px-3.5 text-sm"
            value={appSettings.appName}
            onChange={(e) =>
              setAppSettings({ ...appSettings, appName: e.target.value })
            }
          />

          <input
            className="border border-[#e5e7eb] rounded-[10px] py-3 px-3.5 text-sm"
            value={appSettings.supportEmail}
            onChange={(e) =>
              setAppSettings({
                ...appSettings,
                supportEmail: e.target.value,
              })
            }
          />

          <input
            className="border border-[#e5e7eb] rounded-[10px] py-3 px-3.5 text-sm"
            value={appSettings.supportPhone}
            onChange={(e) =>
              setAppSettings({
                ...appSettings,
                supportPhone: e.target.value,
              })
            }
          />

          <button
            className="cursor-pointer py-[11px] px-[18px] rounded-[10px] bg-[#111827] text-white font-semibold hover:bg-black hover:-translate-y-px transition"
            type="submit"
          >
            Update App
          </button>
        </form>

        {/* NOTIFICATIONS */}
        <form
          className="bg-white rounded-[14px] p-[22px] border border-[#e5e7eb] flex flex-col gap-3.5"
          onSubmit={saveNotifications}
        >
          <h3>Notifications</h3>

          <label className="flex items-center gap-[10px]">
            <input
              type="checkbox"
              checked={notifications.email}
              onChange={(e) =>
                setNotifications({
                  ...notifications,
                  email: e.target.checked,
                })
              }
            />
            Email notifications
          </label>

          <label className="flex items-center gap-[10px]">
            <input
              type="checkbox"
              checked={notifications.sms}
              onChange={(e) =>
                setNotifications({
                  ...notifications,
                  sms: e.target.checked,
                })
              }
            />
            SMS alerts for bookings
          </label>

          <label className="flex items-center gap-[10px]">
            <input
              type="checkbox"
              checked={notifications.driver}
              onChange={(e) =>
                setNotifications({
                  ...notifications,
                  driver: e.target.checked,
                })
              }
            />
            Driver alerts
          </label>

          <button
            className="cursor-pointer py-[11px] px-[18px] rounded-[10px] bg-[#111827] text-white font-semibold hover:bg-black hover:-translate-y-px transition"
            type="submit"
          >
            Save Preferences
          </button>
        </form>
      </div>

      {/* SYSTEM INFO */}
      <div className="bg-white rounded-[14px] p-[22px] border border-[#e5e7eb] mt-6">
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