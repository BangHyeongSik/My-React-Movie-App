import { useState, useEffect, useCallback } from "react";
import { Link, useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState();
  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setMovie(json.data.movie);
    setLoading(false);
  }, [id]);
  useEffect(() => {
    getMovie();
  }, [getMovie]);
  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div>
          <img alt={movie.title} src={movie.medium_cover_image} />
          <h2>
            <Link to={`/`}>{movie.title}</Link>
          </h2>
          <p>{movie.description_full}</p>
          <ul>
            {movie.genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Detail;
