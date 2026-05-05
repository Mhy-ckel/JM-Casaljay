import { useEffect, useState } from "react";
import "./pokemon.css";

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="Pokh1emon-card">
      <img className="Pokh1emon-img" src={pokemon.image} alt={pokemon.name} />
      <h3>{pokemon.name}</h3>
      <p>Type: {pokemon.type}</p>
      <p>Level: {pokemon.level}</p>
      <p>Power: {pokemon.power}</p>
    </div>
  );
};

const PokemonList = ({ list }) => {
  return (
    <div className="Pokh1emon-grid">
      {list.map((p, index) => (
        <div key={p.id} style={{ animationDelay: `${index * 0.1}s` }}>
          <PokemonCard pokemon={p} />
        </div>
      ))}
    </div>
  );
};

const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetch("/pokemon.json")
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  const filtered =
    filter === "all"
      ? pokemon
      : pokemon.filter((p) => p.category === filter);


  return (
    <div className="Pokh1emon-container">
      <h1 className="Pokh1emon-h1">Pokédex</h1>

      <div className="buttons">
        <button className="Pokh1emon-btn" onClick={() => setFilter("all")}>All Legend</button>
        <button className="Pokh1emon-btn" onClick={() => setFilter("mythical")}>Mythical</button>
        <button className="Pokh1emon-btn" onClick={() => setFilter("sub")}>Sub-Legendary</button>
        <button className="Pokh1emon-btn" onClick={() => setFilter("legendary")}>Legendary</button>
      </div>

      <PokemonList list={filtered} />
    </div>
  );
};

export default Pokemon;