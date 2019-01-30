import React from 'react';

const Character = props => {
  const { characters, handleChange} = props;
  // console.log(characters);
  const characterList = characters.map(character => {
    return <option key={character.id} value={character.name}>{character.name}</option>
  })
  return (
    <React.Fragment>
        <select onChange={handleChange} >
          <option value=''>Please select a character</option>
          {characterList}
        </select>

    </React.Fragment>
  )
}

export default Character;