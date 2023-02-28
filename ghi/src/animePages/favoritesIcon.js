import { useState }from 'react'
import {useAuthContext} from '../components/useToken'


function FavoritesIcon(props) {
    const [ favorites, setFavorites ] = useState(props.favorites);
    const [ animeId, setAnimeId ] = useState(props.animeId);
    const [ animeTitle, setAnimeTitle ] = useState(props.animeTitle);
    const [ animeImg, setAnimeImg ] = useState(props.animeImg);
    const { token } = useAuthContext();
    const [ found, setFound ] = useState(false);
    console.log(props.favorites);
    // console.log(props.animeId);

    function PlusMinusButton() {
        for (const anime of props.favorites){
            // console.log(anime)
            // console.log(animeId)
        if (anime['animeId'] === animeId){
            setFound(true);
        } if (found === false) {
            return (<p>+</p>)
        }

        }
    }

    }

    async function addToFavorites() {
        console.log('hello')
        if (favorites === false) {
            const URL = (`${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/api/favorites`);
            const favResponse = await fetch(URL, {method: 'POST', headers: {Authorization: `Bearer ${token}`}, body: JSON.stringify({animeId, animeTitle, animeImg
            }), credentials: 'include'});
            if (favResponse.ok) {
                setFavorites(true);
            }
        } else {
            const URL = (`${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/api/favorites`);
            const favResponse = await fetch(URL, {method: 'DELETE', headers: {Authorization: `Bearer ${token}`}, credentials: 'include'});
            if (favResponse.ok) {
                const data = await favResponse.json();
                for (let i = 0; i < data.length; i++) {
                    if (data[i]["favorite_id"] === props.favorite_id) {
                        const favorite_id = data[i]["favorite_id"];
                        const url = `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/api/favorites/${favorite_id}`
                        const response = await fetch(url, {
                            method: "DELETE", headers: {
                                'accept': 'application/json'
                            }
                        });
                        if (response.ok) {
                            setFavorites(false);

            // if (favResponse.ok) {
            //     setFavorites(false);
                        };
                    };
                };

            }
        }

    }
    return (
        <button onClick={addToFavorites}>
        <PlusMinusButton/>
        </button>
        )
}

export default FavoritesIcon;
