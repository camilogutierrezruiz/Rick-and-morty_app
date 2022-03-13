import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterList from './CharacterList';
import BoxSeach from './BoxSeach';
import WebsiteLogo from '../assets/logo.png'

const RickAndMortyPage = () => {

  const [nameLocation, setNameLocation] = useState("");
  const [typeLocation, setTypeLocation] = useState("");
  const [dimensionLocation, setDimensionLocation] = useState("");
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState('');
  // const [error, setError] = useState(false);

  useEffect(() => {
    LoadWebsite();
    return (
      LoadWebsite()
    )
  }, []);

  const LoadWebsite = () => {
    const getRandom = Math.floor((Math.random() * 126) + 1);
    axios
      .get(`https://rickandmortyapi.com/api/location/${getRandom}`)
      .then((response) => {
        setNameLocation(response.data.name);
        setTypeLocation(response.data.type);
        setDimensionLocation(response.data.dimension);
        setCharacters(response.data.residents);
      });
  };

  const SearchLocation = () => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${search}`)
      .then((response) => {
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
    alert('Location out of range. Limit locations 126');
    LoadWebsite();
  };

  return (
    <section className={`website__wrapper`}>
      <section className={`searchbox__section`}>
        <div className={`website__logo`}>
          <a href="#" onClick={() => LoadWebsite()}><img src={WebsiteLogo} alt="Rick and Morty logo" /></a>
        </div>
        <BoxSeach
          SearchSectionClass={`searchbar__wrapper`}
          InputClass={`input__searchbar`}
          ButtonClass={`button__searchbar`}
          InputType={'text'}
          InputOnChange={(e) => { setSearch(e.target.value) }}
          InputValue={search}
          ButtonOnClick={() => { SearchLocation() }}
          ButtonTextContent={<i className="fa-solid fa-magnifying-glass"></i>}
        />
      </section>
      <section className={`locationinfo__wrapper`}>
        <section className={`locationinfo__title`}>
          <h1>{nameLocation}</h1>
        </section>
        <section className={`locationinfo__content`}>
          <div className={`locationinfo__items population`}>
            <h2>Population</h2>
            <p>{characters.length}</p>
          </div>
          <div className={`locationinfo__items type`}>
            <h2>Type</h2>
            <p>{typeLocation}</p>
          </div>
          <div className={`locationinfo__items dimension`}>
            <h2>Dimension</h2>
            <p>{dimensionLocation}</p>
          </div>
        </section>
      </section>
      <section className={`characterlist__wrapper`}>
        <CharacterList Characters={characters} />
      </section>
    </section>
  );
};

export default RickAndMortyPage;