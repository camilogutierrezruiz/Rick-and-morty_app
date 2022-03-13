import { useEffect, useState } from "react";
import CharacterEpisode from "./CharacterEpisode";

const CharacterEpisodesWhereApear = ({ ListEpisodes }) => {

  const [random, setRandom] = useState(0)

  useEffect(() => {
    setRandom(getRandom());
    return (
      setRandom(getRandom)
    );
  }, []);

  const getRandom = () => {
    const random = Math.floor(Math.random() * 1000);
    return random;
  };

  return (
    <div>
      {ListEpisodes.map((episode) => (
        <CharacterEpisode
          key={`${episode.id}${random}`}
          Episode={episode}
        />
      ))}
    </div>
  );
};

export default CharacterEpisodesWhereApear;