import { useState, useEffect } from "react";
import "./pokemon_2.css";


const PokemonCard = ({ name, image }) => {
  return (
    <div className="poke-card">
      <img className="poke-img" src={image} alt={name} />
      <h3>{name}</h3>
    </div>
  );
};

const Pokemon_2 = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
        const data = await response.json();


        const details = await Promise.all(
          data.results.map(async (p) => {
            const res = await fetch(p.url);
            return res.json();
          })
        );

        setPokemon(details);

        setTimeout(() => {
          setLoading(false);
        }, 1500);
      } catch (err) {
        console.error(err);
      }
    };

    fetchPokemon();
  }, []);

  return (
    <div className="poke-container">
      <h1 className="poke-h1">Pokédex</h1>


      {loading 
      ?
       (
      <div className="poke-grid">
        {Array.from({ length: 1025 }).map((_, i) => (
        <div key={i} className="poke-card skeleton">
            <div className="poke-sk-img"></div>
            <div className="poke-sk-text"></div>
        </div>
        ))}
      </div>
    ) : (
        <div className="poke-grid">
          {pokemon.map((p) => (
            <PokemonCard
              key={p.id}
              name={p.name}
              image={p.sprites.front_default}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Pokemon_2;