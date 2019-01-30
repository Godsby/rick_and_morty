import React from 'react';

const Displaycharacter = ({ characters, characterSelected}) => {
  // console.log(characters, characterSelected)
  const characterItem = characters.map(character => {
    if (characterSelected === character.name) {
      return (
        <>
          <h3>Name: {character.name}</h3>
          <p>Status: {character.status}</p>
          <p>Gender: {character.gender}</p><br /> <br /><hr />
          <img src={character.image} alt=''/>
        </>
      )
    }
    return null 
  })
  return (
    <>
      {characterItem}
    </>
  )
}

export default Displaycharacter;