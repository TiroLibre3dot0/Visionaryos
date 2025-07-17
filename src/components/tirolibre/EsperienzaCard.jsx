// src/components/tirolibre/EsperienzaCard.jsx
import React, { useState } from "react";
import { getTypeFromLevel } from "../../data/leagueLevels";
import EsperienzaModal from "./EsperienzaModal";
import EsperienzaForm from "./EsperienzaForm";
import ConfirmDeleteModal from "./ConfirmDeleteModal";

const EsperienzaCard = ({ esperienza, index, onUpdate, onDelete }) => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const tipo = getTypeFromLevel(esperienza.paese, esperienza.livello);

  const handleUpdate = (updatedExp) => {
    onUpdate(index, updatedExp);
    setIsEditOpen(false);
  };

  const handleDelete = () => {
    onDelete(index);
    setShowConfirm(false);
  };

  const isComplete =
    esperienza.club &&
    esperienza.ruolo &&
    esperienza.stagione &&
    esperienza.livello &&
    esperienza.paese;

  return (
    <div className="relative border border-gray-200 rounded-xl p-5 shadow bg-gray-50 flex justify-between items-start gap-6 transition-all">
      <div className="flex-1 space-y-1 text-sm text-gray-800">
        <div className="font-bold text-base text-indigo-700">
          {esperienza.club || (
            <span className="text-gray-400 italic">Club non specificato</span>
          )}
        </div>
        <div>
          {esperienza.ruolo || "Ruolo non definito"} ·{" "}
          {esperienza.stagione || "Stagione non indicata"}
        </div>
        <div>
          {esperienza.livello || "Categoria?"} ({tipo})
        </div>
        <div>{esperienza.paese || "Nazione non indicata"}</div>

        {esperienza.matchGiocati !== undefined &&
        esperienza.matchGiocati !== "" ? (
          <div className="text-gray-500 text-sm">
            Match giocati: {esperienza.matchGiocati}
          </div>
        ) : null}

        <div
          className={`mt-1 text-xs font-semibold ${
            isComplete ? "text-green-600" : "text-red-500"
          }`}
        >
          {isComplete ? "Esperienza completa" : "Esperienza incompleta"}
        </div>
      </div>

      <div className="flex flex-col gap-2 items-end text-sm">
        <button
          onClick={() => setIsEditOpen(true)}
          className="text-blue-600 hover:underline"
        >
          ✏️ Modifica
        </button>
        <button
          onClick={() => setShowConfirm(true)}
          className="text-red-600 hover:underline"
        >
          🗑️ Elimina
        </button>
      </div>

      <EsperienzaModal
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
      >
        <EsperienzaForm
          initialData={esperienza}
          onSave={handleUpdate}
          closeModal={() => setIsEditOpen(false)}
        />
      </EsperienzaModal>

      {showConfirm && (
        <ConfirmDeleteModal
          onConfirm={handleDelete}
          onCancel={() => setShowConfirm(false)}
        />
      )}
    </div>
  );
};

export default EsperienzaCard;
