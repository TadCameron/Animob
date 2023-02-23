import { useEffect, useState, } from "react";
import { Link } from "react-router-dom";

function GenreList() {
    const [ genres, setGenre] = useState([])


const getData = async () => {
        const response = await fetch(`http://localhost:8000/api/genres/`);

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
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Location</th>
                </tr>
            </thead>
            <tbody>
                {genres.map(genre => {
                    return (
                        <tr key={genre}>
                            <td>
                                <Link to={`/genre/${genre}`}>{genre}</Link>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );

}

export default GenreList
