import { useEffect, useState, } from "react";
import { useParams } from "react-router-dom";

function AnimeDetail(props) {
    const [ detail, setDetail] = useState({})

    const { animeTitle } = useParams();

    const getData = async () => {
        const response = await fetch(`http://localhost:8000/api/anime-details/?name=${animeTitle}`);

        if (response.ok) {
            const data = await response.json();
            console.log(data)
            setDetail(data)
        }
    }

    useEffect(() => {
        getData()
    }, [])


return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Anime Title</th>

        </tr>
      </thead>
      <img className="img-fluid" src={detail.animeImg} alt="" />
      <tbody>
            <tr key={detail}>
              <td>{detail.animeTitle}</td>
              <td>{detail.synopsis}</td>

            </tr>
      </tbody>
    </table>
  );

}

export default AnimeDetail

// detail info points:
// animeTitle, genres, animeImg, synposis,
