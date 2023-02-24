import { useEffect, useState, } from "react";
import { Link } from "react-router-dom";

function GenreList() {
    const [ genres, setGenre] = useState([])


const getData = async () => {
        const response = await fetch(`${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/api/genres`);

        if (response.ok) {
            let data = await response.json();
            console.log(data)
            setGenre(data)
        }
    }

    useEffect(() => {
        getData()
    }, [])

     return (
        <>
        <div className="animegenrecontainer">
            <h1 id="genreheader">GENRES</h1>
            <div className="row row-cols-2 row-cols-md-3 g-4">
                {genres.map(genre => {
                    return (
                        <div key={genre}>
                            <div className="col d-flex">
                                <div className="card" id="genrecard">
                                    <div className="card-body">
                                    <h5 className="card-title"><Link to={`/genres/${genre}`}>{genre}</Link></h5>
                                 </div>
                            </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
        </>
    );

}

export default GenreList
