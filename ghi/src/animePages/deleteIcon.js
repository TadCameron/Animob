import { useState } from "react";
import { useToken } from "../components/useToken";

function DeleteIcon(props) {
  const [favorites, setFavorites] = useState(props.favorites);
  const [animeId, setAnimeId] = useState(props.animeId);
  const [animeTitle, setAnimeTitle] = useState(props.animeTitle);
  const [animeImg, setAnimeImg] = useState(props.animeImg);
  const [found, setFound] = useState(false);
  const { token } = useToken();

  function MinusButton() {
    return <p>-</p>;
  }

  async function removeFromFavorites() {
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
    }
  }

  return (
    <button onClick={removeFromFavorites} id="plusminus">
      <MinusButton />
    </button>
  );
}
export default DeleteIcon;
