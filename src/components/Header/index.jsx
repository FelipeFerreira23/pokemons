import { useState } from 'react';
import pokeBall from '../../assets/pokeball.png' ;
import { getPokemonByName } from '../../store/pokemonSlice';
import { useDispatch } from 'react-redux';

import { HeaderContainer } from './styles';

export function Header() {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    if (searchTerm === '') return alert("Por favor coloque o nome do Pokemon!");
    dispatch(getPokemonByName(searchTerm));
    setSearchTerm('');
  };

  return (
    <HeaderContainer>
      <img src={pokeBall} width={50} />

      <form onSubmit={submitHandler}>
        <input 
          onChange={(e) => setSearchTerm(e.target.value)} 
          type="text" 
          value={searchTerm} 
          placeholder='Escolha o seu Pokemon favorito'
        />
        <button type="submit">
          Capturar
        </button>
      </form>
    </HeaderContainer>
  )
}