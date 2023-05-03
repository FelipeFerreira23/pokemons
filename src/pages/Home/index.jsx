import { useEffect, } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getInitialPokemonData, otherPages } from "../../store/pokemonSlice";

import { Header } from '../../components/Header';
import { PokemonCard } from '../../components/PokemonCard';

import { SelectedPokemon } from '../../components/SelectedPokemon';
import { Container } from './styles';

export function Home() {
  const {pokemonItems, loading, error} = useSelector(state => state.pokemon)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInitialPokemonData())
  }, [dispatch]);

  return (
    <Container>
      <Header />
      <SelectedPokemon />
      <main>
      
        <div className="list">
          {loading && <div>CARREGANDO ...</div>}
          {!loading && error ? <div>ERROR: {error}</div> : null}

          {!loading && pokemonItems.results ? (
            pokemonItems.results.map((item) => (
              <PokemonCard key={item.name} data={item} />
            ))
          ) : <div>Dados não carregados</div>}
        </div>

        <div className="buttons">
          {pokemonItems.previous && <button onClick={() => {dispatch(otherPages(pokemonItems.previous))}}>Anterior</button>}
          {pokemonItems.next && <button onClick={() => {dispatch(otherPages(pokemonItems.next))}}>Próxima</button>}
        </div>
      </main>
    </Container>
  )
}