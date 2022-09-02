

const MovieCard = ({ movie }) => {

    return (
        <div className="card" >
            <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`} alt='movie-img' className="img-fluid" />
            </div>
            <div className="card-body">
                <h5 className="card-title text-truncate">{movie.original_title}</h5>
                <p className="card-text text-truncate">{movie.overview}</p>
                <div className="d-flex justify-content-between align-items-center">
                    {/* <button type="button" className="btn btn-danger">Delete</button> */}
                    <h2><span className="badge text-bg-info text-white">{movie.vote_average}</span></h2>
                </div>
            </div>
        </div>
    )
}

export default MovieCard