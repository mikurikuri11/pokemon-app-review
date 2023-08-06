import { useState, useEffect } from 'react';
import Card from './components/Card';
import { getAllPokemon, loadingPokemon } from './utils/pokemon';

function App() {

  const initialURL = 'https://pokeapi.co/api/v2/pokemon?limit=151';

  // const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pokemonRecord, setPokemonRecord] = useState([]);
  const [nextPage, setNextPage] = useState('');
  const [prevPage, setPrevPage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      // すべてのポケモンのデータを取得
      let response = await getAllPokemon(initialURL);
      // ポケモンの詳細なデータを取得
      let pokemon = await loadingPokemon(response.results);
      setNextPage(response.next);
      setPokemonRecord(pokemon);
      setLoading(false);
      console.log(response);
    }
    fetchData();
  }, []);

  const handleNextPage = async () => {
    let data = await getAllPokemon(nextPage);
    let pokemon = await loadingPokemon(data.results);
    setNextPage(data.next);
    setPrevPage(data.previous);
    setPokemonRecord(pokemon);
  }

  const handlePrevPage = async () => {
    let data = await getAllPokemon(prevPage);
    let pokemon = await loadingPokemon(data.results);
    setNextPage(data.next);
    setPrevPage(data.previous);
    setPokemonRecord(pokemon);
  }

  return (
    <div className="text-center w-full h-full mt-6">
      <h1 className="text-3xl font-bold underline">
        ポケモン図鑑
      </h1>
      <div className='inline-flex mt-8'>
        <button className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold text-2xl py-2 px-4 rounded-l' onClick={handlePrevPage}>Prev</button>
        <button className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold text-2xl py-2 px-4 rounded-l' onClick={handleNextPage}>Next</button>
      </div>
      <div className='grid grid-cols-4 place-items-center gap-20 mt-10 text-2xl mx-5'>
        {loading ? (
          <h1 className='font-bold text-4xl'>Loading...</h1>
          ) : (
            pokemonRecord.map((pokemon, index) => <Card pokemon={pokemon} key={index} />)
          )}
      </div>
    </div>
  );
}

export default App;
