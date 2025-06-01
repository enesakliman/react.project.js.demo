// src/components/Modal.jsx
import React from "react";
import PropTypes from "prop-types";

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl w-full max-w-md max-h-[90vh] overflow-y-auto shadow-lg-soft relative flex flex-col">
        <div className="flex justify-end p-3 border-b">
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800 text-2xl font-semibold cursor-pointer"
          >
            &times;
          </button>
        </div>
        <div className="p-6 flex-1 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
