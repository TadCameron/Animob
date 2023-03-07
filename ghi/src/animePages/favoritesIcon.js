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
  const [favorites, setFavorites] = useState([]);
  const [animeId, setAnimeId] = useState(null);
  const [animeTitle, setAnimeTitle] = useState("");
  const [animeImg, setAnimeImg] = useState("");
  const [found, setFound] = useState(false);
  const { token } = useToken();

  useEffect(() => {
    if (Array.isArray(props.favorites)) {
      setFavorites(props.favorites);
      for (const anime of props.favorites) {
        if (anime["animeId"] === animeId) {
          setFound(true);
          break;
        }
      }
    }
  }, [props.favorites]);

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
        setFavorites((prevFavorites) => [
          ...prevFavorites,
          {
            animeId: props.animeId,
            animeTitle: props.animeTitle,
            animeImg: props.animeImg,
          },
        ]);
        setFound(true);
        props.getData();
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
        setFavorites((prevFavorites) =>
          prevFavorites.filter((anime) => anime.animeId !== animeId)
        );
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
