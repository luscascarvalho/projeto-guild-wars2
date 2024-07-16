import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import AddVideo from "./AddVideo";
import Expansion from "./components/Expansion";
import "./App.css";
import Footer from "./components/Footer";

function Home({ expansions, onDeleteVideo }) {
  return (
    <div className="App">
      <section className="main-section">
        <div className="section-div">
          <h1>Guild Wars 2</h1>
          <h2>Nova expansão do Guild Wars 2</h2>
          <p>
            Explore novas terras, empunhe uma lança em combate e teste-se em
            encontros desafiadores em Guild Wars 2: Janthir Wilds. A mais nova
            aventura no mundo de Tyria acontecerá ao longo de quatro lançamentos
            trimestrais: um ano de conteúdo, atualizações de recursos e muito
            mais.
          </p>
        </div>
        <iframe
          className="video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/EK3DCrUtjNU"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>
      <section className="expansions-section">
        {expansions.map((expansion, index) => (
          <Expansion
            key={index}
            name={expansion.name}
            videos={expansion.videos}
            color={expansion.color}
            onDeleteVideo={onDeleteVideo}
          />
        ))}
      </section>
    </div>
  );
}

function App() {
  const [expansions, setExpansions] = useState([
    {
      name: "Heart Of Thorns",
      color: "red",
      videos: [
        { url: "https://www.youtube.com/embed/GpeLj-fDK-4" },
        { url: "https://www.youtube.com/embed/IOUk2y0K2m8" },
        { url: "https://www.youtube.com/embed/ysWb5NMQagE" },
      ],
    },
    {
      name: "Path of Fire",
      color: "blue",
      videos: [
        { url: "https://www.youtube.com/embed/cGZ4X7cER8k" },
        { url: "https://www.youtube.com/embed/iaY9rTnssuw" },
        { url: "https://www.youtube.com/embed/FcztlI-bIuI" },
      ],
    },
  ]);

  const addVideoToExpansion = (newVideo) => {
    setExpansions((prevExpansions) => {
      const expansionIndex = prevExpansions.findIndex(
        (expansion) => expansion.name === newVideo.category
      );

      if (expansionIndex !== -1) {
        const updatedExpansions = [...prevExpansions];
        updatedExpansions[expansionIndex].videos.push({
          url: newVideo.url,
        });
        toast.success("Vídeo adicionado com sucesso!");
        return updatedExpansions;
      } else {
        toast.success("Nova categoria criada e vídeo adicionado!");
        return [
          ...prevExpansions,
          {
            name: newVideo.category,
            color: newVideo.color,
            videos: [{ url: newVideo.url }],
          },
        ];
      }
    });
  };

  const deleteVideoFromExpansion = (expansionName, videoIndex) => {
    setExpansions((prevExpansions) => {
      const updatedExpansions = prevExpansions
        .map((expansion) => {
          if (expansion.name === expansionName) {
            const updatedVideos = expansion.videos.filter(
              (_, index) => index !== videoIndex
            );
            return { ...expansion, videos: updatedVideos };
          }
          return expansion;
        })
        .filter((expansion) => expansion.videos.length > 0);

      return updatedExpansions;
    });
  };

  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              expansions={expansions}
              onDeleteVideo={deleteVideoFromExpansion}
            />
          }
        />
        <Route
          path="/add-video"
          element={
            <AddVideo
              expansions={expansions}
              onAddVideo={addVideoToExpansion}
            />
          }
        />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
