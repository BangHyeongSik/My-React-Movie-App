import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Movie = ({ id, coverImg, title, summary, genres }) => {
  const maxLength = 200;
  return (
    <div>
      <img alt={title} src={coverImg} />
      <h2>
        <Link to={`movie/${id}`}>{title}</Link>
      </h2>
      <p>
        {summary.length > maxLength
          ? `${summary.slice(0, maxLength)}...`
          : summary}
      </p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
