import { useState }from 'react'
import {useAuthContext} from '../components/useToken'


function FavoritesIcon(props) {
    const [ favorites, setFavorites ] = useState(props.favorites);
    const [ animeId, setAnimeId ] = useState(props.animeId);
    const [ animeTitle, setAnimeTitle ] = useState(props.animeTitle);
    const [ animeImg, setAnimeImg ] = useState(props.animeImg);
    const { token } = useAuthContext();

    function PlusMinusButton() {
        if (favorites === false){
            return(<p>+</p>)
        } else {
            return(<p>-</p>)
        }

    }

    async function addToFavorites() {
        if (favorites === false) {
            const URL = (`${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/api/favorites`);
            const favResponse = await fetch(URL, {method: 'POST', headers: {Authorization: `Bearer ${token}`}, body: JSON.stringify({animeId, animeTitle, animeImg
            }), credentials: 'include'});
            if (favResponse.ok) {
                setFavorites(true);
            }
        } else {
            const URL = (`${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/api/favorites`);
            const favResponse = await fetch(URL, {method: 'DELETE', headers: {Authorization: `Bearer ${token}`}, body: JSON.stringify({animeId, animeTitle, animeImg
            }), credentials: 'include'});

            if (favResponse.ok) {
                setFavorites(false);
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

