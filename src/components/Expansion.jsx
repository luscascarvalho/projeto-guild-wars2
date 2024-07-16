import React, { useState } from "react";
import { toast } from "react-toastify";
import "./Expansion.css";
import deleteIcon from "../assets/delete-btn.svg";
import DeleteModal from "./DeleteModal";

function Expansion({ name, videos, color, onDeleteVideo }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoToDelete, setVideoToDelete] = useState(null);

  const handleDeleteClick = (index) => {
    setVideoToDelete(index);
    setIsModalOpen(true);
  };

  const handleConfirmDelete = () => {
    onDeleteVideo(name, videoToDelete);
    setIsModalOpen(false);
    toast.success("Vídeo deletado com sucesso!");
  };

  return (
    <div className="expansion" style={{ borderColor: color }}>
      <h2 className="expansion-title" style={{ backgroundColor: color }}>
        {name}
      </h2>
      <div className="videos">
        {videos.map((video, index) => (
          <div
            key={index}
            className="video-container"
            style={{ borderColor: color }}
          >
            <iframe
              className="expansion-videos"
              src={video.url}
              title={`YouTube video player ${index + 1}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="div-btn">
              <button
                className="delete-button"
                onClick={() => handleDeleteClick(index)}
              >
                <img src={deleteIcon} alt="Deletar" />
                Deletar
              </button>
            </div>
          </div>
        ))}
      </div>
      <DeleteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
}

export default Expansion;
