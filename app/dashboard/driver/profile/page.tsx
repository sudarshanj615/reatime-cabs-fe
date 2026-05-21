import { PageHeader } from "@/components/common/PageHeader";

export default function DriverProfilePage() {
  return (
    <div className="page-shell container stack">
      <PageHeader title="Driver Profile" description="Manage your driver and vehicle information." />
      <div className="card stack">
        <input className="input" placeholder="Driver name" />
        <input className="input" placeholder="Vehicle number" />
        <select className="input" defaultValue="">
          <option value="" disabled>
            Select cab type
          </option>
          <option>Mini</option>
          <option>Auto</option>
          <option>Bike</option>
          <option>Scooty</option>
          <option>SUV</option>
        </select>
        <button className="button">Save Driver Profile</button>
      </div>
    </div>
  );
}
