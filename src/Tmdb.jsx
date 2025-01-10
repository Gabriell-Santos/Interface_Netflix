  // Chave da Api
  const API_Key = `59fa8e9ebe496b8d720f2ba99378cb7e`;
  // Corpo base da Api
  const API_BASE = `https://api.themoviedb.org/3`;

  const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json; // retorna os dados da requisição
  };

  export default {
    getHomeList: async () => {
      return [
        {
          slug: "originals",
          title: "Originais da Netflix",
          items: await basicFetch(
            `/discover/tv?with_network=213&language=pt-BR&api_key=${API_Key}`
          ),
        },

        {
          slug: "trending",
          title: "Recomendados para você",
          items: await basicFetch(
            `/trending/all/week?language=pt-BR&api_key=${API_Key}`
          ),
        },

        {
          slug: "toprated",
          title: "Em Alta",
          items: await basicFetch(
            `/movie/top_rated?language=pt-BR&api_key=${API_Key}`
          ),
        },

        {
          slug: "action",
          title: "Ação",
          items: await basicFetch(
            `/discover/movie?with_genres=28&language=pt-BR&api_key=${API_Key}`
          ),
        },

        {
          slug: "comedy",
          title: "Comédia",
          items: await basicFetch(
            `/discover/movie?with_genres=35&language=pt-BR&api_key=${API_Key}`
          ),
        },

        {
          slug: "horror",
          title: "Terror",
          items: await basicFetch(
            `/discover/movie?with_genres=27&language=pt-BR&api_key=${API_Key}`
          ),
        },

        {
          slug: "romance",
          title: "Romance",
          items: await basicFetch(
            `/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_Key}`
          ),
        },

        {
          slug: "documentary",
          title: "Documentários",
          items: await basicFetch(
            `/discover/movie?with_genres=99&language=pt-BR&api_key=${API_Key}`
          ),
        },
      ];
    },
    getMovieInfo: async (movieid, type) =>{
      let info = {}

      if(movieid){

        switch(type){
          case "movie":
            info = await basicFetch(`/movie/${movieid}?language=pt-BR&api_key=${API_Key}`)
          break;
          case "tv":
            info = await basicFetch(`/tv/${movieid}?language=pt-BR&api_key=${API_Key}`)
          break
          default:
            info = null
            break
        }

      }


      return info
    }
  };

