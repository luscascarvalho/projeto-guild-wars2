import React, { useState } from "react";
import "./AddVideo.css";

function AddVideo({ expansions, onAddVideo }) {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("#ffffff");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedUrl = url.includes("embed")
      ? url
      : `https://www.youtube.com/embed/${url.split("v=")[1]}`;

    const newVideo = {
      title,
      url: formattedUrl,
      category: newCategory || category,
      description,
      color,
    };

    onAddVideo(newVideo);

    setTitle("");
    setUrl("");
    setCategory("");
    setNewCategory("");
    setDescription("");
    setColor("#ffffff");
  };

  return (
    <div className="main-container">
      <h2>NOVO VÍDEO</h2>
      <p>
        Complete o formulário para adicionar um novo vídeo ou para criar uma
        nova categoria.
      </p>
      <h3>Criar Card</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nova Categoria:</label>
          <input
            type="text"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            placeholder="Deixe vazio para usar uma categoria existente"
          />
        </div>
        <div>
          <label>Categoria Existente:</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            disabled={newCategory}
          >
            <option value="">Selecione uma categoria</option>
            {expansions.map((expansion) => (
              <option key={expansion.name} value={expansion.name}>
                {expansion.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>URL:</label>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        {newCategory && (
          <div>
            <label>Cor da Nova Categoria:</label>
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </div>
        )}
        <button type="submit">Adicionar Vídeo</button>
      </form>
    </div>
  );
}

export default AddVideo;
