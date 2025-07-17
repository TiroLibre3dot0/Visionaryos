// src/components/tirolibre/ConfirmDeleteModal.jsx
import React from "react";
import { AlertTriangle } from "lucide-react";

const ConfirmDeleteModal = ({ onCancel, onConfirm }) => {
  return (
    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-[90%] max-w-md text-center space-y-6 animate-fadeIn border border-red-100">
        <div className="flex justify-center">
          <div className="bg-red-100 p-4 rounded-full">
            <AlertTriangle className="w-8 h-8 text-red-600" />
          </div>
        </div>
        <h3 className="text-xl font-bold text-gray-800">Eliminare questa esperienza?</h3>
        <p className="text-sm text-gray-600">
          Questa operazione <strong>non può essere annullata</strong>. Sei sicuro di voler continuare?
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={onCancel}
            className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-sm font-medium"
          >
            Annulla
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 text-sm font-medium shadow"
          >
            Elimina definitivamente
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
