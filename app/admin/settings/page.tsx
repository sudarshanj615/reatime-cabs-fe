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
      <div className="admin-navbar">
        <div>
          <h1>Settings</h1>
          <p className="muted">Manage system configuration and preferences</p>
        </div>

        <button className="admin-btn" type="button" onClick={saveAll}>
          Save Changes
        </button>
      </div>

      <div className="settings-feedback">{message}</div>

      <div className="settings-grid">
        <form className="card settings-form" onSubmit={updateProfile}>
          <h3>Admin Profile</h3>

          <input
            className="input"
            placeholder="Admin Name"
            value={profile.name}
            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
          />
          <input
            className="input"
            placeholder="Email Address"
            value={profile.email}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          />
          <input
            className="input"
            placeholder="Phone Number"
            value={profile.phone}
            onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
          />

          <button className="admin-btn dark" type="submit">
            Update Profile
          </button>
        </form>

        <form className="card settings-form" onSubmit={changePassword}>
          <h3>Security</h3>

          <input
            className="input"
            placeholder="Current Password"
            type="password"
            value={security.currentPassword}
            onChange={(e) =>
              setSecurity({ ...security, currentPassword: e.target.value })
            }
          />
          <input
            className="input"
            placeholder="New Password"
            type="password"
            value={security.newPassword}
            onChange={(e) => setSecurity({ ...security, newPassword: e.target.value })}
          />
          <input
            className="input"
            placeholder="Confirm Password"
            type="password"
            value={security.confirmPassword}
            onChange={(e) =>
              setSecurity({ ...security, confirmPassword: e.target.value })
            }
          />

          <button className="admin-btn" type="submit">
            Change Password
          </button>
        </form>

        <form className="card settings-form" onSubmit={updateApp}>
          <h3>App Settings</h3>

          <input
            className="input"
            placeholder="App Name"
            value={appSettings.appName}
            onChange={(e) =>
              setAppSettings({ ...appSettings, appName: e.target.value })
            }
          />
          <input
            className="input"
            placeholder="Support Email"
            value={appSettings.supportEmail}
            onChange={(e) =>
              setAppSettings({ ...appSettings, supportEmail: e.target.value })
            }
          />
          <input
            className="input"
            placeholder="Support Phone"
            value={appSettings.supportPhone}
            onChange={(e) =>
              setAppSettings({ ...appSettings, supportPhone: e.target.value })
            }
          />

          <button className="admin-btn dark" type="submit">
            Update App
          </button>
        </form>

        <form className="card settings-form" onSubmit={saveNotifications}>
          <h3>Notifications</h3>

          <label className="settings-check">
            <input
              type="checkbox"
              checked={notifications.email}
              onChange={(e) =>
                setNotifications({ ...notifications, email: e.target.checked })
              }
            />
            Email notifications
          </label>

          <label className="settings-check">
            <input
              type="checkbox"
              checked={notifications.sms}
              onChange={(e) =>
                setNotifications({ ...notifications, sms: e.target.checked })
              }
            />
            SMS alerts for bookings
          </label>

          <label className="settings-check">
            <input
              type="checkbox"
              checked={notifications.driver}
              onChange={(e) =>
                setNotifications({ ...notifications, driver: e.target.checked })
              }
            />
            Driver alerts
          </label>

          <button className="admin-btn" type="submit">
            Save Preferences
          </button>
        </form>
      </div>

      <div className="card system-info-card">
        <h3>System Information</h3>

        <div className="system-info-grid">
          <div>
            <p className="muted">Version</p>
            <strong>v1.0.0</strong>
          </div>

          <div>
            <p className="muted">Environment</p>
            <strong>Production</strong>
          </div>

          <div>
            <p className="muted">Database</p>
            <strong>Connected</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
