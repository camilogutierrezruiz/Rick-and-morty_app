import axios from 'axios';
import React, { useEffect, useState } from 'react';

const CharacterEpisode = ({ Episode }) => {

  const [episodeName, setEpisodeName] = useState('')
  const [episodeSE, setEpisodeSE] = useState('');

  useEffect(() => {
    axios
      .get(Episode)
      .then((response) => {
        setEpisodeName(response.data.name);
        setEpisodeSE(response.data.episode);
      });
  }, [Episode]);

  return (
    <div>
      <>
        {`${episodeSE} / ${episodeName}`}
      </>
    </div>
  );
};

export default CharacterEpisode;