import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterList from './CharacterList';
import BoxSeach from './BoxSeach';

const RickAndMortyPage = () => {

  const [idLocation, setIdLocation] = useState(0);
  const [nameLocation, setNameLocation] = useState("");
  const [typeLocation, setTypeLocation] = useState("");
  const [dimensionLocation, setDimensionLocation] = useState("");
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState('');
  // const [error, setError] = useState(false);

  useEffect(() => {
    const getRandom = Math.floor((Math.random() * 126) + 1);
    axios
      .get(`https://rickandmortyapi.com/api/location/${getRandom}`)
      .then((response) => {
        setIdLocation(response.data.id);
        setNameLocation(response.data.name);
        setTypeLocation(response.data.type);
        setDimensionLocation(response.data.dimension);
        setCharacters(response.data.residents);
      });
  }, []);

  const SearchLocation = () => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${search}`)
      .then((response) => {
        setIdLocation(response.data.id);
        setNameLocation(response.data.name);
        setTypeLocation(response.data.type);
        setDimensionLocation(response.data.dimension);
        setCharacters(response.data.residents);
      })
      .catch(error => {
        console.log(error.data)
        if (error.data === undefined) {
          getError();
        };
      })
  };

  const getError = () => {
    alert('Location out of range. Limit locations 126')
  };

  return (
    <section className={`website__wrapper`}>
      <section>
        <BoxSeach
          InputType={'text'}
          InputOnChange={(e) => { setSearch(e.target.value) }}
          InputValue={search}
          ButtonOnClick={() => { SearchLocation() }}
          ButtonTextContent={<i className="fa-solid fa-magnifying-glass"></i>}
        />
      </section>
      <section>
        <p>{idLocation}</p>
        <p>{nameLocation}</p>
        <p>{`Polulation: ${characters.length}`}</p>
        <p>{`Type: ${typeLocation}`}</p>
        <p>{`Dimension: ${dimensionLocation}`}</p>
      </section>
      <section>
        <CharacterList Characters={characters} />
      </section>
    </section>
  );
};

export default RickAndMortyPage;