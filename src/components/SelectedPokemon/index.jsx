import { useSelector } from "react-redux"

import { Card, SizeStat, Type } from './styles'

export function SelectedPokemon() {
  const {selectPokes} = useSelector(state => state.pokemon)

  return (
    <>
    {Object.keys(selectPokes).length !== 0 &&
    <Card>
      <div className="card-content">
        <div>
          <b>Eu escolho você ... </b>
          <div className="xp">
            <h2>{selectPokes.name}</h2>
            
            <div className="image">
              <span>XP</span> <b>{selectPokes.base_experience}</b>
              <img src={selectPokes.sprites.front_default} />
            </div>
          </div>
        </div>

        <div>
          <div className="types-list">
            {selectPokes.types.map(item => {
              return <Type key={item.type.name} color={item.type.name}>{item.type.name}</Type>
            })}
          </div>

          <div>
            <h3>Habilidades:</h3>
            <div className="content-abilities">
              {selectPokes.abilities.map(item => {
                return (
                  <span key={item.ability.name}>{item.ability.name}</span>
                )
              })}
            </div>
          </div>

          <div>
            <h3>Estatísticas:</h3>
            {selectPokes.stats.map(item => {
              return (
                <div key={item.stat.name}>
                  <div className="content-stats">
                    <span>{item.stat.name}</span>
                    <span>{item.base_stat}%</span>
                  </div>

                  <SizeStat size={item.base_stat}>
                    <span></span>
                  </SizeStat>
                </div>
              )
            })}
          </div>
        </div>
      
      </div>
      </Card>
      }
      </>
  )
}