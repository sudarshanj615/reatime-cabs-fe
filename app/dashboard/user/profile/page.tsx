import { PageHeader } from "@/components/common/PageHeader";

export default function UserProfilePage() {
  return (
    <div className="page-shell container stack">
      <PageHeader title="User Profile" description="Manage your rider account details." />
      <div className="card stack">
        <input className="input" placeholder="Full name" />
        <input className="input" placeholder="Phone number" />
        <input className="input" placeholder="Email address" />
        <button className="button">Save Profile</button>
      </div>
    </div>
  );
}
