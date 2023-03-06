import { useEffect, useState } from "react";
import { useToken } from "../components/useToken";

function PlusMinusButton(props) {
  const { found } = props;
  if (found === false) {
    return <p>+</p>;
  } else {
    return <p>-</p>;
  }
}

function FavoritesIcon(props) {
  const [favorites, setFavorites] = useState(props.favorites);
  const [animeId, setAnimeId] = useState(props.animeId);
  const [animeTitle, setAnimeTitle] = useState(props.animeTitle);
  const [animeImg, setAnimeImg] = useState(props.animeImg);
  const [found, setFound] = useState(false);
  const { token } = useToken();

  useEffect(() => {
    for (const anime of props.favorites) {
      if (anime["animeId"] === animeId) {
        setFound(true);
        break;
      }
    }
  }, []);

  async function addToFavorites() {
    if (found === false) {
      const URL = `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/api/favorites`;
      console.log(token);
      console.log({ props });
      const favResponse = await fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          animeId: props.animeId,
          animeTitle: props.animeTitle,
          animeImg: props.animeImg,
        }),
        credentials: "include",
      });
      if (favResponse.ok) {
        setFavorites(true);
        setFound(true);
        alert(`Added to favorites!`);
      } else {
        alert(`Failed to add to favorites.`);
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
        alert(`Removed from favorites!`);
        setFound(false);
        props.getData();
      }
    }
  }

  return (
    <button onClick={addToFavorites} id="plusminus">
      <PlusMinusButton found={found} />
    </button>
  );
}
export default FavoritesIcon;
