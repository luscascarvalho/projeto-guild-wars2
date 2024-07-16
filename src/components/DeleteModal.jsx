import React from "react";
import "./DeleteModal.css";

function DeleteModal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Tem certeza que deseja deletar este vídeo?</h3>
        <div className="modal-actions">
          <button onClick={onConfirm}>Sim</button>
          <button onClick={onClose}>Cancelar</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
