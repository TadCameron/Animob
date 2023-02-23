import { useEffect, useState, } from "react";
import { useParams } from "react-router-dom";

function AnimeDetail(props) {
    const [ title, setTitle] = useState("")
    const [ genre, setGenre] = useState("")
    const [ animeImg, setAnimeImg] = useState("")
    const [ synopsis, setSynopsis] = useState("")

    const { animeTitle } = useParams();

    const getData = async () => {
        const response = await fetch(`http://localhost:8000/api/anime-details/?name=${animeTitle}`);

        if (response.ok) {
            const data = await response.json();
            console.log(data)
            setTitle(data.animeTitle)
            setGenre(data.genre)
            setAnimeImg(data.animeImg)
            setSynopsis(data.synopsis)
        }
    }

    useEffect(() => {
        getData()
    }, [])




}

export default AnimeDetail

// detail info points:
// animeTitle, genres, animeImg, synposis,
