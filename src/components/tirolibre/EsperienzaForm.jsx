// src/components/tirolibre/EsperienzaForm.jsx
import React, { useEffect, useState } from "react";
import RoleSelector from "./RoleSelector";
import countryList from "react-select-country-list";
import leagueLevels, { genericLevels } from "../../data/leagueLevels";
import { toast } from "react-hot-toast";

const normalizeCountryKey = (label) => {
  const map = {
    Italia: "Italy",
    Spagna: "Spain",
    Francia: "France",
    Germania: "Germany",
    Inghilterra: "England",
    Brasile: "Brazil",
    Argentina: "Argentina",
    Uruguay: "Uruguay",
    Colombia: "Colombia",
    Cile: "Chile",
  };
  return map[label] || label;
};

const EsperienzaForm = ({ onSave, closeModal, initialData }) => {
  const defaultState = {
    club: "",
    ruolo: "",
    stagione: "",
    livello: "",
    paese: "",
    matchGiocati: "",
  };

  const [formData, setFormData] = useState(initialData || defaultState);
  const [livelliDisponibili, setLivelliDisponibili] = useState([]);
  const countries = countryList().getData();

  useEffect(() => {
    const key = normalizeCountryKey(formData.paese);
    if (!formData.paese) {
      setLivelliDisponibili([]);
      return;
    }
    if (leagueLevels[key]) {
      setLivelliDisponibili(leagueLevels[key]);
    } else {
      setLivelliDisponibili(genericLevels);
    }
  }, [formData.paese]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuovaEsperienza = {
      ...formData,
      matchGiocati: formData.matchGiocati
        ? Number(formData.matchGiocati)
        : null,
    };

    onSave(nuovaEsperienza);
    toast.success("Esperienza salvata");

    if (!initialData) {
      setFormData(defaultState);
      closeModal();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Club */}
      <input
        type="text"
        name="club"
        value={formData.club || ""}
        onChange={handleChange}
        placeholder="Nome del Club"
        className="w-full border border-gray-300 p-2 rounded-md text-sm"
      />

      {/* Ruolo */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Categoria di ruolo
        </label>
        <RoleSelector
          selectedRole={formData.ruolo}
          onSelect={(val) =>
            setFormData((prev) => ({ ...prev, ruolo: val }))
          }
        />
      </div>

      {/* Stagione */}
      <input
        type="text"
        name="stagione"
        value={formData.stagione || ""}
        onChange={handleChange}
        placeholder="Stagione (es. 2022/2023)"
        className="w-full border border-gray-300 p-2 rounded-md text-sm"
      />

      {/* Paese */}
      <select
        name="paese"
        value={formData.paese || ""}
        onChange={handleChange}
        className="w-full border border-gray-300 p-2 rounded-md text-sm bg-white"
      >
        <option value="">Seleziona Paese</option>
        {countries.map((c) => (
          <option key={c.value} value={c.label}>
            {c.label}
          </option>
        ))}
      </select>

      {/* Match giocati */}
      <input
        type="number"
        name="matchGiocati"
        value={formData.matchGiocati || ""}
        onChange={handleChange}
        placeholder="Match giocati (facoltativo)"
        className="w-full border border-gray-300 p-2 rounded-md text-sm"
      />

      {/* Livelli */}
      {formData.paese && livelliDisponibili.length > 0 && (
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Seleziona il livello della competizione
          </label>
          <div className="flex flex-wrap gap-2">
            {livelliDisponibili.map((lvl, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() =>
                  setFormData((prev) => ({ ...prev, livello: lvl.name }))
                }
                className={`px-3 py-1 rounded-full text-sm border ${
                  formData.livello === lvl.name
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-800 border-gray-300 hover:bg-blue-100"
                }`}
              >
                {lvl.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Salva */}
      <div className="pt-2 text-right">
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Salva esperienza
        </button>
      </div>
    </form>
  );
};

export default EsperienzaForm;
