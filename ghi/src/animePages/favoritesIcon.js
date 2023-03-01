import { useState } from "react";
import { useToken } from "../components/useToken";

function FavoritesIcon(props) {
  const [favorites, setFavorites] = useState(props.favorites);
  const [animeId, setAnimeId] = useState(props.animeId);
  const [animeTitle, setAnimeTitle] = useState(props.animeTitle);
  const [animeImg, setAnimeImg] = useState(props.animeImg);
  const [found, setFound] = useState(false);
  const { token } = useToken();

  function PlusMinusButton() {
    for (const anime of props.favorites) {

      if (anime["animeId"] === animeId) {
        setFound(true);
        break;
      }
    }
    if (found === false) {
      return <p>+</p>;
    } else {
      return <p>-</p>;
    }
  }

  async function addToFavorites() {
    if (found === false) {
      const URL = `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/api/favorites`;
      console.log(token)
      console.log({props})
      const favResponse = await fetch(URL, {
        method: "POST",
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
          animeId: props.animeId,
          animeTitle: props.animeTitle,
          animeImg: props.animeImg,
        }),
        credentials: "include",
      });
      if (favResponse.ok) {
        setFavorites(true);
      }
    } else {
      let favId = "";
      for (const anime of props.favorites) {
        if (anime["animeId"] === animeId) {
          favId = anime["id"];
          break;
        }
      }
      const URL = `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/api/favorites/${favId}`;
      const favResponse = await fetch(URL, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
      });
      if (favResponse.ok) {
        props.getData();
      }
    }
  }

  return (
    <button onClick={addToFavorites}>
      <PlusMinusButton />
    </button>
  );
}
export default FavoritesIcon;
