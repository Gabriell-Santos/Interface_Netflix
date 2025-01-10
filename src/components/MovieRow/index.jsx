import React,{useState} from "react";
import "./style.css";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default ({ title, type }) => {

  const [scrollx, setscollx] = useState(-1)

  const handleftArrow = () => {
    let x = scrollx + (window.innerWidth / 2)
    if(x > 0){
      x = 0
    }
    setscollx(x)
  }

const handrightArrow = () => {
    let x = scrollx - (window.innerWidth / 2 )
    let listw = type.results.length * 150
    if ((window.innerWidth - listw) > x){
      x = (window.innerWidth - listw) - 60
    }
    setscollx(x)
}


  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movieRow--left" onClick={handleftArrow}>
      <ArrowBackIcon style={{fontSize:50}} />
      </div>
      <div className="movieRow--right" onClick={handrightArrow} >
        <ArrowForwardIcon style={{fontSize:50}} />
      </div>

      <div className="movieRow--listarea">
        <div className="movieRow--list" style={{
          marginLeft:scrollx,
          width:type.results.length * 150
        }}>
          {type.results.length > 0 &&
            type.results.map((item, key) => {
              return (
                <div className="movieRow--item" key={key}>
                  <img
                    src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                    alt="Capa do Filme"
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
