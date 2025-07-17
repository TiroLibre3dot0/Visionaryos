import React from "react";

const dummyProfiles = [
  {
    id: 1,
    name: "Francesco Mascaro",
    email: "mascaro@tirolibre.it",
    status: "Complete",
    lastUpdate: "2025-07-05",
  },
  {
    id: 2,
    name: "Luca Rossi",
    email: "rossi@tirolibre.it",
    status: "Incomplete",
    lastUpdate: "2025-07-03",
  },
];

const ProfilesPage = () => {
  return (
    <div className="p-6 text-white">
      <h2 className="text-2xl font-bold mb-4">Public Profiles</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left border border-zinc-700">
          <thead className="bg-zinc-800 text-zinc-400">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Last Update</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {dummyProfiles.map((profile) => (
              <tr key={profile.id} className="border-t border-zinc-700">
                <td className="px-4 py-3">{profile.name}</td>
                <td className="px-4 py-3">{profile.email}</td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                      profile.status === "Complete"
                        ? "bg-green-600 text-white"
                        : "bg-yellow-600 text-white"
                    }`}
                  >
                    {profile.status}
                  </span>
                </td>
                <td className="px-4 py-3">{profile.lastUpdate}</td>
                <td className="px-4 py-3">
                  <button className="text-blue-400 hover:underline">
                    View
                  </button>
                  <button className="ml-4 text-red-400 hover:underline">
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

export default ProfilesPage;
