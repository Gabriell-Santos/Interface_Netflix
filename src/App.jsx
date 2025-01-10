import React, { useEffect, useState } from "react";
import Tmdb from "./Tmdb";
import MovieRow from "./components/MovieRow/index";
import FeaturedMovie from "./components/FeaturedMovie/index";
import Header from "./components/Header/index";  
import "./App.css";

const App = () => {
  const [MovieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setbackHeader] = useState(false);

  useEffect(() => {
    const LoadAll = async () => {
      // Pegando a Lista total
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      // Pegando o Featured
      let originals = list.filter((item) => item.slug === "originals");
      let RandoChosen = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );
      let chosen = originals[0].items.results[RandoChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, "tv");
      setFeaturedData(chosenInfo); // Usando o setFeaturedData para atualizar o estado
    };

    LoadAll();
  }, []);

  // Evento de Monitoramento de Scroll
  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setbackHeader(true); // Atualiza o estado quando rolar a página
      } else {
        setbackHeader(false); // Reseta o estado
      }
    };
    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <div className="page">
      <Header black={blackHeader} />  
      {featuredData && <FeaturedMovie item={featuredData} />}
      <section className="lists">
        {MovieList.map((item, key) => {
          return <MovieRow key={key} title={item.title} type={item.items} />;
        })}
      </section>

      {MovieList.length <= 0 &&
      <div className="Loading">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ0AAACUCAMAAAC+0owFAAAAaVBMVEUAAAD/AAAVAADuAAC3AAANAAAvAAASAAArAABkAAD1AADfAADWAACBAAAlAADrAAA3AAC+AADNAAA/AACuAAAzAABXAAAfAABLAAB1AACZAACGAADFAACTAACoAAAoAABqAABFAABdAADPnF00AAABRklEQVR4nO3YaW7qMBSA0ToD0DRpIGUMQ4H9L/Lx/pDs4FrqOSv4ZFke7scHAAAAAAAAAAAAAAAAAACTelkUxyK6IguH3WlTppfokAys7tX/lWiapo9OCVd/bl4r8dVW47lbRMdE+x7L1F+uP9EdWVhXqdmc6uiMPCwuqT9/R1fkYkjtZ3RDNjapPUY3ZKNLpdPzrUwW422bxuiEjJQe4pMxnaITMvKVltEJ+ViXW0/Qty55d01uaR2dkJFLv4tOyEjbrqITMtIOv9EJGRkGe2NStX9+7jdz7d0pk2fjAztT3qMLcjJUXuaTfTIenumv0QU52adDdEJOhiq6ICu96dfMvjfjmOmGe3RCTrqqi07IyfN2c7NM1t3WWTopHt22sz/eitX+Op7vj7pe7CzLy3JZHx7Po58LAAAAAAAAAAAAAAAAAMA/t7AJsc6xRrkAAAAASUVORK5CYII=" alt="Carregando" />
      </div>
      }
    </div>
  );
};

export default App;
