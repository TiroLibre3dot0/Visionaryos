// src/components/tirolibre/RoleSelector.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import rolesData from "../../data/roles";
import "./CarrieraEdit.css";

const RoleSelector = ({ selectedRole, onSelect }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const currentGroup = rolesData.find((g) => g.category === selectedCategory);

  const handleRoleClick = (e, roleId) => {
    e.preventDefault(); // ⚠️ Blocca ogni comportamento indesiderato
    onSelect(roleId);
  };

  return (
    <div className="role-selector space-y-6">
      {!selectedCategory ? (
        <>
          <h4 className="text-sm text-gray-700 font-medium">
            Seleziona una <span className="pill">categoria</span> di ruolo:
          </h4>
          <div className="categorie-ruoli">
            {rolesData.map((group, idx) => (
              <motion.button
                key={idx}
                type="button"
                whileTap={{ scale: 0.97 }}
                className={`categoria-bottone ${selectedCategory === group.category ? "selected" : ""}`}
                onClick={() => setSelectedCategory(group.category)}
              >
                {group.category}
              </motion.button>
            ))}
          </div>
        </>
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="space-y-4"
          >
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-sm text-gray-700">
                Ruoli in <span className="text-indigo-700">{selectedCategory}</span>
              </h4>
              <button
                className="text-sm text-indigo-600 underline"
                onClick={() => setSelectedCategory(null)}
              >
                ⬅ Torna alle categorie
              </button>
            </div>

            <div className="categorie-ruoli">
              {currentGroup?.roles.map((role) => (
                <motion.button
                  key={role.id}
                  type="button"
                  whileTap={{ scale: 0.96 }}
                  className={`categoria-bottone ${selectedRole === role.id ? "selected" : ""}`}
                  onClick={(e) => handleRoleClick(e, role.id)}
                >
                  {role.id}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default RoleSelector;
