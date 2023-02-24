import { useEffect, useState, } from "react";
// import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function AnimeByGenre() {
    const [ genreName, setGenre] = useState([])


    const { genre } = useParams();

const getData = async () => {
        const response = await fetch(`http://localhost:8000/api/genres/${genre}`);

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
        </tr>
    </thead>
    <tbody>
    {genreName.map(anime => {
    return (
        <tr key={anime.animeId}>
          <td>{anime.animeTitle}</td>
            <img src={anime.animeImg} alt="" />
        </tr>
      );
       })}
    </tbody>
</table>
    );

}

export default AnimeByGenre
