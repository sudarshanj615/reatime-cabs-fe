"use client";

import { customerUser } from "../../constants/user";
import { useState } from "react";

export default function ProfilePage() {
  const user = customerUser;

  const [hoverEdit, setHoverEdit] = useState(false);
  const [hoverLogout, setHoverLogout] = useState(false);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f5f5f5",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "950px",
          margin: "0 auto",
          background: "white",
          borderRadius: "24px",
          padding: "34px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
        }}
      >
        {/* Heading */}
        <h1
          style={{
            fontSize: "42px",
            fontWeight: "800",
            marginBottom: "40px",
            color: "#111",
          }}
        >
          Personal info
        </h1>

        {/* Profile Section */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            marginBottom: "40px",
          }}
        >
          {/* Profile Icon */}
          <div
            style={{
              position: "relative",
              width: "120px",
              height: "120px",
            }}
          >
            <div
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "999px",
                background: "#e5e5e5",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "60px",
              }}
            >
              👤
            </div>

            {/* Edit Icon */}
            <div
              style={{
                position: "absolute",
                right: "0",
                bottom: "0",
                width: "38px",
                height: "38px",
                borderRadius: "999px",
                background: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 10px rgba(0,0,0,0.12)",
                cursor: "pointer",
                fontSize: "18px",
              }}
            >
              ✎
            </div>
          </div>
        </div>

        {/* Information List */}
        <div style={{ display: "grid" }}>
          
          {/* Name */}
          <div
            style={{
              padding: "22px 0",
              borderBottom: "1px solid #e5e5e5",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <p style={{ margin: 0, fontSize: "20px", fontWeight: "700" }}>
                Name
              </p>
              <p style={{ marginTop: "8px", color: "#666", fontSize: "18px" }}>
                {user.name}
              </p>
            </div>

            <span style={{ fontSize: "28px", color: "#999" }}>›</span>
          </div>

          {/* Phone */}
          <div
            style={{
              padding: "22px 0",
              borderBottom: "1px solid #e5e5e5",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <p style={{ margin: 0, fontSize: "20px", fontWeight: "700" }}>
                Phone number
              </p>
              <p style={{ marginTop: "8px", color: "#666", fontSize: "18px" }}>
                {user.phone}
              </p>
            </div>

            <span style={{ fontSize: "28px", color: "#999" }}>›</span>
          </div>

          {/* Email */}
          <div
            style={{
              padding: "22px 0",
              borderBottom: "1px solid #e5e5e5",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <p style={{ margin: 0, fontSize: "20px", fontWeight: "700" }}>
                Email
              </p>
              <p style={{ marginTop: "8px", color: "#666", fontSize: "18px" }}>
                {user.email}
              </p>
            </div>

            <span style={{ fontSize: "28px", color: "#999" }}>›</span>
          </div>

          {/* Role */}
          <div
            style={{
              padding: "22px 0",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <p style={{ margin: 0, fontSize: "20px", fontWeight: "700" }}>
                Role
              </p>
              <p style={{ marginTop: "8px", color: "#666", fontSize: "18px" }}>
                {user.role}
              </p>
            </div>

            <span style={{ fontSize: "28px", color: "#999" }}>›</span>
          </div>
        </div>

        {/* BUTTONS */}
        <div
          style={{
            display: "flex",
            gap: "18px",
            marginTop: "40px",
            flexWrap: "wrap",
          }}
        >
          {/* EDIT PROFILE */}
          <button
            onMouseEnter={() => setHoverEdit(true)}
            onMouseLeave={() => setHoverEdit(false)}
            style={{
              flex: 1,
              minHeight: "56px",
              border: "none",
              borderRadius: "14px",
              background: hoverEdit ? "#333" : "#111",
              color: "white",
              fontSize: "17px",
              fontWeight: "700",
              cursor: "pointer",
              transition: "0.3s ease",
              transform: hoverEdit ? "scale(1.02)" : "scale(1)",
            }}
          >
            Edit Profile
          </button>

          {/* LOGOUT */}
          <button
            onMouseEnter={() => setHoverLogout(true)}
            onMouseLeave={() => setHoverLogout(false)}
            style={{
              flex: 1,
              minHeight: "56px",
              border: "none",
              borderRadius: "14px",
              background: hoverLogout ? "#ffdb4d" : "#ffd232",
              color: "#111",
              fontSize: "17px",
              fontWeight: "700",
              cursor: "pointer",
              transition: "0.3s ease",
              transform: hoverLogout ? "scale(1.02)" : "scale(1)",
            }}
          >
            Logout
          </button>
        </div>

      </div>
    </main>
  );
}