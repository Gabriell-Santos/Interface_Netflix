import React from "react";
import "./style.css";

const FeaturedMovie = ({ item }) => { 

  // Data de Lançamento 
  let firsDate = new Date(item.first_air_date);

  // Lista de gêneros
  let genres = [];
  for(let i in item.genres){
    genres.push(item.genres[i].name)
  }

  let description = item.overview;
  
  // Verificação de texto 
  if(description.length > 250){
    description = description.substring(0, 250)+'....'
  }

  return (
    <section
      className="featured"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path}) `,
      }}
    >
      <div className="feature--vertical">
        <div className="feature--horizontal">
          <div className="feature--name"> {item.original_name}</div>
          <div className="feature--info">
            <div className="feature--points"> {item.vote_average} Pontos</div>
            <div className="feature--year"> {firsDate.getFullYear()} </div>
            <div className="feature--seasons">
              {" "}
              {item.number_of_seasons} Temporada
              {item.number_of_seasons !== 1 ? "s" : ""}{" "}
            </div>
            <div className="feature--description">{description}</div>
            <div className="feature--buttons">
            <a href={`/watch/${item.id}`} className="feature--wacthbutton" > ► Assistir</a>
            <a href={`/list/add/${item.id}`} className="feature--mylistbutton" > + Minha Lista</a>
            </div>
            <div className="feature--genres"><strong>Gêneros:</strong> {genres.join(', ')} </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMovie;
