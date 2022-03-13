import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterEpisodesWhereApear from './CharacterEpisodesWhereApear';

const CharacterCard = ({ CharacterInfo }) => {

  const [characterName, setCharacterName] = useState('')
  const [characterImg, setCharacterImg] = useState('');
  const [characterGender, setCharacterGender] = useState('');
  const [characterType, setCharacterType] = useState('');
  const [characterStatus, setCharacterStatus] = useState('');
  const [characterSpecie, setCharacterSpecie] = useState('');
  const [characterOrigin, setCharacterOrigin] = useState('');
  const [episodeList, setEpisodeList] = useState([])

  useEffect(() => {
    axios.get(CharacterInfo).then(response => {
      setCharacterName(response.data.name);
      setCharacterImg(response.data.image);
      setCharacterGender(response.data.gender);
      setCharacterType(response.data.type);
      setCharacterStatus(response.data.status);
      setCharacterSpecie(response.data.species);
      setCharacterOrigin(response.data.origin.name);
      setEpisodeList(response.data.episode);
    });
  }, [CharacterInfo]);

  return (
    <div>
      <img src={characterImg} alt="" />
      <h2>{characterName}</h2>
      <p><b>Gender: </b>{characterGender}</p>
      <p><b>Type: </b>{characterType === "" ? 'unknown' : `${characterType}`}</p>
      <p><b>Status: </b>{characterStatus}</p>
      <p><b>Specie: </b>{characterSpecie}</p>
      <p><b>Origin: </b>{characterOrigin}</p>
      <p><b>Episodes where appear: </b>{episodeList.length}</p>
      <CharacterEpisodesWhereApear
        ListEpisodes={episodeList}
      />
    </div>
  );
};

export default CharacterCard;