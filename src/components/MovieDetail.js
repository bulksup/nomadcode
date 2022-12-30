import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function MovieDetail({ coverImg, title, genres, url }) {
    console.log("in MovieDetail components : ", { coverImg, title, genres, url });
    return (
        <div>
            <hr />
            <img src={coverImg} alt={title} />
            <h2>
                <a href={url}>{title}</a>
            </h2>
            <ul>
                {genres.map((g) => (
                    <li key={g}>{g}</li>
                ))}
            </ul>
        </div>
    )
}

MovieDetail.propTypes = {
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    url: PropTypes.string.isRequired,
}

export default MovieDetail;