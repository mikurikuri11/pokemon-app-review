export const getAllPokemon = async (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        resolve(data);
      });
  });
}

export const loadingPokemon = async (data) => {
  let pokemon = await Promise.all(
    data.map(async pokemon => {
      let pokemonRecord = await getAllPokemon(pokemon.url);
      console.log(pokemonRecord);
      return pokemonRecord;
    })
  );
  return pokemon;
}