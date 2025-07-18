// src/pages/admin/MindtAdminProfiles.jsx
import React from "react";
import { Link } from "react-router-dom";

const mockProfiles = [
  {
    name: "Giulia Bianchi",
    email: "giulia@Mindtwellness.org",
    status: "Complete",
    updated: "2025-07-10",
  },
  {
    name: "Marco Verdi",
    email: "marco@Mindtwellness.org",
    status: "Incomplete",
    updated: "2025-07-09",
  },
];

const MindtAdminProfiles = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">🧠 MindtPanel – Public Profiles</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto text-left text-sm border border-zinc-700">
          <thead className="bg-zinc-800 text-zinc-300">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Last Update</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockProfiles.map((profile, idx) => (
              <tr
                key={idx}
                className="border-t border-zinc-700 hover:bg-zinc-800 transition"
              >
                <td className="px-4 py-3">{profile.name}</td>
                <td className="px-4 py-3">{profile.email}</td>
                <td className="px-4 py-3">
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded ${
                      profile.status === "Complete"
                        ? "bg-green-600 text-white"
                        : "bg-yellow-500 text-white"
                    }`}
                  >
                    {profile.status}
                  </span>
                </td>
                <td className="px-4 py-3">{profile.updated}</td>
                <td className="px-4 py-3 space-x-3">
                  <Link to="#" className="text-blue-400 hover:underline">
                    View
                  </Link>
                  <button className="text-red-400 hover:underline">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MindtAdminProfiles;
