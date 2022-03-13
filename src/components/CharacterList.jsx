import React from 'react';
import CharacterCard from './CharacterCard';

const CharacterList = ({ Characters }) => {

  return (
    <div>
      {
        Characters.map((character) => (
          <CharacterCard
            key={character}
            CharacterInfo={character}
          />
        ))
      }
    </div>
  );
};

export default CharacterList;