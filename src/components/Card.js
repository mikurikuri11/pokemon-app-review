import React from 'react'

const Card = ({ pokemon }) => {
  return (
    <div className='w-400px h-200px shadow-md rounded-14 bg-rgb(210, 243, 251) bg-white'>
      <div className='p-10'>
        <div className='flex items-center justify-center'>
          <img src={pokemon.sprites.front_default} alt='pokemon'></img>
        </div>
        <div>
          <h3 className='font-bold'>{pokemon.name}</h3>
          <div>タイプ</div>
          {pokemon.types.map((type, index) => {
            return <div key={index}>{type.type.name}</div>
          }
          )}
          <div>高さ：{pokemon.height}</div>
          <div>重さ：{pokemon.weight}</div>
          <div>アビリティ：{pokemon.abilities[0].ability.name}</div>
        </div>
      </div>
    </div>
  )
}

export default Card
