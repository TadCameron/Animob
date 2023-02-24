import { useEffect, useState, } from "react";
import { useParams } from "react-router-dom";
import './anime.css';

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
  <>
  <div className="container" id="one">
    <div className="row">
      <div className="col-12 col-md-8">
        <hr class="my-4"></hr>
          <h1 className="display-4">{detail.animeTitle}</h1>
        <hr class="my-4"></hr>
      <h4>TAGS</h4>
        <h5 className="lead">{detail.genres}</h5>
       <hr class="my-4"></hr>
      <h2>
        <img src={detail.animeImg} alt="" />
      </h2>
    <hr class="my-4"></hr>
      <h5>SYNOPSIS</h5>
        <p className="lead">{detail.synopsis}</p>
      </div>
    </div>
  </div>
  </>
  );

}

export default AnimeDetail
