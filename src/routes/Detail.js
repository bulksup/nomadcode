import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";


function Detail() {
    const [loading, setLoading] = useState(true);
    const [movieDetail, setMovieDetail] = useState([]);

    const { id } = useParams();
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json);

        setMovieDetail(json.data.movie);
        setLoading(false);
    };

    useEffect(() => {
        getMovie();
    }, []);

    console.log(movieDetail);

    return (
        <div>
            {loading ? <h1>Loading...</h1> :
                (
                    <div>
                        <MovieDetail
                            coverImg={movieDetail.medium_cover_image}
                            title={movieDetail.title}
                            genres={movieDetail.genres}
                            url={movieDetail.url}
                        />
                    </div>
                )}
        </div >
    );
}

export default Detail;