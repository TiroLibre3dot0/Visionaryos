import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { X } from "lucide-react";

const EsperienzaModal = ({ isOpen, onClose, children }) => {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        {/* Sfondo oscurato */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
        </Transition.Child>

        {/* Contenuto Modale */}
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-150"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all space-y-4">
              <div className="flex justify-between items-center border-b pb-2">
                <Dialog.Title className="text-lg font-semibold text-gray-800">
                  Aggiungi nuova esperienza
                </Dialog.Title>
                <button
                  type="button"
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-700 transition"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Forza rimontaggio dei figli al cambio visibilità */}
              <div key={isOpen ? "open" : "closed"}>
                {children}
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default EsperienzaModal;
