import { useDispatch } from "react-redux";
import { getPokemons } from "../store/slices/pokemon";

const AppPokemon = () => {
  const dispatch = useDispatch();

  return (
    <>
      <h1>PokemonApp</h1>
      <hr />
      <ul>
        <li>Hola</li>
        <li>Hola</li>
        <li>Hola</li>
      </ul>
    </>
  );
};

export default AppPokemon;
